// AboutSection.js
import React from 'react';
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';
import { FaLaptopCode, FaMobileAlt, FaPalette, FaServer } from 'react-icons/fa';
// Import the image - adjust the path if needed
import profileImage from '../assets/dp4.jpg';
// Import your CV file - you'll need to add this file to your assets folder
import resumePDF from '../assets/sanjula_nimesh_cv.pdf';
import './About.css';

const About = () => {
    // Skills data
    const skills = [
        { name: "JavaScript", percentage: 90 },
        { name: "React.js", percentage: 85 },
        { name: "Node.js", percentage: 80 },
        { name: "TypeScript", percentage: 75 },
        { name: "GraphQL", percentage: 70 },
        { name: "MongoDB", percentage: 75 }
    ];

    // Services data
    const services = [
        {
            icon: <FaLaptopCode />,
            title: "Web Development",
            description: "Building modern, responsive web applications with React, Next.js and cutting-edge technologies."
        },
        {
            icon: <FaMobileAlt />,
            title: "App Development",
            description: "Creating cross-platform mobile applications with React Native for iOS and Android."
        },
        {
            icon: <FaPalette />,
            title: "UI/UX Design",
            description: "Designing intuitive user interfaces with focus on usability, accessibility and aesthetic appeal."
        },
        {
            icon: <FaServer />,
            title: "Backend Development",
            description: "Developing robust backend services with Node.js, Express, and MongoDB/PostgreSQL."
        }
    ];

    // Function to handle CV download
    const handleDownloadCV = () => {
        // Create a direct download link to the PDF file
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Sanjula_Nimesh_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="about-section">
            <Container>
                <div className="section-title">
                    <h2>About Me</h2>
                    <div className="title-bar"></div>
                </div>

                <Row className="mt-5">
                    <Col lg={5} className="about-img-col">
                        <div className="about-img">
                            <img
                                src={profileImage}
                                alt="Sanjula Nimesh"
                                className="img-fluid"
                                style={{ maxWidth: '400px', width: '100%' }} // Control the max size
                            />
                        </div>
                    </Col>

                    <Col lg={7} className="about-content">
                        <h3 className="about-greeting">Hello, I'm <span className="highlight">Sanjula Nimesh</span></h3>
                        <p className="about-description">
                            I'm a passionate full-stack developer and UI/UX designer with over 2 years of experience creating
                            digital experiences that users love. I combine technical expertise with
                            creative problem-solving to build beautiful, functional, and scalable web applications.
                        </p>

                        <Row className="about-info">
                            <Col md={6}>
                                <ul>
                                    <li><strong>Name:</strong> <span>Sanjula Nimesh</span></li>
                                    <li><strong>Email:</strong> <span>Nimeshsanjula606@gmail.com</span></li>
                                </ul>
                            </Col>
                            <Col md={6}>
                                <ul>
                                    <li><strong>Experience:</strong> <span>2+ Years</span></li>
                                    <li><strong>Freelance:</strong> <span>Available</span></li>
                                    <li><strong>Languages:</strong> <span>English, Sinhala</span></li>
                                </ul>
                            </Col>
                        </Row>

                        <div className="about-buttons mt-4">
                            <a href="#contact" className="btn btn-custom-primary">Hire Me</a>
                            <button 
                                onClick={handleDownloadCV} 
                                className="btn btn-custom-outline"
                            >
                                Download CV
                            </button>
                        </div>
                    </Col>
                </Row>

                {/* Skills Section */}
                <div className="skills-section mt-5 pt-5">
                    <div className="sub-section-title">
                        <h3>My Skills</h3>
                        <div className="title-bar"></div>
                    </div>

                    <Row className="mt-4">
                        {skills.map((skill, index) => (
                            <Col md={6} key={index} className="mb-4">
                                <div className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percentage">{skill.percentage}%</span>
                                    </div>
                                    <ProgressBar
                                        now={skill.percentage}
                                        className="skill-progress"
                                        variant="custom"
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Services Section */}
                <div className="services-section mt-5 pt-5">
                    <div className="sub-section-title">
                        <h3>Services I Offer</h3>
                        <div className="title-bar"></div>
                    </div>

                    <Row className="mt-4">
                        {services.map((service, index) => (
                            <Col lg={3} md={6} key={index} className="mb-4">
                                <Card className="service-card">
                                    <Card.Body>
                                        <div className="service-icon">
                                            {service.icon}
                                        </div>
                                        <Card.Title style={{ color: '#007bff', fontWeight: 'bold' }}>{service.title}</Card.Title>
                                        <Card.Text>{service.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default About;