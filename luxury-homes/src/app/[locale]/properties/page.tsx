'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Bed, Bath, Maximize, SlidersHorizontal } from 'lucide-react';
import { Link } from '@/i18n/routing';
import styles from './Properties.module.css';

const ALL_PROPERTIES = [
  { id: 1, title: 'Paramount Views Penthouse', location: 'Downtown Dubai', price: 3500, beds: 3, baths: 4, sqft: 2500, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80', tag: 'Exclusive', view: 'Skyline' },
  { id: 2, title: 'Marina Horizon Villa', location: 'Dubai Marina', price: 2200, beds: 2, baths: 2, sqft: 1800, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80', tag: 'Beachfront', view: 'Marina' },
  { id: 3, title: 'Palm Signature Mansion', location: 'Palm Jumeirah', price: 8900, beds: 5, baths: 6, sqft: 6500, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80', tag: 'Ultra Luxury', view: 'Sea' },
  { id: 4, title: 'JBR Beachside Loft', location: 'JBR', price: 1800, beds: 2, baths: 2, sqft: 1500, image: 'https://images.unsplash.com/photo-1622396090075-ab1bf45bc383?q=80', tag: 'Popular', view: 'Beachfront' },
  { id: 5, title: 'Burj View Apartment', location: 'Downtown Dubai', price: 4200, beds: 4, baths: 5, sqft: 3200, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80', tag: 'Exclusive', view: 'Burj Khalifa' },
  { id: 6, title: 'Bluewaters Isle Retreat', location: 'Bluewaters Island', price: 5500, beds: 3, baths: 4, sqft: 2800, image: 'https://images.unsplash.com/photo-1502672260266-1c1c24240f38?q=80', tag: 'New', view: 'Ain Dubai' }
];

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const initialLocation = searchParams.get('location') || '';

  const [location, setLocation] = useState(initialLocation);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [beds, setBeds] = useState('Any');
  const [view, setView] = useState('');
  
  const [filtered, setFiltered] = useState(ALL_PROPERTIES);

  useEffect(() => {
    handleApplyFilters();
  }, [initialLocation]);

  const handleApplyFilters = () => {
    let result = ALL_PROPERTIES;

    if (location) {
      result = result.filter(p => p.location === location);
    }
    
    result = result.filter(p => p.price <= maxPrice);
    
    if (beds !== 'Any') {
      const minBeds = parseInt(beds.replace('+', ''));
      result = result.filter(p => beds.includes('+') ? p.beds >= minBeds : p.beds === minBeds);
    }
    
    if (view) {
      result = result.filter(p => p.view === view);
    }

    setFiltered(result);
  };

  return (
    <main className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={`container ${styles.headerContent}`}>
          <h1 className={styles.title}>The Collection</h1>
          <p className={styles.subtitle}>Extraordinary residences in Dubai's finest locations.</p>
        </div>
      </div>

      <div className={`container ${styles.mainLayout}`}>
        <aside className={styles.sidebar}>
          <div className={styles.filterHeader}>
            <SlidersHorizontal size={20} className="text-gold" />
            <h2>Filters</h2>
          </div>

          <div className={styles.filterGroup}>
            <label>Location</label>
            <select value={location} onChange={e => setLocation(e.target.value)} className={styles.select}>
              <option value="">All Locations</option>
              <option value="Downtown Dubai">Downtown Dubai</option>
              <option value="Dubai Marina">Dubai Marina</option>
              <option value="Palm Jumeirah">Palm Jumeirah</option>
              <option value="JBR">JBR</option>
              <option value="Bluewaters Island">Bluewaters Island</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Max Price ({maxPrice} AED/night)</label>
            <input type="range" min="1000" max="20000" step="500" value={maxPrice} onChange={e => setMaxPrice(parseInt(e.target.value))} className={styles.range} />
          </div>

          <div className={styles.filterGroup}>
            <label>Bedrooms</label>
            <div className={styles.pillGroup}>
              {['Any', '1', '2', '3', '4+'].map(val => (
                <button 
                  key={val} 
                  className={beds === val ? styles.pillActive : styles.pill}
                  onClick={() => setBeds(val)}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label>View</label>
            <select value={view} onChange={e => setView(e.target.value)} className={styles.select}>
              <option value="">Any View</option>
              <option value="Beachfront">Beachfront</option>
              <option value="Marina">Marina</option>
              <option value="Skyline">City Skyline</option>
              <option value="Sea">Sea View</option>
              <option value="Burj Khalifa">Burj Khalifa</option>
              <option value="Ain Dubai">Ain Dubai</option>
            </select>
          </div>

          <button onClick={handleApplyFilters} className={`btn-primary ${styles.applyBtn}`}>Show Results ({filtered.length})</button>
        </aside>

        <div className={styles.resultsArea}>
          <div className={styles.resultsHeader}>
            <span>{filtered.length} Properties found</span>
            <select className={styles.sortSelect}>
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className={styles.grid}>
            {filtered.length > 0 ? filtered.map((property) => (
              <div key={property.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <span className={styles.tag}>{property.tag}</span>
                  <img src={property.image} alt={property.title} className={styles.image} />
                  <div className={styles.priceOverlay}>
                    <span>From</span><strong>{property.price.toLocaleString()} AED</strong><span className={styles.night}>/ night</span>
                  </div>
                </div>
                <div className={styles.content}>
                  <p className={styles.location}>{property.location} • {property.view}</p>
                  <h3 className={styles.propertyTitle}>{property.title}</h3>
                  <div className={styles.amenities}>
                    <span><Bed size={16}/> {property.beds}</span>
                    <span><Bath size={16}/> {property.baths}</span>
                    <span><Maximize size={16}/> {property.sqft}</span>
                  </div>
                  <Link href={`/properties/${property.id}`} className={styles.bookBtn}>Reserve</Link>
                </div>
              </div>
            )) : (
              <div style={{ color: 'var(--color-silver)', padding: '2rem 0' }}>No properties match your filter criteria. Try expanding your search.</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
