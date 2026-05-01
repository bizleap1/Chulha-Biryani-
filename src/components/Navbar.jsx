import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: isScrolled ? '15px 0' : '25px 0',
      backgroundColor: isScrolled ? 'rgba(13, 13, 13, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 106, 0, 0.1)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '28px', color: 'var(--color-primary)' }}>🔥</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '24px', 
              fontWeight: '700',
              lineHeight: '1',
              color: '#fff' 
            }}>CHULHA BIRYANI</span>
            <span style={{ 
              fontSize: '10px', 
              letterSpacing: '2px', 
              color: 'var(--color-secondary)',
              textTransform: 'uppercase'
            }}>Authentic Dum</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'none', gap: '30px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              style={{
                fontSize: '15px',
                fontWeight: '500',
                color: location.pathname === link.path ? 'var(--color-primary)' : '#fff',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'color 0.3s'
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/order" style={{ position: 'relative' }}>
              <ShoppingCart size={24} color="#fff" />
              {totalItems > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: 'var(--color-primary)',
                  color: '#fff',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid var(--color-bg)'
                }}>
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to="/order" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 24px', fontSize: '14px' }}>
              ORDER NOW
            </Link>
          </div>
        </div>

        {/* Mobile Toggle & Cart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link to="/order" style={{ position: 'relative' }} className="mobile-only">
            <ShoppingCart size={24} color="#fff" />
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: 'var(--color-primary)',
                color: '#fff',
                fontSize: '10px',
                fontWeight: 'bold',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--color-bg)'
              }}>
                {totalItems}
              </span>
            )}
          </Link>
          <button 
            className="mobile-toggle" 
            style={{ background: 'none', border: 'none', color: '#fff', display: 'block' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-bg)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: '18px',
                color: location.pathname === link.path ? 'var(--color-primary)' : '#fff',
                textTransform: 'uppercase'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/order" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)} style={{ textAlign: 'center' }}>
            ORDER NOW
          </Link>
        </div>
      )}
      
      <style>{`
        .mobile-only { display: none; }
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .mobile-only { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
