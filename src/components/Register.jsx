import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Auth.css';

const Register = () => {
  return (
    <div className="auth-container">

      <div className="auth-logo">
        <img src="/logo.png" alt="HikeShabab Logo" className="logo-img" />
      </div>

      <h1 className="auth-title">Create Your Account</h1>
      <Form className="auth-form">
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Control type="text" placeholder="Username" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control type="password" placeholder="Confirm Password" required />
        </Form.Group>

        <Button type="submit" className="btn-register">Register</Button>

        <div className="auth-footer mt-3">
          <p>Already have an account?</p>
          <Button className="btn-login">Login</Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
