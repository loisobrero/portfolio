import React from 'react';
import lokirsImage from './images/lokirs.jpg';
import './AboutMe.css'; // Import your CSS file

function About() {
    return (
      <div id="about">
        {/* Use the imported image with your chosen variable name */}
        <h3>Welcome to my portfolio!</h3>
        <img src={lokirsImage} alt="Lois Obrero" className="image-style" width="350" />
        {/* Include the introduction and goals here */}
        <p className="intro">Hi, I'm Lois Obrero!</p>
        <p>I'm a dynamic full-stack software engineer with a strong command of diverse technologies. I have experience in utilizing JavaScript for front-end and back-end programming, React, HTML, CSS, API implementation, Node.js, Express, and PostgreSQL. I am also skilled in Python, TensorFlow, Keras, NumPy, and Matplotlib for advanced data analysis and machine learning tasks. With a background in computer sales at Best Buy, I stay up-to-date with the latest technological developments.</p>
      </div>
    );
  }


export default About;