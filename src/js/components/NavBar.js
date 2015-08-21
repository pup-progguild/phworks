/** @jsx React.DOM */

var React = require('react'),
    Navigation = require('react-router').Navigation,
    ReactBootstrap = require('react-bootstrap'),
    Navbar = ReactBootstrap.Navbar,
    Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem;

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
            <Navbar brand="PHWorks">
                <Nav>
                    <NavItem href="#" onClick={this.goToSearch}>Search</NavItem>
                    <NavItem href="#" onClick={this.goToProfile}>Profile</NavItem>
                    <NavItem href="#" onClick={this.goToLogout}>Logout</NavItem>
                </Nav>
            </Navbar>
        );
    }
});

module.exports = NavBar;
