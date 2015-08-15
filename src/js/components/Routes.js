/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router');

var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute;

var NavBar = require('./NavBar'),
    Home = require('./Home'),
    Login = require('./Login'),
    Logout = require('./Logout'),
    Register = require('./Register'),
    Search = require('./Search'),
    NotFound = require('./NotFound');

var routes = (
    <Route path="/" handler={NavBar}>
        <DefaultRoute name="home" handler={Home} />
        <Route name="login" handler={Login} />
        <Route name="logout" handler={Logout} />
        <Route name="register" handler={Register} />
        <Route name="search" handler={Search} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);

module.exports = routes;
