/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router');

var Routes = require('./components/Routes');

Router.run(Routes, function(Handler) {
    React.render(
        <Handler />,
        document.body
    );
});
