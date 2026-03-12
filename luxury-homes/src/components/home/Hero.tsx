'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import styles from './Hero.module.css';
import { useRouter } from '@/i18n/routing';

export default function Hero() {
  const router = useRouter();
  
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('1');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/properties?location=${encodeURIComponent(location)}`);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.videoWrapper}>
        <div className={styles.overlay}></div>
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2560&auto=format&fit=crop" 
          alt="Dubai Skyline"
          className={styles.backgroundMedia}
        />
      </div>

      <div className={`container ${styles.heroContent} animate-fade-in`}>
        <h1 className={styles.title}>
          Curated Luxury <br/> 
          <span className="text-gold">In Dubai</span>
        </h1>
        <p className={styles.subtitle}>Exclusive holiday homes & premium short-term rentals.</p>

        <form className={styles.searchBar} onSubmit={handleSearch}>
          <div className={styles.searchGroup}>
            <label><MapPin size={18} className="text-gold"/> Where</label>
            <select value={location} onChange={(e) => setLocation(e.target.value)} className={styles.searchInput}>
              <option value="">Any Location</option>
              <option value="Dubai Marina">Dubai Marina</option>
              <option value="Palm Jumeirah">Palm Jumeirah</option>
              <option value="Downtown Dubai">Downtown</option>
              <option value="JBR">JBR</option>
              <option value="Bluewaters Island">Bluewaters</option>
            </select>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.searchGroup}>
            <label><Calendar size={18} className="text-gold"/> Dates</label>
            <input 
              type="text" 
              placeholder="Check-in - Check-out" 
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className={styles.searchInput}
              onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => !e.target.value && (e.target.type = 'text')}
            />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.searchGroup}>
            <label><Users size={18} className="text-gold"/> Guests</label>
            <select value={guests} onChange={(e) => setGuests(e.target.value)} className={styles.searchInput}>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4+ Guests</option>
            </select>
          </div>
          <button type="submit" className={styles.searchButton}>
            <Search size={20} />
            <span>Search</span>
          </button>
        </form>
      </div>
    </section>
  );
}
