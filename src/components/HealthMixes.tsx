import React from 'react';
import { motion } from 'framer-motion';
import './HealthMixes.scss';

// Import user-provided SVG assets
import healthmixImg from '../assets/org/1.svg';
import cocoaRagiImg from '../assets/org/2.svg';
import beetrootImg from '../assets/org/3.svg';
import carrotImg from '../assets/org/4.svg';
import ragiAlmondImg from '../assets/org/5.svg';
import blackUradImg from '../assets/org/7.svg';
import ragiFlourImg from '../assets/org/6.svg'; // Sprouted Ragi Flour

interface Product {
    title: string;
    description: string;
    tags: string[];
    image: string;
}

const HealthMixes: React.FC = () => {
    const products: Product[] = [
        {
            title: 'Healthmix (51 Natural Ingredients)',
            description: 'Nutrient-rich traditional health mix made with 51 natural ingredients',
            tags: ['HEALTH MIX'],
            image: healthmixImg
        },
        {
            title: 'Cocoa Sprouted Ragi Malt',
            description: 'Sprouted ragi malt blended with natural cocoa for daily nourishment',
            tags: ['RAGI', 'COCOA'],
            image: cocoaRagiImg
        },
        {
            title: 'Beetroot Malt',
            description: 'Wholesome beetroot malt made for everyday nutrition',
            tags: ['BEETROOT', 'MALT'],
            image: beetrootImg
        },
        {
            title: 'Carrot Malt',
            description: 'Natural carrot-based malt packed with goodness',
            tags: ['CARROT', 'MALT'],
            image: carrotImg
        },
        {
            title: 'Sprouted Ragi Almond Mix',
            description: 'Sprouted ragi combined with almonds for balanced nutrition',
            tags: ['SPROUTED', 'RAGI'],
            image: ragiAlmondImg
        },
        {
            title: 'Sprouted Ragi Flour',
            description: 'Finely milled flour made from sprouted ragi grains',
            tags: ['RAGI FLOUR'],
            image: ragiFlourImg
        },
        {
            title: 'Black Urad Dal Mix',
            description: 'Traditional black urad dal blend for healthy cooking',
            tags: ['URAD DAL'],
            image: blackUradImg
        }
    ];

    return (
        <section className="health-mixes" id="products">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <header className="section-header">
                    <h2 className="title">Health mixes & malts</h2>
                    <p className="subtitle">Nutrient-rich traditional health mix made with 51 natural ingredients</p>
                </header>

                <div className="products-grid">
                    <div className="grid-item">
                        <ProductCard product={products[0]} delay={0.1} />
                    </div>
                    <div className="grid-item">
                        <ProductCard product={products[1]} delay={0.2} />
                    </div>
                    <div className="grid-item">
                        <ProductCard product={products[2]} delay={0.3} />
                    </div>
                    <div className="grid-item">
                        <ProductCard product={products[3]} delay={0.4} />
                    </div>

                    <div className="grid-item">
                        <ProductCard product={products[4]} delay={0.5} />
                    </div>
                    <div className="grid-item">
                        <div className="cake-display-card">
                            <img src={products[5].image} alt={products[5].title} />
                            <div className="cake-info">
                                <h3>{products[5].title}</h3>
                                <p>{products[5].description}</p>
                                <div className="tags">
                                    {products[5].tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <ProductCard product={products[6]} delay={0.6} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProductCard: React.FC<{ product: Product; delay: number }> = ({ product, delay }) => (
    <motion.div
        className="product-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
    >
        <div className="image-wrapper">
            <img src={product.image} alt={product.title} />
        </div>
        <div className="card-content">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-desc">{product.description}</p>
            <div className="card-tags">
                {product.tags.map(tag => (
                    <span key={tag} className={`tag tag--${tag.toLowerCase().replace(' ', '-')}`}>{tag}</span>
                ))}
            </div>
        </div>
    </motion.div>
);

export default HealthMixes;
