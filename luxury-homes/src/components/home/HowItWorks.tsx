import { Search, CalendarDays, CreditCard, PartyPopper } from 'lucide-react';
import styles from './HowItWorks.module.css';

const STEPS = [
  {
    num: '01',
    icon: <Search size={32} />,
    title: 'Search & Discover',
    desc: 'Browse our curated portfolio of luxury homes across Dubai\'s most coveted neighbourhoods using our smart filters.',
  },
  {
    num: '02',
    icon: <CalendarDays size={32} />,
    title: 'Select Your Dates',
    desc: 'Pick your check-in and check-out dates on the live availability calendar and see your total instantly.',
  },
  {
    num: '03',
    icon: <CreditCard size={32} />,
    title: 'Secure Your Stay',
    desc: 'Complete your booking with bank-level encrypted payment. Your reservation is confirmed in seconds.',
  },
  {
    num: '04',
    icon: <PartyPopper size={32} />,
    title: 'Arrive & Enjoy',
    desc: 'Your private concierge will be in touch. Arrive to a perfectly prepared, luxury-grade home.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Simple Process</span>
          <h2>Book in 4 Easy Steps</h2>
          <p>From discovery to check-in, luxury has never been this effortless.</p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.iconWrapper}>{step.icon}</div>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDesc}>{step.desc}</p>
              {i < STEPS.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
