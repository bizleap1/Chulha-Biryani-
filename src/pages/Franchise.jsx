import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Cpu, 
  Utensils, 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  BadgeIndianRupee,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import franchiseHero from '../assets/franchise_hero_biryani.png';

const Franchise = () => {
  const [activeTab, setActiveTab] = useState('investment');
  const [selectedPackageId, setSelectedPackageId] = useState('standard');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const packages = [
    {
      id: "standard",
      name: "Standard Model",
      price: "₹15 Lakhs",
      royalty: "10% Monthly Royalty",
      agreement: "4 Years Agreement",
      features: [
        "Takeaway focused model",
        "Essential Kitchen Setup",
        "Standard Store Branding",
        "Full Deliverables Support",
        "Digital Marketing Launch"
      ],
      popular: true
    },
    {
      id: "premium",
      name: "Premium Model",
      price: "₹30 Lakhs",
      royalty: "8% Monthly Royalty",
      agreement: "5 Years Agreement",
      features: [
        "Dine-in + Takeaway model",
        "Advanced Kitchen Suite",
        "Premium Interior Design",
        "Priority Operational Support",
        "Comprehensive Regional Marketing",
        "Higher ROI Potential"
      ],
      popular: false
    }
  ];

  const packageData = {
    standard: {
      investmentTotal: "₹15,00,000/-",
      breakdown: [
        { particular: "Franchise License Fee", amount: "₹6,00,000", remark: "Brand Name Authorization" },
        { particular: "Kitchen Equipment & Utensils", amount: "₹2,00,000", remark: "Hundis, Gas burners & specialized equipment" },
        { particular: "Freezer, Kitchen Tables & Chimney", amount: "₹2,00,000", remark: "Commercial grade setup" },
        { particular: "ACP Signage Board & Glasswork", amount: "₹3,00,000", remark: "Front elevation & exterior branding" },
        { particular: "Interior Branding & Cash Counter", amount: "₹2,00,000", remark: "Menu boards & internal aesthetics" },
      ],
      financials: {
        expenses: [
          { item: "Monthly Royalty Fee", cost: "₹15,000" },
          { item: "Labour Salaries", cost: "₹70,000" },
          { item: "Property Rent", cost: "₹50,000" },
          { item: "Electricity & Water", cost: "₹13,000" },
          { item: "Packaging Expenses", cost: "₹72,000" },
          { item: "Food Preparation (COGS)", cost: "₹4,86,000" },
          { item: "Miscellaneous", cost: "₹10,000" }
        ],
        summary: {
          totalSales: "₹10,74,600",
          totalExpenses: "₹7,16,000",
          netProfit: "₹3,58,600",
          salesVolume: "90 Hundis / Month"
        }
      }
    },
    premium: {
      investmentTotal: "₹30,00,000/-",
      breakdown: [
        { particular: "Franchise License Fee", amount: "₹10,000,000", remark: "Premium Brand Authorization" },
        { particular: "Advanced Kitchen Equipment", amount: "₹6,00,000", remark: "High-capacity automated setup" },
        { particular: "Premium Furniture & Interior", amount: "₹6,00,000", remark: "Luxury dine-in aesthetic" },
        { particular: "High-end Signage & Exterior", amount: "₹5,00,000", remark: "Standout street presence" },
        { particular: "Advanced POS & Tech Setup", amount: "₹3,00,000", remark: "Integrated digital ecosystem" },
      ],
      financials: {
        expenses: [
          { item: "Monthly Royalty Fee", cost: "₹24,000" },
          { item: "Labour Salaries", cost: "₹1,20,000" },
          { item: "Property Rent", cost: "₹1,00,000" },
          { item: "Electricity & Water", cost: "₹25,000" },
          { item: "Packaging Expenses", cost: "₹1,00,000" },
          { item: "Food Preparation (COGS)", cost: "₹9,00,000" },
          { item: "Miscellaneous", cost: "₹20,000" }
        ],
        summary: {
          totalSales: "₹17,91,000",
          totalExpenses: "₹12,89,000",
          netProfit: "₹5,02,000",
          salesVolume: "150 Hundis / Month"
        }
      }
    }
  };

  const deliverables = [
    { icon: <ShieldCheck className="text-primary" />, title: "Brand Authorization", desc: "Exclusive rights to operate under the renowned Chulha Biryani name." },
    { icon: <Users className="text-primary" />, title: "Chef & Staff Support", desc: "Dedicated chefs and assistants with operational support." },
    { icon: <TrendingUp className="text-primary" />, title: "Marketing Suite", desc: "Initial marketing, digital ad campaigns, and influencer partnerships." },
    { icon: <Cpu className="text-primary" />, title: "Digital Ecosystem", desc: "Petpooja Billing (1 Year) & Swiggy/Zomato integrations." },
    { icon: <Globe className="text-primary" />, title: "Regional Support", desc: "Access to Regional Managers for operational guidance and growth." },
    { icon: <Utensils className="text-primary" />, title: "Inventory Management", desc: "Assistance with planning and seamless logistics for operations." }
  ];

  const currentData = packageData[selectedPackageId];

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', color: '#fff', overflow: 'hidden' }}>
      
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${franchiseHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h1 className="heading-impact" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '20px' }}>
            PARTNER WITH <span className="text-gradient">SUCCESS</span>
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px', color: 'var(--color-text-muted)' }}>
            Own a piece of the authentic smoky heritage. Join India's fastest-growing Biryani franchise network.
          </p>
          <a href="#packages" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            VIEW PACKAGES <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="heading-impact" style={{ fontSize: '3rem', marginBottom: '15px' }}>CHOOSE YOUR MODEL</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Tailored investment opportunities for every entrepreneur</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {packages.map((pkg, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                onClick={() => {
                  setSelectedPackageId(pkg.id);
                  document.getElementById('details-section').scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: selectedPackageId === pkg.id ? '2px solid var(--color-primary)' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '40px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {pkg.popular && (
                  <span style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--color-primary)',
                    padding: '5px 20px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    letterSpacing: '1px'
                  }}>MOST POPULAR</span>
                )}
                {selectedPackageId === pkg.id && (
                  <span style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    color: 'var(--color-primary)'
                  }}>
                    <CheckCircle2 size={24} />
                  </span>
                )}
                <h3 style={{ fontSize: '24px', marginBottom: '10px', color: selectedPackageId === pkg.id ? 'var(--color-primary)' : '#fff' }}>{pkg.name}</h3>
                <div style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '5px' }}>{pkg.price}</div>
                <div style={{ color: 'var(--color-secondary)', fontWeight: '600', marginBottom: '20px' }}>{pkg.royalty}</div>
                <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '25px' }}></div>
                <ul style={{ listStyle: 'none', gap: '15px', display: 'flex', flexDirection: 'column', flex: 1, marginBottom: '30px' }}>
                  {pkg.features.map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--color-text-muted)' }}>
                      <CheckCircle2 size={18} className="text-primary" /> {feat}
                    </li>
                  ))}
                  <li key="agreement" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#fff', fontWeight: '600' }}>
                    <BadgeIndianRupee size={18} /> {pkg.agreement}
                  </li>
                </ul>
                <button className={selectedPackageId === pkg.id ? "btn-primary" : "btn-secondary"} style={{ width: '100%' }}>
                  VIEW DETAILS
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section for Breakdown & Financials */}
      <section id="details-section" className="section-padding" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '10px' }}>
              {selectedPackageId === 'standard' ? 'Standard Model' : 'Premium Model'} Details
            </h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Comprehensive breakdown of your investment and returns</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '50px' }}>
            <button 
              onClick={() => setActiveTab('investment')}
              style={{
                padding: '12px 30px',
                background: activeTab === 'investment' ? 'var(--color-primary)' : 'transparent',
                border: '1px solid var(--color-primary)',
                color: '#fff',
                borderRadius: '30px',
                transition: '0.3s'
              }}
            >
              Investment Breakdown
            </button>
            <button 
              onClick={() => setActiveTab('financials')}
              style={{
                padding: '12px 30px',
                background: activeTab === 'financials' ? 'var(--color-primary)' : 'transparent',
                border: '1px solid var(--color-primary)',
                color: '#fff',
                borderRadius: '30px',
                transition: '0.3s'
              }}
            >
              Financial Projections
            </button>
          </div>

          {activeTab === 'investment' ? (
            <motion.div 
              key={`inv-${selectedPackageId}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ maxWidth: '900px', margin: '0 auto' }}
            >
              <div style={{ 
                overflowX: 'auto',
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderRadius: '15px',
                padding: '20px'
              }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <th style={{ padding: '20px', color: 'var(--color-secondary)' }}>PARTICULARS</th>
                      <th style={{ padding: '20px', color: 'var(--color-secondary)' }}>AMOUNT</th>
                      <th style={{ padding: '20px', color: 'var(--color-secondary)' }}>REMARKS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.breakdown.map((item, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '20px', fontWeight: '500' }}>{item.particular}</td>
                        <td style={{ padding: '20px', color: 'var(--color-primary)', fontWeight: 'bold' }}>{item.amount}</td>
                        <td style={{ padding: '20px', color: 'var(--color-text-muted)', fontSize: '14px' }}>{item.remark}</td>
                      </tr>
                    ))}
                    <tr style={{ background: 'rgba(255, 106, 0, 0.1)' }}>
                      <td style={{ padding: '20px', fontWeight: 'bold', fontSize: '18px' }}>TOTAL INVESTMENT</td>
                      <td style={{ padding: '20px', color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '20px' }}>{currentData.investmentTotal}</td>
                      <td style={{ padding: '20px', fontSize: '12px' }}>*Excluding GST. Varies by location.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key={`fin-${selectedPackageId}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ maxWidth: '1000px', margin: '0 auto' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '15px' }}>
                  <h4 style={{ color: 'var(--color-secondary)', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Monthly Expenses</h4>
                  {currentData.financials.expenses.map((exp, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ color: 'var(--color-text-muted)' }}>{exp.item}</span>
                      <span style={{ fontWeight: '500' }}>{exp.cost}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '2px dashed rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                    <span>TOTAL EXPENSES</span>
                    <span className="text-primary">{currentData.financials.summary.totalExpenses}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ background: 'linear-gradient(135deg, rgba(255,106,0,0.1), rgba(212,175,55,0.1))', padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,106,0,0.2)' }}>
                    <h4 style={{ color: '#fff', marginBottom: '10px' }}>Estimated Sales</h4>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--color-primary)' }}>{currentData.financials.summary.totalSales}</div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>Based on {currentData.financials.summary.salesVolume}</p>
                  </div>
                  <div style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(0,0,0,0))', padding: '30px', borderRadius: '15px', border: '1px solid rgba(34,197,94,0.2)' }}>
                    <h4 style={{ color: '#fff', marginBottom: '10px' }}>Monthly Net Profit</h4>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#22c55e' }}>{currentData.financials.summary.netProfit}</div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>Average ROI in 12-18 months</p>
                  </div>
                  <div style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', fontSize: '13px' }}>
                    *1 Hundi = 60 Portions. Avg. Selling Price: ₹199/-
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="heading-impact" style={{ fontSize: '3rem', marginBottom: '15px' }}>WHAT WE PROVIDE</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>End-to-end support for your business journey</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px' 
          }}>
            {deliverables.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                style={{
                  padding: '30px',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '15px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: '0.3s'
                }}
              >
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '10px', 
                  background: 'rgba(255, 106, 0, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,106,0,0.05))' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ 
            background: '#151515', 
            padding: '50px', 
            borderRadius: '25px', 
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 className="heading-impact" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>GET IN TOUCH</h2>
              <p style={{ color: 'var(--color-text-muted)' }}>Take the first step towards owning your franchise</p>
            </div>

            <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="grid-mobile-1">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', color: 'var(--color-secondary)' }}>Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  style={{
                    padding: '12px 15px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', color: 'var(--color-secondary)' }}>Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 98765 43210" 
                  style={{
                    padding: '12px 15px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: 'span 2' }} className="grid-mobile-1">
                <label style={{ fontSize: '14px', color: 'var(--color-secondary)' }}>Preferred City</label>
                <input 
                  type="text" 
                  placeholder="Ex: Nagpur, Mumbai, etc." 
                  style={{
                    padding: '12px 15px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: 'span 2' }} className="grid-mobile-1">
                <label style={{ fontSize: '14px', color: 'var(--color-secondary)' }}>Message (Optional)</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your background or questions" 
                  style={{
                    padding: '12px 15px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none',
                    resize: 'none'
                  }}
                ></textarea>
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                  SUBMIT APPLICATION
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Franchise;
