import { ArrowRight, Bed, Bath, Maximize } from 'lucide-react';
import { Link } from '@/i18n/routing';
import styles from './FeaturedProperties.module.css';

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: 'Paramount Views Penthouse',
    location: 'Downtown Dubai',
    price: '3,500 AED',
    beds: 3,
    baths: 4,
    sqft: 2500,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
    tag: 'Exclusive'
  },
  {
    id: 2,
    title: 'Marina Horizon Villa',
    location: 'Dubai Marina',
    price: '2,200 AED',
    beds: 2,
    baths: 2,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    tag: 'Beachfront'
  },
  {
    id: 3,
    title: 'Palm Signature Mansion',
    location: 'Palm Jumeirah',
    price: '8,900 AED',
    beds: 5,
    baths: 6,
    sqft: 6500,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    tag: 'Ultra Luxury'
  }
];

export default function FeaturedProperties() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Curated Residences</h2>
            <p className={styles.subtitle}>Discover our handpicked collection of Dubai's finest holiday homes.</p>
          </div>
          <Link href="/properties" className={styles.viewAll}>
            View Collection <ArrowRight size={20} className="text-gold" />
          </Link>
        </div>

        <div className={styles.grid}>
          {MOCK_PROPERTIES.map((property) => (
            <div key={property.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <span className={styles.tag}>{property.tag}</span>
                <img src={property.image} alt={property.title} className={styles.image} />
                <div className={styles.priceOverlay}>
                  <span>From</span>
                  <strong>{property.price}</strong> 
                  <span className={styles.night}>/ night</span>
                </div>
              </div>
              
              <div className={styles.content}>
                <p className={styles.location}>{property.location}</p>
                <h3 className={styles.propertyTitle}>{property.title}</h3>
                
                <div className={styles.amenities}>
                  <span><Bed size={16}/> {property.beds} Beds</span>
                  <span><Bath size={16}/> {property.baths} Baths</span>
                  <span><Maximize size={16}/> {property.sqft} sqft</span>
                </div>
                
                <Link href={`/properties/${property.id}`} className={styles.bookBtn}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
