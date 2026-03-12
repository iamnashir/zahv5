import { Link } from '@/i18n/routing';
import { ArrowRight, Clock } from 'lucide-react';
import styles from './BlogTeaser.module.css';

const ARTICLES = [
  {
    slug: 'top-luxury-areas-dubai',
    category: 'Location Guide',
    title: 'The 5 Most Luxurious Areas to Stay in Dubai',
    excerpt: 'From the glittering Marina skyline to the serene Palms, discover where Dubai\'s elite choose to reside.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop',
    readTime: '5 min',
    date: 'March 2025',
  },
  {
    slug: 'holiday-home-investment-guide',
    category: 'Investor Insights',
    title: 'Why Short-Term Rentals in Dubai Outperform Traditional Leases',
    excerpt: 'Data-backed analysis showing how luxury holiday homes consistently deliver 20–30% higher yields.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop',
    readTime: '7 min',
    date: 'February 2025',
  },
  {
    slug: 'concierge-guide-dubai',
    category: 'Guest Tips',
    title: 'The Ultimate Concierge Guide: Making the Most of Your Dubai Stay',
    excerpt: 'From private yacht charters to Michelin-star dining reservations — our concierge can arrange it all.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop',
    readTime: '4 min',
    date: 'January 2025',
  },
];

export default function BlogTeaser() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`section-header ${styles.headerRow}`}>
          <div>
            <span className="section-badge">Insights & News</span>
            <h2>From Our Blog</h2>
          </div>
          <Link href="/blog" className="btn-outline">
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {ARTICLES.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                <span className={styles.category}>{article.category}</span>
                <img src={article.image} alt={article.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span><Clock size={13} /> {article.readTime} read</span>
                  <span>{article.date}</span>
                </div>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.excerpt}>{article.excerpt}</p>
                <span className={styles.readMore}>Read Article →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
