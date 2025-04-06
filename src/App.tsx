import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DroneAnimation from './components/DroneAnimation';
import './App.css';

const Home = () => (
  <div className="home-container">
    <DroneAnimation />
  </div>
);

const About = () => (
  <div className="page-container">
    <h1 className="rainbow-text">The Legend of Bob McGee</h1>
    <div className="story-section">
      <h2>Early Years: The Struggle</h2>
      <p>Born in a small town where dreams were as scarce as unicorns, Bob McGee faced adversity from day one. His family's farm was the only one in the county that specialized in raising magical creatures, but when the Great Unicorn Drought of '98 hit, they lost everything.</p>
    </div>

    <div className="story-section">
      <h2>The Turning Point</h2>
      <p>At the age of 12, Bob discovered his unique ability to communicate with drones. While other kids were playing with toys, Bob was teaching his first drone to perform complex aerial maneuvers. This was the beginning of his journey into the world of technology and innovation.</p>
    </div>

    <div className="story-section">
      <h2>The Dark Times</h2>
      <p>After years of perfecting his craft, Bob faced his greatest challenge when a rival drone company tried to steal his technology. For months, he lived in his workshop, surviving on nothing but instant noodles and determination. But through sheer willpower and countless hours of coding, he emerged victorious.</p>
    </div>

    <div className="story-section">
      <h2>Rise to Success</h2>
      <p>Today, Bob McGee is a pioneer in the field of autonomous drone technology. His work has revolutionized the industry, and his patented "Unicorn Navigation System" has made him a household name in tech circles worldwide.</p>
    </div>

    <div className="story-section">
      <h2>Current Endeavors</h2>
      <p>When he's not developing groundbreaking drone technology, Bob spends his time mentoring young innovators and advocating for the ethical use of autonomous systems. His latest project involves training drones to deliver emergency medical supplies to remote areas.</p>
    </div>
  </div>
);

const Projects = () => (
  <div className="page-container">
    <h1 className="rainbow-text">My Projects</h1>
    <div className="projects-grid">
      <div className="project-card">
        <h3>Unicorn Navigation System</h3>
        <p>A revolutionary AI system that allows drones to navigate complex environments with the grace of a unicorn.</p>
      </div>
      <div className="project-card">
        <h3>Drone Delivery Network</h3>
        <p>An extensive network of autonomous drones delivering essential supplies to remote communities.</p>
      </div>
      <div className="project-card">
        <h3>Magical Creature Tracking</h3>
        <p>Advanced drone technology for tracking and studying rare magical creatures in their natural habitats.</p>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="page-container">
    <h1 className="rainbow-text">Contact Me</h1>
    <div className="contact-grid">
      <div className="contact-card">
        <h3>Business Inquiries</h3>
        <p>Email: ceo@bobmcgee.tech</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
      <div className="contact-card">
        <h3>Press & Media</h3>
        <p>Email: press@bobmcgee.tech</p>
        <p>Phone: +1 (555) 987-6543</p>
      </div>
      <div className="contact-card">
        <h3>Speaking Engagements</h3>
        <p>Email: speaking@bobmcgee.tech</p>
        <p>Phone: +1 (555) 456-7890</p>
      </div>
    </div>
    <div className="social-links">
      <a href="#" className="social-link">LinkedIn</a>
      <a href="#" className="social-link">Twitter</a>
      <a href="#" className="social-link">GitHub</a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="unicorn-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
