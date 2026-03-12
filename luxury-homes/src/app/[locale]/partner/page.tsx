'use client';

import { useState } from 'react';
import { Globe, Shield, TrendingUp, Users } from 'lucide-react';
import styles from './Partner.module.css';

export default function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5s
  };

  return (
    <main className={styles.page}>
      
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Global Expansion & <br/><span className="text-gold">Franchises</span></h1>
          <p className={styles.heroSubtitle}>
            Join ZAH Luxury as an exclusive franchise partner in the GCC region. Tap into the fast-growing luxury short-term rental market.
          </p>
          <a href="#inquiry" className={`btn-primary ${styles.heroBtn}`}>Request Information</a>
        </div>
      </section>

      <section className={`container ${styles.statsSection}`}>
        <div className={styles.statCard}>
          <h3>$12B+</h3>
          <p>GCC Short-Term Rental Market</p>
        </div>
        <div className={styles.statCard}>
          <h3>20%+</h3>
          <p>Average Yield for Luxury Properties</p>
        </div>
        <div className={styles.statCard}>
          <h3>100%</h3>
          <p>Operational Support provided</p>
        </div>
      </section>

      <section className={`container ${styles.benefitsSection}`}>
        <div className={styles.sectionHeader}>
          <h2 className="font-heading">The ZAH Advantage</h2>
          <p>Everything you need to orchestrate a world-class hospitality operation.</p>
        </div>

        <div className={styles.benefitsGrid}>
          <div className={styles.benefitBox}>
            <Globe className={styles.icon} size={32} />
            <h4>Brand Prestige</h4>
            <p>Leverage our established equity to attract high-net-worth guests.</p>
          </div>
          <div className={styles.benefitBox}>
            <Shield className={styles.icon} size={32} />
            <h4>Proprietary Tech</h4>
            <p>Access our custom management systems and seamless booking infrastructure.</p>
          </div>
          <div className={styles.benefitBox}>
            <Users className={styles.icon} size={32} />
            <h4>Training & Support</h4>
            <p>Immersive training for your operations team to ensure white-glove standards.</p>
          </div>
          <div className={styles.benefitBox}>
            <TrendingUp className={styles.icon} size={32} />
            <h4>High-ROI Model</h4>
            <p>Benefit from multiple revenue streams including management, up-sells, and concierge.</p>
          </div>
        </div>
      </section>

      <section id="inquiry" className={styles.formSection}>
        <div className={`container ${styles.formContainer}`}>
          <div className={styles.formText}>
            <h2 className="font-heading text-gold">Start the Conversation</h2>
            <p>We're looking for ambitious partners across Saudi Arabia, Qatar, Oman, and Bahrain.</p>
          </div>

          <div className={styles.formCard}>
            {submitted ? (
              <div style={{ padding: '3rem 1rem', textAlign: 'center' }}>
                <h4 className="text-gold" style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Application Received</h4>
                <p style={{ color: 'var(--color-silver)', fontSize: '1rem', lineHeight: '1.6' }}>
                  Thank you for your interest in franchising with ZAH Luxury.<br/>Our development team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleApply}>
                <div className={styles.inputRow}>
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <input type="email" placeholder="Business Email" required />
                <input type="tel" placeholder="Phone Number" required />
                <select required className={styles.select}>
                  <option value="">Select Territory</option>
                  <option value="ksa">Saudi Arabia (KSA)</option>
                  <option value="qatar">Qatar</option>
                  <option value="oman">Oman</option>
                  <option value="bahrain">Bahrain</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Briefly describe your business background..." rows={4} required></textarea>
                <button type="submit" className="btn-primary">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
