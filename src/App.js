import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import './App.css';

import AboutMe from './AboutMe'; 
import MyProjects from './MyProjects';
import Contact from './Contact';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="custom-header">
          <h1>LOIS KIRSTIEN OBRERO</h1>
          <Navigation /> {/* Use the separate Navigation component */}
        </header>
        <main>
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<AboutMe />} /> {/* Default route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;