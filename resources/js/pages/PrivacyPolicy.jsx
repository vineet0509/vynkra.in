import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParallaxOrbs from '../components/ParallaxOrbs';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Vynkra Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParallaxOrbs />
      <Header />
      
      <main className="doc-page">
        <div className="container">
          <article className="glass-panel doc-wrapper">
            <h1 className="doc-title gradient-text">Privacy Policy</h1>
            <div className="doc-meta">Last Updated: May 22, 2026 • Version 1.1</div>
            
            <div className="doc-body">
              <p>At Vynkra Technologies ("Vynkra", "we", "us", or "our"), we appreciate your trust. This Privacy Policy details how we handle information across our static corporate site, as well as our testing sandbox platforms (specifically, the Hardware Shop Manager and the TurfBook reservation environment).</p>
              
              <h3>1. Information Collected and Audited</h3>
              <p>Since we compile and design highly functional, self-hosted systems, the vast majority of databases operate under your direct local environments (XAMPP). We only analyze data explicitly supplied during form communications:</p>
              <ul>
                <li><strong>Contact Inquiries:</strong> Your full name, active email coordinates, and whatever message details you submit to our engineers.</li>
                <li><strong>Careers Applications:</strong> Contact coordinates, LinkedIn/GitHub links, and resume/pitch introductions.</li>
                <li><strong>Cookies and Web Diagnostics:</strong> Custom session cookies used to track navigational preference and smooth page transitions. We do not use third-party behavioral track-cookies.</li>
              </ul>

              <h3>2. Self-Hosted Sandbox Applications</h3>
              <p>Please note that the developer environments for <strong>Hardware Shop Manager</strong> and <strong>TurfBook</strong> are run locally on your system using MySQL database schemas and Laravel APIs. Vynkra does not harvest, cache, or look into any inventory tables, slot reservations, pricing files, or administrative user profiles compiled inside these self-hosted developer instances.</p>

              <h3>3. How Data is Utilized</h3>
              <p>We process standard info strictly for the following services:</p>
              <ul>
                <li>Replying to technical requests and design queries.</li>
                <li>Evaluating potential candidates for recruitment.</li>
                <li>Enhancing the stability and responsive layout performance of our portals.</li>
              </ul>

              <h3>4. Information Sharing Limitations</h3>
              <p>Vynkra Technologies will never lease, sell, or monetize candidate applications or customer emails. We only disclose information if legally mandated to satisfy national security, fraud detection, or active litigation.</p>

              <h3>5. Security Safeguards</h3>
              <p>We utilize standard industry practices (SSL headers, CSRF form protection keys, password sanitizations) to keep direct submissions secure. We recommend that local testing environments avoid carrying real business credit cards or production client logs.</p>

              <h3>6. Contact and Inquiries</h3>
              <p>Should you require further data clearance or wish to modify candidate information, please email us directly at <a href="mailto:support@vynkra.com" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>support@vynkra.com</a>.</p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
