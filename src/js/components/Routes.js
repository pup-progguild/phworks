/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router');

var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute;

var NavBar = require('./NavBar'),
    Login = require('./Login'),
    Logout = require('./Logout'),
    Register = require('./Register'),
    Search = require('./Search'),
    Profile = require('./Profile'),
    NotFound = require('./NotFound');
    Auth = require('./Auth');

var routes = (
    <Route path="/" handler={NavBar}>
        <DefaultRoute name="login" handler={Login} />
        <Route name="search" handler={Search} />
        <Route name="logout" handler={Logout} />
        <Route name="register" handler={Register} />
        <Route name="profile" handler={Profile} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);

module.exports = routes;
