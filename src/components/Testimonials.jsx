import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Food Blogger",
    content: "The best authentic Biryani in Nagpur. The smoky flavor from the wood fire is something you won't find anywhere else. Pure bliss!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Priya Deshmukh",
    role: "Regular Customer",
    content: "I've tried almost every biryani place, but Chulha Biryani's Dum is on another level. The meat is so tender it falls off the bone.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Amit Verma",
    role: "Tech Professional",
    content: "Quick delivery and the packaging keeps it hot. Their Salan and Raita are also very flavorful. Highly recommended for weekend treats!",
    rating: 4,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="heading-impact" style={{ fontSize: '48px', marginBottom: '10px' }}>
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Over 1,700+ happy biryani lovers in Nagpur</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: '#111',
                padding: '40px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.05)',
                position: 'relative'
              }}
            >
              <Quote 
                size={40} 
                style={{ 
                  position: 'absolute', 
                  top: '20px', 
                  right: '20px', 
                  color: 'rgba(255, 106, 0, 0.1)' 
                }} 
              />
              
              <div style={{ display: 'flex', gap: '2px', marginBottom: '20px' }}>
                {[...Array(5)].map((_, starI) => (
                  <Star 
                    key={starI} 
                    size={16} 
                    fill={starI < t.rating ? 'var(--color-secondary)' : 'transparent'} 
                    color={starI < t.rating ? 'var(--color-secondary)' : '#333'} 
                  />
                ))}
              </div>

              <p style={{ color: '#DDD', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px', fontStyle: 'italic' }}>
                "{t.content}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img 
                  src={t.img} 
                  alt={t.name} 
                  style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} 
                />
                <div>
                  <h4 style={{ fontSize: '18px', color: '#fff' }}>{t.name}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-primary)' }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
