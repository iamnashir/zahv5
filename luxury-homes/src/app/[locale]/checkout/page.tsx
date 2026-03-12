'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { Check } from 'lucide-react';
import styles from './Checkout.module.css';

const STEPS = ['Review', 'Guest Details', 'Payment', 'Confirmed'];

export default function CheckoutPage() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const property = {
    title: 'Paramount Views Penthouse',
    location: 'Downtown Dubai',
    checkIn: '2025-04-10',
    checkOut: '2025-04-15',
    nights: 5,
    pricePerNight: 3500,
    concierge: 500,
    tourism: 750,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600',
  };

  const total = property.pricePerNight * property.nights + property.concierge + property.tourism;

  const handleNext = () => {
    if (step === 2) {
      setLoading(true);
      setTimeout(() => { setLoading(false); setStep(3); }, 2000);
    } else {
      setStep(s => s + 1);
    }
  };

  return (
    <main className={styles.page}>
      <div className={`container ${styles.container}`}>
        {/* Progress Bar */}
        <div className={styles.progress}>
          {STEPS.map((s, i) => (
            <div key={s} className={styles.progressItem}>
              <div className={`${styles.stepCircle} ${i <= step ? styles.stepActive : ''} ${i < step ? styles.stepDone : ''}`}>
                {i < step ? <Check size={16}/> : i + 1}
              </div>
              <span className={`${styles.stepLabel} ${i <= step ? styles.stepLabelActive : ''}`}>{s}</span>
              {i < STEPS.length - 1 && (
                <div className={`${styles.progressLine} ${i < step ? styles.progressLineDone : ''}`} />
              )}
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {/* Main Area */}
          <div className={styles.main}>
            {step === 0 && (
              <div className={styles.card}>
                <h2>Review Your Booking</h2>
                <div className={styles.propertyPreview}>
                  <img src={property.image} alt={property.title} />
                  <div>
                    <h3>{property.title}</h3>
                    <p>{property.location}</p>
                    <div className={styles.dates}>
                      <div>
                        <label>Check-in</label>
                        <strong>{property.checkIn}</strong>
                      </div>
                      <div>
                        <label>Check-out</label>
                        <strong>{property.checkOut}</strong>
                      </div>
                      <div>
                        <label>Guests</label>
                        <strong>2</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.policies}>
                  <h4>Cancellation Policy</h4>
                  <p>Free cancellation until 48 hours before check-in. After that, the first night is non-refundable.</p>
                  <h4>House Rules</h4>
                  <p>No smoking · No parties · Pets allowed on request · Quiet hours after 10pm</p>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className={styles.card}>
                <h2>Guest Details</h2>
                <form className={styles.guestForm}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}><label>First Name</label><input type="text" required placeholder="John" /></div>
                    <div className={styles.formGroup}><label>Last Name</label><input type="text" required placeholder="Smith" /></div>
                  </div>
                  <div className={styles.formGroup}><label>Email</label><input type="email" required placeholder="john@example.com" /></div>
                  <div className={styles.formGroup}><label>Phone</label><input type="tel" required placeholder="+971 50 000 0000" /></div>
                  <div className={styles.formGroup}><label>Nationality</label><input type="text" placeholder="United Kingdom" /></div>
                  <div className={styles.formGroup}><label>Special Requests (Optional)</label><textarea rows={3} placeholder="Any preferences or requests..."></textarea></div>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className={styles.card}>
                <h2>Secure Payment</h2>
                <div className={styles.cardIcons}>
                  {['Visa', 'MC', 'Amex', 'Apple Pay'].map(b => <span key={b} className={styles.brandBadge}>{b}</span>)}
                </div>
                <div className={styles.formGroup}><label>Card Number</label><input type="text" placeholder="4242 4242 4242 4242" maxLength={19} /></div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}><label>Expiry Date</label><input type="text" placeholder="MM / YY" /></div>
                  <div className={styles.formGroup}><label>CVC</label><input type="text" placeholder="•••" maxLength={4} /></div>
                </div>
                <div className={styles.formGroup}><label>Name on Card</label><input type="text" placeholder="John Smith" /></div>
                <div className={styles.secureNote}>
                  <Check size={14} className="text-gold"/> 256-bit SSL Encrypted. Your payment is fully secure.
                </div>
              </div>
            )}

            {step === 3 && (
              <div className={`${styles.card} ${styles.successCard}`}>
                <div className={styles.successCircle}><Check size={36}/></div>
                <h2>Booking Confirmed!</h2>
                <p>Your reservation for <strong>{property.title}</strong> has been confirmed. A confirmation email has been sent. Your personal concierge will contact you within 1 hour.</p>
                <p className={styles.bookingRef}>Booking Reference: <strong>#ZAH-{Date.now().toString().slice(-6)}</strong></p>
                <Link href="/properties" className="btn-outline" style={{marginTop:'1.5rem', display:'inline-block'}}>
                  Browse More Properties
                </Link>
              </div>
            )}

            {step < 3 && (
              <div className={styles.actions}>
                {step > 0 && <button className="btn-outline" onClick={() => setStep(s => s - 1)}>← Back</button>}
                <button className={`btn-primary ${styles.nextBtn}`} onClick={handleNext} disabled={loading}>
                  {loading ? 'Processing...' : step === 2 ? `Pay ${total.toLocaleString()} AED` : 'Continue →'}
                </button>
              </div>
            )}
          </div>

          {/* Price Summary Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.summaryCard}>
              <img src={property.image} alt={property.title} className={styles.summaryImg} />
              <div className={styles.summaryBody}>
                <h4>{property.title}</h4>
                <p className={styles.summaryLocation}>{property.location}</p>
                <div className={styles.breakdown}>
                  <div className={styles.breakdownRow}>
                    <span>{property.pricePerNight.toLocaleString()} AED × {property.nights} nights</span>
                    <span>{(property.pricePerNight * property.nights).toLocaleString()} AED</span>
                  </div>
                  <div className={styles.breakdownRow}>
                    <span>Concierge fee</span>
                    <span>{property.concierge.toLocaleString()} AED</span>
                  </div>
                  <div className={styles.breakdownRow}>
                    <span>Tourism Dirham</span>
                    <span>{property.tourism.toLocaleString()} AED</span>
                  </div>
                  <div className={`${styles.breakdownRow} ${styles.totalRow}`}>
                    <span>Total</span>
                    <span>{total.toLocaleString()} AED</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
