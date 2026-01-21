import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './WholewheatCakes.scss';

// Reusing assets for demonstration as specific images weren't provided
// New Assets
import cake1 from '../assets/Frame 1151.svg';
import cake2 from '../assets/front-view-chocolate-cake-plate 1.png';
import cake3 from '../assets/front-view-delicious-chocolate-cake-with-almonds 1.png';
import cake4 from '../assets/Peanut-Butter-Brownies-1-of-1 1.png';
import cake5 from '../assets/Frame 1151.png';
import cake6 from '../assets/front-view-chocolate-cake-plate 2.png';
import cake7 from '../assets/Frame 1153.png';
import cake8 from '../assets/Peanut-Butter-Brownies-1-of-1 2.png';
import viewAll1 from '../assets/assetss/1.png';
import viewAll2 from '../assets/assetss/2.png';
import viewAll3 from '../assets/assetss/3.png';
import viewAll4 from '../assets/assetss/4.png';
import decorativeSvg from '../assets/Relationships _ heart shapes, balloons, floating, celebrating love 1.svg';

interface WholewheatCakesProps {
    limit?: number;
    onViewAll?: () => void;
}

const WholewheatCakes: React.FC<WholewheatCakesProps> = ({ limit, onViewAll }) => {
    useEffect(() => {
        if (!limit) {
            window.scrollTo(0, 0);
        }
    }, [limit]);

    // ... products array ... (I will keep the products array as is, just need to ensure I wrap around it correctly or don't delete it)
    // Wait, replace_file_content needs to replace a block. I can't easily "wrap" without resending the whole file or large chunks.
    // I will replace the start of the component to add props, and the end to add the slicing and button.

    // Let's do it in two chunks? No, replace_file_content is single contiguous block.
    // I will replace the component definition start.
    // And then replace the return statement part.
    // Use multi_replace for this? Yes, perfect use case.


    const products = [
        {
            title: 'Vanilla Toffee',
            description: 'Soft vanilla cake layered with rich toffee flavour',
            tags: [{ text: 'WHOLEWHEAT', type: 'pink' }],
            image: cake1
        },
        {
            title: 'Vanilla Blueberry',
            description: 'Classic vanilla cake paired with fruity blueberry notes',
            tags: [{ text: 'WHOLEWHEAT', type: 'pink' }, { text: 'FRUIT', type: 'sage' }],
            image: cake2
        },
        {
            title: 'Vanilla Choco',
            description: 'Vanilla cake blended with smooth chocolate richness',
            tags: [{ text: 'WHOLEWHEAT', type: 'pink' }, { text: 'CHOCO', type: 'blue' }],
            image: cake3
        },
        {
            title: 'Strawberry Truffle',
            description: 'Vanilla cake blended with smooth chocolate richness',
            tags: [{ text: 'WHOLEWHEAT', type: 'pink' }, { text: 'CHOCO', type: 'sage' }],
            image: cake4
        },
        {
            title: 'Pineapple Truffle',
            description: 'Light pineapple cake finished with truffle cream',
            tags: [{ text: 'WHOLEWHEAT', type: 'pink' }, { text: 'FRUIT', type: 'blue' }],
            image: cake5
        },
        {
            title: 'Butterscotch',
            description: 'Moist cake with classic butterscotch sweetnes',
            tags: [{ text: 'WHOLEWHEAT', type: 'pink' }, { text: 'DARK CHOCO', type: 'sage' }],
            image: cake6
        },
        {
            title: 'Mango Truffle',
            description: 'Tropical mango cake with a smooth truffle finish',
            tags: [{ text: 'PEARL MILLET', type: 'pink' }],
            image: cake7
        },
        {
            title: 'Chocolate',
            description: 'Rich chocolate cake baked using wholewheat flour',
            tags: [{ text: 'WHOLEWHEAT', type: 'pink' }, { text: 'CHOCOLATE', type: 'sage' }],
            image: cake8
        },
        // Kept remaining products if any, ensuring the first 8 match the user request.
        // Assuming the list goes on, I'm just binding the first 8.
        {
            title: 'Choco Berry',
            description: 'Soft cake infused with rose and milk flavours',
            tags: [{ text: 'WHOLEWHEAT', type: 'pink' }, { text: 'BERRY', type: 'blue' }],
            image: viewAll1
        },
        {
            title: 'Rosemilk',
            description: 'Classic red velvet cake with a soft, moist crumb',
            tags: [{ text: 'WHOLEWHEAT', type: 'pink' }, { text: 'FLORAL', type: 'sage' }],
            image: viewAll2
        },
        {
            title: 'Red Velvet',
            description: 'Red velvet cake layered with creamy cheese frosting',
            tags: [{ text: 'WHOLEWHEAT', type: 'pink' }],
            image: viewAll3
        },
        {
            title: 'Rasmalai',
            description: 'Indian-inspired cake flavoured with rich rasmalai',
            tags: [{ text: 'WHOLEWHEAT', type: 'pink' }, { text: 'INDIAN FLAVOUR', type: 'sage' }],
            image: viewAll4
        }
    ];

    const displayedProducts = limit ? products.slice(0, limit) : products;

    return (
        <section className="wholewheat-cakes">
            <img src={decorativeSvg} alt="Decorative" className="decorative-svg" />
            <div className="wholewheat-cakes__header">
                <h2>Wholewheat Cakes</h2>
                <p>Classic cake flavours made with wholesome wholewheat</p>
            </div>

            <div className="wholewheat-cakes__grid">
                {displayedProducts.map((product, index) => (
                    <motion.div
                        key={index}
                        className="wholewheat-cakes__card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <div className="wholewheat-cakes__tags">
                            {product.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className={`wholewheat-cakes__tag wholewheat-cakes__tag--${tag.type}`}
                                >
                                    {tag.text}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {onViewAll && (
                <div className="view-all-container">
                    <button
                        onClick={onViewAll}
                        className="view-all-btn"
                    >
                        VIEW ALL
                    </button>
                </div>
            )}
        </section>
    );
};

export default WholewheatCakes;
