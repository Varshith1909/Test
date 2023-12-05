import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/register')
    }
    return (
        <Container>
            {/* Header Section */}
            <Row className="my-5">
                <Col>
                    <h1 className="text-center">Welcome to Odyssey Group’s Cyber Fitness Hub</h1>
                </Col>
            </Row>

            {/* Introduction Section */}
            <Row className="my-5">
                <Col>
                    <p>
                        Odyssey Group’s Cyber Fitness Hub offers an interactive platform
                        to enhance your cybersecurity skills through engaging challenges
                        and gamification. Join us to become a cyber fitness expert!
                    </p>
                </Col>
            </Row>

            {/* Key Features Section */}
            <Row className="my-5">
                {["Phishing Mastery", "Training Triumphs", "Team Competitions"].map((feature, index) => (
                    <Col key={index} md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{feature}</Card.Title>
                                <Card.Text>
                                    {/* Add description for each feature */}
                                    This is a description for {feature}.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Call-to-Action Button */}
            <Row className="my-5">
                <Col className="text-center">
                    <Button variant="primary" size="lg" onClick={handleClick}>Join Now</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
