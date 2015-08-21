/** @jsx React.DOM */

var React = require('react'),
    $ = require('jquery'),
    Auth = require('./Auth'),
    NavBar = require('./NavBar'),
    ReactBootstrap = require('react-bootstrap'),
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    Thumbnail = ReactBootstrap.Thumbnail,
    Glyphicon = ReactBootstrap.Glyphicon;

var Profile = React.createClass({
    getUserInfo: function() {
        $.ajax(this.state.ajaxUrl, {
            type: 'GET',
            success: function(res) {
                var user = res.user;
                this.setState({
                    name: user.name,
                    email: user.email,
                    contact: user.contact,
                    profileSummary: user.profile_summary,
                    rating: user.rating,
                    provname: user.provname,
                    cityname: user.cityname,
                });
            }.bind(this)
        });
    },
    getInitialState: function() {
        var ip = 'http://128.199.227.235';

        return ({
            ajaxUrl: ip + '/api/authenticate/user?token=' + Auth.getToken()
        });
    },
    componentWillMount: function() {
        this.getUserInfo();
    },
    render: function() {
        return (
            <div id="profile">
                <NavBar />
                <Row>
                    <Col lg={3} lgOffset={3}>
                        <Thumbnail src="https://avatars1.githubusercontent.com/u/9935276" alt="Profile Photo" />
                        <h2>{this.state.name}</h2>
                        <p><Glyphicon glyph="map-marker" />&nbsp;&nbsp;{this.state.cityname}, {this.state.provname}</p>
                    </Col>
                    <Col lg={6}>
                        <h3><Glyphicon glyph="book" />&nbsp;&nbsp;About me</h3>
                        <p>{this.state.profileSummary}</p>
                        <h3><Glyphicon glyph="envelope" />&nbsp;&nbsp;Contact</h3>
                        <p>email: {this.state.email}</p>
                        <p>phone: {this.state.contact}</p>

                        <h3><Glyphicon glyph="star" />&nbsp;&nbsp;Rating</h3>
                        <p>{this.state.rating}</p>
                    </Col>
                </Row>
            </div>
        );
    }
});

module.exports = Profile;
