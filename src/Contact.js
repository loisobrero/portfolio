import React from 'react';
import './Contact.css';
function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to get in touch with me. You can reach me at my email or through my social media profiles.
      </p>
      <div className="contact-info">
        <p><a href="mailto:loisobrero@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></p>
        <p><a href="https://www.linkedin.com/in/lois-obrero" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p><a href="https://github.com/loisobrero" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        {/* Add more contact information or forms here */}
      </div>
    </section>
  );
}

export default Contact;