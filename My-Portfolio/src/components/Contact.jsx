// ContactSection.js
import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        Massage: '' // Note: This matches your template variable spelling
    });

    const [formErrors, setFormErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Social media links - replace with your actual profile URLs
    const socialLinks = {
        linkedin: "https://www.linkedin.com/in/sanjula-nimesh-26270327a/",
        github: "https://github.com/SNBlazei",
        instagram: "https://www.instagram.com/sanjula_99/"
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
        }

        if (!formData.Massage.trim()) {
            errors.Massage = 'Message is required';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);

        console.log("Form data being submitted:", formData);
        console.log("Form element:", form.current);

        // Using EmailJS to send the form data
        emailjs.sendForm(
            'service_wqpzgym',
            'template_75eyjvp',
            form.current,
            '3WuYxKc-xlkSIz7e6'
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            setFormSubmitted(true);
            setIsSubmitting(false);
            
            // Reset form after 5 seconds
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    Massage: ''
                });
                setFormSubmitted(false);
            }, 5000);
        })
        .catch((error) => {
            console.error('Error sending email:', error.text);
            setIsSubmitting(false);
            alert('There was an error sending your message. Please try again later.');
        });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-bg-shape"></div>

            <Container>
                <div className="section-title">
                    <h2>Get In Touch</h2>
                    <div className="title-bar"></div>
                </div>

                <Row className="contact-content">
                    <Col lg={5} md={12} className="contact-info-col">
                        <div className="contact-info">
                            <h3>Let's Connect</h3>
                            <p className="contact-desc">
                                Have a project in mind or want to discuss potential opportunities? I'm always open to new ideas and collaborations. Feel free to reach out through any of the channels below.
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <FaEnvelope />
                                    </div>
                                    <div className="contact-text">
                                        <h4>Email</h4>
                                        <p>NimeshSanjula606@gmail.com</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="contact-text">
                                        <h4>Phone</h4>
                                        <p>+94 (77) 591-4395</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-social">
                                <h4>Find Me On</h4>
                                <div className="social-links">
                                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <FaLinkedinIn />
                                    </a>
                                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <FaGithub />
                                    </a>
                                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={7} md={12} className="contact-form-col">
                        <div className="contact-form-container">
                            <h3>Send A Message</h3>

                            {formSubmitted ? (
                                <div className="form-success-message">
                                    <div className="success-icon">
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <h4>Message Sent Successfully!</h4>
                                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                                </div>
                            ) : (
                                <Form className="contact-form" ref={form} onSubmit={handleSubmit}>
                                    <Form.Group className="mb-4">
                                        <Form.Control
                                            type="text"
                                            placeholder="Your Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={formErrors.name ? 'is-invalid' : ''}
                                        />
                                        {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Control
                                            type="email"
                                            placeholder="Your Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={formErrors.email ? 'is-invalid' : ''}
                                        />
                                        {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Control
                                            type="text"
                                            placeholder="Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={formErrors.subject ? 'is-invalid' : ''}
                                        />
                                        {formErrors.subject && <div className="invalid-feedback">{formErrors.subject}</div>}
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            placeholder="Your Message"
                                            name="Massage"
                                            value={formData.Massage}
                                            onChange={handleChange}
                                            className={formErrors.Massage ? 'is-invalid' : ''}
                                        />
                                        {formErrors.Massage && <div className="invalid-feedback">{formErrors.Massage}</div>}
                                    </Form.Group>

                                    <Button 
                                        type="submit" 
                                        className="btn-custom-primary form-submit-btn"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </Form>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;