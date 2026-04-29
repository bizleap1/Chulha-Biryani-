import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  return (
    <motion.a 
      href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20order%20Chulha%20Biryani."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
        zIndex: 999,
        textDecoration: 'none'
      }}
    >
      <MessageCircle size={32} />
      
      {/* Notification dot */}
      <span style={{
        position: 'absolute',
        top: '0px',
        right: '0px',
        width: '15px',
        height: '15px',
        backgroundColor: '#FF3B30',
        borderRadius: '50%',
        border: '2px solid #0D0D0D'
      }}></span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
