import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart, totalItems } = useCart();

  const categories = ['All', 'Biryani', 'Mutton', 'Sides', 'Combos'];

  const menuItems = [
    { id: 1, name: 'Chicken Chulha Dum', category: 'Biryani', price: 349, tag: '🔥 Most Ordered', spice: '🌶️🌶️', size: 'Serves 1-2', img: '/images/chicken_chulha_dum.png' },
    { id: 2, name: 'Mutton Royal Handi', category: 'Mutton', price: 499, tag: '👑 Chef Special', spice: '🌶️🌶️🌶️', size: 'Serves 2', img: '/images/mutton_royal_handi.png' },
    { id: 3, name: 'Special Chicken Tikka Biryani', category: 'Biryani', price: 399, tag: '🔥 New', spice: '🌶️🌶️', size: 'Serves 1-2', img: '/images/special_chicken_tikka.png' },
    { id: 8, name: 'Mutton Keema Dum Biryani', category: 'Mutton', price: 549, tag: 'Royal', spice: '🌶️🌶️🌶️', size: 'Serves 2', img: '/images/mutton_keema_dum.png' },
    { id: 4, name: 'Egg Dum Biryani', category: 'Biryani', price: 249, tag: '', spice: '🌶️🌶️', size: 'Serves 1', img: 'https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&q=80&w=600' },
    { id: 5, name: 'Chicken 65', category: 'Sides', price: 220, tag: 'Crispy', spice: '🌶️🌶️', size: 'Serves 2', img: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&q=80&w=600' },
    { id: 9, name: 'Chicken Tandoori', category: 'Sides', price: 280, tag: 'Wood-fired', spice: '🌶️🌶️', size: 'Half / Full', img: '/images/chicken_tandoori.png' },
    { id: 10, name: 'Chicken Pakoda', category: 'Sides', price: 180, tag: 'Tea Time', spice: '🌶️', size: 'Serves 2', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600' },
    { id: 6, name: 'Couple Combo', category: 'Combos', price: 699, tag: 'Save 15%', spice: '🌶️🌶️', size: 'Serves 2', img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600', desc: '1 Chicken Biryani + 1 Starter + 2 Beverages' },
    { id: 7, name: 'Family Pack Bucket', category: 'Combos', price: 1299, tag: '1KG Bucket', spice: '🌶️🌶️', size: 'Serves 4-5', img: 'https://images.unsplash.com/photo-1631515242808-497c3fbd3972?auto=format&fit=crop&q=80&w=600', desc: '1KG Chicken Biryani + 2 Starters + Raita + Salan + 4 Beverages' },
  ];

  const filteredItems = activeCategory === 'All' ? menuItems : menuItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* Header */}
      <div style={{ 
        textAlign: 'center', 
        padding: '60px 20px',
        background: 'linear-gradient(rgba(13,13,13,0.8), #0D0D0D), url("https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80") center/cover',
        borderBottom: '1px solid rgba(255,106,0,0.2)'
      }}>
        <h1 className="heading-impact" style={{ fontSize: '60px', marginBottom: '15px' }}>Our <span className="text-gradient">Menu</span></h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
          Explore our range of authentic, wood-fire cooked dum biryanis and perfectly crafted sides.
        </p>
      </div>

      <div className="container section-padding">
        
        {/* Filters */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px', 
          flexWrap: 'wrap',
          marginBottom: '50px'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? 'var(--color-primary)' : 'transparent',
                color: activeCategory === cat ? '#fff' : 'var(--color-text-muted)',
                border: `1px solid ${activeCategory === cat ? 'var(--color-primary)' : 'rgba(255,255,255,0.2)'}`,
                padding: '8px 24px',
                borderRadius: '30px',
                transition: 'all 0.3s',
                fontWeight: '500'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '30px' 
        }}>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: '#141414',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '220px', position: 'relative' }}>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {item.tag && (
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: item.tag.includes('🔥') ? 'var(--color-primary)' : 'var(--color-secondary)',
                    color: item.tag.includes('🔥') ? '#fff' : '#000',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}>{item.tag}</span>
                )}
              </div>
              
              <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-heading)' }}>{item.name}</h3>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '20px' }}>₹{item.price}</span>
                </div>
                
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', fontSize: '14px', color: 'var(--color-text-muted)' }}>
                  <span>{item.spice} Spice</span>
                  <span>•</span>
                  <span>{item.size}</span>
                </div>

                {item.desc && (
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '20px' }}>{item.desc}</p>
                )}
                
                <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                  <button 
                    onClick={() => addToCart(item)}
                    className="btn-primary" 
                    style={{ display: 'block', textAlign: 'center', width: '100%', padding: '12px' }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Sticky Mobile Order Bar */}
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            right: '20px',
            backgroundColor: 'var(--color-primary)',
            color: '#fff',
            padding: '15px 25px',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShoppingCart size={24} />
            <div>
              <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{totalItems} Items Added</p>
              <p style={{ fontSize: '12px', opacity: 0.8 }}>Ready for Dum?</p>
            </div>
          </div>
          <Link to="/order" style={{ 
            backgroundColor: '#fff', 
            color: 'var(--color-primary)', 
            padding: '8px 20px', 
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            VIEW CART →
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Menu;
