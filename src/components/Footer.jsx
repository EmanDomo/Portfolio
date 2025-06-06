import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 bg-dark">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} Emanuel Domoos. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#about" className="footer-link">About</a>
            <a href="#contact" className="footer-link ms-3">Contact</a>
            <a href="#resume" className="footer-link ms-3">Resume</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
