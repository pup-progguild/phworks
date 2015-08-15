/** @jsx React.DOM */

var React = require('react'),
    ReactBootstrap = require('react-bootstrap'),
    ReactRouterBootstrap = require('react-router-bootstrap'),
    RouteHandler = require('react-router').RouteHandler,
    Auth = require('./Auth');

var Nav = ReactBootstrap.Nav,
    Navbar = ReactBootstrap.Navbar,
    NavItemLink = ReactRouterBootstrap.NavItemLink;

var NavBar = React.createClass({
    render: function() {
        return (
            <div id="navWrapper">
                <Navbar brand="PHWorks">
                    <Nav>
                        {Auth.isLoggedIn() ? (
                            <NavItemLink to="search">Search</NavItemLink>
                        ) : (
                            <NavItemLink to="home">Home</NavItemLink>
                        )}
                        {Auth.isLoggedIn() && (
                            <NavItemLink to="profile">Profile</NavItemLink>
                        )}
                        {Auth.isLoggedIn() ? (
                            <NavItemLink to="logout">Logout</NavItemLink>
                        ) : (
                            <NavItemLink to="login">Login</NavItemLink>
                        )}
                    </Nav>
                </Navbar>
                <RouteHandler />
            </div>
        );
    }
});

module.exports = NavBar;
