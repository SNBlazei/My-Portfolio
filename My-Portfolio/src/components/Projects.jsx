// ProjectsSection.js
import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import MediImage from '../assets/MEdicare.png';
import Talk from '../assets/ttm.png';
import Kushi from '../assets/KUSHI.png';
import P from '../assets/PPPPPP.png';
import Onco from '../assets/tv2.png'
import fe from '../assets/fe.png'

const Projects = () => {
  // Categories for filtering
  const categories = ['All', 'Web App', 'Mobile App', 'UI/UX', 'Backend'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Project data
  const projects = [
    {
      id: 1,
      title: "OncoDetect",
      category: "Web App",
      image: Onco,
      description: "OncoDetect is an AI-powered breast cancer detection tool designed to improve the accuracy of diagnostic imaging through advanced image processing and machine learning techniques. ",
      technologies: ["React", "Redux", "Python Flask", "MongoDB", "Socket.io", " JWT ", "Tenserflow "],
      githubLink: "#"
    },
    {
      id: 2,
      title: "Travel Guide Web",
      category: "Web App",
      image: Kushi,
      description: "A cross-platform Web application for travel planning, featuring itinerary management, location tracking, and offline maps.",
      technologies: ["React ", "node js", "Google Maps API", "Mongo db", " JWT ",],

      githubLink: "#"
    },
    {
      id: 3,
      title: "Lets Grow Preschool Web",
      category: "Web App",
      image: P,
      description: "An AI-powered content generation tool that creates marketing copy, blog posts, and social media content based on user prompts.",
      technologies: ["React.js", "OpenAI API", "Node.js", "JWT", "Bootstrap CSS"],

      githubLink: "https://github.com/binubandara/pre-school-website"
    },
    {
      id: 4,
      title: "Real Time Event Ticketing System",
      category: "Web App",
      image: fe,
      description: "The system is a comprehensive solution for managing ticket distribution with a dynamic dashboard powered by React (frontend) and Node js (backend).",
      technologies: ["React js", "Node js", "Bootstrap","Mongo DB" ],

      githubLink: "#"
    },
    {
      id: 5,
      title: "Talk To Me",
      category: "Mobile App",
      image: Talk,
      description: "Talk To Me is a groundbreaking mobile application designed to facilitate real-time communication for mute individuals by translating sign language into spoken words or text. ",
      technologies: ["Bootstrap (Framework)", "TensorFlowL", "React NativeL", "JWT", "React.js"],

      githubLink: "https://github.com/ShenalSen/Talk_To_Me"
    },
    {
      id: 6,
      title: "Medi-Care-App",
      category: "Web App",
      image: MediImage,
      description: "Medi Care is an innovative web application designed to provide accessible and trustworthy medical information on common health issues. Developed by team GIFTERS for the IDEALIZE 2024 hackathon organized by Moratuwa University,",
      technologies: ["React", "Vue.js", "Tailwind CSS", "Tenserflow"],

      githubLink: "https://github.com/ShenalSen/Medi-Care-app___By-GIFTERS-IDEALIZE-24-"
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="projects-section">
      <Container>
        <div className="section-title">
          <h2>My Projects</h2>
          <div className="title-bar"></div>
        </div>

        {/* Filter buttons */}
        <div className="filter-buttons">
          {categories.map((category, index) => (
            <button
              key={index}
              className={activeCategory === category ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <Row className="projects-grid">
          {filteredProjects.map((project) => (
            <Col lg={4} md={6} key={project.id} className="mb-4">
              <Card className="project-card">
                <div className="project-img-container">
                  <Card.Img variant="top" src={project.image} className="project-img" />
                  <div className="project-overlay">
                    <div className="project-links">
                      
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <div className="project-category">{project.category}</div>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-description">
                    {project.description}
                  </Card.Text>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* View more button */}
        
      </Container>
    </section>
  );
};

export default Projects;