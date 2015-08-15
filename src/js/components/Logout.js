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
        this.transitionTo('/');
    },
    render: function() {
        return (
            <h1>you are now logout.</h1>
        );
    }
});

module.exports = Logout;
