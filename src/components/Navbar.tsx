import React, { useState } from 'react';
import logo from '../assets/assetss/manam bakes logo 1.png';
import { FiSearch, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.scss';

interface NavbarProps {
  onLinkClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    if (onLinkClick) onLinkClick();
  };

  return (
    <nav className="navbar container">
      <div className="navbar__logo">
        <img src={logo} alt="Manam Bakes Logo" />
        <span className="navbar__brand-name">Manam Bakes</span>
      </div>

      <button className="navbar__toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      <div className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar__links">
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#our-cake" onClick={handleLinkClick}>Our Cake</a></li>
          <li><a href="#gallery" onClick={handleLinkClick}>Gallery</a></li>
          <li><a href="#our-story" onClick={handleLinkClick}>Our Story</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>

        <div className="navbar__actions">
          <button className="icon-btn"><FiSearch /></button>
          <button className="icon-btn"><FiHeart /></button>
          <button className="btn-primary">Order Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
