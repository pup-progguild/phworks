/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router');

var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute;

var Login = require('./Login'),
    Logout = require('./Logout'),
    Search = require('./Search'),
    Profile = require('./Profile'),
    NotFound = require('./NotFound');
    Auth = require('./Auth');

var routes = (
    <Route path="/">
        <DefaultRoute name="login" handler={Login} />
        <Route name="search" handler={Search} />
        <Route name="logout" handler={Logout} />
        <Route name="profile" handler={Profile} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);

module.exports = routes;
