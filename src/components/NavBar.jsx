import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Cyber Fitness Hub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* ms-auto will align the items to the right */}
                        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/scoring">Scoring System</Nav.Link>
                        <Nav.Link as={NavLink} to="/testimonial">Testimonials</Nav.Link>
                        <Nav.Link as={NavLink} to="/register">Join Now</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
