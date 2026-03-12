import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import styles from './LocationsSection.module.css';

const LOCATIONS = [
  {
    name: 'Dubai Marina',
    slug: 'dubai-marina',
    tagline: 'Waterfront Living',
    count: 24,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    size: 'large',
  },
  {
    name: 'Palm Jumeirah',
    slug: 'palm-jumeirah',
    tagline: 'Island Extravagance',
    count: 18,
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=800&auto=format&fit=crop',
    size: 'small',
  },
  {
    name: 'Downtown Dubai',
    slug: 'downtown',
    tagline: 'Burj Khalifa Views',
    count: 31,
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop',
    size: 'small',
  },
  {
    name: 'JBR',
    slug: 'jbr',
    tagline: 'Beachfront Bliss',
    count: 16,
    image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=800&auto=format&fit=crop',
    size: 'small',
  },
  {
    name: 'Bluewaters Island',
    slug: 'bluewaters-island',
    tagline: 'Ain Dubai Views',
    count: 9,
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop',
    size: 'small',
  },
];

export default function LocationsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Explore by Location</span>
          <h2>Dubai's Finest Addresses</h2>
          <p>Each neighbourhood has its own unique character. Find the perfect base for your stay.</p>
        </div>

        <div className={styles.grid}>
          {LOCATIONS.map((loc) => (
            <Link key={loc.slug} href={`/locations/${loc.slug}`} className={`${styles.card} ${loc.size === 'large' ? styles.large : ''}`}>
              <img src={loc.image} alt={loc.name} className={styles.image} />
              <div className={styles.overlay}>
                <p className={styles.tagline}>{loc.tagline}</p>
                <h3 className={styles.name}>{loc.name}</h3>
                <span className={styles.count}>{loc.count} Properties</span>
                <div className={styles.arrow}>
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
