/** @jsx React.DOM */

var React = require('react'),
    $ = require('jquery'),
    Auth = require('./Auth'),
    NavBar = require('./NavBar'),
    Navigation = require('react-router').Navigation,
    ReactBootstrap = require('react-bootstrap'),
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    Thumbnail = ReactBootstrap.Thumbnail,
    Input = ReactBootstrap.Input,
    ButtonInput = ReactBootstrap.ButtonInput,
    Button = ReactBootstrap.Button,
    Well = ReactBootstrap.Well,
    Glyphicon = ReactBootstrap.Glyphicon;

var SearchResultItem = React.createClass({
    getInitialState: function() {
        var ip = 'http://128.199.227.235';

        return ({
            textUrl: ip + '/api/send'
        });
    },
    mixins: [
        Navigation
    ],
    goToProfile: function() {
        this.transitionTo('/profile');
    },
    sendMessage: function() {
        console.log('send message');
    },
    render: function() {
        return (
            <Well bsSize="large">
                <Row>
                    <Col lg={2}>
                        <Thumbnail src="https://avatars1.githubusercontent.com/u/9935276" alt="Profile Photo" />
                        <Button onClick={this.sendMessage}><Glyphicon glyph="phone" /></Button>
                        <Button onClick={this.goToProfile}><Glyphicon glyph="user" /></Button>
                    </Col>
                    <Col lg={5}>
                        <h5>{this.props.name}</h5>
                        <p><Glyphicon glyph="map-marker" />&nbsp;&nbsp;{this.props.city}, {this.props.prov}</p>
                        <p>Rating: <Glyphicon glyph="star" /> {this.props.rating}</p>
                    </Col>
                    <Col lg={5}>
                        <p>tagpoints: {this.props.tagPoints}</p>
                        <p>tags: {this.props.tags}</p>
                        <p>locpoints: {this.props.locPoints}</p>
                    </Col>
                </Row>
            </Well>
        );
    }
});

var SearchResult = React.createClass({
    render: function() {
        var results = this.props.results.map(function(result) {
            return <SearchResultItem
                        name={result.name}
                        city={result.city_name}
                        prov={result.provname}
                        rating={result.rating}
                        tagPoints={result.tagPoints}
                        tags={result.tags}
                        locPoints={result.locationPoints}
                        number={result.contact}
                   />;
        });
        console.log(results);
        return (
            <div>
                <h2><Glyphicon glyph="book" />&nbsp;&nbsp;Search Result/s</h2>
                <br />
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
            fields: [],
            searchToggle: false
        });
    },
    onSearch: function(e) {
        e.preventDefault();
        var sr = {
            id: this.refs.field.getValue(),
            desc: this.refs.desc.getValue()
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
                <Row className="container">
                    <Col lg={3} lgOffset={1}>
                        <h2><Glyphicon glyph="search" />&nbsp;&nbsp;Search</h2>
                        <br />
                        <form>
                            <Input ref="field" type="select" label="Field">
                                {options}
                            </Input>
                            <Input ref="desc" type="textarea" label="Description" placeholder="Description"/>
                            <ButtonInput type="submit" value="Search" onClick={this.onSearch} />
                        </form>
                    </Col>
                    <Col lg={8}>
                        {this.state.searchToggle && (
                            <SearchResult results={this.state.searchResult}/>
                        )}
                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = Search;
