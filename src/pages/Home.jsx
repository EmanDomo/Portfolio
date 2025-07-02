import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { Container, Navbar, Nav, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import bg from '../assets/bg.jpg';
import myphoto from '../assets/mee.png';
import homePhoto from '../assets/home_me.png';
import deped from '../assets/deped.png';
import ordering from '../assets/sjisc.png';
import graal from '../assets/graal.png';
import poop from '../assets/poop.png';
import logo from '../assets/logo.png';
import colorkind from '../assets/colorkind.png';
import paymongo from '../assets/paymongo_logo.png';
import '.././styles/Home.css';
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiBootstrap,
  SiVite,
  SiExpress,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiOpenai
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaTools } from 'react-icons/fa';

const useScrollFade = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(30);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const { isIntersecting, boundingClientRect } = entry;
        const elementTop = boundingClientRect.top;
        const elementBottom = boundingClientRect.bottom;
        const windowHeight = window.innerHeight;

        if (isIntersecting) {
          setIsVisible(true);

          let fadeValue = 1;
          let translateValue = 0;

          // Fade in from bottom
          if (elementTop > windowHeight * 0.8) {
            fadeValue = Math.max(0, 1 - (elementTop - windowHeight * 0.8) / (windowHeight * 0.2));
            translateValue = (1 - fadeValue) * 30;
          }
          // Fade out from top
          else if (elementBottom < windowHeight * 0.2) {
            fadeValue = Math.max(0, elementBottom / (windowHeight * 0.2));
            translateValue = (1 - fadeValue) * -30;
          }

          setOpacity(fadeValue);
          setTranslateY(translateValue);
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
            setOpacity(0);
            setTranslateY(elementTop > windowHeight ? 30 : -30);
          }
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    // Additional scroll listener for smooth fade transitions
    const handleScroll = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const windowHeight = window.innerHeight;

      let fadeValue = 1;
      let translateValue = 0;

      // Element is completely above viewport
      if (elementBottom < 0) {
        fadeValue = 0;
        translateValue = -30;
      }
      // Element is completely below viewport
      else if (elementTop > windowHeight) {
        fadeValue = 0;
        translateValue = 30;
      }
      // Element is entering from bottom
      else if (elementTop > windowHeight * 0.8) {
        fadeValue = Math.max(0, 1 - (elementTop - windowHeight * 0.8) / (windowHeight * 0.2));
        translateValue = (1 - fadeValue) * 30;
      }
      // Element is leaving from top
      else if (elementBottom < windowHeight * 0.2) {
        fadeValue = Math.max(0, elementBottom / (windowHeight * 0.2));
        translateValue = (1 - fadeValue) * -30;
      }
      // Element is fully in view
      else {
        fadeValue = 1;
        translateValue = 0;
      }

      setOpacity(fadeValue);
      setTranslateY(translateValue);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, rootMargin, triggerOnce]);

  const style = {
    opacity,
    transform: `translateY(${translateY}px)`,
    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
  };

  return { ref: elementRef, style, isVisible, opacity, translateY };
};

