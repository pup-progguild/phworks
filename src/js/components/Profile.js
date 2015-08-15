/** @jsx React.DOM */

var React = require('react'),
    $ = require('jquery'),
    Auth = require('./Auth');

var Profile = React.createClass({
    getUserInfo: function() {
        $.ajax(this.state.ajaxUrl, {
            type: 'GET',
            success: function(res) {
                console.log(res.user);
            }.bind(this),
            error: function(res) {
                console.log('Profile failed');
            }.bind(this)
        });
    },
    getInitialState: function() {
        var states = {
            username: '',
            email: '',
            contact: '',
            location: '',
            profileSummary: '',
            rating: 0,
            provname: '',
            cityname: '',
            ajaxUrl: 'http://10.232.5.215:8000' +
                     '/api/authenticate/user?token=' + Auth.getToken()
        };

        return states;
    },
    componentWillMount: function() {
        this.getUserInfo();
    },
    render: function() {
        return (
            <h1>Profile</h1>
        );
    }
});

module.exports = Profile;
