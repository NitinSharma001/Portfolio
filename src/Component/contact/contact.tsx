import React from 'react';
import '../contact/contact.css';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-content">
              <h2>Got a project in <span className="highlight">mind?</span></h2>
              <div className="contact-image">
                <img src="https://plus.unsplash.com/premium_photo-1683290222161-c5a296987dc9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name="name" placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input type="email" id="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
