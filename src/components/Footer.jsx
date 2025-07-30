import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="py-4 position-relative bg-dark text-light">
      <div className="dark-overlay"></div>
      <Container className="content-container">
        <p className="text-center mb-0">2025 Eman Domoos. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
