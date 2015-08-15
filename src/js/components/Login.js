/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router');

var Navigation = Router.Navigation;

var Login = React.createClass({
    mixins: [
        Navigation
    ],
    login: function(e) {
        e.preventDefault();
        console.log('login');
    },
    register: function() {
        this.transitionTo('/register');
    },
    render: function() {
        return (
            <div id="login">
                <h1>Login</h1>
                Username:
                <input type="text" />
                Password:
                <input type="text" />
                <button type="submit" onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        );
    }
});

module.exports = Login;
