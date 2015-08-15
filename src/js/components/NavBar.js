/** @jsx React.DOM */

var React = require('react'),
    ReactBootstrap = require('react-bootstrap'),
    ReactRouterBootstrap = require('react-router-bootstrap'),
    RouteHandler = require('react-router').RouteHandler;

var Nav = ReactBootstrap.Nav,
    Navbar = ReactBootstrap.Navbar,
    NavItemLink = ReactRouterBootstrap.NavItemLink;

var NavBar = React.createClass({
    render: function() {
        return (
            <div id="navWrapper">
                <Navbar brand="PHWorks">
                    <Nav>
                        <NavItemLink to="home">Home</NavItemLink>
                    </Nav>
                </Navbar>
                <RouteHandler />
            </div>
        );
    }
});

module.exports = NavBar;
