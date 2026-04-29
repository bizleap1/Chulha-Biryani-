import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SmokeLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#0D0D0D',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Smoke Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: window.innerHeight + 100,
                opacity: 0,
                scale: 0.5
              }}
              animate={{ 
                y: -200,
                opacity: [0, 0.3, 0],
                scale: [0.5, 2, 3],
                rotate: Math.random() * 360
              }}
              transition={{ 
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{
                position: 'absolute',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(20px)',
                pointerEvents: 'none'
              }}
            />
          ))}

          {/* Central Logo / Text */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1, 0.9, 1.1, 1],
              opacity: 1,
              filter: [
                'drop-shadow(0 0 5px #FF6A00)',
                'drop-shadow(0 0 20px #FF6A00)',
                'drop-shadow(0 0 10px #D4AF37)',
                'drop-shadow(0 0 30px #FF6A00)',
                'drop-shadow(0 0 15px #FF6A00)'
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ textAlign: 'center', zIndex: 10 }}
          >
            <h1 style={{ 
              fontFamily: 'var(--font-impact)', 
              fontSize: '80px', 
              color: '#fff',
              letterSpacing: '5px',
              margin: 0,
              lineHeight: '1'
            }}>
              CHULHA <br /> <span style={{ color: 'var(--color-primary)' }}>BIRYANI</span>
            </h1>
            <p style={{ 
              color: 'var(--color-secondary)', 
              letterSpacing: '10px', 
              fontSize: '14px', 
              marginTop: '10px',
              fontWeight: 'bold'
            }}>
              TASTE THE FIRE
            </p>
          </motion.div>

          {/* Fire Sparks */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`spark-${i}`}
              initial={{ 
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 100, 
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 50,
                opacity: 1,
                scale: Math.random() * 0.5
              }}
              animate={{ 
                y: window.innerHeight / 2 - 200 - Math.random() * 200,
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 400,
                opacity: 0,
                scale: 0
              }}
              transition={{ 
                duration: 1 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                backgroundColor: i % 2 === 0 ? '#FF6A00' : '#D4AF37',
                borderRadius: '50%',
                boxShadow: '0 0 10px #FF6A00'
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SmokeLoader;
