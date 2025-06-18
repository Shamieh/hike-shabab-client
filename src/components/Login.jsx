import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Auth.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        onLogin(data.user);
        navigate('/home');
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert('Something went wrong!');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img src="/logo.png" alt="HikeShabab Logo" className="logo-img" />
      </div>

      <h1 className="auth-title">Welcome to HikeShabab</h1>
      <Form className="auth-form">
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="button" className="btn-login" onClick={login}>
          Login
        </Button>
        <br />
        <div className="auth-footer">
          <p>New to HikeShabab?</p>
          <Button className="btn-register" onClick={() => navigate('/register')}>
            Create an Account
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
