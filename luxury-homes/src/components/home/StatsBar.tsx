'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatsBar.module.css';

const STATS = [
  { value: 200, suffix: '+', label: 'Luxury Properties' },
  { value: 15000, suffix: '+', label: 'Guests Hosted' },
  { value: 6, suffix: '', label: 'Prime Locations' },
  { value: 4.9, suffix: '★', label: 'Average Rating', isFloat: true },
];

function CountUp({ target, suffix, isFloat }: { target: number; suffix: string; isFloat?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const step = duration / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += 1;
            const progress = current / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((eased * target).toFixed(isFloat ? 1 : 0)));
            if (current >= steps) clearInterval(timer);
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, isFloat]);

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {STATS.map((stat, i) => (
          <div key={i} className={styles.statItem}>
            <div className={styles.statValue}>
              <CountUp target={stat.value} suffix={stat.suffix} isFloat={stat.isFloat} />
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
            {i < STATS.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </section>
  );
}
