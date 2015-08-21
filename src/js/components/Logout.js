/** @jsx React.DOM */

var React = require('react'),
    Navigation = require('react-router').Navigation,
    Auth = require('./Auth');

var Logout = React.createClass({
    mixins: [
        Navigation
    ],
    componentWillMount: function() {
        Auth.logout();
    },
    goToLogin: function() {
        this.transitionTo('/');
    },
    render: function() {
        return (
            <div>
                <h1>you are now logout.</h1>
                <button onClick={this.goToLogin}>Go to login</button>
            </div>
        );
    }
});

module.exports = Logout;
