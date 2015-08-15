var $ = require('jquery');

function authenticateUser(username, password, callback) {
    $.ajax('http://10.232.5.215:8000/', {
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
    dummyLogin: function(username, pass, callback) {
        if (callback && username==='ben') {
            localStorage.access_token = 'wow fantastic baby'
            callback({
                authenticated: true,
            });
            return true;
        } else {
            callback({
                authenticated: false,
            });
            return false;
        }
    },
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
                localStorage.access_token = res.access_token;
                isAuth = true;
            }
            if (callback) {
                callback({isAuthenticated: isAuth});
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
        return localStorage.token;
    },
    isLoggedIn: function() {
        return !!localStorage.access_token;
    }
};
