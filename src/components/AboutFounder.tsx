import React from 'react';
import './AboutFounder.scss';
import image1 from '../../assets/culinary-creativity-in-the-kitchen-1.png';
import image2 from '../../assets/baker-with-rustic-bread-1.png';
import image3 from '../../assets/homemade-almond-chocolate-chunk-brownies-2.png';

const AboutFounder: React.FC = () => {
    return (
        <section className="about-founder">
            <div className="about-founder__container">
                <div className="about-founder__column about-founder__column--left">
                    <h2 className="about-founder__title">The Heart Behind Cake Corner</h2>
                    <div className="about-founder__image--small">
                        <img src={image1} alt="Culinary creativity" />
                    </div>
                </div>

                <div className="about-founder__column about-founder__column--center">
                    <div className="about-founder__image--main">
                        <img src={image2} alt="Baker with rustic bread" />
                    </div>
                </div>

                <div className="about-founder__column about-founder__column--right">
                    <div className="about-founder__image--side">
                        <img src={image3} alt="Homemade brownies" />
                    </div>
                    <div className="about-founder__text">
                        <h3>Hi!!I'm "Renu" ❤️</h3>
                        <p>
                            At our bakery, every recipe begins with passion and ends with a smile.We craft each cake, pastry, and loaf using fresh ingredients, traditional techniques.
                        </p>
                        <p className="about-founder__follow">Follow me</p>
                        <div className="about-founder__social">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFounder;
