// JoinNow.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const JoinNow = () => {
    return (
        <Container className="text-light">
            <h2 className="text-center my-4">Join Odyssey Group’s Cyber Fitness Hub</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">Get Started</Button>
            </Form>
        </Container>
    );
};

export default JoinNow;
