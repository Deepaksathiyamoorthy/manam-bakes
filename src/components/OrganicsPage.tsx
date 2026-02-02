import React from 'react';
import Navbar from './Navbar';
import { Heart, ArrowRight, Leaf, Wind } from 'lucide-react';
import './OrganicsPage.scss';
import rusticSeeds from '../assets/org/Rustic Seed Display 2.png';
import organicsLogo from '../assets/org/LOGO1.png';
import HealthMixes from './HealthMixes';
import NaturalPowders from './NaturalPowders';
import MoringaSpecial from './MoringaSpecial';
import OrganicFounder from './OrganicFounder';
import Footer from './Footer';

interface OrganicsPageProps {
    onBack: () => void;
}

const OrganicsPage: React.FC<OrganicsPageProps> = ({ onBack }) => {
    const scrollToProducts = () => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="organics-page">
            <Navbar
                brandName="Manam Organics"
                brandLogo={organicsLogo}
                className="organics-nav"
                theme="light"
                onBrandClick={onBack}
                links={[
                    { label: 'Home', active: true, onClick: onBack },
                    { label: 'Products' },
                    { label: 'Our Story' },
                    { label: 'Contact' }
                ]}
            />

            <section className="hero">
                <div className="hero-background" style={{ backgroundImage: `url(${rusticSeeds})` }}></div>
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1 className="hero-title">Fuel Your Day Naturally</h1>
                    <p className="hero-subtitle">
                        Discover our artisanal gluten-free, raw vegan cakes crafted from nutrient-dense berries, beets, and organic seeds.
                    </p>

                    <button className="explore-btn" onClick={scrollToProducts}>
                        Explore the products <ArrowRight size={20} />
                    </button>

                    <div className="feature-tags">
                        <div className="tag">
                            <Heart size={20} className="tag-icon" />
                            <span>Gluten-Free</span>
                        </div>
                        <div className="divider"></div>
                        <div className="tag">
                            <Leaf size={20} className="tag-icon" />
                            <span>100% Vegan</span>
                        </div>
                        <div className="divider"></div>
                        <div className="tag">
                            <Wind size={20} className="tag-icon" />
                            <span>No Refined Sugar</span>
                        </div>
                    </div>
                </div>
            </section>

            <HealthMixes />
            <NaturalPowders />
            <MoringaSpecial />
            <div style={{ backgroundColor: '#fff', padding: '4rem 0' }}>
                <OrganicFounder />
            </div>
            <Footer brandName="Manam Organics" />
        </div>
    );
};

export default OrganicsPage;
