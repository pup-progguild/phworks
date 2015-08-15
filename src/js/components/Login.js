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
    register: function() {
        this.transitionTo('/register');
    },
    render: function() {
        return (
             <div className="login-container" id="login">
            
                <div className="login-box animated fadeInDown">
                    <div className="login-logo"></div>
                    <div className="login-body">
                        <div className="login-title"><strong>Welcome</strong>, Please login</div>
                        <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-md-12">
                                <input ref="username" type="text" className="form-control" placeholder="Username"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12">
                                <input ref="password" type="password" className="form-control" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group">
                        {this.state.error && (
                                <h5>Incorrect username or password</h5>
                            )}
                            <div className="col-md-6">
                                <a href="#" className="btn btn-link btn-block">Forgot your password?</a>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-info btn-block" type="submit" onClick={this.login}>Log In</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="login-footer">
                        <div className="pull-left">
                            &copy; 2015 PHWorks
                        </div>
                        <div className="pull-right">
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
