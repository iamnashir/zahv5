'use client';

import { useState } from 'react';
import { Calculator, ShieldCheck, TrendingUp, Key } from 'lucide-react';
import styles from './Owners.module.css';

export default function OwnersPage() {
  const [propertyType, setPropertyType] = useState('apartment');
  const [bedrooms, setBedrooms] = useState('1');
  const [location, setLocation] = useState('downtown');
  
  const [submitted, setSubmitted] = useState(false);

  const calculateIncome = () => {
    let base = 50000;
    if (propertyType === 'villa') base *= 2.5;
    if (propertyType === 'penthouse') base *= 3;
    base *= parseInt(bedrooms);
    if (location === 'palm') base *= 1.5;
    if (location === 'downtown') base *= 1.2;
    return base.toLocaleString() + ' AED';
  };

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5s
  };

  return (
    <main className={styles.page}>
      
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Unlock Your <span className="text-gold">Property's Potential</span></h1>
          <p className={styles.heroSubtitle}>
            Partner with Dubai's premier management. Maximize yields. Zero hassle.
          </p>
        </div>
      </section>

      <section className={`container ${styles.contentGrid}`}>
        
        <div className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Why ZAH Luxury?</h2>
          
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <div className={styles.iconWrapper}><TrendingUp size={24} /></div>
              <div>
                <h3>Maximized Returns</h3>
                <p>Dynamic pricing ensures minimum 20% higher yields than traditional renting.</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.iconWrapper}><ShieldCheck size={24} /></div>
              <div>
                <h3>Vetted Clientele</h3>
                <p>Strict guest screening guarantees your asset is respected and impeccably maintained.</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.iconWrapper}><Key size={24} /></div>
              <div>
                <h3>End-to-End Management</h3>
                <p>From styling to concierge—we handle everything while you relax.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.actionColumn}>
          
          <div className={styles.calculatorCard}>
            <div className={styles.cardHeader}>
              <Calculator size={20} className="text-gold" />
              <h3>Income Calculator</h3>
            </div>
            <p className={styles.cardDesc}>Estimate your annual revenue.</p>
            
            <div className={styles.calcForm}>
              <div className={styles.inputGroup}>
                <label>Property</label>
                <select value={propertyType} onChange={e => setPropertyType(e.target.value)}>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="penthouse">Penthouse</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Beds</label>
                <select value={bedrooms} onChange={e => setBedrooms(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label>Location</label>
                <select value={location} onChange={e => setLocation(e.target.value)}>
                  <option value="downtown">Downtown</option>
                  <option value="marina">Marina</option>
                  <option value="palm">Palm Jumeirah</option>
                  <option value="jbr">JBR</option>
                </select>
              </div>
            </div>
            
            <div className={styles.resultBox}>
              <span>Est. Annual Income</span>
              <strong>{calculateIncome()}</strong>
            </div>
          </div>

          <div className={styles.contactFormCard}>
            <h3>Request Proposal</h3>
            {submitted ? (
              <div style={{ padding: '2rem 1rem', textAlign: 'center', backgroundColor: 'rgba(212,175,55,0.1)', border: '1px solid var(--color-rich-gold)', borderRadius: '4px' }}>
                <h4 className="text-gold" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Request Received</h4>
                <p style={{ color: 'var(--color-silver)', fontSize: '0.9rem' }}>Our management team will contact you shortly.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleInquiry}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
                <button type="submit" className="btn-primary">Submit Inquiry</button>
              </form>
            )}
          </div>
          
        </div>
      </section>
    </main>
  );
}
