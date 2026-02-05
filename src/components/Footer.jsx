import React from 'react';
import { FaTwitter, FaTelegram, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ background: '#05070a', padding: '4rem 0 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', marginBottom: '3rem' }}>

                    <div style={{ maxWidth: '400px' }}>
                        <h3 style={{ color: 'var(--primary-gold)', marginBottom: '1rem', fontSize: '1.5rem' }}>Dhanik Coin</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Empowering individuals globally with accessible, transparent, and rewarding financial tools through Web3 innovation.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><a href="#about">About</a></li>
                            <li><a href="#features">Why Dhanik</a></li>
                            <li><a href="#advisory">Advisory</a></li>
                            <li><a href="#careers">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Connect</h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: 'var(--primary-gold)', fontSize: '1.5rem' }}><FaTwitter /></a>
                            <a href="#" style={{ color: 'var(--primary-gold)', fontSize: '1.5rem' }}><FaTelegram /></a>
                            <a href="#" style={{ color: 'var(--primary-gold)', fontSize: '1.5rem' }}><FaLinkedin /></a>
                            <a href="#" style={{ color: 'var(--primary-gold)', fontSize: '1.5rem' }}><FaInstagram /></a>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1rem' }}>
                        Dhanik Financial Advisory services are educational and informational in nature and do not constitute financial advice or investment recommendations.
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
                        &copy; {new Date().getFullYear()} Dhanik Coin. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
