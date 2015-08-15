var $ = require('jquery');

function authenticateUser(username, password, callback) {
    $.ajax('http://192.168.0.107:8000/api/authenticate', {
        type: 'POST',
        data: {
            username: username,
            password: password
        },
        success: function(res) {
            return callback({
                authenticated: true,
                access_token: res.token
            });
        }.bind(this),
        error: function(res) {
            return callback({
                authenticated: false
            });
        }.bind(this)
    });
}

module.exports = {
    login: function(username, pass, callback) {
        if (this.isLoggedIn()) {
            if (callback) {
                callback({authenticated: true});
            }
            return true;
        }

        authenticateUser(username, pass, function(res) {
            var isAuth = false;
            if (res.authenticated) {
                isAuth = true;
                localStorage.access_token = res.access_token;
            }
            if (callback) {
                callback({authenticated: isAuth});
            }
            return isAuth;
        });
    },
    logout: function(callback) {
        delete localStorage.access_token;

        if (callback) {
            callback();
        }
    },
    getToken: function () {
        return localStorage.access_token;
    },
    isLoggedIn: function() {
        return !!localStorage.access_token;
    }
};
