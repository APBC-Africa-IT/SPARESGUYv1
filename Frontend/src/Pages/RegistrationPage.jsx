import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { actions } from '../features/auth/authslice.js'; // Ensure this includes a register action
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import Frame from '../Homepage/HomepageImages/Frame.svg'
import { FcGoogle } from "react-icons/fc";

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dispatch registration action
    dispatch(actions.register({ name: `${firstName} ${lastName}`, email, password }));
  };

  return (
    <div fluid className="vh-100" style={{ backgroundColor: '#88293b' }}>
      <Row className="h-100">
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img
            src={Frame}
            alt="Frame"
            className="img-fluid"
            style={{ transition: 'all 0.3s ease', maxWidth: '80%', height: 'auto' }}
          />
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Card className="p-4 w-100">
            <Card.Title className="text-center">Register</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="First name" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Last name" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

            
              <Button type="button" className="mt-3 w-100" style={{ backgroundColor: '#88293b' }}>
                      <FcGoogle />
                    Sign Up With Google</Button>


            
              <Button type="submit" className="mt-3 w-100" style={{ backgroundColor: '#88293b' }}>
                Create Account
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RegistrationPage;