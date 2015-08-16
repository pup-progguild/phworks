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
                this.transitionTo('/profile');
            } else {
                this.setState({ error: true })
            }
        }).bind(this));
    },
    render: function() {
    return (
            <form ref="loginForm">
                username:
                <input ref="username" type="text" placeholder="Username"/>
                password:
                <input ref="password" type="password" placeholder="Password"/>
                {this.state.error && (
                    <h5>Incorrect username or password</h5>
                )}
                <button type="submit" onClick={this.login}>Log In</button>
            </form>
        );
    }
});

module.exports = Login;
