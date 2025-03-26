// SkillsSection.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
  // Skill categories with their respective skills
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "fab fa-react" },
        { name: "JavaScript", level: 85, icon: "fab fa-js-square" },
        { name: "HTML5/CSS3", level: 90, icon: "fab fa-html5" },
        { name: "TypeScript", level: 80, icon: "fab fa-js" },
        { name: "Vue.js", level: 75, icon: "fab fa-vuejs" },
        { name: "Angular", level: 70, icon: "fab fa-angular" }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85, icon: "fab fa-node-js" },
        { name: "Python", level: 80, icon: "fab fa-python" },
        { name: "Express", level: 85, icon: "fas fa-server" },
        { name: "PHP", level: 70, icon: "fab fa-php" },
        { name: "Java", level: 65, icon: "fab fa-java" },
        { name: "Ruby", level: 60, icon: "fab fa-ruby" }
      ]
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", level: 85, icon: "fas fa-database" },
        { name: "MySQL", level: 80, icon: "fas fa-database" },
        { name: "PostgreSQL", level: 80, icon: "fas fa-database" },
        { name: "Firebase", level: 75, icon: "fas fa-fire" },
        { name: "Redis", level: 70, icon: "fas fa-database" },
        { name: "GraphQL", level: 75, icon: "fas fa-project-diagram" }
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90, icon: "fab fa-git-alt" },
        { name: "Docker", level: 80, icon: "fab fa-docker" },
        { name: "AWS", level: 75, icon: "fab fa-aws" },
        { name: "Figma", level: 80, icon: "fab fa-figma" },
        { name: "Redux", level: 85, icon: "fas fa-code" },
        { name: "Testing", level: 75, icon: "fas fa-vial" }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    // Add intersection observer to trigger animation when section is in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSkillsVisible(true);
      }
    }, { threshold: 0.2 });

    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills-section">
      {/* SVG Definitions for gradients */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary-color)" />
            <stop offset="100%" stopColor="var(--accent-color)" />
          </linearGradient>
        </defs>
      </svg>
      
      <Container>
        <div className="section-title">
          <h2>My Skills</h2>
          <div className="title-bar"></div>
        </div>

        <div className="skills-container">
          {/* Skills tabs */}
          <div className="skills-tabs">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                className={`skills-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills content */}
          <div className="skills-content">
            <Row>
              {skillCategories[activeTab].skills.map((skill, index) => (
                <Col md={6} xl={4} key={index} className="mb-4">
                  <div className="skill-item">
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-bar-container">
                        <div 
                          className={`skill-bar ${skillsVisible ? 'animated' : ''}`} 
                          style={{width: `${skillsVisible ? skill.level : 0}%`}}
                        >
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Technical Stats */}
        <div className="technical-stats">
          <Row>
            <Col md={3} sm={6} className="stat-item">
              <div className="stat-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="stat-circle-bg" cx="50" cy="50" r="40"></circle>
                  <circle className={`stat-circle-value ${skillsVisible ? 'animated' : ''}`} cx="50" cy="50" r="40" style={{"--percentage": 85}}></circle>
                  <text x="50" y="50" className="stat-text">85%</text>
                </svg>
                <h4 className="stat-title">Code Quality</h4>
              </div>
            </Col>
            <Col md={3} sm={6} className="stat-item">
              <div className="stat-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="stat-circle-bg" cx="50" cy="50" r="40"></circle>
                  <circle className={`stat-circle-value ${skillsVisible ? 'animated' : ''}`} cx="50" cy="50" r="40" style={{"--percentage": 90}}></circle>
                  <text x="50" y="50" className="stat-text">90%</text>
                </svg>
                <h4 className="stat-title">Problem Solving</h4>
              </div>
            </Col>
            <Col md={3} sm={6} className="stat-item">
              <div className="stat-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="stat-circle-bg" cx="50" cy="50" r="40"></circle>
                  <circle className={`stat-circle-value ${skillsVisible ? 'animated' : ''}`} cx="50" cy="50" r="40" style={{"--percentage": 80}}></circle>
                  <text x="50" y="50" className="stat-text">80%</text>
                </svg>
                <h4 className="stat-title">Innovation</h4>
              </div>
            </Col>
            <Col md={3} sm={6} className="stat-item">
              <div className="stat-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="stat-circle-bg" cx="50" cy="50" r="40"></circle>
                  <circle className={`stat-circle-value ${skillsVisible ? 'animated' : ''}`} cx="50" cy="50" r="40" style={{"--percentage": 95}}></circle>
                  <text x="50" y="50" className="stat-text">95%</text>
                </svg>
                <h4 className="stat-title">Communication</h4>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;