const Portfolio = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Hi! I'm Emanuel Domoos";

  // Typewriter animation effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(fullText.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (currentIndex === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, fullText]);

  // Fade animation hooks for home section elements
  const profileImageFade = useScrollFade({ threshold: 0.2 });
  const titleFade = useScrollFade({ threshold: 0.2 });
  const subtitleFade = useScrollFade({ threshold: 0.2 });
  const buttonsFade = useScrollFade({ threshold: 0.2 });

  // About section fades
  const aboutTitleFade = useScrollFade({ threshold: 0.2 });
  const aboutImageFade = useScrollFade({ threshold: 0.2 });
  const aboutTextFade = useScrollFade({ threshold: 0.2 });
  const aboutResumeFade = useScrollFade({ threshold: 0.2 });

  // Skills section fades
  const skillsTitleFade = useScrollFade({ threshold: 0.2 });
  const skillsCardFades = Array.from({ length: 6 }, () => useScrollFade({ threshold: 0.1 }));

  // Projects section fades
  const projectsTitleFade = useScrollFade({ threshold: 0.2 });
  const projectCardFades = Array.from({ length: 5 }, () => useScrollFade({ threshold: 0.1 }));

  // Contact section fades
  const contactTitleFade = useScrollFade({ threshold: 0.2 });
  const contactSubtitleFade = useScrollFade({ threshold: 0.2 });
  const contactCardFades = Array.from({ length: 3 }, () => useScrollFade({ threshold: 0.1 }));
  const contactEmailFade = useScrollFade({ threshold: 0.2 });

  const skills = ['JavaScript', 'React', 'Node', 'MySQL', 'Git/Github', 'AI Tools'];

  //techIcons
  const techIcons = {
    'React': <SiReact className="text-info" />,
    'JavaScript': <SiJavascript className="text-warning" />,
    'HTML': <FaHtml5 className="text-danger" />,
    'CSS': <FaCss3Alt className="text-primary" />,
    'Node': <SiNodedotjs className="text-success" />,
    'Express': <SiExpress className="text-dark" />,
    'MySQL': <SiMysql className="text-info" />,
    'PostgreSQL': <SiPostgresql className="text-primary" />,
    'Bootstrap': <SiBootstrap className="text-primary" />,
    'Vite': <SiVite className="text-warning" />,
    'TypeScript': <SiTypescript className="text-primary" />,
    'Tailwind': <SiTailwindcss className="text-info" />,
    'Git/Github': <SiGit className="text-danger" />,
    'AI Tools': <SiOpenai className="text-success" />,
    'PayMongo': (
      <img
        src={paymongo}
        alt="PayMongo"
        style={{
          width: '24px',
          height: '24px',
          objectFit: 'contain'
        }}
      />
    )
  };

  const renderTechIcons = (technologies) => {
    const showTooltip = (container) => {
      const tooltip = container.querySelector('.tech-tooltip');
      const icon = container.querySelector('.tech-icon-wrapper');
      if (tooltip && icon) {
        tooltip.style.opacity = '1';
        tooltip.style.visibility = 'visible';
        icon.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        icon.style.transform = 'scale(1.1)';
      }
    };

    const hideTooltip = (container) => {
      const tooltip = container.querySelector('.tech-tooltip');
      const icon = container.querySelector('.tech-icon-wrapper');
      if (tooltip && icon) {
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
        icon.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        icon.style.transform = 'scale(1)';
      }
    };

    return (
      <div className="mb-3 d-flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="position-relative tech-icon-container"
            style={{ display: 'inline-block' }}
            onMouseEnter={(e) => showTooltip(e.currentTarget)}
            onMouseLeave={(e) => hideTooltip(e.currentTarget)}
          >
            <span
              className="tech-icon-wrapper d-inline-flex align-items-center justify-content-center"
              style={{
                fontSize: '24px',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              {techIcons[tech] || <span style={{ fontSize: '12px' }}>{tech}</span>}
            </span>

            <div
              className="tech-tooltip"
              style={{
                position: 'absolute',
                bottom: '120%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                color: 'white',
                padding: '6px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                opacity: '0',
                visibility: 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                zIndex: 1000,
                pointerEvents: 'none',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
              }}
            >
              {tech}
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '0',
                  height: '0',
                  borderLeft: '5px solid transparent',
                  borderRight: '5px solid transparent',
                  borderTop: '5px solid rgba(0, 0, 0, 0.9)'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

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

  const handleRedirectPoop = () => {
    window.open('https://dailydigestpoopy.netlify.app/', '_blank');
  };

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let current = 'home';
      const offset = 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            current = section;
          }
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
      <Navbar expand="lg" fixed="top" className="shadow-sm" style={{ backgroundColor: '#5A189A', color: '#EAEAEA' }}>
        <Container>
          {/* <img
            src={logo}
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: '40px', height: 'auto', marginRight: '10px' }}
          /> */}

          <Navbar.Brand
            href="#home"
            className="fw-bold"
            style={{ color: '#FFFFFF' }}
          >
            Emanuel Domoos
          </Navbar.Brand>

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

      <section id="home" className="py-5 hero-section">
        <div className="dark-overlay"></div>
        <Container className="content-container">
          <Row className="align-items-center min-vh-100">
            <Col lg={12} className="text-center">
              <div ref={profileImageFade.ref} style={profileImageFade.style}>
                <div className="profile-container">
                  <div className="profile-bg-ring"></div>
                  <div className="profile-glow"></div>
                  <img
                    src={myphoto}
                    alt="Profile"
                    className="profile-image-enhanced"
                    width="150"
                    height="150"
                  />
                  <div className="floating-icons">
                    <SiReact className="floating-icon react-icon" />
                    <SiJavascript className="floating-icon js-icon" />
                    <SiNodedotjs className="floating-icon node-icon" />
                  </div>
                </div>
              </div>

              <div ref={titleFade.ref} style={titleFade.style}>
                <h1 className="display-4 fw-bold mb-3" style={{ color: '#FFFFFF' }}>
                  <span className="typing-text">
                    {displayText}
                    <span className="cursor">|</span>
                  </span>
                </h1>
              </div>

              <div ref={subtitleFade.ref} style={subtitleFade.style}>
                <p className="lead mb-4" style={{ color: '#FFFFFF' }}>
                  Here, you can check out what I'm working on. I try my best to create things with ❤
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="py-5">
        <div className="dark-overlay"></div>
        <Container className="content-container">
          <div ref={aboutTitleFade.ref} style={aboutTitleFade.style}>
            <h2 className="text-center fw-bold mb-5">About Me</h2>
          </div>

          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4">
              <div ref={aboutImageFade.ref} style={aboutImageFade.style}>
                <div className="profile-image-wrapper">
                  <div className="profile-bg-circle"></div>
                  <img
                    src={homePhoto}
                    alt="Profile"
                    className="rounded-circle mb-4 profile-image"
                    width="300"
                    height="300"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="decorative-dot-1"></div>
                  <div className="decorative-dot-2"></div>
                  <div className="decorative-dot-3"></div>
                  <div className="decorative-dot-4"></div>
                  <div className="decorative-dot-5"></div>
                  <div className="decorative-dot-6"></div>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div className="position-relative">
                <div className="accent-bar-top"></div>

                <div ref={aboutTextFade.ref} style={aboutTextFade.style}>
                  <div className="mb-4">
                    <p className="text-content" style={{ textAlign: 'justify', textJustify: 'inter-word', hyphens: 'auto' }}>
                      I am a graduate of <strong>Bachelor of Science in Information Technology</strong> from the University of Cabuyao (UC), seeking an entry-level web developer position. I am motivated to gain practical experience, develop my skills on the job, and contribute to team projects. I am committed to continuous learning and aim to build a strong foundation in web development.
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-content" style={{ textAlign: 'justify', textJustify: 'inter-word', hyphens: 'auto' }}>
                      I have knowledge in <strong>HTML, CSS, and JavaScript</strong>, with hands-on experience in building full-stack web applications using React, Node.js, Express, and MySQL. I am also familiar with version control systems such as Git and GitHub, including collaborative workflows, branching strategies, and pull request management. Additionally, I am skilled in using productivity tools like Microsoft Office Suite (Word, Excel, and PowerPoint) for documentation, data analysis, and presentations. I am currently exploring AI platforms such as ChatGPT and OpenAI to assist with coding, debugging, research, and enhancing overall productivity.
                    </p>
                  </div>
                </div>

                {/* Animated resume button */}
                <div ref={aboutResumeFade.ref} style={aboutResumeFade.style}>
                  <p className="text-start">
                    Check my resume →
                    <a
                      href="/Emanuel-Domoos-Resume.pdf"
                      download
                      className="btn btn-sm ms-2 rounded-pill"
                    >
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="skills" className="py-5">
        <div className="dark-overlay"></div>
        <Container className="content-container">
          <div ref={skillsTitleFade.ref} style={skillsTitleFade.style}>
            <h2 className="text-center fw-bold mb-5">Skills</h2>
          </div>

          <Row>
            {skills.map((skill, index) => (
              <Col sm={6} md={4} lg={3} key={skill} className="mb-3">
                {/* Each skill card gets its own fade animation */}
                <div ref={skillsCardFades[index].ref} style={skillsCardFades[index].style}>
                  <Card className="skill-card">
                    <Card.Body className="d-flex align-items-center justify-content-center gap-3">
                      <div className="skill-icon">
                        {techIcons[skill] || <FaTools className="text-secondary" />}
                      </div>
                      <Card.Text className="fw-medium mb-0">{skill}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="projects" className="py-5">
        <div className="dark-overlay"></div>
        <Container className="content-container">
          {/* Animated title */}
          <div ref={projectsTitleFade.ref} style={projectsTitleFade.style}>
            <h2 className="text-center fw-bold mb-5">My Projects</h2>
          </div>

          <Row>
            {/* Project 1: DepEd Ticketing System */}
            <Col md={6} lg={4} className="mb-4">
              <div ref={projectCardFades[0].ref} style={projectCardFades[0].style}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={deped} alt="Project Thumbnail" />
                  <Card.Body>
                    <Card.Title>DepEd Ticketing System</Card.Title>
                    <Card.Text style={{ textAlign: 'justify' }}>
                      A web-based system for DepEd Cabuyao streamlines and automates the process of ticketing and account requests, allowing users to submit, track, and manage their requests efficiently online.
                    </Card.Text>
                    <p className="mt-3 mb-1 fw-semibold tech-label">Technologies Used:</p>
                    {renderTechIcons(['JavaScript', 'React', 'Vite', 'Bootstrap', 'Node', 'Express', 'MySQL'])}
                    <div className="d-flex gap-2">
                      <Button className="inside-btn project-btn" size="sm" onClick={handleRedirectDeped}>
                        🔗 See It Live
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            {/* Project 2: Cashless Ordering System */}
            <Col md={6} lg={4} className="mb-4">
              <div ref={projectCardFades[1].ref} style={projectCardFades[1].style}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={ordering} alt="Project Thumbnail" />
                  <Card.Body>
                    <Card.Title>Cashless Ordering System</Card.Title>
                    <Card.Text style={{ textAlign: 'justify' }}>
                      An ordering system developed for Saint Jerome Integrated School of Cabuyao that includes features such as cashless payments, inventory tracking, and sales reporting.
                    </Card.Text>
                    <p className="mt-3 mb-1 fw-semibold tech-label">Technologies Used:</p>
                    {renderTechIcons(['JavaScript', 'React', 'Bootstrap', 'Node', 'Express', 'MySQL', 'PayMongo'])}
                    <div className="d-flex gap-2">
                      <Button className="inside-btn project-btn" size="sm" onClick={handleRedirectSJ}>
                        🔗 See It Live
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            {/* Project 3: Graal Era Calculator */}
            <Col md={6} lg={4} className="mb-4">
              <div ref={projectCardFades[2].ref} style={projectCardFades[2].style}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={graal} alt="Project Thumbnail" />
                  <Card.Body>
                    <Card.Title>Graal Era Sellables Calculator</Card.Title>
                    <Card.Text style={{ textAlign: 'justify' }}>
                      Designed for Graal Era players, this ratio calculator makes item trading easier, faster, and more accurate by reducing human errors and improving overall trading efficiency.
                    </Card.Text>
                    <p className="mt-3 mb-1 fw-semibold tech-label">Technologies Used:</p>
                    {renderTechIcons(['HTML', 'JavaScript', 'CSS'])}
                    <div className="d-flex gap-2">
                      <Button className="inside-btn project-btn" size="sm" onClick={handleRedirectGraal}>
                        🔗 See It Live
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            {/* Project 4: Daily Digest */}
            <Col md={6} lg={4} className="mb-4">
              <div ref={projectCardFades[3].ref} style={projectCardFades[3].style}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={poop} alt="Project Thumbnail" />
                  <Card.Body>
                    <Card.Title>Daily Digest</Card.Title>
                    <Card.Text style={{ textAlign: 'justify' }}>
                      A funny little poop tracker to keep tabs on your bathroom trips because even your poop deserves a little attention.
                    </Card.Text>
                    <p className="mt-3 mb-1 fw-semibold tech-label">Technologies Used:</p>
                    {renderTechIcons(['JavaScript', 'React', 'Vite', 'Bootstrap', 'Node', 'Express', 'PostgreSQL'])}
                    <div className="d-flex gap-2">
                      <Button className="inside-btn project-btn" size="sm" onClick={handleRedirectPoop}>
                        🔗 See It Live
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            {/* Project 5: Color Kind */}
            <Col md={6} lg={4} className="mb-4">
              <div ref={projectCardFades[4].ref} style={projectCardFades[4].style}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={colorkind} alt="Project Thumbnail" />
                  <Card.Body>
                    <Card.Title>Color Kind</Card.Title>
                    <Card.Text style={{ textAlign: 'justify' }}>
                      An accessibility-first web app that helps users generate, test, and save color palettes with real-time WCAG contrast checks and colorblind previews, ensuring inclusive, readable design for everyone—especially colorblind users. (Still in development)
                    </Card.Text>
                    <p className="mt-3 mb-1 fw-semibold tech-label">Technologies Used:</p>
                    {renderTechIcons(['TypeScript', 'React', 'Vite', 'Tailwind', 'Node', 'Express', 'PostgreSQL'])}
                    <div className="d-flex gap-2">
                      <Button className="inside-btn project-btn" size="sm" onClick={handleRedirectPoop}>
                        🔗 See It Live
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="py-5">
        <div className="dark-overlay"></div>
        <Container className="content-container">
          {/* Animated title and subtitle */}
          <div ref={contactTitleFade.ref} style={contactTitleFade.style}>
            <h2 className="text-center fw-bold mb-4">Get In Touch</h2>
          </div>

          <div ref={contactSubtitleFade.ref} style={contactSubtitleFade.style}>
            <p className="text-center lead mb-5">
              I'm always interested in new opportunities and collaborations.
            </p>
          </div>

          <Row className="mb-5">
            {/* Facebook */}
            <Col md={4} className="text-center mb-4 d-flex flex-column">
              <div ref={contactCardFades[0].ref} style={contactCardFades[0].style}>
                <div className="mb-3">
                  <FaFacebook className="contact-icon" />
                </div>
                <h5 className="contact-header">Facebook</h5>
                <p className="contact-paragraph">Connect with me on Facebook</p>
                <div className="mt-auto">
                  <Button
                    className="rounded-pill px-4"
                    variant="light"
                    onClick={() => window.open('https://facebook.com', '_blank')}
                  >
                    Visit Facebook
                  </Button>
                </div>
              </div>
            </Col>

            {/* LinkedIn */}
            <Col md={4} className="text-center mb-4 d-flex flex-column">
              <div ref={contactCardFades[1].ref} style={contactCardFades[1].style}>
                <div className="mb-3">
                  <span className="contact-icon">💼</span>
                </div>
                <h5 className="contact-header">LinkedIn</h5>
                <p className="contact-paragraph">Professional networking</p>
                <div className="mt-auto">
                  <Button
                    className="rounded-pill px-4"
                    variant="light"
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/in/emanuel-domoos-30069336b/',
                        '_blank'
                      )
                    }
                  >
                    Visit LinkedIn
                  </Button>
                </div>
              </div>
            </Col>

            {/* GitHub */}
            <Col md={4} className="text-center mb-4 d-flex flex-column">
              <div ref={contactCardFades[2].ref} style={contactCardFades[2].style}>
                <div className="mb-3">
                  <FaGithub className="contact-icon" />
                </div>
                <h5 className="contact-header">GitHub</h5>
                <p className="contact-paragraph">Check out my projects</p>
                <div className="mt-auto">
                  <Button
                    className="rounded-pill px-4"
                    variant="light"
                    onClick={() => window.open('https://github.com/EmanDomo', '_blank')}
                  >
                    Visit GitHub
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          {/* Email section */}
          <div ref={contactEmailFade.ref} style={contactEmailFade.style}>
            <div className="text-center">
              <div className="mb-3">
                <span className="contact-icon">📧</span>
              </div>
              <h5 className="contact-header">Email</h5>
              <p className="email-text">domoosemanuel32@gmail.com</p>
            </div>
          </div>
        </Container>
      </section>

      <footer className="py-4">
        <div className="dark-overlay"></div>
        <Container className="content-container">
          <p className="text-center mb-0">© 2025 Eman Domoos. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};
export default Portfolio;