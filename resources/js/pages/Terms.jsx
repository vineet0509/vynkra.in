import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParallaxOrbs from '../components/ParallaxOrbs';

export default function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions | Vynkra Technologies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParallaxOrbs />
      <Header />
      
      <main className="doc-page">
        <div className="container">
          <article className="glass-panel doc-wrapper">
            <h1 className="doc-title gradient-text">Terms & Conditions</h1>
            <div className="doc-meta">Last Updated: May 22, 2026 • Version 1.1</div>
            
            <div className="doc-body">
              <p>Welcome to Vynkra Technologies ("Vynkra", "we", "us", or "our"). By browsing this corporate static website or utilizing the self-hosted developer sandboxes, you accept the following Terms & Conditions. Please read them completely.</p>
              
              <h3>1. Intellectual Property ownership</h3>
              <p>All styling configurations, script controllers, inline vector graphic layouts, text copy, and brand assets compiled on this website are the primary property of Vynkra Technologies. You may view and test the materials for informational and local analysis purposes, but reproducing the branding assets for commercial systems is strictly forbidden.</p>

              <h3>2. Sandbox Testing License</h3>
              <p>We provide localized testing hooks for both the <strong>Hardware Shop Manager</strong> and the <strong>TurfBook</strong> reservation portal. These code bases are configured to run in your local htdocs subdirectory:</p>
              <ul>
                <li><strong>Permitted Use:</strong> Testing, UI review, and layout diagnostic runs under local server setups (XAMPP).</li>
                <li><strong>Prohibitions:</strong> You may not modify our software's proprietary licensing parameters, deploy unauthorized copies to external networks for competitive resale, or exploit database security elements.</li>
              </ul>

              <h3>3. Disclaimer of Warranties</h3>
              <p>All corporate information, blog blueprints, job requirements, and sandbox application links are provided on an "as-is" and "as-available" basis without guarantees of any kind. Vynkra does not warrant that local database migrations, server configurations, or third-party web dependencies will operate without interruptions or glitches.</p>

              <h3>4. Candidate Application Clauses</h3>
              <p>Submitting an application through our Careers lab does not establish an employment contract or guarantee a follow-up interview. We reserve the right to archive candidate credentials or delete records in accordance with standard internal recruitment timetables.</p>

              <h3>5. Limitation of Liability</h3>
              <p>In no event shall Vynkra Technologies or its directors be held responsible for system downtimes, local MySQL database corruption, code script errors, or data anomalies arising out of your operation of local XAMPP sandbox ports.</p>

              <h3>6. Updates to Terms</h3>
              <p>We reserve the authority to amend these conditions at our convenience. Any revisions become active immediately upon being posted to this URL.</p>

              <h3>7. Governing Jurisdictions</h3>
              <p>These guidelines shall be defined and overseen in accordance with the cyber and corporate laws of India, without regard to conflict of law frameworks.</p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
