// ScoringSystem.js
import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const ScoringSystem = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h2 className="text-center">Our Scoring System</h2>
                    <p>Learn about how we score and track progress in our Cyber Fitness challenges.</p>
                    <ListGroup>
                        <ListGroup.Item>
                            <strong>PhishShield Points:</strong> Earn points by identifying phishing attempts.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>SecurScore Challenge:</strong> Complete security challenges to improve your score.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Team Competitions:</strong> Compete with your team to earn collective points.
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default ScoringSystem;
