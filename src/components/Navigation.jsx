import { NavLink, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Navigation.css';

function Navigation() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <Nav justify variant="pills" defaultActiveKey="/home">
      <Nav.Item className="navitem-logo">
        <img src="/logo.png" className="navbar-logo" alt="HikeShabab Logo" />
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={NavLink} to="/home" className="nav-link">
          Home
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={NavLink} to="/upcoming" className="nav-link">
          Upcoming Hikes
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={NavLink} to="/tips" className="nav-link">
          Tips
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={NavLink} to="/about" className="nav-link">
          About Us
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        {!user ? (
          <Nav.Link as={NavLink} to="/login" className="nav-link">
            Login
          </Nav.Link>
        ) : (
          <Nav.Link onClick={handleLogout} className="nav-link">
            Logout
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
