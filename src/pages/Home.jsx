import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { Container, Navbar, Nav, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import myphoto from '../assets/mee.png';
import deped from '../assets/deped.png';
import ordering from '../assets/sjisc.png';
import graal from '../assets/graal.png';
import '.././styles/Home.css';

const Portfolio = () => {
  const skills = ['JavaScript', 'React', 'Node', 'MySQL', 'Git/Github', 'AI Tools'];

  const projects = [
    {
      title: 'DepEd Ticketing System',
      description: 'Simple and efficient task management application',
      tags: ['JavaScript', 'CSS', 'Local Storage'],
      demo: '#https://ticketing.sdocabuyao.com/',
    },
    {
      title: 'Cashless Ordering System',
      description: 'A modern online store built with React and Node.js',
      tags: ['React', 'Node.js', 'MySQL'],
      demo: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information with clean UI',
      tags: ['React', 'API Integration', 'CSS'],
      demo: '#',
    }
  ];

  const handleRedirectDeped = () => {
    window.open('https://ticketing.sdocabuyao.com/', '_blank');
  };

  const handleRedirectSJ = () => {
    window.open('https://github.com/EmanDomo/Cashless-Ordering-and-POS-System-with-Inventory-and-Sales-Management-for-SJISC-School', '_blank');
  };

  const handleRedirectGraal = () => {
    window.open('https://graal-era-tradables-ratio-calcula-git-095dfb-emandomos-projects.vercel.app/', '_blank');
  };

  const handleRedirectFacebook = () => {
    window.open('https://www.facebook.com/eman.domoos/', '_blank');
  };

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let current = 'home';
      const offset = 100; // Detection offset

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if element is in viewport (top within offset or bottom visible)
          if (rect.top <= offset && rect.bottom >= offset) {
            current = section;
          }
          // Special case for last section
          else if (
            section === 'contact' &&
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 50
          ) {
            current = 'contact';
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div>
      <Navbar expand="lg" fixed="top" className="shadow-sm" style={{ backgroundColor: '#34D399', color: 'white' }}>
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">Emanuel Domoos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" activeKey={activeSection}>
              <Nav.Link
                href="#home"
                active={activeSection === 'home'}
                eventKey="home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                active={activeSection === 'about'}
                eventKey="about"
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#skills"
                active={activeSection === 'skills'}
                eventKey="skills"
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                active={activeSection === 'projects'}
                eventKey="projects"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                active={activeSection === 'contact'}
                eventKey="contact"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="bg-light py-5" style={{ paddingTop: '100px' }}>
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={12} className="text-center">
              <img
                src={myphoto}
                alt="Profile"
                className="rounded-circle mb-4"
                width="150"
                height="150"
              />
              <h1 className="display-4 fw-bold mb-3">Hi! I'm <span style={{ color: '#34D399' }}>Emanuel Domoos</span></h1>
              <p className="lead mb-4">
                Here, you can check out what I'm working on. I try my best to create things with ❤
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <Button href="#contact" className="rounded-pill" style={{ backgroundColor: '#0F172A' }}>
                  📧 Email
                </Button>
                <Button href="#contact" className="rounded-pill" style={{ backgroundColor: '#0F172A' }}>
                  💼 LinkedIn
                </Button>
                <Button href="#contact" className="rounded-pill" style={{ backgroundColor: '#0F172A' }}>
                  <span className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-1">
                    <FaFacebook size={17} />
                    Facebook
                  </span>
                </Button>
                <Button href="#contact" className="rounded-pill" style={{ backgroundColor: '#0F172A' }}>
                  <span className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-1">
                    <FaGithub size={17} />
                    GitHub
                  </span>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="py-5" style={{ backgroundColor: '#0F172A', color: 'white' }}>
        <Container>
          <h2 className="text-center fw-bold mb-5">About Me</h2>
          <p
            className="mb-4"
            style={{ fontSize: '1.125rem', textAlign: 'justify' }}
          >
            I am a graduating Bachelor of Science in Information Technology student from the University of Cabuyao (UC), seeking an entry-level web developer position. I am willing to gain practical experience, develop my skills on the job, and contribute to team projects. Motivated to learn and grow professionally, I aim to build a strong foundation in web development.
          </p>
          <p style={{ fontSize: '1.125rem', textAlign: 'justify' }}>
            I have knowledge in HTML, CSS, and JavaScript, with hands-on experience in building full-stack web applications using React, Node.js, Express, and MySQL. I am also familiar with version control systems such as Git and GitHub, including collaborative workflows, branching strategies, and pull request management. Additionally, I am skilled in using productivity tools like Microsoft Office Suite (Word, Excel, and PowerPoint) for documentation, data analysis, and presentations. I am currently exploring AI platforms such as ChatGPT, Claude, and DeepSeek to assist with coding, debugging, research, and enhancing overall productivity.
          </p>
        </Container>
      </section>

      <section id="skills" className="py-5" style={{ backgroundColor: '#0F172A', color: 'white' }}>
        <Container>
          <h2 className="text-center fw-bold mb-5">Skills</h2>
          <Row>
            {skills.map((skill, index) => (
              <Col sm={6} md={4} lg={3} key={skill} className="mb-3">
                <Card className="text-center h-100 shadow-sm">
                  <Card.Body>
                    <Card.Text className="fw-medium">{skill}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section id="projects" className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5"> My Projects</h2>
          <Row>
            <Col md={6} lg={4} className='mb-4'>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={deped} alt="Project Thumbnail" />
                <Card.Body>
                  <Card.Title>Deped Ticketing System</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}> A web-based system for DepEd Cabuyao streamlines and automates the process of ticketing and account requests, allowing users to submit, track, and manage their requests efficiently online.</Card.Text>
                  <div className="mb-3">
                    <Badge key="MySQL" className="tags me-2 mb-1">
                      MySQL
                    </Badge>
                    <Badge key="Express.js" className="tags me-2 mb-1">
                      Express
                    </Badge>
                    <Badge key="React.js" className="tags me-2 mb-1">
                      React
                    </Badge>
                    <Badge key="Node.js" className="tags me-2 mb-1">
                      Node
                    </Badge>
                  </div>
                  <div className="d-flex gap-2">
                    <Button className='inside-btn' size="sm" onClick={handleRedirectDeped}>
                      🔗 Visit Website
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className='mb-4'>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={ordering} alt="Project Thumbnail" />
                <Card.Body>
                  <Card.Title>Cashless Ordering System</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    An ordering system developed for Saint Jerome Integrated School of Cabuyao that includes features such as cashless payments, inventory tracking, and sales reporting.
                  </Card.Text>
                  <div className="mb-3">
                    <Badge key="MySQL" className="tags me-2 mb-1">MySQL</Badge>
                    <Badge key="Express.js" className="tags me-2 mb-1">Express</Badge>
                    <Badge key="React.js" className="tags me-2 mb-1">React</Badge>
                    <Badge key="Node.js" className="tags me-2 mb-1">Node</Badge>
                    <Badge key="PayMongo API" className="tags me-2 mb-1">PayMongo API</Badge>
                  </div>
                  <div className="d-flex gap-2">
                    <Button className='inside-btn' size="sm" onClick={handleRedirectSJ}>
                      🔗 Visit Website
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className='mb-4'>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={graal} alt="Project Thumbnail" />
                <Card.Body>
                  <Card.Title>Graal Era Sellables Calculator</Card.Title>
                  <Card.Text style={{ textAlign: 'justify' }}>
                    Designed for Graal Era players, this ratio calculator makes item trading easier, faster, and more accurate by reducing human errors and improving overall trading efficiency.
                  </Card.Text>
                  <div className="mb-3">
                    <Badge key="HTML" className="tags me-2 mb-1">HTML</Badge>
                    <Badge key="JavaScript" className="tags me-2 mb-1">JavaScript</Badge>
                    <Badge key="Css" className="tags me-2 mb-1">CSS</Badge>
                  </div>
                  <div className="d-flex gap-2">
                    <Button className='inside-btn' size="sm" onClick={handleRedirectGraal}>
                      🔗 Visit Website
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className='mb-4'>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>Poop Tracker</Card.Title>
                  <Card.Text>Simple and efficient task management application (Still in development)</Card.Text>
                  <div className="mb-3">
                    <Badge key="PostgreSQL" className="tags me-2 mb-1">
                      PostgreSQL
                    </Badge>
                    <Badge key="Express.js" className="tags me-2 mb-1">
                      Express
                    </Badge>
                    <Badge key="React.js" className="tags me-2 mb-1">
                      React
                    </Badge>
                    <Badge key="Node.js" className="tags me-2 mb-1">
                      Node
                    </Badge>
                  </div>
                  <div className="d-flex gap-2">
                    <Button className='inside-btn' size="sm" onClick={handleRedirectSJ}>
                      🔗 Visit Website
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="contact" className="py-5" style={{ backgroundColor: '#0F172A', color: 'white' }}>
        <Container>
          <h2 className="text-center fw-bold mb-4">Get In Touch</h2>
          <p className="text-center lead mb-5">
            I'm always interested in new opportunities and collaborations.
          </p>

          <Row className="mb-5">
            <Col md={4} className="text-center mb-4">
              <div className="mb-3">
                <span style={{ fontSize: '3rem' }}>📧</span>
              </div>
              <h5 className="fw-semibold">Email</h5>
              <p style={{ color: 'white' }}>domoosemanuel32@gmail.com</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="mb-3">
                <span style={{ fontSize: '3rem' }}>💼</span>
              </div>
              <h5 className="fw-semibold">LinkedIn</h5>
              <p style={{ color: 'white' }}>n/a</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="mb-3">
                <FaGithub style={{ fontSize: '3rem', color: 'white' }} />
              </div>
              <h5 className="fw-semibold">GitHub</h5>
              <p style={{ color: 'white' }}>
                <a href="https://github.com/EmanDomo" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                  github.com/EmanDomo
                </a>
              </p>
            </Col>
          </Row>
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleRedirectFacebook}
              className="rounded-pill"
              style={{ backgroundColor: '#34D399' }}
            >
              <span className="d-flex align-items-center justify-content-center gap-2">
                <FaFacebook size={24} />
                Message me on Facebook
              </span>
            </Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-white border-top">
        <Container>
          <p className="text-center text-muted mb-0">
            © 2025 Eman Domoos. All rights reserved.
          </p>
        </Container>
      </footer>

    </div>
  );
};

export default Portfolio;