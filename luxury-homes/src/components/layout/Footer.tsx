import { Link } from '@/i18n/routing';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        
        {/* Brand Section */}
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logo}>
            <span className="font-heading text-gold">ZAH</span>
            <span className={styles.logoText}>Luxury</span>
          </Link>
          <p className={styles.brandDesc}>
            Curated luxury holiday homes and premium short-term rentals in Dubai's most exclusive locations.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksSection}>
          <h4 className="font-heading text-gold">Explore</h4>
          <ul className={styles.linkList}>
            <li><Link href="/properties">All Properties</Link></li>
            <li><Link href="/locations/dubai-marina">Dubai Marina</Link></li>
            <li><Link href="/locations/palm-jumeirah">Palm Jumeirah</Link></li>
            <li><Link href="/locations/downtown">Downtown Dubai</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.linksSection}>
          <h4 className="font-heading text-gold">Services</h4>
          <ul className={styles.linkList}>
            <li><Link href="/owners">Property Management</Link></li>
            <li><Link href="/partner">Franchise & Partners</Link></li>
            <li><Link href="#">Concierge Services</Link></li>
            <li><Link href="#">Chauffeur Services</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className={styles.contactSection}>
          <h4 className="font-heading text-gold">Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={18} className="text-gold" />
              <span>Boulevard Plaza Tower 1, Downtown Dubai, UAE</span>
            </li>
            <li>
              <Phone size={18} className="text-gold" />
              <span>+971 4 123 4567</span>
            </li>
            <li>
              <Mail size={18} className="text-gold" />
              <span>info@zahluxury.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomFlex}`}>
          <p>&copy; {new Date().getFullYear()} ZAH Luxury Holiday Homes. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
