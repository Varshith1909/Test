import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css'

const NavbarComponent = ({ currentUser }) => {
    return (
        <Navbar className="navbar-custom" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className='navbar-head'>Cyber Fitness Hub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* ms-auto will align the items to the right */}
                        <Nav.Link as={NavLink} to="/" exact className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="nav-link-custom">About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/scoring" className="nav-link-custom">Scoring System</Nav.Link>
                        <Nav.Link as={NavLink} to="/testimonial" className="nav-link-custom">Testimonials</Nav.Link>
                        {currentUser ? (
                            <Nav.Link as={NavLink} to="/profile" className="nav-link-custom">
                                {currentUser ? currentUser.displayName || currentUser.email : "Join Now"}
                            </Nav.Link>
                        ) : (
                            <Nav.Link as = {NavLink} to="/register" className="nav-link-custom">Join Now</Nav.Link>
                            )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
