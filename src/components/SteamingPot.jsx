import React from 'react';
import { motion } from 'framer-motion';

const SteamingPot = () => {
  return (
    <div style={{ position: 'relative', width: '300px', height: '300px', margin: '0 auto' }}>
      {/* Smoke from the pot */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 150, x: 150, opacity: 0, scale: 0.5 }}
          animate={{ 
            y: [150, 0], 
            x: [150, 150 + (i - 2) * 30], 
            opacity: [0, 0.5, 0],
            scale: [0.5, 1.5, 2]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: i * 0.6,
            ease: "easeOut"
          }}
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            filter: 'blur(10px)',
            pointerEvents: 'none'
          }}
        />
      ))}

      {/* SVG Pot */}
      <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 0 10px rgba(255,106,0,0.3))' }}>
        {/* Pot Body */}
        <path 
          d="M40,80 L160,80 Q170,80 170,90 L160,170 Q155,180 140,180 L60,180 Q45,180 40,170 L30,90 Q30,80 40,80 Z" 
          fill="#2A2A2A" 
        />
        {/* Pot Rim */}
        <rect x="25" y="70" width="150" height="15" rx="5" fill="#3A3A3A" />
        {/* Pot Handles */}
        <path d="M25,90 Q10,90 10,110 Q10,130 25,130" fill="none" stroke="#3A3A3A" strokeWidth="8" />
        <path d="M175,90 Q190,90 190,110 Q190,130 175,130" fill="none" stroke="#3A3A3A" strokeWidth="8" />
        
        {/* Fire Glow under the pot */}
        <motion.ellipse 
          cx="100" cy="185" rx="50" ry="10" 
          fill="rgba(255, 106, 0, 0.4)"
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
      
      {/* Lid (slightly tilted) */}
      <motion.div
        animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '65px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '160px',
          height: '20px',
          backgroundColor: '#4A4A4A',
          borderRadius: '20px 20px 5px 5px',
          zIndex: 5
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '40px',
          height: '15px',
          backgroundColor: '#3A3A3A',
          borderRadius: '5px'
        }}></div>
      </motion.div>
    </div>
  );
};

export default SteamingPot;
