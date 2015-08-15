/** @jsx React.DOM */

var React = require('react'),
    ReactBootstrap = require('react-bootstrap'),
    ReactRouterBootstrap = require('react-router-bootstrap'),
    RouteHandler = require('react-router').RouteHandler,
    Auth = require('./Auth');

var Nav = ReactBootstrap.Nav,
    Navbar = ReactBootstrap.Navbar,
    NavItemLink = ReactRouterBootstrap.NavItemLink;

var NavBar = React.createClass({
    render: function() {
        return (
            <div className="page-container page-mode-rtl">

            <div className="page-sidebar page-sidebar-fixed scroll">

                <ul className="x-navigation">
                    <li className="xn-logo">
                        <a href="index.html">PHWork</a>
                        <a href="#" className="x-navigation-control"></a>
                    </li>
                    <li className="xn-profile">
                        <a href="#" className="profile-mini">
                            <img src="assets/images/users/avatar.jpg" alt="John Doe"/>
                        </a>
                        <div className="profile">
                            <div className="profile-image">
                                <img src="assets/images/users/avatar.jpg" alt="John Doe"/>
                            </div>
                            <div className="profile-data">
                                <div className="profile-data-name">John Doe</div>
                                <div className="profile-data-title">Web Developer/Designer</div>
                            </div>
                            <div className="profile-controls">
                                <a href="pages-profile.html" className="profile-control-left"><span className="fa fa-info"></span></a>
                                <a href="pages-messages.html" className="profile-control-right"><span className="fa fa-envelope"></span></a>
                            </div>
                        </div>                                                                        
                    </li>
                    <li className="xn-title">Navigation</li>

                    {Auth.isLoggedIn() && (
                        <li>
                            <a href="index.html"><span className="fa fa-desktop"></span> <span className="xn-text" to="search">Search</span></a>                        
                        </li>     
                        // <NavItemLink to="search">Search</NavItemLink>
                    )}
                    {Auth.isLoggedIn() && (
                        <li>
                            <a href="index.html"><span className="fa fa-desktop"></span> <span className="xn-text" to="profile" >Profile</span></a>                        
                        </li>   
                        // <NavItemLink to="profile">Profile</NavItemLink>
                    )}
                    // {Auth.isLoggedIn() && (
                    //     <NavItemLink to="logout">Logout</NavItemLink>
                    // )}
           
                    
                </ul>
        
                                            
            </div>            

        </div>

            // <div id="navWrapper">
            //     <Navbar brand="PHWorks">
            //         <Nav>
            //             {Auth.isLoggedIn() && (
            //                 <NavItemLink to="search">Search</NavItemLink>
            //             )}
            //             {Auth.isLoggedIn() && (
            //                 <NavItemLink to="profile">Profile</NavItemLink>
            //             )}
            //             {Auth.isLoggedIn() && (
            //                 <NavItemLink to="logout">Logout</NavItemLink>
            //             )}
            //         </Nav>
            //     </Navbar>
            //     <RouteHandler />
            // </div>
        );
    }
});

module.exports = NavBar;
