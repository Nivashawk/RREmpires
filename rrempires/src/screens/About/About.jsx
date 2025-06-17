import React, { useState, useEffect } from 'react';
import { Users, Lightbulb, Handshake, Briefcase, Award, CheckCircle } from 'lucide-react';
import './About.css';

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
              Empowering Global
            </span>
            <br />
            <span className="about-headline-part-2">
              Dreams & Destinations
            </span>
          </h1>
          <p className="about-subtitle">
            At <span className="about-highlight-text">RREmpire HR Solutions Pvt. Ltd.</span>, we specialize in global migration, education, employment, and tourism—guiding individuals through every legal and logistical step of their journey.
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
              We help you migrate, study, work, or travel abroad with confidence and clarity.
            </p>
          </div>
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <div className="card-icon-wrapper">
                <Lightbulb className="card-icon" />
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-description">
                To simplify global mobility by offering expert guidance in migration, overseas education, job visa acquisition, and travel planning—ensuring a smooth and secure journey for every individual.
              </p>
            </div>
            <div className="mission-vision-card">
              <div className="card-icon-wrapper">
                <Handshake className="card-icon" />
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-description">
                To be the most trusted global partner in enabling dreams of migration, education, employment, and exploration through reliable and innovative visa services.
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
              The principles that guide our promise of global opportunity.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <CheckCircle className="value-icon" />
              <h3 className="value-title">Empathy</h3>
              <p className="value-description">
                We understand the emotional and personal significance of moving abroad, and tailor our services with compassion and care.
              </p>
            </div>
            <div className="value-item">
              <CheckCircle className="value-icon" />
              <h3 className="value-title">Transparency</h3>
              <p className="value-description">
                We ensure every step—be it visa, admission, or job application—is clear and communicated honestly, without hidden complexities.
              </p>
            </div>
            <div className="value-item">
              <CheckCircle className="value-icon" />
              <h3 className="value-title">Reliability</h3>
              <p className="value-description">
                Clients trust us because we deliver consistent results, handle legalities with care, and provide support from start to settlement.
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
              Your global journey starts with us—expertly guided and fully supported.
            </p>
          </div>
          <div className="choose-us-grid">
            <div className="choose-us-item">
              <Award className="choose-us-icon" />
              <h3 className="choose-us-title">Comprehensive Global Services</h3>
              <p className="choose-us-description">
                From migration to tourist visas, we offer end-to-end support under one roof, tailored to your goals and destination.
              </p>
            </div>
            <div className="choose-us-item">
              <Users className="choose-us-icon" />
              <h3 className="choose-us-title">Student & Career-Centric Focus</h3>
              <p className="choose-us-description">
                Whether you're applying to a university or job abroad, we help you find the best match and ensure smooth visa processing.
              </p>
            </div>
            <div className="choose-us-item">
              <Briefcase className="choose-us-icon" />
              <h3 className="choose-us-title">Trusted by Thousands</h3>
              <p className="choose-us-description">
                With hundreds of success stories in migration, job placements, and overseas admissions, our impact is global and growing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <p className="copyright-text">
            © 2025 RREmpire HR Solutions Pvt. Ltd. All Rights Reserved.
          </p>
          <p className="tagline-text">
            Your gateway to migration, education, career, and travel success.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
