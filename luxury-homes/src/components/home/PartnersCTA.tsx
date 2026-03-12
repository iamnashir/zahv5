import { ArrowRight, Globe, Building, TrendingUp } from 'lucide-react';
import { Link } from '@/i18n/routing';
import styles from './PartnersCTA.module.css';

export default function PartnersCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <img 
          src="https://images.unsplash.com/photo-1577908331566-ff609ce9de82?q=80&w=2560&auto=format&fit=crop" 
          alt="Dubai Architecture" 
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <span className={styles.label}>Global Expansion</span>
          <h2 className={styles.title}>Partner With ZAH Luxury</h2>
          <p className={styles.description}>
            Join our exclusive network of property owners, investors, and franchisees across the GCC. We provide comprehensive property management and elite global marketing.
          </p>
          
          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <div className={styles.iconWrapper}><TrendingUp size={24} /></div>
              <div>
                <h4>Maximize Yields</h4>
                <p>Industry-leading returns on your luxury assets.</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.iconWrapper}><Building size={24} /></div>
              <div>
                <h4>Full Management</h4>
                <p>End-to-end service from guest vetting to maintenance.</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.iconWrapper}><Globe size={24} /></div>
              <div>
                <h4>GCC Franchise</h4>
                <p>Opportunities in Saudi Arabia, Qatar, and Oman.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.actions}>
            <Link href="/partner" className="btn-primary">
              Explore Franchise Options
            </Link>
            <Link href="/owners" className={styles.secondaryBtn}>
              Property Owners <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
