/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Auth = require('./Auth');

var Navigation = Router.Navigation;

var Login = React.createClass({
    getInitialState: function() {
        return ({ error: false });
    },
    mixins: [
        Navigation
    ],
    login: function(e) {
        e.preventDefault();

        var user = {
            username: this.refs.username.getDOMNode().value,
            password: this.refs.password.getDOMNode().value
        };

        Auth.login(user.username, user.password, (function(res) {
            if(res.authenticated) {
                this.transitionTo('/search');
            } else {
                this.setState({ error: true })
            }
        }).bind(this));
    },
    register: function() {
        this.transitionTo('/register');
    },
    render: function() {
        return (
            <div id="login">
                <h1>Login</h1>
                Username:
                <input ref="username" type="text" />
                Password:
                <input ref="password" type="text" />
                <button type="submit" onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
                {this.state.error && (
                    <h5>Incorrect username or password</h5>
                )}
            </div>
        );
    }
});

module.exports = Login;
