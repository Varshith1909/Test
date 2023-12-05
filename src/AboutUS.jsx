import React from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container>
            {/* Mission Statement Section */}
            <Row className="my-5">
                <Col>
                    <h2 className="text-center">Our Mission</h2>
                    <p className="text-center">
                        Our mission is to empower individuals and organizations to excel in cybersecurity through innovative training and challenges.
                    </p>
                </Col>
            </Row>

            {/* Vision Statement Section */}
            <Row className="my-5">
                <Col>
                    <h2 className="text-center">Our Vision</h2>
                    <p className="text-center">
                        We envision a world where cybersecurity is integral to every individual's digital life, fostering a safer online environment for all.
                    </p>
                </Col>
            </Row>

            {/* Team Section */}
            <Row className="my-5">
                <h2 className="text-center mb-4">Meet Our Team</h2>
                <Col md={{ span: 4, offset: 4 }}> {/* Centering the card */}
                    <Card>
                        {/* <Card.Img variant="top" src="path_to_image" /> */}
                        <Card.Body>
                            <Card.Title>John Doe</Card.Title>
                            <Card.Text>
                                CEO & Founder - Leading the team with over a decade of experience in cybersecurity.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Add more cards as needed */}
            </Row>
        </Container>
    );
};

export default AboutUs;
