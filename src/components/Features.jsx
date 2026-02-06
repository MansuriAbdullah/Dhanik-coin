import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaUsers, FaTools, FaShieldAlt, FaRocket, FaArrowRight } from 'react-icons/fa';

const features = [
    {
        icon: <FaUserGraduate />,
        title: 'Beginner-Friendly',
        desc: 'Start your crypto journey with zero complications. Our intuitive platform guides you every step of the way, making wealth creation accessible to all.',
        color: "from-yellow-400 to-yellow-600",
        delay: 0
    },
    {
        icon: <FaUsers />,
        title: 'Community Driven',
        desc: 'A decentralized ecosystem where your voice matters. Participate in governance, vote on proposals, and shape the future of Dhanik Coin.',
        color: "from-blue-400 to-blue-600",
        delay: 0.1
    },
    {
        icon: <FaTools />,
        title: 'Utility Powered',
        desc: 'More than just a store of value. Use Dhanik Coin for real-world payments, rewards, and exclusive access to premium educational content and tools.',
        color: "from-purple-400 to-purple-600",
        delay: 0.2
    },
    {
        icon: <FaRocket />,
        title: 'Education Focused',
        desc: 'We believe in financial literacy. Access our comprehensive learning hub to master crypto trading, investing, and market analysis.',
        color: "from-green-400 to-green-600",
        delay: 0.3
    },
    {
        icon: <FaShieldAlt />,
        title: 'Secure & Transparent',
        desc: 'Built on an immutable blockchain with audit-grade security. Your assets are protected by state-of-the-art encryption and transparent protocols.',
        color: "from-red-400 to-red-600",
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
                    <h2 className="section-title">Why Dhanik Coin?</h2>
                    <p style={{
                        textAlign: 'center',
                        maxWidth: '700px',
                        margin: '0 auto 5rem',
                        color: 'var(--text-secondary)',
                        fontSize: '1.2rem',
                        lineHeight: '1.6'
                    }}>
                        Today’s financial systems are complex. Dhanik Coin changes that by creating a <span style={{ color: 'var(--primary-gold)' }}>simple</span>, <span style={{ color: 'var(--accent-blue)' }}>rewarding</span>, and <span style={{ color: '#fff' }}>community-first</span> ecosystem.
                    </p>
                </motion.div>

                <motion.div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2.5rem'
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -15, scale: 1.02 }}
                            style={{
                                background: 'rgba(20, 20, 30, 0.6)',
                                backdropFilter: 'blur(12px)',
                                borderRadius: '24px',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                            }}
                        >
                            {/* Visual Header / Image Placeholder */}
                            <div style={{
                                height: '220px',
                                position: 'relative',
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }}>
                                {/* Animated Backlight */}
                                <motion.div
                                    animate={{
                                        opacity: [0.4, 0.7, 0.4],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        background: `radial-gradient(circle at center, ${index % 2 === 0 ? 'rgba(212, 175, 55, 0.3)' : 'rgba(0, 180, 216, 0.3)'}, transparent 60%)`,
                                    }}
                                />

                                {/* 3D Icon Effect */}
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        fontSize: '5rem',
                                        color: '#fff',
                                        zIndex: 1,
                                        filter: `drop-shadow(0 0 20px ${index % 2 === 0 ? 'rgba(212, 175, 55, 0.6)' : 'rgba(0, 180, 216, 0.6)'})`,
                                    }}
                                >
                                    {feature.icon}
                                </motion.div>
                            </div>

                            <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{
                                    marginBottom: '1rem',
                                    fontSize: '1.6rem',
                                    fontWeight: '700',
                                    background: index % 2 === 0 ? 'linear-gradient(to right, #FFD700, #FDB931)' : 'linear-gradient(to right, #00B4D8, #0077B6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    {feature.title}
                                </h3>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '1.05rem',
                                    lineHeight: '1.7',
                                    marginBottom: '1.5rem',
                                    flex: 1
                                }}>
                                    {feature.desc}
                                </p>

                                <motion.div
                                    className="read-more-btn"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: '#fff',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        fontSize: '1rem',
                                        marginTop: 'auto'
                                    }}
                                    whileHover={{ x: 5, color: 'var(--primary-gold)' }}
                                >
                                    Explore <FaArrowRight size={14} />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
