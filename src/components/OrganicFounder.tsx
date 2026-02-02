import React from 'react';
import { ArrowRight } from 'lucide-react';
import './OrganicFounder.scss';

// Assets
import dryFruitsImg from '../assets/org/dry f.png';
import renuImg from '../assets/org/ba.png';
import peanutsImg from '../assets/org/peanuts.png';

const OrganicFounder: React.FC = () => {
    return (
        <section className="organic-founder">
            <div className="organic-founder__container">
                {/* Left Column */}
                <div className="organic-founder__column organic-founder__column--left">
                    <h2 className="organic-founder__title">
                        The Heart Behind<br />Manam Organics
                    </h2>
                    <div className="organic-founder__image-box organic-founder__image-box--small">
                        <img src={dryFruitsImg} alt="Fresh dry fruits" />
                    </div>
                </div>

                {/* Center Column */}
                <div className="organic-founder__column organic-founder__column--center">
                    <div className="organic-founder__image-box organic-founder__image-box--main">
                        <img src={renuImg} alt="Renu - The Founder" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="organic-founder__column organic-founder__column--right">
                    <div className="organic-founder__image-box organic-founder__image-box--side">
                        <img src={peanutsImg} alt="Sustainable peanuts" />
                    </div>
                    <div className="organic-founder__content">
                        <h3 className="organic-founder__greeting">Hi!!I'm "Renu" ❤️</h3>
                        <p className="organic-founder__description">
                            At our bakery, every recipe begins with passion and ends with a smile. We craft each cake, pastry, and loaf using fresh ingredients, traditional techniques.
                        </p>
                        <button className="organic-founder__explore-btn">
                            Explore Manam Bakes <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrganicFounder;
