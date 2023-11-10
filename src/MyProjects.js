import React from 'react';
import './MyProjects.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>Throughout my journey as a software engineer, I have developed and deployed mobile-first applications while continuously learning new languages and frameworks. Some of my notable projects include:</p>
      <ul>
        <li>
          <strong>CNN Image Classification Model</strong>
          <p>Developed a Convolutional Neural Network that trains the CIFAR-10 dataset.</p>
          <p>Built with: Python, TensorFlow, Keras, NumPy, Matplotlib, Git, GitHub</p>
          <a href="https://github.com/loisobrero/CNN-Image-Classification" target="_blank" rel="noreferrer">Project Link</a>
        </li>
        <li>
          <strong>Restaurant Reservation</strong>
          <p>A full-stack application that allows users of a mock restaurant to book, edit, cancel, and search for reservations.</p>
          <p>Built with: JavaScript, HTML, CSS, React, Bootstrap</p>
          <a href="https://github.com/loisobrero/starter-restaurant-reservation" target="_blank" rel="noreferrer">Project Link</a>
        </li>
        <li>
          <strong>Flashcard Deck</strong>
          <p>React app with 10+ components that display decks of flashcards and allow for insertion and editing.</p>
          <p>Extensive use of React router, state management, React hooks, API calls.</p>
          <p>Built with: JavaScript, React, HTML, CSS, Bootstrap</p>
          <a href="https://github.com/loisobrero/Flashcard-o-matic" target="_blank" rel="noreferrer">Project Link</a>
        </li>
        <li>
          <strong>Decoder Ring</strong>
          <p>An engaging webpage that incorporates encoding and decoding functionalities using various techniques, including the Caesar shift, Polybius square, and substitution cipher.</p>
          <p>Built with: JavaScript, Mocha, and Chai</p>
          <a href="https://github.com/loisobrero/Decoder-Ring-Capstone" target="_blank" rel="noreferrer">Project Link</a>
        </li>
        <li>
          <strong>To-Do List</strong>
          <p>A simple web application that allows users to create a todo list for the day and write notes to themselves. The application is built using HTML, CSS, and JavaScript, and it utilizes AWS S3 buckets for file storage.</p>
          <p>Built with: AWS, JavaScript, HTML, CSS, Bootstrap, Node.js, Express.js, MongoDB, Mongoose</p>
          <a href="https://github.com/loisobrero/AWS-ToDoList" target="_blank" rel="noreferrer">Project Link</a>
        </li>
      </ul>
    </section>
  );
}

export default Projects;