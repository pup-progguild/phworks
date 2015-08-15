/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router');

var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute;

var NavBar = require('./NavBar'),
    Home = require('./Home'),
    NotFound = require('./NotFound');

var routes = (
    <Route path="/" handler={NavBar}>
        <DefaultRoute name="home" handler={Home} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);

module.exports = routes;
