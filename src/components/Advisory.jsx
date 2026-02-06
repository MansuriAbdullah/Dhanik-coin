import React from 'react';
import { motion } from 'framer-motion';

const Advisory = () => {
    return (
        <section id="advisory" className="section-padding">
            <div className="container">
                <h2 className="section-title">Financial Advisory</h2>
                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', color: 'var(--text-secondary)' }}>
                    We provide education-driven financial advisory solutions focused on knowledge, risk awareness, and long-term growth.
                </p>

                <div className="responsive-grid">

                    {/* Market Education */}
                    <motion.div
                        className="card-box glass"
                        whileHover={{ y: -5 }}
                    >
                        <h3 className="text-gradient" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>📊 Market Education</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: '2' }}>
                            <li>Stock market basics</li>
                            <li>Forex market structure</li>
                            <li>Crypto & blockchain fundamentals</li>
                            <li>Portfolio diversification concepts</li>
                        </ul>
                    </motion.div>

                    {/* Trading Strategy */}
                    <motion.div
                        className="card-box glass"
                        whileHover={{ y: -5 }}
                    >
                        <h3 className="text-gradient" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>📈 Trading Guidance</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: '2' }}>
                            <li>Risk management techniques</li>
                            <li>Market structure analysis</li>
                            <li>Technical & fundamental insights</li>
                            <li>Trading psychology coaching</li>
                        </ul>
                    </motion.div>

                    {/* Planning */}
                    <motion.div
                        className="card-box glass"
                        whileHover={{ y: -5 }}
                    >
                        <h3 className="text-gradient" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>🛡 Investment Planning</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: '2' }}>
                            <li>Financial goal setting</li>
                            <li>Asset allocation concepts</li>
                            <li>Long-term vs short-term education</li>
                            <li>Wealth preservation strategies</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Risk Disclosure */}
                <div style={{
                    marginTop: '6rem',
                    padding: '2rem',
                    border: '1px solid rgba(255, 100, 100, 0.3)',
                    background: 'rgba(255, 50, 50, 0.05)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(5px)'
                }}>
                    <h4 style={{ color: '#ff6b6b', marginBottom: '0.5rem' }}>⚠️ Risk Disclosure</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        Dhanik provides financial education and advisory support only. We do not offer guaranteed profits, portfolio management services, or investment solicitation. Market participation involves risk and users should consult licensed financial advisors before making investment decisions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Advisory;
