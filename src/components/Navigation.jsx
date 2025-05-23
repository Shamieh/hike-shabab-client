import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Navigation.css'

function Navigation() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-1">Upcoming Hikes</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-2">Tips</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-3">About Us</Nav.Link>
      </Nav.Item>


      <Nav.Item>
        <Nav.Link eventKey="link-5">Login</Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
}

export default Navigation;