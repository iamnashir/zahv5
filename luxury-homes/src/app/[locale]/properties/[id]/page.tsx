'use client';

import { useState, use } from 'react';
import { Bed, Bath, Maximize, MapPin, Star, Wifi, Tv, Coffee, Car, Shield, Wind, Dumbbell, Waves, ChevronLeft, ChevronRight, X, Globe } from 'lucide-react';
import { Link } from '@/i18n/routing';
import styles from './PropertyDetails.module.css';

const PROPERTIES: Record<string, any> = {
  default: {
    title: 'Paramount Views Penthouse',
    location: 'Downtown Dubai',
    address: 'Boulevard Plaza, Downtown Dubai, UAE',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178474!2d55.2734!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43a03e52c54b%3A0x4e4b9e5a10f0b8a!2sBurj%20Khalifa!5e0!3m2!1sen!2s!4v1699900000000!5m2!1sen!2s',
    price: 3500,
    beds: 3, baths: 4, sqft: 2500,
    rating: 4.9, reviews: 124,
    description: "Experience the pinnacle of luxury living in this exquisite penthouse in the heart of Downtown Dubai. Panoramic views of Burj Khalifa and the Dubai Fountain from every room. Featuring state-of-the-art smart home systems, bespoke Italian furnishings, and a private infinity-edge splash pool on the terrace.",
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000',
      'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1200',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200',
    ],
    amenities: [
      { icon: <Wifi size={20}/>, name: 'Ultra-fast WiFi' },
      { icon: <Tv size={20}/>, name: 'Smart Home' },
      { icon: <Coffee size={20}/>, name: 'Espresso Bar' },
      { icon: <Car size={20}/>, name: 'Valet Parking' },
      { icon: <Shield size={20}/>, name: '24/7 Security' },
      { icon: <Wind size={20}/>, name: 'Central A/C' },
      { icon: <Dumbbell size={20}/>, name: 'Private Gym' },
      { icon: <Waves size={20}/>, name: 'Infinity Pool' },
    ],
    reviewsList: [
      { author: 'Alexandra M.', from: 'London', rating: 5, date: 'February 2025', text: 'Absolutely breathtaking property. The Burj Khalifa view from the master bedroom is something I will never forget. ZAH team was incredibly attentive.' },
      { author: 'Mohammed Al-R.', from: 'Riyadh', rating: 5, date: 'January 2025', text: 'Perfect in every detail. The concierge arranged a private chef for us and even had the fountain show visible from our terrace. Exceptional.' },
      { author: 'Yuki T.', from: 'Tokyo', rating: 5, date: 'December 2024', text: 'I have stayed in luxury hotels all over the world, and this exceeded every one of them. The smart home system, the views, the service — flawless.' },
    ],
    nearby: [
      { name: 'Burj Khalifa', dist: '0.4 km', icon: '🏙️' },
      { name: 'Dubai Mall', dist: '0.3 km', icon: '🛍️' },
      { name: 'Dubai Fountain', dist: '0.5 km', icon: '⛲' },
      { name: 'Dubai Opera', dist: '0.7 km', icon: '🎭' },
    ],
  }
};

const BLOCKED_DATES = ['2025-04-05', '2025-04-06', '2025-04-07', '2025-04-15', '2025-04-16'];

