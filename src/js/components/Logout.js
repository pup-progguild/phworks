/** @jsx React.DOM */

var React = require('react'),
    Auth = require('./Auth');

var Logout = React.createClass({
    componentDidMount: function() {
        Auth.logout();
    },
    render: function() {
        return (
            <h1>you are now logout.</h1>
        );
    }
});

module.exports = Logout;
