import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Header.css';
import logo from '../assets/logo2.png';

const Header = ({ activeSection }) => {
  return (
    <Navbar expand="lg" fixed="top" className="shadow-sm" style={{ backgroundColor: '#1A1A1A' }}>
      <Container>

        <img
          src={logo}
          alt="Logo"
          className="img-fluid"
          style={{ maxWidth: '40px', height: 'auto', marginRight: '10px' }}
        />

        <Navbar.Brand href="#home" className="fw-bold text-white">
          Emanuel Domoos
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" activeKey={activeSection}>
            <Nav.Link href="#home" eventKey="home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#about" eventKey="about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="#skills" eventKey="skills" className="text-white">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" eventKey="projects" className="text-white">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" eventKey="contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
