import React from 'react';
import './HeroSection.css';
import JobCards from '../job-cards/JobCards';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-container">
        <div className="image-container">
          <img className="cta-image" src="/images/cta-image.jpg" alt="" />
          <div className="main-text-cont">
            <h2 className="main-title">NICEIC Accredited Electrician</h2>
            <h3 className="strapline">Welcome to AG Electrical Services Website</h3>
          </div>
          <img className="nic-logo" src="/images/nic-logo.jpg" alt="" />
        </div>
        <div className="areas-list-container">
          <div className="intro">
            <h2 className="black-heading">AG Electrical Services</h2>
            <p className="areas-text">For all your electrical needs, we strive to deliver a friendly and professional service, priding ourselves on the quality of our work. Feel free to get in touch regarding any electrical concerns you may have. We'd love to hear from you!</p>
          </div>
          <div className="areas">
            <h2 className="black-heading">Areas Covered:</h2>
            <ul className="areas-list">
              <li className="areas-list-item">North London</li>
              <li className="areas-list-item">Hertfordshire</li>
            </ul>
          </div>
          <p className="areas-text-2"></p>
          <div className="call-us-cont">
            <h1 className="call-us-now">Call us now:</h1>
            <a className="number" href="tel:07927582796">07927 582796</a>
          </div>
        </div>
        < JobCards />
      </div>
    </section>
  );
}

export default HeroSection;
