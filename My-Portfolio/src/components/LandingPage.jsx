// LandingPage.js
import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css'; // We'll define custom styles here

// Import profile image
import profileImage from '../assets/dp4.jpg';

// Import any required components
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaChevronDown } from 'react-icons/fa';

function LandingPage({ scrolled }) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#8A2BE2"
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#9370DB",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  };

  return (
    <div className="app">
      {/* Navigation */}
      <Navbar expand="lg" className={scrolled ? "navbar scrolled" : "navbar"}>
        <Container>
          <Navbar.Brand href="#home">Sanjula Nimesh</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="active">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="particles-js"
        />
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="hero-content">
              <h1 className="hero-title">I'm Sanjula Nimesh</h1>
              <h2 className="mb-4">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'UI/UX Designer',
                    2000,
                    'Mobile App Developer',
                    2000,
                    'An Investor',
                    2000,
                    'An Entrepreneur',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="typing-effect"
                  repeat={Infinity}
                />
              </h2>
              <p className="hero-subtitle">
                Crafting beautiful, intuitive, and high-performance digital experiences with modern technologies and clean code.
              </p>
              <div className="hero-buttons">
                <Button variant="primary" className="btn-custom-primary">View My Work</Button>
                <Button variant="outline" className="btn-custom-outline">Contact Me</Button>
              </div>
              <div className="social-links">
                <a href="https://github.com/SNBlazei" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/sanjula-nimesh-26270327a/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
              </div>
            </Col>
            <Col lg={5}>
              <div className="hero-image">
                {/* Using the same profile image here */}
                <img 
                  src={profileImage} 
                  alt="Sanjula Nimesh" 
                  className="img-fluid" 
                  style={{ maxWidth: '500px', width: '100%' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <a href="#about" className="scroll-down">
          <FaChevronDown />
        </a>
      </section>
    </div>
  );
}

export default LandingPage;