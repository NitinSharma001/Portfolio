import React from 'react';
import '../about/about.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-content">
              <h2>About <span className="highlight">me</span></h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                lobortis.... <a href="#read-more">Read more</a>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1589140915708-20ff586fe767?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
