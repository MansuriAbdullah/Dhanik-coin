import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaLinkedin, FaInstagram, FaShieldAlt, FaUsers, FaRocket, FaChartLine, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const features = [
        {
            icon: <FaShieldAlt />,
            title: 'Secure & Transparent',
            desc: 'Bank-grade security with blockchain transparency'
        },
        {
            icon: <FaUsers />,
            title: 'Community First',
            desc: 'Built by the community, for the community'
        },
        {
            icon: <FaRocket />,
            title: 'Fast & Scalable',
            desc: 'Lightning-fast transactions with low fees'
        },
        {
            icon: <FaChartLine />,
            title: 'Growth Focused',
            desc: 'Designed for long-term wealth creation'
        }
    ];

    return (
        <footer style={{
            background: 'linear-gradient(180deg, var(--bg-dark) 0%, #000 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decoration */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '800px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Features Section */}
                <div style={{
                    padding: '4rem 0 3rem',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gradient"
                        style={{
                            fontSize: '2rem',
                            textAlign: 'center',
                            marginBottom: '3rem',
                            fontWeight: '700'
                        }}
                    >
                        Why Choose Dhanik Coin?
                    </motion.h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                style={{
                                    background: 'rgba(15, 18, 24, 0.4)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '2rem',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    margin: '0 auto 1rem',
                                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary-gold)',
                                    fontSize: '1.8rem'
                                }}>
                                    {feature.icon}
                                </div>
                                <h4 style={{
                                    color: '#fff',
                                    marginBottom: '0.5rem',
                                    fontSize: '1.1rem',
                                    fontWeight: '600'
                                }}>
                                    {feature.title}
                                </h4>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.5'
                                }}>
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="footer-row" style={{ padding: '3rem 0' }}>
                    {/* About Section */}
                    <div style={{ maxWidth: '400px' }}>
                        <h3 style={{
                            color: 'var(--primary-gold)',
                            marginBottom: '1rem',
                            fontSize: '1.8rem',
                            fontWeight: '700'
                        }}>
                            Dhanik Coin
                        </h3>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.95rem',
                            lineHeight: '1.7',
                            marginBottom: '1.5rem'
                        }}>
                            Empowering individuals globally with accessible, transparent, and rewarding financial tools through Web3 innovation. Join the future of decentralized finance.
                        </p>

                        {/* Contact Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                                <FaEnvelope style={{ color: 'var(--primary-gold)' }} />
                                <span style={{ fontSize: '0.9rem' }}>contact@dhanikcoin.com</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-secondary)' }}>
                                <FaMapMarkerAlt style={{ color: 'var(--primary-gold)' }} />
                                <span style={{ fontSize: '0.9rem' }}>Global Web3 Platform</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            color: '#fff',
                            marginBottom: '1.5rem',
                            fontSize: '1.2rem',
                            fontWeight: '600'
                        }}>
                            Quick Links
                        </h4>
                        <ul style={{
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.8rem'
                        }}>
                            <li>
                                <a href="#about" style={{
                                    transition: 'color 0.3s',
                                    display: 'inline-block'
                                }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'}
                                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#features" style={{ transition: 'color 0.3s' }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'}
                                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                                >
                                    Why Dhanik
                                </a>
                            </li>
                            <li>
                                <a href="#utility" style={{ transition: 'color 0.3s' }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'}
                                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                                >
                                    Token Utility
                                </a>
                            </li>
                            <li>
                                <a href="#advisory" style={{ transition: 'color 0.3s' }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'}
                                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                                >
                                    Advisory
                                </a>
                            </li>
                            <li>
                                <a href="#careers" style={{ transition: 'color 0.3s' }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'}
                                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 style={{
                            color: '#fff',
                            marginBottom: '1.5rem',
                            fontSize: '1.2rem',
                            fontWeight: '600'
                        }}>
                            Resources
                        </h4>
                        <ul style={{
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.8rem'
                        }}>
                            <li style={{ transition: 'color 0.3s', cursor: 'pointer' }}
                                onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'}
                                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                Whitepaper
                            </li>
                            <li style={{ transition: 'color 0.3s', cursor: 'pointer' }}
                                onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'}
                                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                Documentation
                            </li>
                            <li style={{ transition: 'color 0.3s', cursor: 'pointer' }}
                                onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'}
                                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                Blog
                            </li>
                            <li style={{ transition: 'color 0.3s', cursor: 'pointer' }}
                                onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'}
                                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                FAQs
                            </li>
                            <li style={{ transition: 'color 0.3s', cursor: 'pointer' }}
                                onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'}
                                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                Support
                            </li>
                        </ul>
                    </div>

                    {/* Social Connect */}
                    <div>
                        <h4 style={{
                            color: '#fff',
                            marginBottom: '1.5rem',
                            fontSize: '1.2rem',
                            fontWeight: '600'
                        }}>
                            Connect With Us
                        </h4>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem',
                            marginBottom: '1.5rem',
                            lineHeight: '1.6'
                        }}>
                            Join our growing community and stay updated with the latest news.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {[
                                { icon: <FaTwitter />, label: 'Twitter' },
                                { icon: <FaTelegram />, label: 'Telegram' },
                                { icon: <FaLinkedin />, label: 'LinkedIn' },
                                { icon: <FaInstagram />, label: 'Instagram' }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        background: 'rgba(212, 175, 55, 0.1)',
                                        border: '1px solid rgba(212, 175, 55, 0.3)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--primary-gold)',
                                        fontSize: '1.3rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.background = 'var(--primary-gold)';
                                        e.currentTarget.style.color = '#000';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                                        e.currentTarget.style.color = 'var(--primary-gold)';
                                    }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    paddingBottom: '2rem'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                            maxWidth: '800px',
                            lineHeight: '1.6'
                        }}>
                            <strong style={{ color: 'var(--primary-gold)' }}>Disclaimer:</strong> Dhanik Financial Advisory services are educational and informational in nature and do not constitute financial advice or investment recommendations. Cryptocurrency investments carry risk. Please consult with licensed financial advisors.
                        </p>
                        <p style={{
                            color: 'rgba(255,255,255,0.4)',
                            fontSize: '0.85rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}>
                            <span>&copy; {new Date().getFullYear()} Dhanik Coin. All rights reserved.</span>
                            <span>•</span>
                            <a href="#" style={{ color: 'inherit', transition: 'color 0.3s' }}
                                onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'}
                                onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}
                            >
                                Privacy Policy
                            </a>
                            <span>•</span>
                            <a href="#" style={{ color: 'inherit', transition: 'color 0.3s' }}
                                onMouseOver={(e) => e.target.style.color = 'var(--primary-gold)'}
                                onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}
                            >
                                Terms of Service
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
