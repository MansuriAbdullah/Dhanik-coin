import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Us</h2>

                    <div className="responsive-grid" style={{ marginTop: '4rem' }}>
                        {/* Who We Are */}
                        <div className="about-card">
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary-gold)' }}>Who We Are</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                Dhanik Coin is a next-generation fintech and Web3 company focused on making digital finance safe, simple, and accessible for everyone.
                                The word "Dhanik" means "wealth creator" — and that’s exactly what we aim to build: a financial ecosystem where users learn, earn, and grow together.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="about-card">
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary-gold)' }}>Our Mission</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                To empower individuals globally with accessible, transparent, and rewarding financial tools through Web3 innovation.
                                Whether you're a student, trader, or entrepreneur, Dhanik Coin empowers you to participate in the digital economy with confidence.
                            </p>
                        </div>

                        {/* Story */}
                        <div className="about-card" style={{ gridColumn: '1 / -1' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary-gold)' }}>Our Story</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                Dhanik Coin was created to solve one major problem — most people find crypto difficult to trust and hard to understand.
                                We saw the need for a platform that explains digital finance clearly while offering real-world value.
                                That’s why we built Dhanik: to make blockchain practical, reliable, and useful for everyday financial growth.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
