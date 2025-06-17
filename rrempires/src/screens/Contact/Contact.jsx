import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import './Contact.css'; // Corrected import path

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage(''); // Clear previous messages
    setMessageType('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormMessage('Please fill in all fields.');
      setMessageType('error');
      return;
    }

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setFormMessage('Thank you for your message! We will get back to you shortly.');
    setMessageType('success');
    setFormData({ name: '', email: '', message: '' }); // Clear form

    // In a real application, you would send this data to a backend server.
    // Example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setFormMessage('Message sent successfully!');
    //   setMessageType('success');
    //   setFormData({ name: '', email: '', message: '' });
    // })
    // .catch(error => {
    //   console.error('Error submitting form:', error);
    //   setFormMessage('Failed to send message. Please try again later.');
    //   setMessageType('error');
    // });
  };

  return (
    <div className="contact-container">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="bg-gradient-overlay"></div>
        <div className="yellow-blob-1"></div>
        <div className="yellow-blob-2"></div>
        <div className="yellow-blob-3"></div>
      </div>

      {/* Hero Section */}
      <section className={`contact-hero-section ${isVisible ? 'is-visible' : ''}`}>
        <div className="contact-hero-content">
          <h1 className="contact-main-headline">
            <span className="contact-headline-part-1">
              Let's Connect
            </span>
            <br />
            <span className="contact-headline-part-2">
              Get in Touch
            </span>
          </h1>
          <p className="contact-subtitle">
            We're here to help transform your HR. Reach out to us for inquiries, partnerships, or any support you need.
          </p>
        </div>
      </section>

      {/* Contact Details & Form Section */}
      <section className="contact-details-section">
        <div className="contact-content-wrapper">
          <div className="section-header">
            <h2 className="section-title gradient-text">
              Contact Information
            </h2>
            <p className="section-subtitle">
              Find us and connect with our team.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Details */}
            <div className="contact-details-card">
              <div className="contact-detail-item">
                <Mail className="contact-detail-icon" />
                <div>
                  <h3 className="detail-title">Email Us</h3>
                  <p className="detail-text">info@rrempire.com</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <Phone className="contact-detail-icon" />
                <div>
                  <h3 className="detail-title">Call Us</h3>
                  <p className="detail-text">+91 98765 43210</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <MapPin className="contact-detail-icon" />
                <div>
                  <h3 className="detail-title">Our Office</h3>
                  <p className="detail-text">123 HR Tower, Business District,<br/> Chennai, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="social-media-links">
                <a href="#" className="social-icon-link"><Facebook /></a>
                <a href="#" className="social-icon-link"><Twitter /></a>
                <a href="#" className="social-icon-link"><Linkedin /></a>
                <a href="#" className="social-icon-link"><Instagram /></a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <h3 className="form-title">Send us a message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your HR needs..."
                  ></textarea>
                </div>
                {formMessage && (
                  <div className={`form-message ${messageType === 'success' ? 'success-message' : 'error-message'}`}>
                    {formMessage}
                  </div>
                )}
                <button type="submit" className="form-submit-button">
                  Send Message
                  <ArrowRight className="button-arrow-icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="map-section">
        <div className="map-placeholder">
          <p>Map Placeholder - Location of RREmpire HR Solutions Pvt. Ltd.</p>
        </div>
      </section>

      {/* Footer (re-used from Home.jsx) */}
      <footer className="main-footer">
        <div className="footer-content">
          <p className="copyright-text">
            © 2025 RREmpire HR Solutions Pvt. Ltd. All Rights Reserved.
          </p>
          <p className="tagline-text">
            Where Respect, Honesty, and Trust build extraordinary workforces.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
