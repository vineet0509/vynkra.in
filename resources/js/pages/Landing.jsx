import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParallaxOrbs from '../components/ParallaxOrbs';
import { BarChart3, Activity, Check, Settings, Zap, Lock, Mail, MapPin } from 'lucide-react';

export default function Landing() {
  // Toast notification state
  const [toast, setToast] = useState({ active: false, title: '', desc: '' });

  // Form loading states
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);

  // Form input states
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  // Auto-scroll to hash location if available on mount
  useEffect(() => {
    document.title = "Vynkra Technologies | Architecting Tomorrow's Solutions";
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  const triggerToast = (title, desc) => {
    setToast({ active: true, title, desc });
    setTimeout(() => {
      setToast(prev => ({ ...prev, active: false }));
    }, 5000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;

    setIsContactSubmitting(true);
    setTimeout(() => {
      setIsContactSubmitting(false);
      triggerToast(
        'Message Sent Successfully!',
        `Thank you, ${contactName}. Vynkra Support will reach out within 24 hours.`
      );
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 1200);
  };

  return (
    <>
      <ParallaxOrbs />
      <Header />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                Engineering Custom Enterprise Systems
              </div>
              <h1 className="hero-title">We Architect the <span className="gradient-text">Future of Digital</span> Solutions</h1>
              <p className="hero-description">Vynkra Technologies crafts responsive, secure, and multi-tenant applications to scale your operations. From automated inventory systems to real-time reservation platforms, we build code that scales.</p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}>Our Projects</a>
                <a href="#sandbox" className="btn btn-secondary" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#sandbox')?.scrollIntoView({ behavior: 'smooth' });
                }}>Launch Sandbox Portal</a>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="hero-graphic-container">
                <div className="graphic-bg-glow"></div>
                {/* Glassmorphic Mockup Sandbox Dashboard */}
                <div className="glass-dashboard-card">
                  <div className="dashboard-header">
                    <div className="dots-wrapper">
                      <span className="window-dot dot-red"></span>
                      <span className="window-dot dot-yellow"></span>
                      <span className="window-dot dot-green"></span>
                    </div>
                    <div className="dashboard-brand">vynkra console v1.2</div>
                  </div>
                  <div className="dashboard-body">
                    <div className="db-row">
                      <div className="db-title">
                        <div className="db-icon"><BarChart3 size={14} /></div>
                        <span>Hardware Manager</span>
                      </div>
                      <span className="db-status status-active">Active</span>
                    </div>
                    <div className="db-row">
                      <div className="db-title">
                        <div className="db-icon"><Activity size={14} /></div>
                        <span>TurfBook Scheduler</span>
                      </div>
                      <span className="db-status status-active">Active</span>
                    </div>
                    <div className="chart-mock">
                      <span className="chart-bar"></span>
                      <span className="chart-bar"></span>
                      <span className="chart-bar"></span>
                      <span className="chart-bar"></span>
                      <span className="chart-bar"></span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Mini Accents */}
                <div className="float-card-1">
                  <div className="float-icon">R</div>
                  <div>
                    <h5 style={{ fontSize: '0.85rem', fontWeight: 700 }}>React Core</h5>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>SPA Architecture</p>
                  </div>
                </div>
                <div className="float-card-2">
                  <div className="float-icon" style={{ background: '#ff2d20' }}>L</div>
                  <div>
                    <h5 style={{ fontSize: '0.85rem', fontWeight: 700 }}>Laravel API</h5>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Robust Backend</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Impact Metrics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="glass-panel stats-grid">
            <div className="stat-card">
              <div className="stat-number gradient-text">24/7</div>
              <div className="stat-label">System Monitoring</div>
            </div>
            <div className="stat-card" style={{ borderLeft: '1px solid var(--glass-border)', borderRight: '1px solid var(--glass-border)' }}>
              <div className="stat-number gradient-text">100%</div>
              <div className="stat-label">Responsive Layouts</div>
            </div>
            <div className="stat-card" style={{ borderRight: '1px solid var(--glass-border)' }}>
              <div className="stat-number gradient-text">MySQL</div>
              <div className="stat-label">Secure Databases</div>
            </div>
            <div className="stat-card">
              <div className="stat-number gradient-text">Multi-Tenant</div>
              <div className="stat-label">SaaS Frameworks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="projects" class="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Flagship <span className="gradient-text">Platforms</span></h2>
            <p>Explore our core technological developments designed to address real-world administration challenges.</p>
          </div>
          
          <div className="projects-grid">
            {/* Project 1: Hardware Shop Manager */}
            <div className="glass-panel project-card">
              <div>
                <span className="project-tag tag-active">Active Environment</span>
                <h3 className="project-title">Hardware Management System</h3>
                <p className="project-description">A fully integrated enterprise billing and stock utility designed for hardware vendors. Seamlessly handle large inventories, customer invoicing, transaction history, and custom revenue tracking in real time.</p>
                
                <div className="project-features">
                  <div className="feature-item">
                    <span className="feature-check"><Check size={12} strokeWidth={3} /></span>
                    <span>Complete inventory checkouts & batch barcode listings</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-check"><Check size={12} strokeWidth={3} /></span>
                    <span>Dynamic automated invoice and bill generator</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-check"><Check size={12} strokeWidth={3} /></span>
                    <span>Interactive sales analysis with custom data displays</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-check"><Check size={12} strokeWidth={3} /></span>
                    <span>Multi-user credentials with admin-level configuration controls</span>
                  </div>
                </div>
              </div>
              
              <div className="project-actions">
                <a href="#sandbox" className="btn btn-cyan btn-sm" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#sandbox')?.scrollIntoView({ behavior: 'smooth' });
                }}>Test Local Build</a>
                <a href="https://hardwarepro.vynkra.in" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Direct Launch</a>
              </div>
            </div>
            
            {/* Project 2: TurfBook */}
            <div className="glass-panel project-card">
              <div>
                <span className="project-tag tag-active">Active Environment</span>
                <h3 className="project-title">TurfBook Reservation Platform</h3>
                <p className="project-description">A modern, multi-tenant stadium and sports turf booking engine. Simplify scheduling, match slot allocations, digital wallet settlements, and arena vendor dashboards in one central ecosystem.</p>
                
                <div className="project-features">
                  <div className="feature-item">
                    <span className="feature-check"><Check size={12} strokeWidth={3} /></span>
                    <span>Interactive stadium visualization & active slot selection</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-check"><Check size={12} strokeWidth={3} /></span>
                    <span>Multi-tenant vendor accounts with custom payout systems</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-check"><Check size={12} strokeWidth={3} /></span>
                    <span>Dynamic calendar schedule generator & reservation triggers</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-check"><Check size={12} strokeWidth={3} /></span>
                    <span>Custom high-contrast compact theme dashboard design</span>
                  </div>
                </div>
              </div>
              
              <div className="project-actions">
                <a href="#sandbox" className="btn btn-cyan btn-sm" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#sandbox')?.scrollIntoView({ behavior: 'smooth' });
                }}>Test Local Build</a>
                <a href="https://turfbook.vynkra.in" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Direct Launch</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Sandbox & Launchpad Section */}
      <section id="sandbox" className="section-padding" style={{ background: 'rgba(5, 7, 12, 0.4)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="glass-panel portal-box">
            <div className="portal-grid">
              <div className="portal-text">
                <span className="hero-badge" style={{ marginBottom: '16px' }}>
                  <span className="hero-badge-dot" style={{ backgroundColor: 'var(--secondary)' }}></span>
                  Developer Testing Suite
                </span>
                <h3>Test Our <span className="gradient-text">Laravel React</span> Applications</h3>
                <p>Vynkra applications are running live on our cloud production systems and local developer servers. Use the links below to test both systems in real time.</p>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', padding: '4px 10px', borderRadius: '5px', background: 'rgba(99,102,241,0.1)', color: 'var(--primary)', fontWeight: 700 }}>Environment</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Production Subdomains + Local Sandbox Portals</span>
                </div>
              </div>
              
              <div className="test-grid">
                {/* Card 1: Hardware Management */}
                <div className="test-card">
                  <div className="test-info">
                    <div className="test-avatar"><Settings size={20} /></div>
                    <div className="test-meta">
                      <h4>Hardware Shop Manager</h4>
                      <p>React Frontend + Sales Suite</p>
                    </div>
                  </div>
                  <div className="test-options">
                    <a href="https://hardwarepro.vynkra.in" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm test-btn">Launch Live App</a>
                    <a href="/hardware-shop-manager/public" target="_blank" style={{ fontSize: '0.75rem', textDecoration: 'underline', textAlign: 'center', color: 'var(--text-secondary)' }}>Launch Local Build</a>
                  </div>
                </div>
                
                {/* Card 2: TurfBook Sandbox */}
                <div className="test-card">
                  <div className="test-info">
                    <div className="test-avatar test-avatar-purple"><Activity size={20} /></div>
                    <div className="test-meta">
                      <h4>TurfBook Reservation</h4>
                      <p>Arena Management & Booking</p>
                    </div>
                  </div>
                  <div className="test-options">
                    <a href="https://turfbook.vynkra.in" target="_blank" rel="noopener noreferrer" className="btn btn-cyan btn-sm test-btn" style={{ marginBottom: '4px' }}>Launch Live App</a>
                    <a href="/turfbook/public" target="_blank" style={{ fontSize: '0.75rem', textDecoration: 'underline', textAlign: 'center', color: 'var(--text-secondary)' }}>Launch Local Build</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="hero-badge">The Vynkra Philosophy</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: 1.2 }}>Architecting Software That <span className="gradient-text">Empowers Business</span></h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.05rem' }}>At Vynkra Technologies, we are passionate about building intuitive tools for business administrative workflows. We blend state-of-the-art backend systems with hyper-responsive modern user interfaces to create platforms that reduce stress, save time, and maximize performance.</p>
              <a href="#contact" className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>Partner With Us</a>
            </div>
            
            <div className="about-features">
              <div className="glass-panel about-card">
                <div className="about-icon"><Zap size={20} /></div>
                <div className="about-info">
                  <h4>Hyper-Responsive Speeds</h4>
                  <p>We leverage React single page applications backed by Laravel controllers to guarantee minimal loading delays and instant updates.</p>
                </div>
              </div>
              
              <div className="glass-panel about-card">
                <div className="about-icon"><Lock size={20} /></div>
                <div className="about-info">
                  <h4>Secure By Design</h4>
                  <p>Utilizing clean migration tables, CSRF web tokens, and sanitized MySQL database schemas to ensure absolute security for customer accounts.</p>
                </div>
              </div>
              
              <div className="glass-panel about-card">
                <div className="about-icon"><BarChart3 size={20} /></div>
                <div className="about-info">
                  <h4>Data-Driven Dashboards</h4>
                  <p>Our solutions embed clean data analytics with graphs, charts, and metrics to give business operators an edge.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="section-padding" style={{ background: 'rgba(5, 7, 12, 0.2)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Developer <span class="gradient-text">Perspectives</span></h2>
            <p>Read technical updates, design philosophies, and architectural guides published directly by our engineering crew.</p>
          </div>
          
          <div className="blogs-grid">
            {/* Blog 1 */}
            <div className="glass-panel blog-card">
              <div className="blog-image">
                <div className="blog-image-overlay">LARAVEL + INERTIA</div>
              </div>
              <div className="blog-content">
                <div>
                  <div className="blog-meta">
                    <span>May 20, 2026</span>
                    <span>•</span>
                    <span>6 Min Read</span>
                  </div>
                  <h3 className="blog-title"><a href="#blogs">Developing Modern Multi-Tenant Architectures in Laravel</a></h3>
                  <p className="blog-text">How Vynkra builds secure database splits and tenant-level configurations inside advanced booking solutions like TurfBook.</p>
                </div>
                <a href="#blogs" className="blog-link">Read Blueprint →</a>
              </div>
            </div>
            
            {/* Blog 2 */}
            <div className="glass-panel blog-card">
              <div className="blog-image">
                <div className="blog-image-overlay">REACT PERFORMANCE</div>
              </div>
              <div className="blog-content">
                <div>
                  <div className="blog-meta">
                    <span>May 15, 2026</span>
                    <span>•</span>
                    <span>4 Min Read</span>
                  </div>
                  <h3 className="blog-title"><a href="#blogs">Optimizing High-Density React 18 States for Business Tools</a></h3>
                  <p className="blog-text">Practical ideas for keeping inventory management clean and lightning-quick during thousands of dynamic queries and stock changes.</p>
                </div>
                <a href="#blogs" className="blog-link">Read Blueprint →</a>
              </div>
            </div>
            
            {/* Blog 3 */}
            <div className="glass-panel blog-card">
              <div className="blog-image">
                <div className="blog-image-overlay">UI/UX PRINCIPLES</div>
              </div>
              <div className="blog-content">
                <div>
                  <div className="blog-meta">
                    <span>May 10, 2026</span>
                    <span>•</span>
                    <span>5 Min Read</span>
                  </div>
                  <h3 className="blog-title"><a href="#blogs">High-Contrast Compact Design Guidelines in Enterprise Portals</a></h3>
                  <p className="blog-text">An breakdown of colors, spacing rules, and visual layering that make admin boards both extremely functional and exceptionally elegant.</p>
                </div>
                <a href="#blogs" className="blog-link">Read Blueprint →</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Us Section */}
      <section id="contact" className="section-padding" style={{ background: 'rgba(5, 7, 12, 0.4)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div>
                <span className="hero-badge">Let's Connect</span>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', lineHeight: 1.2 }}>Get in Touch With <span className="gradient-text">Our Engineers</span></h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 0 }}>Have an operational challenge you need handled? Reach out directly to share details or request customized service contracts.</p>
              </div>
              
              <div className="glass-panel contact-card">
                <div className="contact-card-icon"><Mail size={20} /></div>
                <div className="contact-card-info">
                  <h4>Technical Inquiries</h4>
                  <p>support@vynkra.com</p>
                </div>
              </div>
              
              <div className="glass-panel contact-card">
                <div className="contact-card-icon"><MapPin size={20} /></div>
                <div className="contact-card-info">
                  <h4>Innovation Lab Address</h4>
                  <p>Vynkra Tech Hub, Cyber City, Bangalore, India</p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel contact-form">
              <h3>Submit Inquiry</h3>
              <p>Provide details and our team will get back to you with architectural ideas.</p>
              
              <form id="contactForm" onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    id="contactName" 
                    className="form-input" 
                    placeholder=" " 
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                  <label htmlFor="contactName" className="form-label">Full Name</label>
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    id="contactEmail" 
                    className="form-input" 
                    placeholder=" " 
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                  />
                  <label htmlFor="contactEmail" className="form-label">Email Address</label>
                </div>
                
                <div className="form-group">
                  <textarea 
                    id="contactMessage" 
                    className="form-input" 
                    placeholder=" " 
                    required
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                  ></textarea>
                  <label htmlFor="contactMessage" className="form-label">Message Details</label>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                  disabled={isContactSubmitting}
                >
                  {isContactSubmitting ? 'Transmitting Message...' : 'Transmit Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />



      {/* Success Toast Notification */}
      <div className={`toast ${toast.active ? 'active' : ''}`} id="toastNotification">
        <div className="toast-icon"><Check size={16} strokeWidth={3} /></div>
        <div className="toast-info">
          <h5>{toast.title}</h5>
          <p>{toast.desc}</p>
        </div>
      </div>
    </>
  );
}
