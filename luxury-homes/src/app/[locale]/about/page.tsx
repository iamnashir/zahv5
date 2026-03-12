import { Award, Users, Globe, Building } from 'lucide-react';
import styles from './About.module.css';


const TEAM = [
  { name: 'Ahmed Al-Rashid', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
  { name: 'Sarah Mitchell', role: 'Head of Hospitality', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b4d5?q=80&w=400&auto=format&fit=crop' },
  { name: 'Ivan Petrov', role: 'Director of Real Estate', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
  { name: 'Mei Lin Zhang', role: 'Global Partnerships Lead', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
];

const TIMELINE = [
  { year: '2019', event: 'ZAH Luxury founded in Downtown Dubai with 5 properties.' },
  { year: '2020', event: 'Expanded to Palm Jumeirah & JBR. Hosted 1,000+ guests.' },
  { year: '2021', event: 'Launched Channel Manager integration & concierge app.' },
  { year: '2022', event: 'Won "Best Luxury Rental Brand Dubai" by Hospitality Asia.' },
  { year: '2023', event: 'Crossed 100 properties. Opened franchise discussions in GCC.' },
  { year: '2024', event: '200+ properties, 15,000+ guests, GCC partnership programme launched.' },
];

const PRESS = ['BBC Travel', 'Forbes ME', 'Condé Nast', 'Gulf News', 'Arabian Business'];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className="section-badge">Our Story</span>
          <h1>Redefining <span className="text-gold">Luxury Stays</span> in Dubai</h1>
          <p>We believe every stay should feel like a private five-star retreat. Since 2019, we have been curating Dubai's most exclusive holiday home portfolio for discerning global travellers.</p>
        </div>
      </section>

      {/* Stats */}
      <section className={`container ${styles.statsRow}`}>
        {[
          { icon: <Building size={28}/>, val: '200+', label: 'Luxury Properties' },
          { icon: <Users size={28}/>, val: '15,000+', label: 'Guests Hosted' },
          { icon: <Globe size={28}/>, val: '6', label: 'Prime Locations' },
          { icon: <Award size={28}/>, val: '3×', label: 'Award Winner' },
        ].map((s, i) => (
          <div key={i} className={styles.statCard}>
            <div className={styles.statIcon}>{s.icon}</div>
            <strong className={styles.statVal}>{s.val}</strong>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </section>

      {/* Our Story */}
      <section className={`container ${styles.storySection}`}>
        <div className={styles.storyText}>
          <span className="section-badge">Our Mission</span>
          <h2>Built on a Passion for Exceptional Hospitality</h2>
          <p>ZAH Luxury was born from a simple but powerful idea: what if every short-term rental could deliver the warmth, privacy, and meticulous attention of a private villa combined with the reliability of a five-star hotel?</p>
          <p>Our portfolio spans the most prestigious addresses in Dubai — from the glittering towers of Dubai Marina to the private villas of Palm Jumeirah — each property personally vetted, styled, and managed by our expert team.</p>
        </div>
        <div className={styles.storyTimeline}>
          {TIMELINE.map((t, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineYear}>{t.year}</div>
              <div className={styles.timelineLine}><span /></div>
              <p className={styles.timelineEvent}>{t.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className={`${styles.teamSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">The Team</span>
            <h2>People Behind the Excellence</h2>
          </div>
          <div className={styles.teamGrid}>
            {TEAM.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamImgWrapper}>
                  <img src={member.img} alt={member.name} />
                </div>
                <div className={styles.teamInfo}>
                  <strong>{member.name}</strong>
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className={`container ${styles.pressSection}`}>
        <p className={styles.pressLabel}>AS SEEN IN</p>
        <div className={styles.pressLogos}>
          {PRESS.map((p, i) => (
            <span key={i} className={styles.pressLogo}>{p}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
