import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // For navigation

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
  width: 210vh;
`;

const FormWrapper = styled.div`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showCountdownModal, setShowCountdownModal] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const navigate = useNavigate(); // Used for redirection

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      formErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      setSuccessMessage('Registration successful!');
      setShowCountdownModal(true); // Show countdown modal
    }
  };

  // Trigger the countdown when the modal is displayed
  useEffect(() => {
    if (showCountdownModal) {
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      if (countdown === 0) {
        clearInterval(countdownInterval);
        navigate('/login'); // Redirect to login screen
      }

      return () => clearInterval(countdownInterval); // Cleanup the interval on unmount
    }
  }, [showCountdownModal, countdown, navigate]);

  return (
    <Container>
      <FormWrapper>
        <Title>Register</Title>

        {successMessage && <Alert variant="success">{successMessage}</Alert>}

        <Form onSubmit={handleSubmit}>
          {/* Email Field */}
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={!!errors.email}
            />
            {errors.email && (
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          {/* Password Field */}
          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              isInvalid={!!errors.password}
            />
            {errors.password && (
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          {/* Confirm Password Field */}
          <Form.Group controlId="formConfirmPassword" className="mt-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              isInvalid={!!errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="mt-4 w-100">
            Register
          </Button>
        </Form>

        {/* Countdown Modal */}
        <Modal show={showCountdownModal} centered>
          <Modal.Body>
            <div className="text-center">
              <h4>Register Successfully!!!</h4>
              <p>Redirecting you back to the login screen in {countdown}...</p>
            </div>
          </Modal.Body>
        </Modal>
      </FormWrapper>
    </Container>
  );
};

export default RegisterPage;
