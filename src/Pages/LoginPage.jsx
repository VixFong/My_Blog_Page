import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the email and password match
    if (email === 'admin@gmail.com' && password === '123456') {
      // Redirect to the home page on successful login
      navigate('/');
    } else {
      // Set an error message if login fails
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <LoginContainer>
      <ImageContainer>
        <img src="https://cloud.z.com/vn/wp-content/uploads/2023/11/how-to-write-a-blog-post.jpeg" alt="Welcome to Blog" className="login-illustration" />
      </ImageContainer>
      <FormContainer>
        <h1>Welcome Back :)</h1>
        <p>To keep connected with us, please login with your email and password.</p>

        {errorMessage && <ErrorText>{errorMessage}</ErrorText>} {/* Display error message */}

        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <InputGroup>
              <Icon className="fas fa-envelope"></Icon>
              <Form.Control 
                type="email" 
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Icon className="fas fa-lock"></Icon>
              <Form.Control 
                type="password" 
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formRememberMe" className="remember-me">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>

          <Button className="login-button" type="submit">Login Now</Button>
          <Button className="create-account-button" variant="outline-secondary" href='/register'>Create Account</Button>
        </Form>
      </FormContainer>
    </LoginContainer>
  );
}

export default LoginPage;

// Styled Components for styling
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 30px;
  }

  .login-button {
    width: 100%;
    background-color: #007bff;
    padding: 10px 0;
    margin-top: 20px;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  .create-account-button {
    width: 100%;
    padding: 10px 0;
    margin-top: 10px;
    border: 2px solid #007bff;
    color: #007bff;
    background-color: white;
    transition: 0.3s ease;

    &:hover {
      background-color: #e6f7ff;
    }
  }

  .remember-me {
    margin-bottom: 15px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .form-control {
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #ddd;
    padding: 10px;
    border-radius: 0;
    outline: none;
  }
`;

const Icon = styled.span`
  background: #f0f0f0;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ddd;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 15px;
  text-align: center;
`;
