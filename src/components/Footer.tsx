import './Footer.scss';
import decorationImage from '../assets/Frame 1210.svg';
import { Instagram, Home, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
    brandName?: string;
    brandSubtitle?: string;
}

const Footer: React.FC<FooterProps> = ({
    brandName = "Manam Bakes",
    brandSubtitle = "Sweet treats made fresh daily."
}) => {
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
                        <Instagram size={28} />
                    </div>
                    <h3>Instagram</h3>
                    <p>renu._.2001</p>
                </div>

                <div className="footer__contact-item">
                    <div className="icon-circle">
                        <Home size={28} />
                    </div>
                    <h3>Home</h3>
                    <p>Maruthi nagar,Thindal,Erode</p>
                </div>

                <div className="footer__contact-item">
                    <div className="icon-circle">
                        <Phone size={28} />
                    </div>
                    <h3>Phone</h3>
                    <p>+91 87878 79098</p>
                </div>

                <div className="footer__contact-item">
                    <div className="icon-circle">
                        <MessageCircle size={28} />
                    </div>
                    <h3>Whats app</h3>
                    <p>+91 87878 79098</p>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__brand">
                    <h3>{brandName}</h3>
                    <p>{brandSubtitle}</p>
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
