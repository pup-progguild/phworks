/** @jsx React.DOM */

var React = require('react'),
    Navigation = require('react-router').Navigation;

var NavBar = React.createClass({
    mixins: [
        Navigation
    ],
    goToSearch: function() {
        this.transitionTo('/search');
    },
    goToProfile: function() {
        this.transitionTo('/profile');
    },
    goToLogout: function() {
        this.transitionTo('/logout');
    },
    render: function() {
        return (
            <div id="navbar">
                <ul>
                    <li><a href="#" onClick={this.goToSearch}>Search</a></li>
                    <li><a href="#" onClick={this.goToProfile}>Profile</a></li>
                    <li><a href="#" onClick={this.goToLogout}>Logout</a></li>
                </ul>
            </div>
        );
    }
});

module.exports = NavBar;
