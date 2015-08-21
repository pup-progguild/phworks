/** @jsx React.DOM */

var React = require('react'),
    $ = require('jquery'),
    Auth = require('./Auth'),
    NavBar = require('./NavBar');

var SearchResultItem = React.createClass({
    render: function() {
        return (
            <div>
                <p>{this.props.id}</p>
                <p>{this.props.name}</p>
                <p>{this.props.city}</p>
                <p>{this.props.prov}</p>
                <p>{this.props.city}</p>
                <p>{this.props.profile_summary}</p>
                <p>{this.props.rating}</p>
                <p>{this.props.tagPoints}</p>
                <p>{this.props.tags}</p>
                <p>{this.props.locPoints}</p>
                <p>{this.props.number}</p>
                <p>{this.props.email}</p>
                <hr />
            </div>
        );
    }
});

var SearchResult = React.createClass({
    render: function() {
        var results = this.props.results.map(function(result) {
            return <SearchResultItem
                        id={result.user_id}
                        name={result.name}
                        city={result.city_name}
                        prov={result.provname}
                        profile_summary={result.profile_summary}
                        rating={result.rating}
                        tagPoints={result.tagPoints}
                        tags={result.tags}
                        locPoints={result.locationPoints}
                        number={result.contact}
                        email={result.email}
                   />;
        });
        console.log(results);
        return (
            <div>
                <h1>Search Results: </h1>
                {results}
            </div>
        );
    }
});

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
    search: function(cid, id, desc, callback) {
        $.ajax(this.state.searchUrl, {
            type: 'POST',
            data: {
                field: id,
                client_id: cid,
                description: desc,
                token: Auth.getToken()
            },
            success: function(res) {
                callback(res);
            }.bind(this)
        });
    },
    getInitialState: function() {
        var ip = 'http://128.199.227.235';

        return ({
            userIdUrl: ip + '/api/authenticate/user?token=' + Auth.getToken(),
            fieldsUrl: ip + '/api/field',
            searchUrl: ip + '/api/request',
            textUrl: ip + '/api/send',
            fields: [],
            searchToggle: false
        });
    },
    onSearch: function(e) {
        e.preventDefault();
        var sr = {
            id: this.refs.field.getDOMNode().value,
            desc: this.refs.desc.getDOMNode().value
        };

        this.search(this.state.userId, sr.id, sr.desc, (function(res) {
            this.setState({
                searchResult: res,
                searchToggle: true
            });
        }).bind(this));
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
                <NavBar />
                <h1>Search</h1>
                fields:
                <select ref="field">
                    {options}
                </select>
                description:
                <input ref="desc" type="text" />
                <button type="submit" onClick={this.onSearch}>search</button>
                {this.state.searchToggle && (
                    <SearchResult results={this.state.searchResult}/>
                )}
            </div>
        );
    }
});

module.exports = Search;
