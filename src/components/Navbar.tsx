import React, { useState, type ReactNode } from 'react';
import logo from '../assets/assetss/manam bakes logo 1.png';
import { FiSearch, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import SearchModal from './SearchModal';
import { WHATSAPP_LINK } from '../constants/links';
import './Navbar.scss';

export interface NavbarLink {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

interface NavbarProps {
  brandName?: string;
  brandLogo?: string | ReactNode;
  links?: NavbarLink[];
  onLinkClick?: () => void;
  onBrandClick?: () => void;
  className?: string;
  theme?: 'dark' | 'light'; // dark text (default) or light text
}

const Navbar: React.FC<NavbarProps> = ({
  brandName = "Manam Bakes",
  brandLogo = logo,
  links,
  onLinkClick,
  onBrandClick,
  className = '',
  theme = 'dark'
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (linkOnClick?: () => void) => {
    setIsMenuOpen(false);
    if (onLinkClick) onLinkClick();
    if (linkOnClick) linkOnClick();
  };

  const handleOrderClick = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  const defaultLinks: NavbarLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'Our Cake', href: '#our-cake' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Our Story', href: '#our-story' },
    { label: 'Contact', href: '#contact' },
  ];

  const navLinks = links || defaultLinks;

  return (
    <>
      <div className={`navbar-wrapper ${className}`}>
        <nav className={`navbar container ${theme === 'light' ? 'navbar--light' : ''}`}>
          <div
            className="navbar__logo"
            onClick={onBrandClick}
            style={{ cursor: onBrandClick ? 'pointer' : 'default' }}
          >
            {typeof brandLogo === 'string' ? (
              <img src={brandLogo} alt={`${brandName} Logo`} />
            ) : (
              brandLogo
            )}
            <span className="navbar__brand-name">{brandName}</span>
          </div>

          <button className="navbar__search-mobile icon-btn" onClick={() => setIsSearchOpen(true)}>
            <FiSearch />
          </button>

          <button className="navbar__cta-mobile btn-primary" onClick={handleOrderClick}>Order Now</button>

          <button className="navbar__toggle" onClick={toggleMenu} aria-label="Toggle navigation">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <div className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="navbar__links">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={link.active ? 'active' : ''}
                    onClick={(e) => {
                      if (link.onClick) {
                        e.preventDefault();
                        handleLinkClick(link.onClick);
                      } else {
                        handleLinkClick();
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="navbar__actions">
              <button className="icon-btn" onClick={() => setIsSearchOpen(true)}><FiSearch /></button>
              <button className="icon-btn"><FiHeart /></button>
              <button className="btn-primary" onClick={handleOrderClick}>Order Now</button>
            </div>
          </div>
        </nav>
      </div>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
