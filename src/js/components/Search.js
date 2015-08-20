/** @jsx React.DOM */

var React = require('react'),
    $ = require('jquery'),
    Auth = require('./Auth');

var Option = React.createClass({
    render: function() {
        return (
            <option value={this.props.id}>{this.props.name}</option>
        );
    }
});

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
    getFields: function() {
        $.ajax(this.state.fieldsUrl, {
            type: 'GET',
            success: function(res) {
                this.setState({
                    fields: res
                });
            }.bind(this)
        });
    },
    getInitialState: function() {
        var ip = 'http://128.199.227.235';

        return ({
            userIdUrl: ip + '/api/authenticate/user?token=' + Auth.getToken(),
            fieldsUrl: ip + '/api/field',
            fields: []
        });
    },
    search: function(e) {
        e.preventDefault();
        var sr = {
            id: this.refs.field.getDOMNode().value,
        };

        console.log(sr.field);

    },
    componentWillMount: function() {
        this.getUserId();
        this.getFields();
    },
    render: function() {
        var options = this.state.fields.map(function(field) {
            return <Option name={field.field_name} id={field.field_id} />
        });

        return (
            <div id="search">
                <h1>Search</h1>
                fields:
                <select ref="field">
                    {options}
                </select>
                description:
                <input ref="desc" type="text" />
                <button type="submit" onClick={this.search}>search</button>
            </div>
        );
    }
});

module.exports = Search;
