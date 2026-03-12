import { 
  CalendarCheck, Clock, ShieldCheck, Star, 
  CreditCard, Headphones, Home, Award
} from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const FEATURES = [
  { icon: <CalendarCheck size={28} />, title: 'Instant Booking', desc: 'Reserve your luxury home in under 60 seconds with our streamlined booking platform.' },
  { icon: <Headphones size={28} />, title: '24/7 Concierge', desc: 'Our dedicated team is available around the clock to fulfill every request.' },
  { icon: <ShieldCheck size={28} />, title: 'Verified Listings', desc: 'Every property is personally inspected and certified to our five-star standards.' },
  { icon: <CreditCard size={28} />, title: 'Secure Payments', desc: 'Bank-grade encryption and multiple payment options for complete peace of mind.' },
  { icon: <Star size={28} />, title: 'Best Price', desc: 'Direct booking guarantees the lowest rates — we match any comparable price.' },
  { icon: <Home size={28} />, title: 'Premium Insurance', desc: 'All stays include comprehensive guest insurance for hassle-free holidays.' },
  { icon: <Clock size={28} />, title: 'Flexible Stays', desc: 'From one night to one year — we accommodate any duration with personalized service.' },
  { icon: <Award size={28} />, title: 'Award-Winning', desc: 'Recognized as Dubai\'s top luxury rental brand for three consecutive years.' },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Why ZAH Luxury</span>
          <h2>A Cut Above the Rest</h2>
          <p>We don't just rent properties — we orchestrate unforgettable experiences.</p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((f, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconBox}>{f.icon}</div>
              <h4 className={styles.cardTitle}>{f.title}</h4>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
