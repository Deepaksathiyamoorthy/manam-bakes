import React from 'react';
import './Footer.scss';
import decorationImage from '../assets/Frame 1210.svg';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <img src={decorationImage} alt="Decorative hearts" className="footer__decoration" />

            <div className="footer__header">
                <h2>Contact us</h2>
                <p>We'd love to hear from you</p>
            </div>

            <div className="footer__contacts">
                <div className="footer__contact-item">
                    <div className="icon-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </div>
                    <h3>Instagram</h3>
                    <p className="subtitle">Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <p>renu._.2001</p>
                </div>

                <div className="footer__contact-item">
                    <div className="icon-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    </div>
                    <h3>Home</h3>
                    <p className="subtitle">Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <p>Maruthi nagar,Thindal,Erode</p>
                </div>

                <div className="footer__contact-item">
                    <div className="icon-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </div>
                    <h3>Phone</h3>
                    <p className="subtitle">Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <p>+91 87878 79098</p>
                </div>

                <div className="footer__contact-item">
                    <div className="icon-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                    </div>
                    <h3>Whats app</h3>
                    <p className="subtitle">Lorem ipsum Lorem ipsum Lorem ipsum</p>
                    <p>+91 87878 79098</p>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__brand">
                    <h3>Manam Bakes</h3>
                    <p>Sweet treats made fresh daily.</p>
                </div>

                <div className="footer__nav">
                    <a href="#menu">Menu</a>
                    <a href="#instagram">Instagram Proof</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer__copyright">
                    <p>© Bakery Name – Crafted With Love</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
