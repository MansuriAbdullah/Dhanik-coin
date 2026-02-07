import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaUsers, FaTools, FaShieldAlt, FaRocket, FaArrowRight } from 'react-icons/fa';

const features = [
    {
        icon: <FaUserGraduate />,
        title: 'Beginner-Friendly',
        subtitle: 'Easy to Start',
        desc: 'Start your crypto journey with zero complications. Our intuitive platform guides you every step of the way, making wealth creation accessible to all.',
        details: 'No prior experience needed. We provide step-by-step tutorials, interactive guides, and 24/7 support to help you navigate the world of cryptocurrency with confidence.',
        gradient: 'linear-gradient(135deg, #FFD700 0%, #FDB931 100%)',
        delay: 0
    },
    {
        icon: <FaUsers />,
        title: 'Community Driven',
        subtitle: 'Your Voice Matters',
        desc: 'A decentralized ecosystem where your voice matters. Participate in governance, vote on proposals, and shape the future of Dhanik Coin.',
        details: 'Join thousands of active members in our global community. Engage in discussions, contribute ideas, and help build the future of decentralized finance together.',
        gradient: 'linear-gradient(135deg, #00B4D8 0%, #0077B6 100%)',
        delay: 0.1
    },
    {
        icon: <FaTools />,
        title: 'Utility Powered',
        subtitle: 'Real-World Value',
        desc: 'More than just a store of value. Use Dhanik for real-world payments, rewards, and exclusive access to premium educational content and tools.',
        details: 'Unlock premium features, access exclusive content, earn rewards through staking, and use your coins for actual transactions in our growing ecosystem.',
        gradient: 'linear-gradient(135deg, #9D4EDD 0%, #7209B7 100%)',
        delay: 0.2
    },
    {
        icon: <FaRocket />,
        title: 'Education Focused',
        subtitle: 'Learn & Grow',
        desc: 'We believe in financial literacy. Access our comprehensive learning hub to master crypto trading, investing, and market analysis.',
        details: 'From beginner courses to advanced trading strategies, our educational platform offers video tutorials, live webinars, and expert insights to accelerate your learning.',
        gradient: 'linear-gradient(135deg, #06D6A0 0%, #118AB2 100%)',
        delay: 0.3
    },
    {
        icon: <FaShieldAlt />,
        title: 'Secure & Transparent',
        subtitle: 'Bank-Grade Protection',
        desc: 'Built on an immutable blockchain with audit-grade security. Your assets are protected by state-of-the-art encryption and transparent protocols.',
        details: 'Multi-layer security architecture, regular third-party audits, and complete blockchain transparency ensure your investments are always safe and verifiable.',
        gradient: 'linear-gradient(135deg, #EF476F 0%, #D62828 100%)',
        delay: 0.4
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 15
        }
    }
};

const Features = () => {
    return (
        <section id="features" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
                filter: 'blur(100px)',
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0, 180, 216, 0.08) 0%, transparent 70%)',
                filter: 'blur(100px)',
                zIndex: -1
            }}></div>

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Why Dhanik?</h2>
                    <p style={{
                        textAlign: 'center',
                        maxWidth: '700px',
                        margin: '0 auto 5rem',
                        color: 'var(--text-secondary)',
                        fontSize: '1.2rem',
                        lineHeight: '1.6'
                    }}>
                        Today’s financial systems are complex. Dhanik changes that by creating a <span style={{ color: 'var(--primary-gold)' }}>simple</span>, <span style={{ color: 'var(--accent-blue)' }}>rewarding</span>, and <span style={{ color: '#fff' }}>community-first</span> ecosystem.
                    </p>
                </motion.div>

                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            style={{
                                background: 'rgba(20, 20, 30, 0.6)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
                            }}
                        >
                            {/* Visual Header / Image Placeholder */}
                            <div style={{
                                height: '160px',
                                position: 'relative',
                                background: feature.gradient,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }}>
                                {/* Animated Backlight */}
                                <motion.div
                                    animate={{
                                        opacity: [0.3, 0.6, 0.3],
                                        scale: [1, 1.15, 1]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 60%)',
                                    }}
                                />

                                {/* 3D Icon Effect */}
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        fontSize: '3.5rem',
                                        color: '#fff',
                                        zIndex: 1,
                                        filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))',
                                    }}
                                >
                                    {feature.icon}
                                </motion.div>
                            </div>

                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{
                                    marginBottom: '0.4rem',
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    background: feature.gradient,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    {feature.title}
                                </h3>

                                <p style={{
                                    color: 'var(--accent-blue)',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    marginBottom: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {feature.subtitle}
                                </p>

                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1rem',
                                    fontWeight: '500'
                                }}>
                                    {feature.desc}
                                </p>

                                <p style={{
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.5',
                                    marginBottom: '1.5rem',
                                    flex: 1
                                }}>
                                    {feature.details}
                                </p>

                                <motion.button
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        background: feature.gradient,
                                        color: '#fff',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        fontSize: '0.9rem',
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: '8px',
                                        border: 'none',
                                        marginTop: 'auto',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                                    }}
                                    whileHover={{ scale: 1.05, boxShadow: '0 6px 15px rgba(0,0,0,0.3)' }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Learn More <FaArrowRight size={12} />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
