import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Trash2, Plus, Minus, CheckCircle } from 'lucide-react';

const Order = () => {
  const [recentOrder, setRecentOrder] = useState(142);
  const { cart, totalItems, addToCart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRecentOrder(prev => prev + 1);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    
    let message = "Hello Chulha Biryani! 🥘\n\nI would like to place an order:\n\n";
    cart.forEach(item => {
      message += `- ${item.name} (x${item.quantity}): ₹${item.price * item.quantity}\n`;
    });
    message += `\n*Total Amount: ₹${totalPrice}*\n\n`;
    message += "Please book the delivery via Porter. 🚚\n\nMy delivery details are:\nName: \nAddress: \nContact: ";
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, '_blank');
  };

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '80px' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ 
              display: 'inline-block',
              background: 'rgba(255, 59, 48, 0.1)',
              color: '#FF3B30',
              padding: '8px 16px',
              borderRadius: '20px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}
          >
            🔥 Order Now Before It's Sold Out!
          </motion.div>
          <h1 className="heading-impact" style={{ fontSize: '60px', marginBottom: '15px' }}>
            Review Your <span className="text-gradient">Selection</span>
          </h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'start' }}>
          
          {/* Cart Section */}
          <div style={{ 
            backgroundColor: '#111', 
            padding: '30px', 
            borderRadius: '16px', 
            border: '1px solid rgba(255,255,255,0.05)' 
          }}>
            <h2 style={{ fontSize: '24px', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShoppingBag color="var(--color-primary)" /> Your Cart ({totalItems})
            </h2>

            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>Your handi is empty!</p>
                <motion.a href="/menu" className="btn-secondary" style={{ padding: '8px 20px', fontSize: '14px' }}>Go to Menu</motion.a>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <AnimatePresence>
                  {cart.map((item) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        paddingBottom: '15px',
                        borderBottom: '1px solid rgba(255,255,255,0.05)'
                      }}
                    >
                      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <img src={item.img} style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} alt={item.name} />
                        <div>
                          <h4 style={{ fontSize: '16px' }}>{item.name}</h4>
                          <p style={{ fontSize: '14px', color: 'var(--color-primary)', fontWeight: 'bold' }}>₹{item.price * item.quantity}</p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#666' }}>
                          <Trash2 size={18} />
                        </button>
                        <span style={{ fontWeight: 'bold', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                        <button onClick={() => addToCart(item)} style={{ background: 'none', border: 'none', color: 'var(--color-primary)' }}>
                          <Plus size={18} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>Subtotal</span>
                    <span style={{ fontWeight: 'bold' }}>₹{totalPrice}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>Delivery</span>
                    <span style={{ color: '#00C853', fontWeight: 'bold' }}>Calculated on WhatsApp</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '20px' }}>
                    <span style={{ fontWeight: 'bold' }}>Total</span>
                    <span style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>₹{totalPrice}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Checkout Platform */}
          <div>
            <div style={{ 
              backgroundColor: '#161616', 
              padding: '30px', 
              borderRadius: '16px', 
              border: '1px solid rgba(255,106,0,0.1)',
              marginBottom: '30px'
            }}>
              <h2 style={{ fontSize: '24px', marginBottom: '25px', color: 'var(--color-secondary)' }}>Place Order</h2>
              
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                onClick={handleWhatsAppOrder}
                style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#25D366', 
                  color: 'white', 
                  padding: '18px 25px', 
                  borderRadius: '8px', 
                  fontWeight: 'bold', 
                  fontSize: '18px',
                  width: '100%',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Order via WhatsApp
              </motion.button>
              
              <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'rgba(37, 211, 102, 0.1)', borderRadius: '8px', border: '1px dashed #25D366' }}>
                <p style={{ color: '#fff', fontSize: '14px', lineHeight: '1.5' }}>
                  Clicking the button will open WhatsApp with your cart details. <strong>Book a Porter for your delivery!</strong>
                </p>
              </div>
            </div>

            {/* Live Activity Feed */}
            <motion.div 
              key={recentOrder}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                textAlign: 'center',
                padding: '15px',
                backgroundColor: '#111',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <p style={{ color: 'var(--color-primary)', fontSize: '14px' }}>
                🔔 <strong>Order #{recentOrder}</strong> just placed in Manish Nagar!
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Order;
