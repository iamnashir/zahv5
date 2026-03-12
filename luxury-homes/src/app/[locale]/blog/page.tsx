import { Link } from '@/i18n/routing';
import { Clock, ArrowRight } from 'lucide-react';
import styles from './Blog.module.css';

const ARTICLES = [
  {
    slug: 'top-luxury-areas-dubai',
    category: 'Location Guide',
    title: 'The 5 Most Luxurious Areas to Stay in Dubai',
    excerpt: 'From the glittering Marina skyline to the serene Palms, discover where Dubai\'s elite choose to reside and why each neighborhood offers something unmatched.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    readTime: '5 min', date: 'March 2025', featured: true,
  },
  {
    slug: 'holiday-home-investment-guide',
    category: 'Investor Insights',
    title: 'Why Short-Term Rentals in Dubai Outperform Traditional Leases',
    excerpt: 'Data-backed analysis showing how luxury holiday homes consistently deliver 20–30% higher yields for property owners.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop',
    readTime: '7 min', date: 'February 2025', featured: false,
  },
  {
    slug: 'concierge-guide-dubai',
    category: 'Guest Tips',
    title: 'The Ultimate Concierge Guide: Making the Most of Your Dubai Stay',
    excerpt: 'Private yachts, Michelin dining, helicopter tours — our concierge can arrange it. Here\'s what to ask for.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop',
    readTime: '4 min', date: 'January 2025', featured: false,
  },
  {
    slug: 'palm-jumeirah-villas-guide',
    category: 'Property Spotlight',
    title: 'Palm Jumeirah Villas: Everything You Need to Know',
    excerpt: 'Our curated selection of beachfront villas on the iconic Palm offer private pools, direct beach access, and unobstructed sea views.',
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=600&auto=format&fit=crop',
    readTime: '6 min', date: 'December 2024', featured: false,
  },
  {
    slug: 'dubai-ramadan-guide',
    category: 'Travel Tips',
    title: 'Visiting Dubai During Ramadan: A Traveller\'s Guide',
    excerpt: 'Discover the unique cultural experiences, special iftar traditions, and exclusive hotel packages available during Dubai\'s holy month.',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=600&auto=format&fit=crop',
    readTime: '8 min', date: 'November 2024', featured: false,
  },
];

const CATEGORIES = ['All', 'Location Guide', 'Investor Insights', 'Guest Tips', 'Property Spotlight', 'Travel Tips'];

export default function BlogPage() {
  const featured = ARTICLES.find(a => a.featured);
  const rest = ARTICLES.filter(a => !a.featured);

  return (
    <main className={styles.page}>
      <div className={`container ${styles.header}`}>
        <span className="section-badge">Insights & Guides</span>
        <h1>The ZAH <span className="text-gold">Journal</span></h1>
        <p>Expert insights on Dubai real estate, travel tips, and luxury living.</p>
      </div>

      {/* Categories */}
      <div className={`container ${styles.categories}`}>
        {CATEGORIES.map(c => (
          <button key={c} className={`${styles.catBtn} ${c === 'All' ? styles.catActive : ''}`}>{c}</button>
        ))}
      </div>

      {/* Featured */}
      {featured && (
        <div className="container">
          <Link href={`/blog/${featured.slug}`} className={styles.featured}>
            <img src={featured.image} alt={featured.title} className={styles.featuredImg} />
            <div className={styles.featuredContent}>
              <span className={styles.badge}>Featured</span>
              <span className={styles.category}>{featured.category}</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div className={styles.meta}>
                <span><Clock size={14}/> {featured.readTime} read</span>
                <span>{featured.date}</span>
              </div>
              <span className={styles.readMore}>Read Article <ArrowRight size={16}/></span>
            </div>
          </Link>
        </div>
      )}

      {/* Grid */}
      <div className={`container ${styles.grid}`}>
        {rest.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className={styles.card}>
            <div className={styles.cardImgWrapper}>
              <span className={styles.category}>{article.category}</span>
              <img src={article.image} alt={article.title} className={styles.cardImg} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.meta}>
                <span><Clock size={13}/> {article.readTime} read</span>
                <span>{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span className={styles.readMore}>Read More →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
