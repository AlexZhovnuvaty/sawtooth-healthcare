var m = require("mithril")

var Doctor = {
    list: [],
    error: "",
    loadList: function() {
        return m.request({
            method: "GET",
            url: "/api/doctors",
//            withCredentials: true,
        })
        .then(function(result) {
            Doctor.error = ""
            Doctor.list = result.data
        })
        .catch(function(e) {
            console.log(e)
            Doctor.error = e.message
        })
    },

    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
            withCredentials: true,
        })
        .then(function(result) {
            Doctor.current = result
        })
    },

    register: function() {
        return m.request({
            method: "POST",
            url: "/api/doctors",
            data: Doctor.current,
            useBody: true,
//            withCredentials: true,
        })
        .then(function(items) {
//            Data.todos.list = items
            Doctor.error = ""
        })
        .catch(function(e) {
            console.log(e)
            Doctor.error = e.message
        })
    }
}

module.exports = Doctor