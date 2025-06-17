import React, { useState, useEffect } from 'react';
import { Users, Lightbulb, Handshake, Briefcase, Award, CheckCircle } from 'lucide-react';
import './About.css'; // Corrected import path

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="about-container">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="bg-gradient-overlay"></div>
        <div className="yellow-blob-1"></div>
        <div className="yellow-blob-2"></div>
        <div className="yellow-blob-3"></div>
      </div>

      {/* Hero Section */}
      <section className={`about-hero-section ${isVisible ? 'is-visible' : ''}`}>
        <div className="about-hero-content">
          <h1 className="about-main-headline">
            <span className="about-headline-part-1">
              Our Journey to
            </span>
            <br />
            <span className="about-headline-part-2">
              HR Excellence
            </span>
          </h1>
          <p className="about-subtitle">
            At <span className="about-highlight-text">RREmpire HR Solutions Pvt. Ltd.</span>, we are driven by a singular purpose: to empower businesses and individuals through unparalleled human resource services.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-section dark-bg">
        <div className="about-content-wrapper">
          <div className="section-header">
            <h2 className="section-title gradient-text">
              Our Mission & Vision
            </h2>
            <p className="section-subtitle">
              Building bridges between talent and opportunity, fostering growth and success.
            </p>
          </div>
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <div className="card-icon-wrapper">
                <Lightbulb className="card-icon" />
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-description">
                To provide innovative, ethical, and results-driven HR solutions that foster a culture of respect, honesty, and trust, ultimately enhancing organizational efficiency and employee well-being.
              </p>
            </div>
            <div className="mission-vision-card">
              <div className="card-icon-wrapper">
                <Handshake className="card-icon" />
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-description">
                To be the leading HR solutions partner globally, recognized for our commitment to excellence, integrity, and transforming human potential into tangible business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section light-bg">
        <div className="about-content-wrapper">
          <div className="section-header">
            <h2 className="section-title gradient-text">
              Our Core Values
            </h2>
            <p className="section-subtitle">
              The principles that guide every interaction and decision we make.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <CheckCircle className="value-icon" />
              <h3 className="value-title">Respect</h3>
              <p className="value-description">
                We treat every individual with dignity and value diverse perspectives.
              </p>
            </div>
            <div className="value-item">
              <CheckCircle className="value-icon" />
              <h3 className="value-title">Honesty</h3>
              <p className="value-description">
                We operate with transparency and integrity in all our dealings.
              </p>
            </div>
            <div className="value-item">
              <CheckCircle className="value-icon" />
              <h3 className="value-title">Trust</h3>
              <p className="value-description">
                We build lasting relationships based on reliability and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-section dark-bg">
        <div className="about-content-wrapper">
          <div className="section-header">
            <h2 className="section-title gradient-text">
              Why Choose RREmpire?
            </h2>
            <p className="section-subtitle">
              Our commitment to your success sets us apart.
            </p>
          </div>
          <div className="choose-us-grid">
            <div className="choose-us-item">
              <Award className="choose-us-icon" />
              <h3 className="choose-us-title">Expertise & Experience</h3>
              <p className="choose-us-description">
                With over 7 years in the HR domain, our team brings deep knowledge and practical insights to every challenge.
              </p>
            </div>
            <div className="choose-us-item">
              <Users className="choose-us-icon" />
              <h3 className="choose-us-title">Client-Centric Approach</h3>
              <p className="choose-us-description">
                We tailor our solutions to your unique needs, ensuring personalized and effective strategies.
              </p>
            </div>
            <div className="choose-us-item">
              <Briefcase className="choose-us-icon" />
              <h3 className="choose-us-title">Proven Results</h3>
              <p className="choose-us-description">
                Our track record of successful placements and HR transformations speaks for itself.
              </p>
            </div>
          </div>
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

export default About;