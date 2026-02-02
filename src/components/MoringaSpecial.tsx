import React from 'react';
import { motion } from 'framer-motion';
import './MoringaSpecial.scss';

// Assets
import heartDecorative from '../assets/Relationships _ heart shapes, balloons, floating, celebrating love 1.svg';
import moringaPowderImg from '../assets/org/12.svg';
import moringaChutneyImg from '../assets/org/13.svg';
import almondDrinkImg from '../assets/org/14.svg';
import chocoNuttyImg from '../assets/org/15.svg';

interface Product {
    title: string;
    description: string;
    tags: string[];
    image: string;
    isDisplayCard?: boolean;
}

const MoringaSpecial: React.FC = () => {
    const products: Product[] = [
        {
            title: 'Moringa Powder',
            description: 'Pure moringa leaf powder packed with natural nutrients',
            tags: ['MORINGA'],
            image: moringaPowderImg
        },
        {
            title: 'Moringa Chutney / Rice Mix',
            description: 'Flavourful moringa-based mix for rice and meals',
            tags: ['MORINGA MIX'],
            image: moringaChutneyImg,
            isDisplayCard: true
        },
        {
            title: 'Almond Drink Mix',
            description: 'Smooth almond-based mix for a nourishing drink',
            tags: ['ALMOND'],
            image: almondDrinkImg
        },
        {
            title: 'Choco nutty drink',
            description: 'Rich chocolate drink blended with crunchy nutty goodness',
            tags: ['CHOCOLATE', 'NUTS'],
            image: chocoNuttyImg,
            isDisplayCard: true
        }
    ];

    return (
        <section className="moringa-special">
            <img src={heartDecorative} alt="" className="decorative-heart" />

            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                <header className="section-header">
                    <h2 className="title">Moringa Special</h2>
                    <p className="subtitle">Nutrient-rich traditional health mix made with 51 natural ingredients</p>
                </header>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div key={index} className="grid-item">
                            {product.isDisplayCard ? (
                                <DisplayCard product={product} />
                            ) : (
                                <ProductCard product={product} delay={0.1 * (index + 1)} />
                            )}
                        </div>
                    ))}
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
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    </motion.div>
);

const DisplayCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="display-card">
        <div className="image-container">
            <img src={product.image} alt={product.title} />
        </div>
        <div className="display-info">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="tags">
                {product.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    </div>
);

export default MoringaSpecial;
