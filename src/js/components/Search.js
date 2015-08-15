/** @jsx React.DOM */

var React = require('react'),
    $ = require('jquery'),
    Auth = require('./Auth');

var Search = React.createClass({
    getUserId: function() {
        $.ajax(this.state.userIdUrl, {
            type: 'GET',
            success: function(res) {
                this.setState({
                    userId: res.user.user_id
                });
            }.bind(this)
        });
    },
    getService: function() {
        $.ajax(this.state.servicesUrl, {
            type: 'GET',
            success: function(res) {
                this.setState({
                    userId: res.user.user_id
                });
            }.bind(this)
        });
    },
    getInitialState: function() {
        var ip = 'http://192.168.1.5:8000';

        return ({
            userIdUrl: ip + '/api/authenticate/user?token=' + Auth.getToken(),
            fieldsUrl: ip + '/api/fields'
        });
    },
    componentDidMount: function() {
        this.getUserId();
    },
    render: function() {
        return (
            <div id="search">
                <h1>Search</h1>
            </div>
        );
    }
});

module.exports = Search;
