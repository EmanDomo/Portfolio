import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bg from '../assets/bg.jpg';
import myphoto from '../assets/mee.png';
import homePhoto from '../assets/home_me.png';
import deped from '../assets/deped.png';
import ordering from '../assets/sjisc.png';
import graal from '../assets/graal.png';
import poop from '../assets/poop.png';
import colorkind from '../assets/colorkind.png';
import paymongo from '../assets/paymongo_logo.png';
import neonDB from '../assets/neondb.png';
import visualstudiocode from '../assets/vscode-icon.png';
import '../styles/Home.css';
import {
  SiReact,
  SiVuedotjs,
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
  SiGithub,
  SiOpenai,
  SiVercel,
  SiNetlify,
  SiRender
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaTools } from 'react-icons/fa';

// Fade hook
const useScrollFade = (threshold = 0.1, rootMargin = "0px") => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  const fadeStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
  };

  return [ref, fadeStyle, isVisible];
};

const Portfolio = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Hi! I'm Emanuel Domoos";

  // Fade
  const [heroRef, heroFadeStyle] = useScrollFade(0.1);

  // about
  const [aboutTitleRef, aboutTitleFadeStyle] = useScrollFade(0.2);
  const [aboutImageRef, aboutImageFadeStyle] = useScrollFade(0.2);
  const [aboutTextRef, aboutTextFadeStyle] = useScrollFade(0.2);

  // skills
  const [skillsTitleRef, skillsTitleFadeStyle] = useScrollFade(0.2);
  const [skillsDescRef, skillsDescFadeStyle] = useScrollFade(0.2);
  const [skillsGridRef, skillsGridFadeStyle] = useScrollFade(0.2);
  const [learningTitleRef, learningTitleFadeStyle] = useScrollFade(0.2);
  const [learningGridRef, learningGridFadeStyle] = useScrollFade(0.2);

  // Project
  const [projectsTitleRef, projectsTitleFadeStyle] = useScrollFade(0.2);
  const [projectsDescRef, projectsDescFadeStyle] = useScrollFade(0.2);
  const [project1DescRef, project1DescFadeStyle] = useScrollFade(0.2);
  const [project2DescRef, project2DescFadeStyle] = useScrollFade(0.2);
  const [project3DescRef, project3DescFadeStyle] = useScrollFade(0.2);
  const [project4DescRef, project4DescFadeStyle] = useScrollFade(0.2);
  const [project1Ref, project1FadeStyle] = useScrollFade(0.2);
  const [project2Ref, project2FadeStyle] = useScrollFade(0.2);
  const [project3Ref, project3FadeStyle] = useScrollFade(0.2);
  const [project4Ref, project4FadeStyle] = useScrollFade(0.2);

  // Contact
  const [contactTitleRef, contactTitleFadeStyle] = useScrollFade(0.2);
  const [contactIntroRef, contactIntroFadeStyle] = useScrollFade(0.2);
  const [contactCard1Ref, contactCard1FadeStyle] = useScrollFade(0.2);
  const [contactCard2Ref, contactCard2FadeStyle] = useScrollFade(0.2);
  const [contactCard3Ref, contactCard3FadeStyle] = useScrollFade(0.2);
  const [contactEmailSectionRef, contactEmailSectionFadeStyle] = useScrollFade(0.2);


  // Typewriter animation
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

  const skills = [
    'HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JavaScript', 'React', 'Vue', 'Vite',
    'Node', 'Express', 'MySQL', 'PostgreSQL', 'VS Code', 'NeonDB', 'Vercel', 'Netlify', 'Render',
    'Git', 'Github', 'AI Tools'
  ];

  const learning = ['TypeScript'];

  const techIcons = {
    'HTML': <FaHtml5 className="text-danger" />,
    'CSS': <FaCss3Alt className="text-primary" />,
    'JavaScript': <SiJavascript className="text-warning" />,
    'TypeScript': <SiTypescript className="text-primary" />,
    'React': <SiReact className="text-info" />,
    'Vue': <SiVuedotjs className="text-success" />,
    'Bootstrap': <SiBootstrap className="text-primary" />,
    'Tailwind': <SiTailwindcss className="text-info" />,
    'Vite': <SiVite className="text-warning" />,
    'Node': <SiNodedotjs className="text-success" />,
    'Express': <SiExpress className="text-secondary" />,
    'MySQL': <SiMysql className="text-info" />,
    'PostgreSQL': <SiPostgresql className="text-primary" />,
    'Vercel': <SiVercel className="text-white" />,
    'Netlify': <SiNetlify className="text-success" />,
    'Render': <SiRender className="text-white" />,
    'Git': <SiGit className="text-danger" />,
    'Github': <SiGithub className="text-white" />,
    'AI Tools': <SiOpenai className="text-success" />,
    'VS Code': (
      <img
        src={visualstudiocode}
        alt="VS Code"
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
      />
    ),
    'NeonDB': (
      <img
        src={neonDB}
        alt="neonDB"
        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
      />
    ),
    'PayMongo': (
      <img
        src={paymongo}
        alt="PayMongo"
        style={{ width: '24px', height: '24px', objectFit: 'contain' }}
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
            className="tech-icon-container"
          >
            <span className="tech-icon-wrapper">
              {techIcons[tech] || <span style={{ fontSize: '12px' }}>{tech}</span>}
            </span>

            <div className="tech-tooltip">
              {tech}
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

  const handleRedirectPoop = () => {
    window.open('https://dailydigestpoopy.netlify.app/', '_blank');
  };

  const handleRedirectColorKind = () => {
    window.open('https://github.com/EmanDomo/ColorKind/', '_blank');
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
      <Header activeSection={activeSection} />

      <section id="home" className="py-5 hero-section">
        <div className="dark-overlay"></div>
        <Container className="content-container">
          <Row className="align-items-center min-vh-100">
            <Col lg={12} className="text-center">
              <div ref={heroRef} style={heroFadeStyle}>
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

                <div className="typewriter-container">
                  <h1 className="display-4 fw-bold typewriter-hidden-text">
                    Hi! I'm Emanuel Domoos
                  </h1>

                  <h1 className="display-4 fw-bold typewriter-visible-text">
                    <span className="typing-text">
                      {displayText}
                      <span className="cursor">|</span>
                    </span>
                  </h1>
                </div>

                <p className="lead mb-4 hero-lead-text">
                  Here, you can check out what I'm working on. I do my best to create things with ❤
                </p>

                <a
                  href="/Emanuel_Domoos_Resume.pdf"
                  download
                  className="btn btn-sm ms-2 rounded-pill"
                >
                  Download Resume
                </a>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="py-5">
        <div className="dark-overlay"></div>
        <Container className="content-container">
          <div ref={aboutTitleRef} style={aboutTitleFadeStyle}>
            <h2 className="text-center fw-bold mb-5">About Me</h2>
          </div>

          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4">
              <div ref={aboutImageRef} style={aboutImageFadeStyle}>
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
              <div ref={aboutTextRef} style={aboutTextFadeStyle}>
                <div className="position-relative">
                  <div className="accent-bar-top"></div>

                  <div className="mb-4">
                    <p className="text-content text-center text-md-start">
                      I am a graduate of <strong>Bachelor of Science in Information Technology</strong> from the University of Cabuyao (UC), seeking an entry-level web developer position. I am motivated to gain practical experience, develop my skills on the job, and contribute to team projects. I am committed to continuous learning and aim to build a strong foundation in web development.
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-content text-center text-md-start">
                      I have knowledge in <strong>HTML, CSS, and JavaScript</strong>, with hands-on experience in building full-stack web applications using <strong>React, Node.js, Express, and MySQL. </strong>I am also familiar with version control systems such as Git and GitHub, including collaborative workflows, branching strategies, and pull request management. I am currently exploring AI platforms such as ChatGPT and OpenAI to assist with coding, debugging, research, and enhancing overall productivity.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="skills" className="py-5">
        <div className="dark-overlay"></div>
        <Container className="content-container">
          <div ref={skillsTitleRef} style={skillsTitleFadeStyle}>
            <h2 className="text-center fw-bold mb-5">Skills</h2>
          </div>

          <div ref={skillsDescRef} style={skillsDescFadeStyle}>
            <div className="mb-4">
              <p className="text-content-skills">
                A collection of technologies I've used in real-world projects, including frontend frameworks, backend tools, databases, deployment platforms, and developer environments.
              </p>
            </div>
          </div>

          {/* Desktop view - shows text with icons */}
          <div ref={skillsGridRef} style={skillsGridFadeStyle}>
            <Row className='mb-5 justify-content-center d-none d-md-flex'>
              {skills.map((skill) => (
                <Col sm={6} md={4} lg={3} key={skill} className="mb-3">
                  <Card className="skill-card">
                    <Card.Body className="d-flex align-items-center justify-content-center gap-3">
                      <div className="skill-icon">
                        {techIcons[skill] || <FaTools className="text-secondary" />}
                      </div>
                      <Card.Text className="fw-medium mb-0">{skill}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Mobile view - shows only icons with tooltips */}
            <div className="d-md-none mb-5">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="mobile-skill-icon-container"
                  >
                    <div
                      className="mobile-skill-icon-wrapper"
                      onTouchStart={(e) => {
                        const tooltip = e.currentTarget.parentElement.querySelector('.mobile-skill-tooltip');
                        const icon = e.currentTarget;
                        if (tooltip && icon) {
                          tooltip.style.opacity = '1';
                          tooltip.style.visibility = 'visible';
                          icon.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                          icon.style.transform = 'scale(1.05)';
                        }
                      }}
                      onTouchEnd={(e) => {
                        const tooltip = e.currentTarget.parentElement.querySelector('.mobile-skill-tooltip');
                        const icon = e.currentTarget;
                        if (tooltip && icon) {
                          setTimeout(() => {
                            tooltip.style.opacity = '0';
                            tooltip.style.visibility = 'hidden';
                            icon.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            icon.style.transform = 'scale(1)';
                          }, 1500); // Hide after 1.5 seconds
                        }
                      }}
                    >
                      {techIcons[skill] || <FaTools className="text-secondary" />}
                    </div>

                    <div
                      className="mobile-skill-tooltip"
                    >
                      {skill}
                      <div className="mobile-skill-tooltip-arrow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={learningTitleRef} style={learningTitleFadeStyle}>
            <h2 className="text-center fw-bold mb-5">Currently Learning</h2>
          </div>

          <div ref={learningGridRef} style={learningGridFadeStyle}>
            {/* Desktop view for currently learning */}
            <Row className="justify-content-center d-none d-md-flex">
              {learning.map((skill) => (
                <Col sm={6} md={4} lg={3} key={skill} className="mb-3">
                  <Card className="skill-card">
                    <Card.Body className="d-flex align-items-center justify-content-center gap-3">
                      <div className="skill-icon">
                        {techIcons[skill] || <FaTools className="text-secondary" />}
                      </div>
                      <Card.Text className="fw-medium mb-0">{skill}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Mobile view for currently learning */}
            <div className="d-md-none">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {learning.map((skill, index) => (
                  <div
                    key={index}
                    className="mobile-skill-icon-container"
                  >
                    <div
                      className="mobile-skill-icon-wrapper"
                      onTouchStart={(e) => {
                        const tooltip = e.currentTarget.parentElement.querySelector('.mobile-skill-tooltip');
                        const icon = e.currentTarget;
                        if (tooltip && icon) {
                          tooltip.style.opacity = '1';
                          tooltip.style.visibility = 'visible';
                          icon.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                          icon.style.transform = 'scale(1.05)';
                        }
                      }}
                      onTouchEnd={(e) => {
                        const tooltip = e.currentTarget.parentElement.querySelector('.mobile-skill-tooltip');
                        const icon = e.currentTarget;
                        if (tooltip && icon) {
                          setTimeout(() => {
                            tooltip.style.opacity = '0';
                            tooltip.style.visibility = 'hidden';
                            icon.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            icon.style.transform = 'scale(1)';
                          }, 1500);
                        }
                      }}
                    >
                      {techIcons[skill] || <FaTools className="text-secondary" />}
                    </div>

                    <div
                      className="mobile-skill-tooltip"
                    >
                      {skill}
                      <div className="mobile-skill-tooltip-arrow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="projects" className="py-5">
        <div className="dark-overlay"></div>
        <Container className="content-container">
          <div ref={projectsTitleRef} style={projectsTitleFadeStyle}>
            <h2 className="text-center fw-bold mb-5">My Projects</h2>
          </div>

          <div ref={projectsDescRef} style={projectsDescFadeStyle}>
            <div className="mb-4">
              <p className="text-content-projects">
                These projects showcase my work primarily as a backend developer, handling database design, API development, authentication, and server-side logic with occasional frontend contributions for full-stack understanding.
              </p>
            </div>
          </div>

          <div className="projects-list">
            {/* Project 1 */}
            <div ref={project1Ref} style={project1FadeStyle} className="project-item">
              <div className="project-image">
                <img src={deped} alt="DepEd Ticketing System" />
              </div>
              <div className="project-content">
                <h3 className="project-title">DepEd Ticketing System</h3>
                <div ref={project1DescRef} style={project1DescFadeStyle} className="project-description">
                  <p className="main-description">A web-based system for DepEd Cabuyao streamlines and automates the process of ticketing and account requests, allowing users to submit, track, and manage their requests efficiently online.</p>
                  <p className="mt-3 mb-1 fw-semibold tech-label">Technologies Used:</p>
                  <div className="project-tech">
                    {renderTechIcons(['JavaScript', 'React', 'Vite', 'Bootstrap', 'Node', 'Express', 'MySQL'])}
                  </div>
                  <div className="features-list">
                    <p>Designed and implemented RESTful APIs using Node.js and Express to handle ticket creation, tracking, and user management.</p>
                    <p>Integrated MySQL for structured data storage, with optimized queries for ticket resolution tracking and audit logs.</p>
                    <p>Secured backend routes with middleware-based authentication and role-based authorization.</p>
                    <p>Handled server-side form validation and error handling to improve reliability and data integrity.</p>
                    <p>Coordinated backend logic with frontend forms built in React via API endpoints.</p>
                  </div>
                </div>
                <div className="project-actions">
                  <Button className="inside-btn project-btn" size="sm" onClick={handleRedirectDeped}>
                    🔗 See It Live
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div ref={project2Ref} style={project2FadeStyle} className="project-item">
              <div className="project-image">
                <img src={ordering} alt="Cashless Ordering System" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Cashless Ordering System</h3>
                <div ref={project2DescRef} style={project2DescFadeStyle} className="project-description">
                  <p className="main-description">An ordering system developed for Saint Jerome Integrated School of Cabuyao that includes features such as cashless payments, inventory tracking, and sales reporting.</p>
                  <p className="mt-3 mb-1 fw-semibold tech-label">Technologies Used:</p>
                  <div className="project-tech">
                    {renderTechIcons(['JavaScript', 'React', 'Bootstrap', 'Node', 'Express', 'MySQL', 'PayMongo'])}
                  </div>
                  <div className="features-list">
                    <p>Integrated cashless payment methods (GCash and Maya) using the PayMongo test API keys to simulate and validate transaction workflows during development.</p>
                    <p>Developed backend logic to handle payment status, transaction validation, and customer feedback flows.</p>
                    <p>Implemented inventory management system using MySQL, enabling accurate stock tracking, automated stock deduction, and low-stock alerts.</p>
                    <p>Built automated sales reporting with real-time data aggregation to support performance analysis and decision-making.</p>
                    <p>Ensured backend reliability through input validation, error handling, and structured database design.</p>
                  </div>
                </div>
                <div className="project-actions">
                  <Button className="inside-btn project-btn" size="sm" onClick={handleRedirectSJ}>
                    🔗 See It Live
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div ref={project3Ref} style={project3FadeStyle} className="project-item">
              <div className="project-image">
                <img src={poop} alt="Daily Digest" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Daily Digest</h3>
                <div ref={project3DescRef} style={project3DescFadeStyle} className="project-description">
                  <p className="main-description">
                    Originally built as a personal tool to monitor my own bowel movements, this poop tracker is now available to the public for anyone who wants to keep track of their bathroom habits.
                  </p>
                  <p className="mt-3 mb-1 fw-semibold tech-label">Technologies Used:</p>
                  <div className="project-tech">
                    {renderTechIcons(['JavaScript', 'React', 'Vite', 'Bootstrap', 'Node', 'Express', 'PostgreSQL'])}
                  </div>
                  <div className="features-list">
                    <p>Built with a full-stack JavaScript stack using React (Vite) for the frontend and Node.js/Express for the backend.</p>
                    <p>Followed the MVC (Model-View-Controller) architectural pattern to separate concerns and improve maintainability.</p>
                    <p>Utilized PostgreSQL for data storage, hosted on NeonDB for serverless cloud-based persistence.</p>
                    <p>Deployed backend to Render and frontend to Netlify, ensuring seamless CI/CD and reliable availability.</p>
                  </div>
                </div>
                <div className="project-actions">
                  <Button className="inside-btn project-btn" size="sm" onClick={handleRedirectPoop}>
                    🔗 See It Live
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div ref={project4Ref} style={project4FadeStyle} className="project-item">
              <div className="project-image">
                <img src={colorkind} alt="Color Kind" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Color Kind</h3>
                <div ref={project4DescRef} style={project4DescFadeStyle} className="project-description">
                  <p className="main-description">An accessibility-first web app that helps users generate, test, and save color palettes with real-time WCAG contrast checks and colorblind previews, ensuring inclusive, readable design for everyone—especially colorblind users. (Still in development)</p>
                  <p className="mt-3 mb-1 fw-semibold tech-label">Technologies Used:</p>
                  <div className="project-tech">
                    {renderTechIcons(['TypeScript', 'React', 'Vite', 'Tailwind', 'Node', 'Express', 'PostgreSQL'])}
                  </div>
                  <div className="features-list">
                    <p>Features real-time WCAG contrast checks and colorblind previews to support inclusive, readable design.</p>
                    <p>Implemented using TypeScript and React with Vite for strong typing and fast frontend development.</p>
                    <p>Styled using Tailwind CSS, embracing utility-first design while learning modern CSS best practices.</p>
                    <p>Structured the backend with Node.js, Express, and PostgreSQL, following the MVC architecture for clean code separation.</p>
                    <p>App is currently under development, with ongoing improvements in UI/UX, accessibility tooling, and TypeScript proficiency.</p>
                  </div>
                </div>
                <div className="project-actions">
                  <Button className="inside-btn project-btn" size="sm" onClick={handleRedirectColorKind}>
                    🔗 See It Live
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="py-5">
        <div className="dark-overlay"></div>
        <Container className="content-container">
          <div ref={contactTitleRef} style={contactTitleFadeStyle}>
            <h2 className="text-center fw-bold mb-4">Get In Touch</h2>
          </div>

          <div ref={contactIntroRef} style={contactIntroFadeStyle}>
            <p className="text-center lead mb-5">
              I'm always interested in new opportunities and collaborations.
            </p>
          </div>

          <Row className="mb-5">
            <Col md={4} className="text-center mb-4 d-flex flex-column">
              <div ref={contactCard1Ref} style={contactCard1FadeStyle}>
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

            <Col md={4} className="text-center mb-4 d-flex flex-column">
              <div ref={contactCard2Ref} style={contactCard2FadeStyle}>
                <div className="mb-3">
                  <span className="contact-icon">💼</span>
                </div>
                <h5 className="contact-header">LinkedIn</h5>
                <p className="contact-paragraph">Professional networking</p>
                <div className="mt-auto">
                  <Button
                    className="rounded-pill px-4"
                    variant="light"
                    onClick={() => window.open('https://www.linkedin.com/in/emanuel-domoos-30069336b/', '_blank')}
                  >
                    Visit LinkedIn
                  </Button>
                </div>
              </div>
            </Col>

            <Col md={4} className="text-center mb-4 d-flex flex-column">
              <div ref={contactCard3Ref} style={contactCard3FadeStyle}>
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

          <div ref={contactEmailSectionRef} style={contactEmailSectionFadeStyle}>
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

      <Footer />
    </div>
  );
};

export default Portfolio;