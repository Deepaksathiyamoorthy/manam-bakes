import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.scss';
import heroImage from '../assets/hero-girl.png';
import illustrationLeft from '../assets/illustration-left.svg';
import illustrationRight from '../assets/illustration-right.svg';
import badgeImage from '../assets/assetss/ChatGPT Image Jan 20, 2026, 07_06_49 PM.png';

const Hero: React.FC = () => {
    const { scrollY } = useScroll();
    const yLeft = useTransform(scrollY, [0, 500], [0, -100]); // Moves up faster
    const yRight = useTransform(scrollY, [0, 500], [0, -50]); // Moves up slower

    return (
        <section className="hero-wrapper">
            {/* Decoration positioned relative to full width wrapper */}
            <motion.img
                style={{ y: yRight }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                src={illustrationRight}
                alt="Decoration"
                className="corner-decoration-right"
            />

            <div className="hero container">
                <div className="hero__content">
                    <div className="hero__left text-column">
                        <motion.img
                            style={{ y: yLeft }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            src={illustrationLeft}
                            alt="Gift Heart"
                            className="floating-icon gift-icon-top-left"
                        />
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Homemade Cakes
                        </motion.h2>
                        <motion.h2
                            className="highlight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Sweetest
                        </motion.h2>

                        <motion.div
                            className="badge"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                        >
                            <img src={badgeImage} alt="Made with love" />
                        </motion.div>
                    </div>

                    <div className="hero__center">
                        <motion.div
                            className="image-wrapper"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src={heroImage}
                                alt="Celebrating Girl"
                                className="main-image"
                            />
                        </motion.div>
                    </div>

                    <div className="hero__right text-column">
                        <div className="title-with-icon">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                for Lifes
                            </motion.h2>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Celebration
                        </motion.h2>
                        <motion.p
                            className="hero__description"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            Artisanal cakes, breads, and pastries crafted fresh every day.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
