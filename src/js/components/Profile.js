/** @jsx React.DOM */

var React = require('react'),
    $ = require('jquery'),
    Auth = require('./Auth');

var Profile = React.createClass({
    getUserInfo: function() {
        $.ajax(this.state.ajaxUrl, {
            type: 'GET',
            success: function(res) {
                var user = res.user;
                this.setState({
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    contact: user.contact,
                    profileSummary: user.profile_summary,
                    rating: user.rating,
                    provname: user.provname,
                    cityname: user.cityname
                });
            }.bind(this),
            error: function(res) {
                console.log('Profile failed');
            }.bind(this)
        });
    },
    getInitialState: function() {
        var states = {
            name: '',
            username: '',
            email: '',
            contact: '',
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
            <div id="profile">
                <h1>Profile</h1>
                <p>{this.state.name}</p>
                <p>{this.state.username}</p>
                <p>{this.state.email}</p>
                <p>{this.state.contact}</p>
                <p>{this.state.profileSummary}</p>
                <p>{this.state.rating}</p>
                <p>{this.state.provname}</p>
                <p>{this.state.cityname}</p>
            </div>
        );
    }
});

module.exports = Profile;
