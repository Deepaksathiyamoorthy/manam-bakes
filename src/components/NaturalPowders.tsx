import React from 'react';
import { motion } from 'framer-motion';
import './NaturalPowders.scss';

// Product images
import bananaPowderImg from '../assets/org/8.svg';
import datesPowderImg from '../assets/org/9.svg';
import mixedNutsImg from '../assets/org/10.svg';
import mixedNutsSeedsImg from '../assets/org/11.svg';

interface Product {
    title: string;
    description: string;
    tags: string[];
    image: string;
}

const NaturalPowders: React.FC = () => {
    const products: Product[] = [
        {
            title: 'Raw Kerala Banana Powder',
            description: 'Naturally processed raw banana powder from Kerala',
            tags: ['BANANA', 'NATURAL'],
            image: bananaPowderImg
        },
        {
            title: 'Dates Powder',
            description: 'Natural sweetener made from premium dried dates',
            tags: ['NATURAL SWEETENER'],
            image: datesPowderImg
        },
        {
            title: 'Mixed Nuts Powder',
            description: 'Powdered blend of carefully selected nutritious nuts',
            tags: ['NUTS'],
            image: mixedNutsImg
        },
        {
            title: 'Mixed Nuts & Seeds Powder',
            description: 'Healthy mix of nuts and seeds for daily use',
            tags: ['NUTS', 'SEEDS'],
            image: mixedNutsSeedsImg
        }
    ];

    return (
        <section className="natural-powders">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <header className="section-header">
                    <h2 className="title">Natural Powders</h2>
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

export default NaturalPowders;
