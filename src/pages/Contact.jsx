import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709424296!2d79.002467!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714310000000!5m2!1sen!2sin";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=21.1458,79.0025";

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container section-padding">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 className="heading-impact" style={{ fontSize: '60px', marginBottom: '15px' }}>
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '18px' }}>
            Have a question, bulk order, or catering inquiry? Let us know!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          
          {/* Contact Details */}
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '30px', color: 'var(--color-secondary)' }}>Contact Info</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <MapPin size={28} style={{ color: 'var(--color-primary)' }} />
                <div>
                  <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>Address</h4>
                  <p style={{ color: 'var(--color-text-muted)', marginBottom: '10px' }}>123 Food Street, VIP Road,<br/>Nagpur, Maharashtra 440010</p>
                  <a 
                    href={directionsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'var(--color-primary)', 
                      fontSize: '14px', 
                      fontWeight: 'bold', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '5px' 
                    }}
                  >
                    <Navigation size={14} /> GET DIRECTIONS
                  </a>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <Phone size={28} style={{ color: 'var(--color-primary)' }} />
                <div>
                  <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>Phone</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>+91 98765 43210</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <Mail size={28} style={{ color: 'var(--color-primary)' }} />
                <div>
                  <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>Email</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>hello@chulhabiryani.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <Clock size={28} style={{ color: 'var(--color-primary)' }} />
                <div>
                  <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>Opening Hours</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>Mon - Sun: 12:00 PM - 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#111',
              padding: '40px',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            <h2 style={{ fontSize: '28px', marginBottom: '30px' }}>Send a Message</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '15px', backgroundColor: '#1A1A1A', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} required />
              <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '15px', backgroundColor: '#1A1A1A', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} required />
              <input type="tel" placeholder="Phone Number" style={{ width: '100%', padding: '15px', backgroundColor: '#1A1A1A', border: '1px solid #333', borderRadius: '6px', color: '#fff' }} />
              <textarea placeholder="Your Message" rows="4" style={{ width: '100%', padding: '15px', backgroundColor: '#1A1A1A', border: '1px solid #333', borderRadius: '6px', color: '#fff', resize: 'vertical' }} required></textarea>
              <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>Send Message</button>
            </form>
          </motion.div>

        </div>

        {/* Map Embed */}
        <div style={{ marginTop: '60px', width: '100%', height: '450px', backgroundColor: '#1A1A1A', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
          <iframe 
            src={mapUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
