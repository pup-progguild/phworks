/** @jsx React.DOM */

var React = require('react'),
    $ = require('jquery'),
    Auth = require('./Auth');

var Search = React.createClass({
    getUserId: function() {
        $.ajax(this.state.ajaxUrl, {
            type: 'GET',
            success: function(res) {
                this.setState({
                    userId: res.user.user_id
                });
            }.bind(this)
        });
    },
    getInitialState: function() {
        return ({
            ajaxUrl: 'http://192.168.0.107:8000' +
                     '/api/authenticate/user?token=' + Auth.getToken()
        });
    },
    componentDidMount: function() {
        this.getUserId();
    },
    render: function() {
        return (
            <div id="search">
                <h1>Search</h1>
                <p>{this.state.userId}</p>
            </div>
        );
    }
});

module.exports = Search;
