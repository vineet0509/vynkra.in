import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const handleLinkClick = (selector) => {
    if (location.pathname === '/') {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo" onClick={() => handleLinkClick('#home')}>
              <img src="/logo.png" alt="Vynkra Technologies" style={{ height: '36px', width: '36px', borderRadius: '8px', objectFit: 'cover' }} />
              <span style={{ fontSize: '1.25rem' }}>VYNKRA</span>
            </Link>
            <p>Designing modern enterprise tools and multi-tenant operational applications that simplify work.</p>
          </div>
          
          <div className="footer-column">
            <h4>Navigation</h4>
            <div className="footer-links">
              {location.pathname === '/' ? (
                <>
                  <a href="#home" onClick={() => handleLinkClick('#home')}>Home Base</a>
                  <a href="#projects" onClick={() => handleLinkClick('#projects')}>Flagship Projects</a>
                  <a href="#sandbox" onClick={() => handleLinkClick('#sandbox')}>Sandbox Suite</a>
                  <a href="#about" onClick={() => handleLinkClick('#about')}>About Our Mission</a>
                </>
              ) : (
                <>
                  <Link to="/#home">Home Base</Link>
                  <Link to="/#projects">Flagship Projects</Link>
                  <Link to="/#sandbox">Sandbox Suite</Link>
                  <Link to="/#about">About Our Mission</Link>
                </>
              )}
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Resource Links</h4>
            <div className="footer-links">
              {location.pathname === '/' ? (
                <>
                  <a href="#blogs" onClick={() => handleLinkClick('#blogs')}>Tech Blogs</a>
                  <a href="#contact" onClick={() => handleLinkClick('#contact')}>Contact Hub</a>
                  <a href="#sandbox" onClick={() => handleLinkClick('#sandbox')}>Developer Sandboxes</a>
                </>
              ) : (
                <>
                  <Link to="/#blogs">Tech Blogs</Link>
                  <Link to="/#contact">Contact Hub</Link>
                  <Link to="/#sandbox">Developer Sandboxes</Link>
                </>
              )}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Vynkra Technologies Private Limited. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Regulations</Link>
            <Link to="/terms">Usage Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
