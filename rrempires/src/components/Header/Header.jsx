// src/components/Header.jsx
import logo from "../../assets/logo.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="RREmpire Logo" className="logo" />
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="about">About Us</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
