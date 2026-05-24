import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Add "scrolled" style automatically if not on the home/landing root page
    const handleScroll = () => {
      if (location.pathname !== '/' || window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call immediately to set initial state based on route
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const handleLinkClick = (selector) => {
    setIsMobileOpen(false);
    if (location.pathname === '/') {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={() => handleLinkClick('#home')}>
          <div className="logo-icon">
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#a5b4fc" />
                </linearGradient>
              </defs>
              <path d="M25,25 L45,75 H55 L75,25 L63,25 L50,60 L37,25 Z" fill="url(#logoGrad)" />
              <circle cx="50" cy="60" r="4" fill="#06b6d4" />
              <line x1="20" y1="25" x2="80" y2="25" stroke="white" strokeWidth="3" opacity="0.3" />
            </svg>
          </div>
          <span>VYNKRA</span>
        </Link>
        
        <nav className={`nav-menu ${isMobileOpen ? 'active' : ''}`}>
          {location.pathname === '/' ? (
            <>
              <a href="#home" className="nav-link active" onClick={() => handleLinkClick('#home')}>Home</a>
              <a href="#projects" className="nav-link" onClick={() => handleLinkClick('#projects')}>Projects</a>
              <a href="#sandbox" className="nav-link" onClick={() => handleLinkClick('#sandbox')}>Sandbox</a>
              <a href="#about" className="nav-link" onClick={() => handleLinkClick('#about')}>About Us</a>
              <a href="#blogs" className="nav-link" onClick={() => handleLinkClick('#blogs')}>Blogs</a>
              <a href="#careers" className="nav-link" onClick={() => handleLinkClick('#careers')}>Careers</a>
              <a href="#contact" className="nav-link" onClick={() => handleLinkClick('#contact')}>Contact</a>
            </>
          ) : (
            <>
              <Link to="/#home" className="nav-link">Home</Link>
              <Link to="/#projects" className="nav-link">Projects</Link>
              <Link to="/#sandbox" className="nav-link">Sandbox</Link>
              <Link to="/#about" className="nav-link">About Us</Link>
              <Link to="/#blogs" className="nav-link">Blogs</Link>
              <Link to="/#careers" className="nav-link">Careers</Link>
              <Link to="/#contact" className="nav-link">Contact</Link>
            </>
          )}
        </nav>

        <div className="nav-buttons">
          {location.pathname === '/' ? (
            <a href="#sandbox" className="btn btn-primary btn-sm" onClick={() => handleLinkClick('#sandbox')}>Test Local Apps</a>
          ) : (
            <Link to="/#sandbox" className="btn btn-primary btn-sm">Test Local Apps</Link>
          )}
        </div>

        <button 
          className={`hamburger ${isMobileOpen ? 'active' : ''}`} 
          aria-label="Toggle Navigation"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
