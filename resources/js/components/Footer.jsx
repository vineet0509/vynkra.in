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
              <div className="logo-icon" style={{ width: '32px', height: '32px' }}>
                <svg viewBox="0 0 100 100">
                  <path d="M25,25 L45,75 H55 L75,25 L63,25 L50,60 L37,25 Z" fill="white" />
                </svg>
              </div>
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
                  <a href="#careers" onClick={() => handleLinkClick('#careers')}>Careers Lab</a>
                  <a href="#contact" onClick={() => handleLinkClick('#contact')}>Contact Hub</a>
                  <a href="#sandbox" onClick={() => handleLinkClick('#sandbox')}>Developer Sandboxes</a>
                </>
              ) : (
                <>
                  <Link to="/#blogs">Tech Blogs</Link>
                  <Link to="/#careers">Careers Lab</Link>
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
