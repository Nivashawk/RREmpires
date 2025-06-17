import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, TrendingUp, Shield, Award, Play, ArrowRight, Star, CheckCircle } from 'lucide-react';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      number: "1",
      title: "Migration Service",
      description: "Legally migrate to your dream country with ease — we handle all documentation and legal processes from start to finish.",
      icon: <Users className="service-icon" />,
      bgColorClass: "bg-red-500", // Using descriptive class names for colors
      hoverColorClass: "hover-bg-red-600"
    },
    {
      number: "2",
      title: "Study Abroad",
      description: "Study abroad at top universities. We specialize in overseas education, guidance, and placement for a successful global academic journey.",
      icon: <TrendingUp className="service-icon" />,
      bgColorClass: "bg-yellow-500",
      hoverColorClass: "hover-bg-yellow-600"
    },
    {
      number: "3",
      title: "Job Visa",
      description: "Maximize your earnings—post your resume and we’ll match you with the best job opportunities that fit your skills perfectly.",
      icon: <Shield className="service-icon" />,
      bgColorClass: "bg-gray-800",
      hoverColorClass: "hover-bg-gray-700"
    },
    {
      number: "4",
      title: "Tourist Visa",
      description: "Travel to your favorite destination with ease—we specialize in arranging customized tour packages for you anywhere around the world.",
      icon: <Award className="service-icon" />,
      bgColorClass: "bg-gray-600",
      hoverColorClass: "hover-bg-gray-500"
    }
  ];

  const stats = [
    { value: "5000+", label: "Students Served" },
    { value: "10K+", label: "Placements Made" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "7+", label: "Years Experience" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Operations",
      company: "TechCorp Industries",
      content: "RREmpire transformed our hiring process completely. Their strategic approach and attention to detail is unmatched.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "Growth Dynamics",
      content: "The team's expertise in compliance saved us from potential legal issues while streamlining our HR operations.",
      rating: 5
    }
  ];

  return (
    <div className="home-container">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="bg-gradient-overlay"></div>
        <div className="yellow-blob-1"></div>
        <div className="yellow-blob-2"></div>
        <div className="yellow-blob-3"></div>
      </div>

      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? 'is-visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-badge">
            <div className="badge-dot"></div>
            <span className="badge-text">Trusted by 5000+ Students Worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="main-headline">
            <span className="headline-part-1">
            Explore, Learn, Thrive: 
            </span>
            <br />
            <span className="headline-part-2">
            Build Your Future Abroad
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Welcome to <span className="highlight-text">RREmpire HR Solutions Pvt. Ltd.</span> — Unlock endless opportunities to study, work, and settle in your dream destination. From top-tier education to exciting career prospects, we guide you every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons-container">
            <button className="cta-button primary-cta">
              Get Started Today
              <ArrowRight className="cta-icon" />
            </button>
            {/* <button className="cta-button secondary-cta">
              <div className="play-button-wrapper">
                <Play className="play-icon" />
              </div>
              <span className="play-text">Watch Our Story</span>
            </button> */}
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">
                  {stat.value}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-wheel">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">
              Services We Offer
            </span>
          </h2>
          <p className="section-subtitle">
            Comprehensive HR solutions designed to transform your workforce and accelerate business growth
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${service.bgColorClass} ${service.hoverColorClass}`}
              onMouseEnter={() => setCurrentService(index)}
            >
              {/* Background Pattern */}
              <div className="service-card-number-bg">
                {service.number}
              </div>

              <div className="service-card-content">
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <div className="service-arrow-button">
                    <ChevronRight className="service-arrow-icon" />
                  </div>
                </div>

                <h3 className="service-title">
                  {service.title}
                </h3>

                <p className="service-description">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <h2 className="section-title">
            Our Process
          </h2>
          <p className="section-subtitle">Simple, efficient, and results-driven approach</p>
        </div>

        <div className="process-grid">
          {[
            {
              step: "01",
              title: "CONSULTATION",
              description: "We appoint a personal consultant who will guide you through the entire HR transformation process.",
              icon: <Users className="process-icon" />
            },
            {
              step: "02",
              title: "DOCUMENTATION",
              description: "Our expert technical team collects all relevant documents and processes them efficiently to ensure a smooth and hassle-free experience.",
              icon: <TrendingUp className="process-icon" />
            },
            {
              step: "03",
              title: "TRAVELL PLANNING",
              description: "Once completed, our team will handle all essential travel planning and arrangements to ensure a smooth and stress-free journey.",
              icon: <CheckCircle className="process-icon" />
            }
          ].map((process, index) => (
            <div key={index} className="process-item">
              <div className="process-icon-container">
                <div className="process-icon-circle">
                  <div className="process-icon-inner">
                    {process.icon}
                  </div>
                </div>
                <div className="process-step-number">{process.step}</div>
                <h3 className="process-title">
                  {process.title}
                </h3>
                <p className="process-description">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">
            Client Success Stories
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div>
                <div className="testimonial-name">{testimonial.name}</div>
                <div className="testimonial-role">{testimonial.role}</div>
                <div className="testimonial-company">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <h2 className="cta-headline">
            <span className="cta-headline-gradient">
              Ready to Transform Your HR?
            </span>
          </h2>
          <p className="cta-description">
            Join hundreds of companies that trust RREmpire to build exceptional workforces and drive sustainable growth.
          </p>
          <button className="cta-button primary-cta-lg">
            Start Your Journey
            <ArrowRight className="cta-icon" />
          </button>
        </div>
      </section>

      {/* Footer */}
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

export default Home;