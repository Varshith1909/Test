// JoinNow.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; 
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const JoinNow = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSignUp = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            navigate('/'); // Redirect to the homepage
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignUp = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const userCredential = await signInWithPopup(auth, provider);
            console.log(userCredential);
            navigate('/'); // Redirect to the homepage
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container className="text-light">
            <h2 className="text-center my-4">Join Odyssey Group’s Cyber Fitness Hub</h2>
            <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </Form.Group>

                {error && <Alert variant="danger">{error}</Alert>}

                <Button variant="primary" type="submit" className="w-100 mb-2">
                    Get Started
                </Button>
                <Button 
                    variant="primary" // Set the button color to blue
                    onClick={handleGoogleSignUp} 
                    className="w-100" // Set the width to 100%
                >
                    Sign Up with Google
                </Button>
            </Form>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>} 
        </Container>
    );
};

export default JoinNow;