function AvailabilityCalendar({ onSelect }: { onSelect: (ci: string, co: string) => void }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [hoveredDate, setHoveredDate] = useState('');

  const getDaysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate();
  const getFirstDay = (y: number, m: number) => new Date(y, m, 1).getDay();
  const toDateStr = (y: number, m: number, d: number) => `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
  const isBlocked = (d: string) => BLOCKED_DATES.includes(d);
  const isPast = (y: number, m: number, d: number) => new Date(y, m, d) < today;
  const isInRange = (d: string) => {
    if (!checkIn || !checkOut) return false;
    return d > checkIn && d < checkOut;
  };
  const isHoverRange = (d: string) => {
    if (!checkIn || checkOut || !hoveredDate) return false;
    return d > checkIn && d <= hoveredDate;
  };

  const handleDayClick = (dateStr: string) => {
    if (isBlocked(dateStr)) return;
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(dateStr); setCheckOut('');
      onSelect(dateStr, '');
    } else if (dateStr > checkIn) {
      setCheckOut(dateStr);
      onSelect(checkIn, dateStr);
    } else {
      setCheckIn(dateStr); setCheckOut('');
      onSelect(dateStr, '');
    }
  };

  const prevMonth = () => { if (viewMonth === 0) { setViewYear(v => v - 1); setViewMonth(11); } else setViewMonth(m => m - 1); };
  const nextMonth = () => { if (viewMonth === 11) { setViewYear(v => v + 1); setViewMonth(0); } else setViewMonth(m => m + 1); };

  const days = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDay(viewYear, viewMonth);
  const monthName = new Date(viewYear, viewMonth, 1).toLocaleString('en', { month: 'long', year: 'numeric' });

  return (
    <div className={styles.calendar}>
      <div className={styles.calHeader}>
        <button onClick={prevMonth} className={styles.calNav}><ChevronLeft size={18}/></button>
        <span className={styles.calMonth}>{monthName}</span>
        <button onClick={nextMonth} className={styles.calNav}><ChevronRight size={18}/></button>
      </div>
      <div className={styles.calGrid}>
        {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
          <div key={d} className={styles.calDayName}>{d}</div>
        ))}
        {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
        {Array.from({ length: days }).map((_, i) => {
          const d = i + 1;
          const dateStr = toDateStr(viewYear, viewMonth, d);
          const past = isPast(viewYear, viewMonth, d);
          const blocked = isBlocked(dateStr);
          const isCI = dateStr === checkIn;
          const isCO = dateStr === checkOut;
          const inRange = isInRange(dateStr);
          const inHover = isHoverRange(dateStr);
          return (
            <button
              key={d}
              className={`${styles.calDay} 
                ${past || blocked ? styles.calDayDisabled : ''} 
                ${isCI ? styles.calDayCheckIn : ''} 
                ${isCO ? styles.calDayCheckOut : ''}
                ${inRange || inHover ? styles.calDayRange : ''}
              `}
              onClick={() => !past && !blocked && handleDayClick(dateStr)}
              onMouseEnter={() => setHoveredDate(dateStr)}
              onMouseLeave={() => setHoveredDate('')}
              disabled={past || blocked}
            >
              {d}
              {blocked && <span className={styles.calBlocked}/>}
            </button>
          );
        })}
      </div>
      <div className={styles.calLegend}>
        <span><span className={styles.legendCheckin} /> Check-in</span>
        <span><span className={styles.legendRange} /> Selected</span>
        <span><span className={styles.legendBlocked} /> Unavailable</span>
      </div>
    </div>
  );
}

function Gallery({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImgWrapper} onClick={() => setLightboxOpen(true)}>
        <img src={images[0]} alt="Main" className={styles.mainImg} />
        <span className={styles.galleryHint}>Click to view all {images.length} photos</span>
      </div>
      <div className={styles.sideThumbs}>
        {images.slice(1, 5).map((img, i) => (
          <div key={i} className={styles.thumbWrapper} onClick={() => { setCurrent(i + 1); setLightboxOpen(true); }}>
            <img src={img} alt={`Photo ${i + 2}`} className={styles.thumb} />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className={styles.lightbox} onClick={() => setLightboxOpen(false)}>
          <button className={styles.lightboxClose} onClick={() => setLightboxOpen(false)}><X size={28}/></button>
          <button className={styles.lightboxPrev} onClick={e => { e.stopPropagation(); setCurrent(c => Math.max(0, c - 1)); }}>
            <ChevronLeft size={32}/>
          </button>
          <img src={images[current]} alt="" className={styles.lightboxImg} onClick={e => e.stopPropagation()} />
          <button className={styles.lightboxNext} onClick={e => { e.stopPropagation(); setCurrent(c => Math.min(images.length - 1, c + 1)); }}>
            <ChevronRight size={32}/>
          </button>
          <div className={styles.lightboxDots}>
            {images.map((_, i) => (
              <button key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} onClick={e => { e.stopPropagation(); setCurrent(i); }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PropertyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const property = PROPERTIES[id] || PROPERTIES.default;

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');
  const [activeTab, setActiveTab] = useState<'calendar' | 'details'>('calendar');

  const nights = (() => {
    if (!checkIn || !checkOut) return 0;
    return Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000);
  })();

  const basePrice = property.price * Math.max(nights, 1);
  const concierge = 500;
  const tourism = 150 * Math.max(nights, 1);
  const total = basePrice + concierge + tourism;

  return (
    <main className={styles.page}>
      {/* Header */}
      <div className={`container ${styles.header}`}>
        <div>
          <div className={styles.breadcrumb}>
            <Link href="/properties">Properties</Link> / <span>{property.location}</span>
          </div>
          <h1 className={styles.title}>{property.title}</h1>
          <div className={styles.meta}>
            <span className={styles.rating}>
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < Math.floor(property.rating) ? 'currentColor' : 'none'} />)}
              {property.rating} ({property.reviews} reviews)
            </span>
            <span className={styles.dot}>·</span>
            <span className={styles.loc}><MapPin size={14}/> {property.location}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.locAddr}>{property.address}</span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="container">
        <Gallery images={property.images} />
      </div>

      {/* Main Content + Sidebar */}
      <div className={`container ${styles.contentGrid}`}>
        <div className={styles.mainContent}>
          {/* Key Specs */}
          <div className={styles.specRow}>
            <div className={styles.spec}><Bed size={22} className="text-gold"/> <div><strong>{property.beds}</strong><span>Bedrooms</span></div></div>
            <div className={styles.spec}><Bath size={22} className="text-gold"/> <div><strong>{property.baths}</strong><span>Bathrooms</span></div></div>
            <div className={styles.spec}><Maximize size={22} className="text-gold"/> <div><strong>{property.sqft.toLocaleString()}</strong><span>Sq. Ft.</span></div></div>
            <div className={styles.spec}><Star size={22} className="text-gold"/> <div><strong>{property.rating}</strong><span>Rating</span></div></div>
          </div>

          {/* Description */}
          <div className={styles.section}>
            <h2>About this Residence</h2>
            <p className={styles.desc}>{property.description}</p>
          </div>

          {/* Amenities */}
          <div className={styles.section}>
            <h2>Amenities & Features</h2>
            <div className={styles.amenitiesGrid}>
              {property.amenities.map((a: any, i: number) => (
                <div key={i} className={styles.amenityItem}>
                  <span className="text-gold">{a.icon}</span>
                  <span>{a.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Virtual Tour */}
          <div className={styles.section}>
            <h2>Virtual Tour</h2>
            <div className={styles.virtualTour}>
              <Globe size={48} className="text-gold" />
              <h4>360° Immersive Tour</h4>
              <p>Explore every room of this property from the comfort of your home before booking.</p>
              <button className="btn-primary" style={{marginTop:'1rem'}}>Launch Virtual Tour</button>
            </div>
          </div>

          {/* Google Map */}
          <div className={styles.section}>
            <h2>Location</h2>
            <div className={styles.mapWrapper}>
              <iframe
                src={property.mapUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property location map"
              />
            </div>
            <div className={styles.nearbyGrid}>
              {property.nearby.map((n: any, i: number) => (
                <div key={i} className={styles.nearbyItem}>
                  <span className={styles.nearbyIcon}>{n.icon}</span>
                  <div>
                    <strong>{n.name}</strong>
                    <span>{n.dist}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className={styles.section}>
            <div className={styles.reviewHeader}>
              <h2><Star size={20} fill="currentColor" className="text-gold"/> {property.rating} · {property.reviews} reviews</h2>
            </div>
            <div className={styles.reviewsGrid}>
              {property.reviewsList.map((r: any, i: number) => (
                <div key={i} className={styles.reviewCard}>
                  <div className={styles.reviewMeta}>
                    <div className={styles.avatar}>{r.author[0]}</div>
                    <div>
                      <strong>{r.author}</strong>
                      <span>From {r.from} · {r.date}</span>
                    </div>
                    <div className={styles.stars}>
                      {[...Array(r.rating)].map((_, j) => <Star key={j} size={12} fill="currentColor" className="text-gold"/>)}
                    </div>
                  </div>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.bookingCard}>
            <div className={styles.priceRow}>
              <div>
                <strong className={styles.price}>{property.price.toLocaleString()} AED</strong>
                <span className={styles.perNight}> / night</span>
              </div>
              <div className={styles.ratingBadge}>⭐ {property.rating}</div>
            </div>

            <div className={styles.tabRow}>
              <button className={`${styles.tab} ${activeTab === 'calendar' ? styles.tabActive : ''}`} onClick={() => setActiveTab('calendar')}>Select Dates</button>
              <button className={`${styles.tab} ${activeTab === 'details' ? styles.tabActive : ''}`} onClick={() => setActiveTab('details')}>Price Details</button>
            </div>

            {activeTab === 'calendar' ? (
              <>
                <AvailabilityCalendar onSelect={(ci, co) => { setCheckIn(ci); setCheckOut(co); }} />
                <div className={styles.guestsRow}>
                  <label>Guests</label>
                  <select value={guests} onChange={e => setGuests(e.target.value)}>
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
              </>
            ) : (
              <div className={styles.breakdown}>
                <div className={styles.breakdownRow}><span>{property.price.toLocaleString()} × {Math.max(nights,1)} nights</span><span>{basePrice.toLocaleString()} AED</span></div>
                <div className={styles.breakdownRow}><span>Concierge fee</span><span>{concierge.toLocaleString()} AED</span></div>
                <div className={styles.breakdownRow}><span>Tourism Dirham</span><span>{tourism.toLocaleString()} AED</span></div>
                <div className={`${styles.breakdownRow} ${styles.totalRow}`}><span>Total</span><span>{total.toLocaleString()} AED</span></div>
              </div>
            )}

            <Link href="/checkout" className={`btn-primary ${styles.reserveBtn}`}>
              {checkIn && checkOut ? `Reserve · ${total.toLocaleString()} AED` : 'Check Availability'}
            </Link>
            <p className={styles.noCharge}>You won't be charged yet. Free cancellation within 48h.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
