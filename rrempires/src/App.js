import React, { useState } from 'react';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import Pricing from './screens/Pricing/Pricing';
import Contact from './screens/Contact/Contact';
import logo from './assets/logo.jpeg';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMenuOpen(false); // close menu on nav
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'pricing': return <Pricing navigate={navigateTo} />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img className="logo" src={logo} alt="Logo" />
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
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

      {renderPage()}
    </div>
  );
};

export default App;
