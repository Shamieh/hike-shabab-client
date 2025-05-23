import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './css/Footer.css'

const Footer = () => {
    return (
<Container className='footer'>

    
      <Row >
        <Col sm={8} className='left'>
        
            <h4>Contact us</h4>
            <p>Email: info@hikeshabab.jo</p>
            <p>Phone: 079999999</p>
        </Col>

        <Col sm={4}>
<br />
    <a href="https://www.instagram.com/hike_shabab/" >
      <FaInstagram className='instagram'/>
      
    </a>
     <a 
          href="https://www.facebook.com/" 
      
        >
          <FaFacebook className="instagram" />
        </a>
    
        </Col>
      </Row>
    <p className='copyright'>© 2025 HikeShabab. All Rights Reserved.</p>
</Container>

    );
}
export default Footer;

