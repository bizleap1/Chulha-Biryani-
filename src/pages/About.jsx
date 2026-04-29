import React from 'react';
import { motion } from 'framer-motion';
import SteamingPot from '../components/SteamingPot';

const About = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container section-padding">
        
        {/* Story Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h1 className="heading-impact" style={{ fontSize: '60px', marginBottom: '20px' }}>
              From <span className="text-gradient">Fire</span> to <span className="text-gradient">Flavor</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
              Chulha Biryani isn't just a restaurant; it's a revival of forgotten culinary heritage. We believe that modern cooking methods, while fast, strip away the soul of a true biryani.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
              That's why we went back to the roots. Real wood fire. Heavy bottom copper handis. Slow cooking over embers for hours. The result? A smoky, aromatic, and profoundly flavorful biryani that you simply cannot replicate on a gas stove.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <SteamingPot />
          </motion.div>

        </div>

        {/* Process Section */}
        <div style={{ marginTop: '120px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="heading-impact" style={{ fontSize: '48px', color: 'var(--color-secondary)' }}>The Chulha Process</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>How we bring the magic to your plate</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { step: '01', title: 'Marination', desc: 'Meats marinated for 12 hours in secret spices.' },
              { step: '02', title: 'Layering', desc: 'Basmati rice and meat layered carefully in Handi.' },
              { step: '03', title: 'Dum Cooking', desc: 'Sealed with dough and slow-cooked on wood fire.' },
              { step: '04', title: 'Serve Hot', desc: 'Opened fresh, releasing the trapped smoky aromas.' }
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                style={{ 
                  backgroundColor: '#111', 
                  padding: '40px 30px', 
                  borderRadius: '8px',
                  border: '1px solid rgba(255,106,0,0.1)',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <div style={{ 
                  fontFamily: 'var(--font-impact)', 
                  fontSize: '80px', 
                  color: 'rgba(255,255,255,0.03)',
                  position: 'absolute',
                  top: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  lineHeight: '1'
                }}>{p.step}</div>
                <h3 style={{ fontSize: '22px', marginBottom: '15px', color: 'var(--color-primary)', position: 'relative', zIndex: 2 }}>{p.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', position: 'relative', zIndex: 2 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
