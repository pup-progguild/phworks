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
    NotFound = require('./NotFound');

var routes = (
    <Route path="/" handler={NavBar}>
        <DefaultRoute name="home" handler={Home} />
        <Route name="login" handler={Login} />
        <Route name="logout" handler={Logout} />
        <Route name="register" handler={Register} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);

module.exports = routes;
