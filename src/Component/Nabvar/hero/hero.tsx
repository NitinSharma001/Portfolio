import React from 'react';
import '../hero/hero.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>
            CREATIVE UI <span className="highlight">DESIGNER</span>
          </h1>
          <div className="hero-buttons">
            <a href="#hire-me" className="btn btn-primary">Hire me</a>
            <a href="#download-cv" className="btn btn-secondary">Download CV</a>
          </div>
          <div className="hero-image">
            <img src="https://plus.unsplash.com/premium_photo-1664475282327-b1fe8e56e9e7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Creative UI Designer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
