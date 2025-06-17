import React, { useState, useEffect } from "react";
import {
  Users,
  TrendingUp,
  Shield,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import "./Pricing.css"; // Corrected import path

const Pricing = ({ navigate }) => {
  // navigate prop to handle redirection
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Migration Service",
      description:
        "Migrate legally and stress-free to your dream country. Our expert team handles every step—from document collection to legal formalities—ensuring a smooth transition with complete transparency and professional guidance at every stage.",
      features: [
        "Legal Documentation Support",
        "Visa Application Assistance",
        "Immigration Consultation",
        "Post-Arrival Guidance",
      ],
      icon: <Users className="service-icon" />,
      colorClass: "card-blue",
    },
    {
      title: "Study Abroad",
      description:
        "Secure admission in top global universities with our overseas education experts. We guide you through course selection, application processes, visas, and placements, ensuring a successful and enriching international academic experience.",
      features: [
        "University Selection",
        "Application & SOP Guidance",
        "Student Visa Support",
        "Education Loan Assistance",
      ],
      icon: <TrendingUp className="service-icon" />,
      colorClass: "card-green",
    },
    {
      title: "Job Visa",
      description:
        "Boost your global career prospects. Upload your resume, and we’ll match your skills with the most suitable international job openings, assisting in job visa applications and relocation processes efficiently.",
      features: [
        "Resume Marketing",
        "Global Job Matching",
        "Interview Scheduling",
        "Job Visa Processing",
      ],
      icon: <Shield className="service-icon" />,
      colorClass: "card-purple",
    },
    {
      title: "Tourist Visa",
      description:
        "Plan the perfect getaway with our global tourism expertise. We manage tourist visa applications and design personalized travel packages for unforgettable experiences to your favorite destinations worldwide.",
      features: [
        "Tourist Visa Application",
        "Custom Travel Packages",
        "Flight & Hotel Booking",
        "24/7 Travel Support",
      ],
      icon: <Award className="service-icon" />,
      colorClass: "card-orange",
    },
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
      <section
        className={`pricing-hero-section ${isVisible ? "is-visible" : ""}`}
      >
        <div className="pricing-hero-content">
          <h1 className="pricing-main-headline">
            <span className="pricing-headline-part-1">
              Transparent & Flexible
            </span>
            <br />
            <span className="pricing-headline-part-2">
              Pricing for Global Services
            </span>
          </h1>
          <p className="pricing-subtitle">
            At RREmpire, we offer flexible pricing tailored to your migration,
            education, job, or travel needs—no hidden charges, just real value.
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="pricing-services-section">
        <div className="pricing-content-wrapper">
          <div className="section-header">
            <h2 className="section-title gradient-text">Our Core Services</h2>
            <p className="section-subtitle">
              Explore our comprehensive range of HR solutions designed to drive
              your success.
            </p>
          </div>

          <div className="services-overview-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-overview-card ${service.colorClass}`}
              >
                <div className="service-overview-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-overview-title">{service.title}</h3>
                <p className="service-overview-description">
                  {service.description}
                </p>
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
            Our experts are ready to understand your unique requirements and
            craft a tailored HR strategy that aligns with your business goals.
          </p>
          <button
            className="pricing-contact-button"
            onClick={() => navigate("contact")} // Navigate to Contact page
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
