import React from 'react';
import './Contact.css'; // Import the CSS file for Contact component

const Contact = () => (
  <div className="contact-container">
    <h1>Contact</h1>
    <div className="contact-box">
      <h2 className="school-name">Our School</h2>
      <div className="contact-info">
        <p>
          <strong>Address:</strong> School Street, Kolkata, West Bengal, Kol-700052
        </p>
        <p>
          <strong>Phone:</strong> (+91) 5356 3563 53
        </p>
        <p>
          <strong>Email:</strong> info@schoolgmail.com
        </p>
        <p>
          <strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 4:00 PM
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
