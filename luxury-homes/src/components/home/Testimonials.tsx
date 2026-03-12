'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "The level of service provided by ZAH Luxury is unparalleled. Our penthouse was managed flawlessly, yielding higher returns than we ever anticipated.",
    author: "Mohammed Al Habtoor",
    role: "Property Owner",
    location: "Dubai"
  },
  {
    id: 2,
    quote: "Every detail of our stay in the Marina Horizon Villa was perfection. From the chauffeur service to the breathtaking views, it truly redefined luxury living.",
    author: "Elena Petrova",
    role: "Guest",
    location: "Moscow"
  },
  {
    id: 3,
    quote: "As an investor looking to expand into the GCC, partnering with ZAH gave me the confidence and operational excellence needed to succeed in this premium market.",
    author: "James Sterling",
    role: "Investor",
    location: "London"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>The Standard of Excellence</h2>
          <p className={styles.subtitle}>Hear from our esteemed clients and global partners.</p>
        </div>

        <div className={styles.carouselContainer}>
          <div 
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className={styles.slide}>
                <div className={styles.card}>
                  <Quote size={48} className={styles.quoteIcon} />
                  <p className={styles.quoteText}>"{testimonial.quote}"</p>
                  <div className={styles.authorInfo}>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}, {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.controls}>
            <button onClick={prev} className={styles.controlBtn} aria-label="Previous testimonial">
              <ChevronLeft size={24} />
            </button>
            <div className={styles.indicators}>
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.indicator} ${idx === currentIndex ? styles.activeIndicator : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className={styles.controlBtn} aria-label="Next testimonial">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
