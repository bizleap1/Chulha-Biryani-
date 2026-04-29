import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#050505',
      borderTop: '1px solid rgba(255, 106, 0, 0.2)',
      padding: '80px 0 30px',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{ fontSize: '28px' }}>🔥</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '700', color: '#fff' }}>
                CHULHA BIRYANI
              </span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
              Authentic, smoky dum biryani cooked on traditional chulha. Experience the real taste of heritage.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: 'var(--color-primary)' }}><Globe size={24} /></a>
              <a href="#" style={{ color: 'var(--color-primary)' }}><Share2 size={24} /></a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--color-secondary)' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link to="/menu" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }}>Explore Menu</Link>
              <Link to="/about" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }}>Our Story</Link>
              <Link to="/contact" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }}>Contact Us</Link>
              <Link to="/order" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Order Now</Link>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--color-secondary)' }}>Contact Info</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--color-text-muted)' }}>
                <MapPin size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span>123 Food Street, VIP Road, Nagpur, Maharashtra</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text-muted)' }}>
                <Phone size={20} style={{ color: 'var(--color-primary)' }} />
                <span>+91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text-muted)' }}>
                <Mail size={20} style={{ color: 'var(--color-primary)' }} />
                <span>hello@chulhabiryani.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Col */}
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px', color: 'var(--color-secondary)' }}>Newsletter</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '15px' }}>
              Subscribe for exclusive offers and secret menu drops!
            </p>
            <form style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={{
                  flex: 1,
                  padding: '12px 15px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  borderRadius: '4px',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn-primary" style={{ padding: '12px 20px', animation: 'none' }}>
                JOIN
              </button>
            </form>
          </div>

        </div>

        <div style={{ 
          textAlign: 'center', 
          paddingTop: '30px', 
          borderTop: '1px solid rgba(255,255,255,0.05)',
          color: 'var(--color-text-muted)',
          fontSize: '14px'
        }}>
          <p>&copy; {new Date().getFullYear()} Chulha Biryani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
