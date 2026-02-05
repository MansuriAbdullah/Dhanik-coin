import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaUsers, FaTools, FaShieldAlt, FaRocket } from 'react-icons/fa';

const features = [
    {
        icon: <FaUserGraduate size={30} />,
        title: 'Beginner-Friendly',
        desc: 'Easy onboarding for new users. No complex jargon, just simple steps to wealth.'
    },
    {
        icon: <FaUsers size={30} />,
        title: 'Community Driven',
        desc: 'Built with and for our community. Governance voting and shared growth.'
    },
    {
        icon: <FaTools size={30} />,
        title: 'Utility Powered',
        desc: 'Designed for real-world use cases, payments, and rewards.'
    },
    {
        icon: <FaRocket size={30} />,
        title: 'Education Focused',
        desc: 'Learn finance and earn rewards. Knowledge is the first step to wealth.'
    },
    {
        icon: <FaShieldAlt size={30} />,
        title: 'Secure & Transparent',
        desc: 'Smart contract-based trust and fully audit-ready architecture.'
    }
];

const Features = () => {
    return (
        <section id="features" className="section-padding" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <h2 className="section-title">Why Dhanik Coin?</h2>
                <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem', color: 'var(--text-secondary)' }}>
                    Today’s financial systems are complex. Dhanik Coin changes that by creating a simple, rewarding, and community-first ecosystem.
                </p>

                <div className="responsive-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="card-box"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{ textAlign: 'center' }}
                        >
                            <div style={{
                                background: 'rgba(255, 215, 0, 0.1)',
                                color: 'var(--primary-gold)',
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
