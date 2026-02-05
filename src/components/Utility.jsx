import React from 'react';
import { motion } from 'framer-motion';
import { FaExchangeAlt, FaAward, FaChartLine, FaVoteYea, FaCreditCard } from 'react-icons/fa';

const utilities = [
    { icon: <FaExchangeAlt />, text: "Peer-to-peer payments" },
    { icon: <FaAward />, text: "Rewards for learning and internships" },
    { icon: <FaChartLine />, text: "Staking for passive income" },
    { icon: <FaVoteYea />, text: "Community governance voting" },
    { icon: <FaCreditCard />, text: "Partner merchant payments (future)" },
];

const Utility = () => {
    return (
        <section id="utility" style={{ padding: '8rem 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <h2 className="section-title">Token Utility</h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem',
                    marginTop: '4rem'
                }}>
                    {utilities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, borderColor: 'var(--primary-gold)' }}
                            style={{
                                background: 'var(--bg-card)',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                minWidth: '250px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ color: 'var(--primary-gold)', fontSize: '2rem' }}>
                                {item.icon}
                            </div>
                            <p style={{ fontWeight: '500', fontSize: '1.1rem' }}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Utility;
