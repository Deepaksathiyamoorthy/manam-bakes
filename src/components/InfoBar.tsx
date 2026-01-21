import React from 'react';
import { motion } from 'framer-motion';
import './InfoBar.scss';
import chocolateDecoration from '../assets/chocolate-stack.png';
import avatar1 from '../assets/user-1.png';
import avatar2 from '../assets/user-2.png';
import avatar3 from '../assets/user-3.png';

const InfoBar: React.FC = () => {
    return (
        <motion.div
            className="infobar"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="infobar__section infobar__section--left">
                <h3>Where Every Slice Tells a Story of Love</h3>
            </div>

            <div className="infobar__section infobar__section--center">
                <p>
                    Artisanal cakes, breads, and pastries crafted fresh every day. Artisanal cakes, breads, and pastries crafted fresh every day. Artisanal cakes, breads,
                </p>
            </div>
            <img src={chocolateDecoration} alt="Chocolate decoration" className="infobar__decoration" />

            <div className="infobar__section infobar__section--right">
                <div className="infobar__customers-stack">
                    <img src={avatar1} alt="Customer 1" className="infobar__avatar" />
                    <img src={avatar2} alt="Customer 2" className="infobar__avatar" />
                    <img src={avatar3} alt="Customer 3" className="infobar__avatar" />
                </div>
                <div className="infobar__stats">
                    <span className="count">50+</span>
                    <span className="label">Daily orders</span>
                </div>
            </div>
        </motion.div>
    );
};

export default InfoBar;
