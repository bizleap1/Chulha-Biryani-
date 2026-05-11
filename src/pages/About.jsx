import React from 'react';
import { motion } from 'framer-motion';
import SteamingPot from '../components/SteamingPot';

const About = () => {
  const timeline = [
    { year: '2018', title: 'The Spark', desc: 'Inspired by grandmother\'s wood-fire cooking, we decided to bring back the authentic smoky taste to the city.' },
    { year: '2019', title: 'The First Handi', desc: 'Opened our first small outlet in Nagpur with just two Chulhas and a passion for perfection.' },
    { year: '2021', title: 'Growing Community', desc: 'Word spread fast. We expanded to a larger kitchen to meet the growing demand of biryani lovers.' },
    { year: '2023', title: 'Cultural Icon', desc: 'Recognized as the most authentic smoky biryani destination in the region.' },
    { year: '2025', title: 'Modern Heritage', desc: 'Continuing to serve thousands while keeping the traditional wood-fire process alive.' }
  ];

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#050505', color: '#fff' }}>
      <div className="container section-padding">
        
        {/* Story Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h1 className="heading-impact" style={{ fontSize: '60px', marginBottom: '20px' }}>
              The <span className="text-gradient">Heritage</span> of Smoke
            </h1>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
              Our story began with a simple observation: modern biryani had lost its soul. In the race for speed and convenience, the traditional art of wood-fire cooking was being replaced by gas stoves and industrial ovens.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
              At Chulha Biryani, we believe that the flame is an ingredient. The gentle, uneven heat of the wood fire, the subtle infusion of smoke into every grain of rice, and the slow "Dum" process in copper handis create a flavor profile that is impossible to replicate.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
              Every day, our master chefs arrive at dawn to light the chulhas. It's a labor of love, a commitment to quality, and a tribute to our ancestors who understood that great food takes time.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(255,106,0,0.2)' }}
          >
            <img 
              src="/images/chulha.jpeg" 
              alt="Traditional Chulha Cooking" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', 
              padding: '20px',
              textAlign: 'center'
            }}>
              <p style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '14px', letterSpacing: '2px' }}>THE AUTHENTIC FIRE</p>
            </div>
          </motion.div>

        </div>

        {/* Timeline Section */}
        <div style={{ marginTop: '120px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="heading-impact" style={{ fontSize: '48px', color: 'var(--color-secondary)' }}>Our Journey</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--color-primary)', margin: '20px auto' }}></div>
          </div>

          <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            {/* Vertical Line */}
            <div style={{ 
              position: 'absolute', 
              left: '50%', 
              top: 0, 
              bottom: 0, 
              width: '2px', 
              background: 'rgba(255,106,0,0.2)',
              transform: 'translateX(-50%)'
            }}></div>

            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ 
                  display: 'flex', 
                  justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  alignItems: 'center',
                  marginBottom: '60px',
                  width: '100%',
                  position: 'relative'
                }}
              >
                {/* Year Marker */}
                <div style={{ 
                  position: 'absolute', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--color-primary)',
                  boxShadow: '0 0 15px var(--color-primary)',
                  zIndex: 2
                }}></div>

                <div style={{ 
                  width: '45%', 
                  backgroundColor: '#111', 
                  padding: '30px', 
                  borderRadius: '15px',
                  border: '1px solid rgba(255,106,0,0.1)',
                  textAlign: i % 2 === 0 ? 'right' : 'left'
                }}>
                  <span style={{ 
                    fontFamily: 'var(--font-impact)', 
                    fontSize: '24px', 
                    color: 'var(--color-primary)',
                    display: 'block',
                    marginBottom: '10px'
                  }}>{item.year}</span>
                  <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#fff' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div style={{ 
          marginTop: '120px', 
          backgroundColor: '#111', 
          padding: '80px 40px', 
          borderRadius: '30px', 
          textAlign: 'center',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <h2 className="heading-impact" style={{ fontSize: '42px', marginBottom: '20px' }}>Our Mission</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '20px', color: 'var(--color-text-muted)', fontStyle: 'italic', lineHeight: '1.6' }}>
            "To preserve the dying art of chulha cooking and deliver the most authentic, smoky culinary experience to every household, one handi at a time."
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
