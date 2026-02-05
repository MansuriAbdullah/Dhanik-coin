import React from 'react';
import { motion } from 'framer-motion';
import coinImg from '../assets/dhanik-coin.png';
import '../index.css';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px' // For sticky header
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(10, 14, 23, 0) 70%)',
                zIndex: -1
            }}></div>

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
            }}>
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '600px' }}
                >
                    <h1 style={{
                        fontSize: '3.5rem',
                        lineHeight: '1.2',
                        fontWeight: '700',
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(to right, #FFF, var(--primary-gold))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 30px rgba(255, 215, 0, 0.3)'
                    }}>
                        Empowering Wealth, the Desi Way — Dhanik Coin
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        lineHeight: '1.6'
                    }}>
                        Join the revolution in crypto that’s designed for everyone. Rewarding, simple, and rooted in prosperity.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <motion.button
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Investing
                        </motion.button>
                        <motion.button
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--primary-gold)',
                                color: 'var(--primary-gold)',
                                padding: '12px 30px',
                                borderRadius: '30px',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}
                            whileHover={{ scale: 1.05, background: 'rgba(255, 215, 0, 0.1)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.button>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <motion.img
                        src={coinImg}
                        alt="Dhanik Coin"
                        style={{ width: '100%', maxWidth: '500px', filter: 'drop-shadow(0 0 50px rgba(255,215,0,0.2))' }}
                        animate={{
                            y: [0, -20, 0],
                            rotateY: [0, 5, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
