import React from 'react';
import { motion } from 'framer-motion';
import './GallerySection.scss';
import galleryImg from '../../assets/frame-1168.jpeg';

const GallerySection: React.FC = () => {
    return (
        <motion.section
            className="gallery"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="gallery__header">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Gallery of Sweet Moments
                </motion.h2>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Artisanal cakes, breads, and pastries crafted fresh every day.
                    Artisanal cakes, breads, and pastries crafted fresh every day.
                    Artisanal cakes, breads,
                </motion.p>
            </div>

            <div className="gallery__card">
                <div className="gallery__card-image">
                    <img src={galleryImg} alt="Sarah's 30th Birthday Celebration" />
                </div>

                <div className="gallery__card-content">
                    <h3>Sarah's 30th Birthday Red Velvet Surprise</h3>
                    <p>
                        Artisanal cakes, breads, and pastries crafted fresh every day.
                        Artisanal cakes, breads, and pastries crafted fresh every day.
                        Artisanal cakes, breads,
                    </p>
                    <button className="gallery__cta">Order Similar</button>
                </div>
            </div>

            <div className="gallery__controls">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </motion.section>
    );
};

export default GallerySection;
