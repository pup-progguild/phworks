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
             <div class="login-container">
            
                <div class="login-box animated fadeInDown">
                    <div class="login-logo"></div>
                    <div class="login-body">
                        <div class="login-title"><strong>Welcome</strong>, Please login</div>
                        <form action="index.html" class="form-horizontal" method="post">
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="text" class="form-control" placeholder="Username"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="password" class="form-control" placeholder="Password"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-6">
                                <a href="#" class="btn btn-link btn-block">Forgot your password?</a>
                            </div>
                            <div class="col-md-6">
                                <button class="btn btn-info btn-block">Log In</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div class="login-footer">
                        <div class="pull-left">
                            &copy; 2014 AppName
                        </div>
                        <div class="pull-right">
                            <a href="#">About</a> |
                            <a href="#">Privacy</a> |
                            <a href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
});

module.exports = Login;
