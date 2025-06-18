import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Auth.css';
import { useNavigate } from 'react-router-dom';

const Register = ({ onLogin }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirm: ''
  });

  const signup = async () => {
    if (form.password !== form.confirm) {
      return alert("Passwords don't match");
    }

    const res = await fetch('http://localhost:3001/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: form.username,
        email: form.email,
        password: form.password,
        role: 'user'
      })
    });

    const data = await res.json();
    if (res.ok) {
      onLogin(data.user);
      navigate('/home');
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img src="/logo.png" alt="HikeShabab Logo" className="logo-img" />
      </div>

      <h1 className="auth-title">Create Your Account</h1>
      <Form className="auth-form">
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Control
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={form.confirm}
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
            required
          />
        </Form.Group>

        <Button type="button" className="btn-register" onClick={signup}>
          Register
        </Button>

        <div className="auth-footer mt-3">
          <p>Already have an account?</p>
          <Button className="btn-login" onClick={() => navigate('/login')}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
