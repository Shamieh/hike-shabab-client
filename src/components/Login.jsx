import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Auth.css'

const Login = () => {
  return (
    <div className="auth-container">

      <div className="auth-logo">
        <img src="/logo.png" alt="HikeShabab Logo" className="logo-img" />
      </div>
      
      <h1 className="auth-title">Welcome to HikeShabab</h1>
      <Form className="auth-form">
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button type="submit" className="btn-login">Login</Button>
<br />
        <div className="auth-footer">
          <p>New to HikeShabab?</p>
          <Button className="btn-register">Create an Account</Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
