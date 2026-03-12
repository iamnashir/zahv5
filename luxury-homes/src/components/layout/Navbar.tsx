'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Menu, X, Globe, ChevronDown, Phone, MapPin } from 'lucide-react';
import styles from './Navbar.module.css';

const LOCATIONS = [
  { name: 'Dubai Marina', slug: 'dubai-marina', count: 24, emoji: '⛵' },
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah', count: 18, emoji: '🌴' },
  { name: 'Downtown Dubai', slug: 'downtown', count: 31, emoji: '🏙️' },
  { name: 'JBR', slug: 'jbr', count: 16, emoji: '🏖️' },
  { name: 'Bluewaters', slug: 'bluewaters-island', count: 9, emoji: '🎡' },
  { name: 'Business Bay', slug: 'business-bay', count: 14, emoji: '🏢' },
];

export default function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContent}`}>
          <a href="tel:+97141234567" className={styles.topBarLink}>
            <Phone size={13} /> +971 4 123 4567
          </a>
          <span className={styles.topBarDivider}>|</span>
          <span className={styles.topBarText}>24/7 Concierge Service</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoZah}>ZAH</span>
          <span className={styles.logoLuxury}>Luxury</span>
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
            Home
          </Link>

          {/* Locations Mega-Menu */}
          <div ref={megaMenuRef} className={styles.megaMenuWrapper}>
            <button
              className={`${styles.navLink} ${styles.megaTrigger} ${isMegaMenuOpen ? styles.active : ''}`}
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              Locations <ChevronDown size={14} className={isMegaMenuOpen ? styles.chevronOpen : ''} />
            </button>
            {isMegaMenuOpen && (
              <div className={styles.megaMenu}>
                <div className={styles.megaMenuHeader}>
                  <p>Dubai's Premier Locations</p>
                </div>
                <div className={styles.megaMenuGrid}>
                  {LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className={styles.megaMenuCard}
                      onClick={() => setIsMegaMenuOpen(false)}
                    >
                      <span className={styles.megaEmoji}>{loc.emoji}</span>
                      <div>
                        <strong>{loc.name}</strong>
                        <span>{loc.count} properties</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className={styles.megaMenuFooter}>
                  <Link href="/properties" onClick={() => setIsMegaMenuOpen(false)} className={styles.megaViewAll}>
                    <MapPin size={14} /> View All Properties →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/properties" className={`${styles.navLink} ${pathname === '/properties' ? styles.active : ''}`}>
            Properties
          </Link>
          <Link href="/owners" className={`${styles.navLink} ${pathname === '/owners' ? styles.active : ''}`}>
            Owners
          </Link>
          <Link href="/partner" className={`${styles.navLink} ${pathname === '/partner' ? styles.active : ''}`}>
            Partner
          </Link>
          <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>
            About
          </Link>
          <Link href="/contact" className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}>
            Contact
          </Link>

          <div className={styles.langSelector}>
            <Globe size={16} className="text-gold" />
            <select
              value={locale}
              onChange={(e) => changeLanguage(e.target.value)}
              className={styles.langDropdown}
              aria-label="Select Language"
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
              <option value="ru">RU</option>
              <option value="zh">ZH</option>
            </select>
          </div>

          <Link href="/properties" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.78rem' }}>
            Book Now
          </Link>
        </nav>

        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={26} className="text-gold" /> : <Menu size={26} className="text-gold" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <nav className={styles.mobileNavLinks}>
          {[
            { label: 'Home', href: '/' },
            { label: 'Properties', href: '/properties' },
            { label: 'Owners', href: '/owners' },
            { label: 'Partner', href: '/partner' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileLangSelector}>
            <Globe size={18} className="text-gold" />
            <select
              value={locale}
              onChange={(e) => { changeLanguage(e.target.value); setIsMobileMenuOpen(false); }}
              className={styles.langDropdown}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="ru">Русский</option>
              <option value="zh">中文</option>
            </select>
          </div>
          <Link href="/properties" className={`btn-primary ${styles.mobileBookBtn}`} onClick={() => setIsMobileMenuOpen(false)}>
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
