'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import styles from './Contact.module.css';


export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className={styles.page}>
      <div className={`container ${styles.hero}`}>
        <span className="section-badge">Get in Touch</span>
        <h1>We'd Love to <span className="text-gold">Hear From You</span></h1>
        <p>Whether you're planning a stay, listing your property, or exploring partnership opportunities — our team is here to help.</p>
      </div>

      <div className={`container ${styles.grid}`}>
        {/* Info Side */}
        <div className={styles.infoSide}>
          <div className={styles.infoBlock}>
            <div className={styles.infoIcon}><Phone size={22}/></div>
            <div>
              <strong>Call Us</strong>
              <a href="tel:+97141234567">+971 4 123 4567</a>
              <span>Available 24/7 for existing guests</span>
            </div>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoIcon}><Mail size={22}/></div>
            <div>
              <strong>Email</strong>
              <a href="mailto:hello@zahluxury.com">hello@zahluxury.com</a>
              <span>Response within 2 business hours</span>
            </div>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoIcon}><MapPin size={22}/></div>
            <div>
              <strong>Office</strong>
              <span>Level 27, Boulevard Plaza Tower 1</span>
              <span>Downtown Dubai, UAE</span>
            </div>
          </div>
          
          <a href="https://wa.me/97141234567" target="_blank" rel="noreferrer" className={styles.whatsappBtn}>
            <MessageCircle size={20}/> Chat on WhatsApp
          </a>

          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178474!2d55.2734!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMjQuMyJF!5e0!3m2!1sen!2s!4v1699900000000!5m2!1sen!2s"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office location"
            />
          </div>
        </div>

        {/* Form Side */}
        <div className={styles.formSide}>
          <h2>Send a Message</h2>
          {submitted ? (
            <div className={styles.successBox}>
              <h4 className="text-gold">Message Sent!</h4>
              <p>Thank you for reaching out. Our team will get back to you within 2 hours.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
              <div className={styles.inputRow}>
                <div className={styles.formGroup}>
                  <label>First Name</label>
                  <input type="text" required placeholder="John" />
                </div>
                <div className={styles.formGroup}>
                  <label>Last Name</label>
                  <input type="text" required placeholder="Smith" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input type="email" required placeholder="john@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input type="tel" placeholder="+971 50 000 0000" />
              </div>
              <div className={styles.formGroup}>
                <label>What can we help you with?</label>
                <select required>
                  <option value="">Select a topic</option>
                  <option>Book a Property</option>
                  <option>Property Management</option>
                  <option>Franchise Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea rows={5} required placeholder="Tell us more..."></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{width:'100%', padding:'15px'}}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
