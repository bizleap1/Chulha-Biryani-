import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Star, Flame, Users, ArrowRight } from 'lucide-react';
import SmokeEffect from '../components/SmokeEffect';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(rgba(13,13,13,0.7), rgba(13,13,13,0.9)), url("https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
        overflow: 'hidden'
      }}>
        <SmokeEffect />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              fontSize: 'clamp(40px, 8vw, 80px)', 
              lineHeight: '1.1',
              marginBottom: '20px',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}
          >
            Smoky Dum Biryani <br /> Cooked on <span className="text-gradient">Real Chulha</span> 🔥
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              fontSize: 'clamp(16px, 2vw, 22px)', 
              color: 'var(--color-text-muted)', 
              maxWidth: '700px', 
              margin: '0 auto 40px',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            Authentic, Fresh, Tasty & Lazeez Chulha Dum Biryani. Experience the rich heritage of slow-cooked perfection.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/order" className="btn-primary" style={{ padding: '15px 40px', fontSize: '18px' }}>
              ORDER NOW
            </Link>
            <Link to="/menu" className="btn-secondary" style={{ padding: '15px 40px', fontSize: '18px' }}>
              EXPLORE MENU
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Special Unlimited Offer Section */}
      <section style={{ 
        padding: '60px 0', 
        backgroundColor: 'var(--color-primary)', 
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '4px solid #fff'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <h2 style={{ 
              fontFamily: 'var(--font-impact)', 
              fontSize: 'clamp(40px, 10vw, 120px)', 
              lineHeight: '0.9',
              marginBottom: '15px',
              textTransform: 'uppercase',
              textShadow: '0 10px 40px rgba(0,0,0,0.3)'
            }}>
              Unlimited Biryani
            </h2>
            <div style={{ 
              fontSize: 'clamp(24px, 5vw, 60px)', 
              fontFamily: 'var(--font-impact)',
              backgroundColor: '#fff', 
              color: 'var(--color-primary)',
              display: 'inline-block',
              padding: '10px 40px',
              borderRadius: '8px',
              marginBottom: '20px',
              boxShadow: '0 15px 45px rgba(0,0,0,0.4)',
              transform: 'rotate(-2deg)'
            }}>
              JUST ₹99/-
            </div>
            <p style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '3px', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
              🔥 Exclusive Dine-In Offer • Pure Chulha Dum 🔥
            </p>
          </motion.div>
        </div>
        
        {/* Background Decorative Element */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '250px',
          fontFamily: 'var(--font-impact)',
          color: 'rgba(255,255,255,0.1)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 1
        }}>
          SPECIAL OFFER
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: '#111', padding: '60px 0', borderBottom: '1px solid rgba(255,106,0,0.1)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px' }}>
          {[
            { num: '1760+', text: 'Happy Customers' },
            { num: '100%', text: 'Authentic Dum' },
            { num: '4.9/5', text: 'Average Rating' },
            { num: '0', text: 'Artificial Colors' }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-impact)', fontSize: '48px', color: 'var(--color-primary)' }}>{stat.num}</h3>
              <p style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Dishes Preview */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="heading-impact" style={{ fontSize: '48px', marginBottom: '10px' }}>Signature <span className="text-gradient">Dishes</span></h2>
            <p style={{ color: 'var(--color-text-muted)' }}>The pride of Chulha Biryani, loved by everyone.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { name: 'Chicken Chulha Dum', price: '₹349', tag: '🔥 Most Ordered', img: '/images/chicken_chulha_dum.png' },
              { name: 'Mutton Royal Handi', price: '₹499', tag: '👑 Chef Special', img: '/images/mutton_royal_handi.png' },
              { name: 'Mutton Keema Dum', price: '₹549', tag: '⭐ Royal Choice', img: '/images/mutton_keema_dum.png' }
            ].map((dish, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                style={{
                  backgroundColor: '#161616',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <div style={{ position: 'relative', height: '250px' }}>
                  <img src={dish.img} alt={dish.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    backgroundColor: 'rgba(13,13,13,0.8)',
                    color: 'var(--color-secondary)',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    backdropFilter: 'blur(4px)'
                  }}>{dish.tag}</span>
                </div>
                <div style={{ padding: '25px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h3 style={{ fontSize: '22px' }}>{dish.name}</h3>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '20px' }}>{dish.price}</span>
                  </div>
                  <Link to="/order" className="btn-secondary" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '10px' }}>
                    Order Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/menu" style={{ color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: 'bold' }}>
              View Full Menu <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Chulha Section */}
      <section className="section-padding" style={{ backgroundColor: '#111' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="heading-impact" style={{ fontSize: '48px', marginBottom: '10px' }}>Why <span className="text-gradient">Chulha Biryani</span>?</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            {[
              { icon: <Flame size={40} />, title: 'Real Fire Cooking', desc: 'Cooked on wood fire for that authentic smoky aroma.' },
              { icon: <Clock size={40} />, title: 'Slow Dum Process', desc: 'Cooked for hours in sealed handis to lock in flavors.' },
              { icon: <Star size={40} />, title: 'Premium Spices', desc: 'Hand-picked whole spices blended to perfection.' },
              { icon: <Users size={40} />, title: 'Family Recipes', desc: 'Secret recipes passed down through generations.' }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ color: 'var(--color-primary)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

    </div>
  );
};

export default Home;
