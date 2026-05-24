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
          <img src="/logo.png" alt="Vynkra Technologies" style={{ height: '42px', width: '42px', borderRadius: '10px', objectFit: 'cover' }} />
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
              <a href="#contact" className="nav-link" onClick={() => handleLinkClick('#contact')}>Contact</a>
            </>
          ) : (
            <>
              <Link to="/#home" className="nav-link">Home</Link>
              <Link to="/#projects" className="nav-link">Projects</Link>
              <Link to="/#sandbox" className="nav-link">Sandbox</Link>
              <Link to="/#about" className="nav-link">About Us</Link>
              <Link to="/#blogs" className="nav-link">Blogs</Link>
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
