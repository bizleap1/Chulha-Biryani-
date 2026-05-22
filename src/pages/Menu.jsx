import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart, totalItems } = useCart();

  const categories = ['All', 'Biryani', 'Mutton', 'Tandoor & Sides'];

  const menuItems = [
    { id: 1, name: 'Unlimited Chicken Biryani', category: 'Biryani', price: 99, tag: '🔥 Special', spice: '🌶️🌶️', size: '2 Pcs + Unlimited Rice (Dine-in only)', img: '/images/chicken_chulha_dum.png', desc: 'Unlimited Regular Rice per person' },
    { 
      id: 2, name: 'Mutton Biryani', category: 'Mutton', tag: '👑 Royal', spice: '🌶️🌶️🌶️', img: '/images/mutton_royal_handi.png',
      variants: [
        { id: '2-half', size: 'Half', price: 150, name: 'Mutton Biryani (Half)' },
        { id: '2-full', size: 'Full', price: 280, name: 'Mutton Biryani (Full)' }
      ]
    },
    { 
      id: 3, name: 'Chicken Biryani (Regular)', category: 'Biryani', tag: '', spice: '🌶️🌶️', img: 'https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&q=80&w=600',
      variants: [
        { id: '3-half', size: 'Half', price: 80, name: 'Chicken Biryani - Regular (Half)' },
        { id: '3-full', size: 'Full', price: 150, name: 'Chicken Biryani - Regular (Full)' }
      ]
    },
    { 
      id: 4, name: 'Chicken Special Biryani', category: 'Biryani', tag: 'Davat Basmati', spice: '🌶️🌶️', img: '/images/special_chicken_tikka.png',
      variants: [
        { id: '4-half', size: 'Half', price: 100, name: 'Chicken Special Biryani (Half)' },
        { id: '4-full', size: 'Full', price: 180, name: 'Chicken Special Biryani (Full)' }
      ]
    },
    { 
      id: 5, name: 'Chicken Pakoda', category: 'Tandoor & Sides', tag: 'Crispy', spice: '🌶️', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600',
      variants: [
        { id: '5-half', size: 'Half', price: 60, name: 'Chicken Pakoda (Half)' },
        { id: '5-full', size: 'Full', price: 120, name: 'Chicken Pakoda (Full)' }
      ]
    },
    { 
      id: 6, name: 'Chicken Lollipop', category: 'Tandoor & Sides', tag: 'Starts at ₹50', spice: '🌶️🌶️', img: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&q=80&w=600', desc: 'Per piece pricing',
      variants: [
        { id: '6-reg', size: 'Regular (1 Pc)', price: 50, name: 'Chicken Lollipop (Regular)' },
        { id: '6-lrg', size: 'Large (1 Pc)', price: 60, name: 'Chicken Lollipop (Large)' }
      ]
    },
    { 
      id: 7, name: 'Tandoori Chicken', category: 'Tandoor & Sides', tag: 'Wood-fired', spice: '🌶️🌶️', img: '/images/chicken_tandoori.png',
      variants: [
        { id: '7-half', size: 'Half', price: 210, name: 'Tandoori Chicken (Half)' },
        { id: '7-full', size: 'Full', price: 400, name: 'Tandoori Chicken (Full)' }
      ]
    },
    { 
      id: 8, name: 'Special Tandoori Chicken', category: 'Tandoor & Sides', tag: 'Chef Special', spice: '🌶️🌶️🌶️', img: '/images/chicken_tandoori.png',
      variants: [
        { id: '8-half', size: 'Half', price: 240, name: 'Special Tandoori Chicken (Half)' },
        { id: '8-full', size: 'Full', price: 450, name: 'Special Tandoori Chicken (Full)' }
      ]
    },
    { id: 9, name: 'Tandoori Whole Fish', category: 'Tandoor & Sides', price: 100, tag: 'Seafood', spice: '🌶️🌶️', size: '1 Piece', img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600' },
    { id: 10, name: 'Boneless Tandoori Fish', category: 'Tandoor & Sides', price: 80, tag: 'Seafood', spice: '🌶️🌶️', size: '1 Piece', img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600' },
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
        <h1 className="heading-impact" style={{ fontSize: 'clamp(3rem, 8vw, 4rem)', marginBottom: '15px' }}>Our <span className="text-gradient">Menu</span></h1>
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
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '20px' }}>
                    {item.variants ? `₹${item.variants[0].price} - ₹${item.variants[1].price}` : `₹${item.price}`}
                  </span>
                </div>
                
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', fontSize: '14px', color: 'var(--color-text-muted)' }}>
                  <span>{item.spice} Spice</span>
                  {item.size && (
                    <>
                      <span>•</span>
                      <span>{item.size}</span>
                    </>
                  )}
                </div>

                {item.desc && (
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '20px' }}>{item.desc}</p>
                )}
                
                <div style={{ marginTop: 'auto', paddingTop: '20px', display: 'flex', gap: '10px', flexDirection: 'column' }}>
                  {item.variants ? (
                    item.variants.map(variant => (
                      <button 
                        key={variant.id}
                        onClick={() => addToCart({ ...item, ...variant })}
                        className="btn-primary" 
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px 15px', fontSize: '14px' }}
                      >
                        <span>ADD {variant.size.toUpperCase()}</span>
                        <span>₹{variant.price}</span>
                      </button>
                    ))
                  ) : (
                    <button 
                      onClick={() => addToCart(item)}
                      className="btn-primary" 
                      style={{ display: 'block', textAlign: 'center', width: '100%', padding: '12px' }}
                    >
                      ADD TO CART
                    </button>
                  )}
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
