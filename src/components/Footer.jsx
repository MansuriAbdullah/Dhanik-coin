import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaLinkedin, FaInstagram, FaShieldAlt, FaUsers, FaRocket, FaChartLine, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const footerFeatures = [
        {
            icon: <FaShieldAlt />,
            title: 'Secure & Transparent',
            desc: 'Bank-grade security with blockchain transparency',
            gradient: 'linear-gradient(135deg, #EF476F 0%, #D62828 100%)',
            delay: 0
        },
        {
            icon: <FaUsers />,
            title: 'Community First',
            desc: 'Built by the community, for the community',
            gradient: 'linear-gradient(135deg, #00B4D8 0%, #0077B6 100%)',
            delay: 0.1
        },
        {
            icon: <FaRocket />,
            title: 'Fast & Scalable',
            desc: 'Lightning-fast transactions with low fees',
            gradient: 'linear-gradient(135deg, #FFD700 0%, #FDB931 100%)',
            delay: 0.2
        },
        {
            icon: <FaChartLine />,
            title: 'Growth Focused',
            desc: 'Designed for long-term wealth creation',
            gradient: 'linear-gradient(135deg, #06D6A0 0%, #118AB2 100%)',
            delay: 0.3
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
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 10%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)',
                pointerEvents: 'none',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Features Section */}
                <div style={{
                    padding: '5rem 0 4rem',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gradient"
                        style={{
                            fontSize: '2.5rem',
                            textAlign: 'center',
                            marginBottom: '4rem',
                            fontWeight: '700',
                            letterSpacing: '-0.5px'
                        }}
                    >
                        Why Choose Dhanik?
                    </motion.h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {footerFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: feature.delay, duration: 0.5 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                style={{
                                    background: 'rgba(20, 20, 30, 0.6)',
                                    backdropFilter: 'blur(12px)',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                                }}
                            >
                                {/* Visual Image Area */}
                                <div style={{
                                    height: '160px',
                                    position: 'relative',
                                    background: feature.gradient,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden'
                                }}>
                                    {/* Abstract Pattern Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
                                        opacity: 0.3
                                    }}></div>

                                    {/* Animated Glow */}
                                    <motion.div
                                        animate={{
                                            opacity: [0.4, 0.7, 0.4],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        style={{
                                            position: 'absolute',
                                            width: '100%',
                                            height: '100%',
                                            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%)',
                                        }}
                                    />

                                    {/* 3D Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                        style={{
                                            fontSize: '4rem',
                                            color: '#fff',
                                            zIndex: 2,
                                            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))'
                                        }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                </div>

                                <div style={{ padding: '2rem', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h4 style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '700',
                                        marginBottom: '1rem',
                                        background: feature.gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>
                                        {feature.title}
                                    </h4>
                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        flex: 1
                                    }}>
                                        {feature.desc}
                                    </p>
                                </div>
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
                            Dhanik
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
                            <span>&copy; {new Date().getFullYear()} Dhanik. All rights reserved.</span>
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
