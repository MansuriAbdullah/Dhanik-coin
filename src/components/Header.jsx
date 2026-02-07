import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../index.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why Dhanik', href: '#features' },
    { name: 'Utility', href: '#utility' },
    { name: 'Advisory', href: '#advisory' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <motion.nav
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0.8rem 2rem',
        background: scrolled ? 'rgba(10, 14, 23, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 215, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container">
        {/* NEW 3D COMPOSITE LOGO */}
        <a href="#" className="logo" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          textDecoration: 'none'
        }}>
          <div style={{ position: 'relative', width: '55px', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            {/* 1. Background Glow */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(0, 180, 216, 0.2) 0%, transparent 70%)',
              filter: 'blur(5px)'
            }}></div>

            {/* 2. Complex Cyber Sphere SVG */}
            <svg width="60" height="60" viewBox="0 0 100 100" className="cyber-sphere" style={{ position: 'absolute', zIndex: 1 }}>
              <defs>
                <linearGradient id="cyberBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0077B6" stopOpacity="0.4" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Rotating Rings */}
              <g style={{ transformOrigin: '50px 50px', animation: 'spinLogo 20s linear infinite' }}>
                {/* Outer Octagon Ring */}
                <path d="M50 5 L85 15 L95 50 L85 85 L50 95 L15 85 L5 50 L15 15 Z"
                  fill="none" stroke="url(#cyberBlue)" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="42" stroke="rgba(0,180,216,0.3)" strokeWidth="1" strokeDasharray="5 3" />

                {/* Inner Tech Nodes */}
                <circle cx="50" cy="5" r="2" fill="#00E5FF" filter="url(#glow)" />
                <circle cx="95" cy="50" r="2" fill="#00E5FF" filter="url(#glow)" />
                <circle cx="50" cy="95" r="2" fill="#00E5FF" filter="url(#glow)" />
                <circle cx="5" cy="50" r="2" fill="#00E5FF" filter="url(#glow)" />
              </g>

              {/* Counter Rotating Ring */}
              <g style={{ transformOrigin: '50px 50px', animation: 'spinLogoReverse 15s linear infinite' }}>
                <circle cx="50" cy="50" r="32" stroke="cyan" strokeWidth="0.5" strokeOpacity="0.5" />
                <path d="M50 18 L68 35 L50 50 L32 35 Z" fill="none" stroke="rgba(0,180,216,0.2)" />
                <path d="M50 82 L68 65 L50 50 L32 65 Z" fill="none" stroke="rgba(0,180,216,0.2)" />
              </g>

              {/* Static Central Structure */}
              <path d="M50 25 L75 50 L50 75 L25 50 Z" fill="none" stroke="url(#cyberBlue)" strokeWidth="1" opacity="0.6" />

              <style>{`
                                @keyframes spinLogo { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                                @keyframes spinLogoReverse { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
                            `}</style>
            </svg>

            {/* 3. The Golden D - HTML Overlay for better Text Rendering */}
            <div style={{
              position: 'absolute',
              zIndex: 2,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: '2px' // Visual adjustment
            }}>
              <span style={{
                fontSize: '2.2rem',
                fontWeight: '900',
                fontFamily: "'Outfit', sans-serif", // Clean, bold
                background: 'linear-gradient(135deg, #FFFDE4 0%, #FFD700 20%, #B8860B 50%, #FFD700 80%, #FFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 0px rgba(184, 134, 11, 0.8)) drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))',
                position: 'relative'
              }}>
                D
              </span>
            </div>
          </div>

          {/* Logo Text */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{
              fontSize: '1.8rem',
              fontWeight: '800',
              letterSpacing: '1px',
              background: 'linear-gradient(90deg, #fff, #b3b3b3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}>
              DHANIK
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="desktop-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{
                  color: 'var(--text-primary)',
                  fontWeight: '500',
                  transition: 'color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#join" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>Get Started</a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-card)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ fontSize: '1.1rem', fontWeight: '600' }}
            >
              {link.name}
            </a>
          ))}
          <a href="#join" className="btn-primary" onClick={() => setIsOpen(false)}>Get Started</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Header;
