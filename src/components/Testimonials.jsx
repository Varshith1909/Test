// Testimonials.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Jane Doe",
            text: "Participating in the Cyber Fitness challenges has significantly improved my ability to identify cybersecurity threats.",
            role: "Cybersecurity Analyst"
        },
        {
            name: "John Smith",
            text: "The gamified approach to learning about cybersecurity is not only effective but also incredibly engaging.",
            role: "IT Manager"
        },
        // Add more testimonials as needed
    ];

    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h2 className="text-center">Testimonials</h2>
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="mb-3">
                            <Card.Body>
                                <Card.Title>{testimonial.name}</Card.Title>
                                <Card.Text>{testimonial.text}</Card.Text>
                                <Card.Footer className="text-muted">{testimonial.role}</Card.Footer>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Testimonials;
