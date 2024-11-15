import React from 'react';
import './ServicesPage.css'; // Import the CSS file

function ServicesPage({ userFullName }) {
  return (
    <div className="services-page">
      <div className="container">
        <h2 className="welcome-message">Welcome, {userFullName}!</h2>
        <h3 className="page-title">Here's your personalized service page for Baby Class</h3>
        <p className="intro-text">We are excited to have you join us!</p>
        <section className="fee-structure">
          <p>Below is the fee structure:</p>
          <div className="fee-list">
            <div className="fee-item">
              <span className="fee-label">Tuition Fee:</span>
              <span className="fee-amount">10,000 KSH</span>
            </div>
            <div className="fee-item">
              <span className="fee-label">Uniform Fee:</span>
              <span className="fee-amount">2,000 KSH</span>
            </div>
            <div className="fee-item">
              <span className="fee-label">Activity Fee:</span>
              <span className="fee-amount">500 KSH</span>
            </div>
            {/* Add more fees as necessary */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesPage;
