import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, Shield, Award, ArrowRight, CheckCircle } from 'lucide-react';
import './Pricing.css'; // Corrected import path

const Pricing = ({ navigate }) => { // navigate prop to handle redirection
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Recruitment Services",
      description: "From executive search to volume hiring, we connect you with top talent across industries. Our comprehensive process ensures the perfect match for your organizational culture and strategic goals.",
      features: [
        "Executive Search",
        "Contingent Staffing",
        "Permanent Placement",
        "Candidate Vetting & Screening"
      ],
      icon: <Users className="service-icon" />,
      colorClass: "card-blue"
    },
    {
      title: "Training & Development",
      description: "Empower your workforce with custom-tailored training programs. We focus on enhancing skills, boosting productivity, and fostering a continuous learning environment for sustainable growth.",
      features: [
        "Leadership Training",
        "Skill Development Workshops",
        "Compliance Training",
        "Performance Coaching"
      ],
      icon: <TrendingUp className="service-icon" />,
      colorClass: "card-green"
    },
    {
      title: "Employment Solutions",
      description: "Navigate the complexities of employment laws and regulations with ease. Our solutions cover everything from contract management to policy development, ensuring full compliance and peace of mind.",
      features: [
        "HR Policy Development",
        "Legal Compliance & Advisory",
        "Employee Handbook Creation",
        "Payroll & Benefits Support"
      ],
      icon: <Shield className="service-icon" />,
      colorClass: "card-purple"
    },
    {
      title: "HR Consulting",
      description: "Gain strategic insights and optimize your HR functions with our expert consulting. We partner with you to develop and implement HR strategies that drive organizational excellence and growth.",
      features: [
        "Organizational Design",
        "Change Management",
        "Talent Management Strategy",
        "HR Technology Integration"
      ],
      icon: <Award className="service-icon" />,
      colorClass: "card-orange"
    }
  ];

  return (
    <div className="pricing-container">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="bg-gradient-overlay"></div>
        <div className="yellow-blob-1"></div>
        <div className="yellow-blob-2"></div>
        <div className="yellow-blob-3"></div>
      </div>

      {/* Hero Section */}
      <section className={`pricing-hero-section ${isVisible ? 'is-visible' : ''}`}>
        <div className="pricing-hero-content">
          <h1 className="pricing-main-headline">
            <span className="pricing-headline-part-1">
              Tailored HR Solutions
            </span>
            <br />
            <span className="pricing-headline-part-2">
              For Your Business
            </span>
          </h1>
          <p className="pricing-subtitle">
            At RREmpire, we believe in bespoke solutions. Our pricing is customized to fit your unique needs, ensuring maximum value and impact.
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="pricing-services-section">
        <div className="pricing-content-wrapper">
          <div className="section-header">
            <h2 className="section-title gradient-text">
              Our Core Services
            </h2>
            <p className="section-subtitle">
              Explore our comprehensive range of HR solutions designed to drive your success.
            </p>
          </div>

          <div className="services-overview-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-overview-card ${service.colorClass}`}>
                <div className="service-overview-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-overview-title">{service.title}</h3>
                <p className="service-overview-description">{service.description}</p>
                <ul className="service-overview-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <CheckCircle className="feature-check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Contact for Pricing */}
      <section className="pricing-cta-section">
        <div className="pricing-cta-card">
          <h2 className="pricing-cta-headline">
            <span className="pricing-cta-headline-gradient">
              Ready for a Custom Solution?
            </span>
          </h2>
          <p className="pricing-cta-description">
            Our experts are ready to understand your unique requirements and craft a tailored HR strategy that aligns with your business goals.
          </p>
          <button
            className="pricing-contact-button"
            onClick={() => navigate('contact')} // Navigate to Contact page
          >
            Contact Us for a Quote
            <ArrowRight className="pricing-button-icon" />
          </button>
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

export default Pricing;
