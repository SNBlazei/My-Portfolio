// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaLinkedinIn, FaGithub, FaTwitter, FaDribbble, FaChevronUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="footer-info">
              <h2 className="footer-logo">Sanjula Nimesh</h2>
              <p className="footer-tagline">
                Building digital experiences that make a difference.
              </p>
            </Col>
            
            <Col md={6} className="footer-links-col">
              <div className="footer-links">
                <a href="#home" className="footer-nav-link">Home</a>
                <a href="#about" className="footer-nav-link">About</a>
                <a href="#skills" className="footer-nav-link">Skills</a>
                <a href="#portfolio" className="footer-nav-link">Portfolio</a>
                <a href="#contact" className="footer-nav-link">Contact</a>
              </div>
              
              <div className="footer-social">
                <a href="#" className="social-icon">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="social-icon">
                  <FaGithub />
                </a>
              
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="copyright">
              <p>
                © {new Date().getFullYear()} Sanjula Nimesh. All rights reserved. 
              </p>
            </Col>
            
            <Col md={6} className="scroll-top-col">
              <button className="scroll-top-btn" onClick={scrollToTop}>
                <FaChevronUp />
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;