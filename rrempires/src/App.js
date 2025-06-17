import Home from './screens/Home/Home';
import About from './screens/About/About';
import Pricing from './screens/Pricing/Pricing';
import Contact from './screens/Contact/Contact';
import React, { useState } from 'react';
import './App.css'; // Global App styles for navigation

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'pricing':
        return <Pricing navigate={navigateTo} />; // Pass navigate function to Pricing page
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      {/* Simple Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="logo-text-rr">RR</span><span className="logo-text-empire">Empire</span>
        </div>
        <ul className="nav-links">
          <li>
            <button className={`nav-button ${currentPage === 'home' ? 'active' : ''}`} onClick={() => navigateTo('home')}>Home</button>
          </li>
          <li>
            <button className={`nav-button ${currentPage === 'about' ? 'active' : ''}`} onClick={() => navigateTo('about')}>About Us</button>
          </li>
          <li>
            <button className={`nav-button ${currentPage === 'pricing' ? 'active' : ''}`} onClick={() => navigateTo('pricing')}>Pricing</button>
          </li>
          <li>
            <button className={`nav-button ${currentPage === 'contact' ? 'active' : ''}`} onClick={() => navigateTo('contact')}>Contact Us</button>
          </li>
        </ul>
      </nav>

      {/* Render the current page */}
      {renderPage()}
    </div>
  );
};

export default App;

