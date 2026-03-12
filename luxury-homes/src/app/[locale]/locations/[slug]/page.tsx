import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { ArrowRight, MapPin } from 'lucide-react';
import styles from './Location.module.css';

// Simple mock DB for locations
const LOCATIONS: Record<string, any> = {
  'dubai-marina': {
    name: 'Dubai Marina',
    title: 'Luxury Apartments & Villas in Dubai Marina',
    description: 'Experience waterfront living at its finest. Dubai Marina offers a vibrant lifestyle, world-class dining, and exclusive luxury yachts right at your doorstep.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',
    properties: 24,
    highlights: ['Marina Walk', 'JBR Beach Access', 'Dubai Marina Mall']
  },
  'downtown': {
    name: 'Downtown Dubai',
    title: 'Exclusive Penthouses in Downtown Dubai',
    description: 'The center of now. Stay in the shadow of the Burj Khalifa and enjoy direct access to the Dubai Fountains and the world-renowned Dubai Mall.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
    properties: 31,
    highlights: ['Burj Khalifa Views', 'Dubai Mall', 'Dubai Fountains']
  },
  'jbr': {
    name: 'Jumeirah Beach Residence (JBR)',
    title: 'Beachfront Holiday Homes in JBR',
    description: 'Wake up to the sound of the waves. JBR offers the ultimate beach lifestyle combined with vibrant retail and dining promenades.',
    image: 'https://images.unsplash.com/photo-1622396090075-ab1bf45bc383?q=80&w=2000&auto=format&fit=crop',
    properties: 18,
    highlights: ['The Beach Promenade', 'Bluewaters Access', 'Sea Views']
  }
};

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const location = LOCATIONS[slug];
  
  if (!location) {
    notFound();
  }

  return (
    <main className={styles.page}>
      
      {/* Dynamic SEO Hero */}
      <section className={styles.heroSection} style={{ backgroundImage: `linear-gradient(to right, rgba(10,10,10,0.9), rgba(10,10,10,0.4)), url(${location.image})` }}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.badge}><MapPin size={16} /> Location Guide</div>
          <h1 className={styles.heroTitle}>{location.title}</h1>
          <p className={styles.heroSubtitle}>{location.description}</p>
        </div>
      </section>

      {/* Overview & Quick Links */}
      <section className={`container ${styles.overviewSection}`}>
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <h2>About {location.name}</h2>
            <p className={styles.descText}>
              ZAH Luxury offers an exclusive portfolio of {location.properties} premium properties in {location.name}. 
              Whether you are looking for a short-term holiday rental or an extended stay, our curated selection guarantees the highest standards of luxury and comfort.
            </p>
            
            <h3 className={styles.highlightsTitle}>Key Highlights</h3>
            <ul className={styles.highlightsList}>
              {location.highlights.map((highlight: string, idx: number) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.actionCol}>
            <div className={styles.actionCard}>
              <h3>Explore {location.name}</h3>
              <p>Ready to book your stay? View our full collection of {location.properties} properties available in this location.</p>
              <Link href={`/properties?location=${slug}`} className={styles.viewBtn}>
                View Available Properties <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
