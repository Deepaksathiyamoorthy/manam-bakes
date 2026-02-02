import React, { useState } from 'react';
import { motion } from 'framer-motion';
import raagiImg from '../assets/chocolate-brownies-white-plate 1.svg';
import wholewheatImg from '../assets/Frame 1153.svg';
import kambuImg from '../assets/front-view-chocolate-cake-plate 1.svg';
import pbImg from '../assets/Peanut-Butter-Brownies-1-of-1 1.svg';

// Wholewheat Blondies Imports
import blondiesImg1 from '../assets/assetss/Frame 1151.svg';
import rosePistachioImg from '../assets/assetss/front-view-delicious-chocolate-cake-with-almonds 1.svg';
import kambuBrownieImg from '../assets/assetss/front-view-chocolate-cake-plate 1.svg';
import pbBrownieImg from '../assets/assetss/Peanut-Butter-Brownies-1-of-1 1.svg';

// Cookies Imports
import cookieImg1 from '../assets/assetss/a.svg';
import cookieImg2 from '../assets/assetss/b.svg';
import cookieImg3 from '../assets/assetss/c.svg';
import cookieImg4 from '../assets/assetss/d.svg';

// Tea Cakes Imports
import bananaCakeImg from '../assets/assetss/e.svg';
import carrotCakeImg from '../assets/assetss/f.svg';
import teaCakeImg from '../assets/assetss/g.svg';

import './WholesomeBakes.scss';

interface WholesomeBakesProps {
}

const WholesomeBakes: React.FC<WholesomeBakesProps> = () => {
    const [activeFilter, setActiveFilter] = useState('Healthy Brownie');
    const filters = ['Healthy Brownie', 'Wholewheat Blondies', 'Cookies', 'Tea Cakes'];

    // ... existing product arrays ...

    const healthyBrownies = [
        {
            id: 1,
            title: 'Raagi Brownie',
            description: '',
            tags: [
                { text: 'RAAGI', type: 'pink' },
                { text: 'JAGGERY', type: 'sage' }
            ],
            image: raagiImg
        },
        {
            id: 2,
            title: 'Wholewheat Brownie',
            description: '',
            tags: [
                { text: 'WHOLEWHEAT', type: 'pink' },
                { text: 'DARK CHOCO', type: 'blue' }
            ],
            image: wholewheatImg
        },
        {
            id: 3,
            title: 'Kambu Brownie',
            description: '',
            tags: [
                { text: 'PEARL MILLET', type: 'pink' }
            ],
            image: kambuImg
        },
        {
            id: 4,
            title: 'Peanut Butter Brownie',
            description: '',
            tags: [
                { text: 'PROTIEN RICH', type: 'pink' }
            ],
            image: pbImg
        }
    ];

    const wholewheatBlondies = [
        {
            id: 5,
            title: 'Wholewheat Blondies',
            description: 'Soft blondies with a wholesome wheat base',
            tags: [
                { text: 'WHOLEWHEAT', type: 'pink' }
            ],
            image: blondiesImg1
        },
        {
            id: 6,
            title: 'Rose Pistachio Blondies',
            description: 'Delicate rose flavour with crunchy pistachio bits',
            tags: [
                { text: 'PISTACHIO', type: 'sage' }
            ],
            image: kambuBrownieImg
        },
        {
            id: 7,
            title: 'Kambu Brownie',
            description: '',
            tags: [
                { text: 'PEARL MILLET', type: 'pink' }
            ],
            image: rosePistachioImg
        },
        {
            id: 8,
            title: 'Peanut Butter Brownie',
            description: '',
            tags: [
                { text: 'PROTIEN RICH', type: 'pink' }
            ],
            image: pbBrownieImg
        }
    ];

    const cookies = [
        {
            id: 9,
            title: 'Wholewheat Cookies',
            description: 'Crisp cookies baked with wholewheat flour',
            tags: [
                { text: 'WHOLEWHEAT', type: 'pink' }
            ],
            image: cookieImg1
        },
        {
            id: 10,
            title: 'Ragi Cookies',
            description: 'Crunchy cookies made with ragi goodness',
            tags: [
                { text: 'RAGI', type: 'sage' }
            ],
            image: cookieImg2
        },
        {
            id: 11,
            title: 'Kambu Cookies',
            description: 'Crunchy cookies made with ragi goodness',
            tags: [
                { text: 'KAMBU', type: 'pink' }
            ],
            image: cookieImg3
        },
        {
            id: 12,
            title: 'Multimillet Cookies',
            description: 'Cookies made using a blend of healthy millets',
            tags: [
                { text: 'MULTIMILLET', type: 'pink' }
            ],
            image: cookieImg4
        }
    ];

    const teaCakes = [
        {
            id: 13,
            title: 'Banana Cake',
            description: 'Naturally sweet banana cake with jaggery',
            tags: [
                { text: 'JAGGERY', type: 'sage' } // Changed to sage (greyish/green) as per image, though image shows creamy color, typically 'sage' or 'pink' are my available types. Let's assume sage for Jaggery as seen in Raagi Brownie. Wait, image shows explicit "JAGGERY" tag being same color as "EVERYDAY" and "PROTIEN RICH" which are pinkish. No, Jaggery in Raagi was sage. In the uploaded image for Tea Cakes, "JAGGERY" looks pink/beige. I'll use 'pink' or 'beige' if available. WholesomeBakes.scss has 'pink', 'sage', 'blue'. I'll stick to 'pink' if it matches the others, or 'sage' if specifically requested. Image shows "JAGGERY" with pink background? It looks light pink/beige. Let's use 'pink' for uniformity if uncertain, or check SCSS. I'll use 'pink' effectively for beige-like too if that's the main style.
            ],
            image: bananaCakeImg
        },
        {
            id: 14,
            title: 'Carrot Cake',
            description: 'Moist carrot cake with wholesome ingredients',
            tags: [
                { text: 'JAGGERY', type: 'sage' } // Using sage for variety or consistency with other Jaggery tags
            ],
            image: carrotCakeImg
        },
        {
            id: 15,
            title: 'Tea Cake',
            description: 'Light and soft everyday tea-time cake',
            tags: [
                { text: 'EVERYDAY', type: 'pink' }
            ],
            image: teaCakeImg
        },
        {
            id: 16,
            title: 'Peanut Butter Brownie',
            description: '',
            tags: [
                { text: 'PROTIEN RICH', type: 'pink' }
            ],
            image: pbBrownieImg
        }
    ];

    const getProducts = () => {
        switch (activeFilter) {
            case 'Wholewheat Blondies':
                return wholewheatBlondies;
            case 'Cookies':
                return cookies;
            case 'Tea Cakes':
                return teaCakes;
            default:
                return healthyBrownies;
        }
    };

    const products = getProducts();

    return (
        <section className="wholesome-bakes">
            <div className="wholesome-bakes__header">
                <h2>Wholesome Bakes</h2>
                <p>
                    Artisanal cakes, breads, and pastries crafted fresh every day. Artisanal cakes, breads,
                    and pastries crafted fresh every day. Artisanal cakes, breads,
                </p>
            </div>

            <div className="wholesome-bakes__filters">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={`wholesome-bakes__filter-btn ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="wholesome-bakes__grid">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        className="wholesome-bakes__card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <div className="wholesome-bakes__tags">
                            {product.tags.map((tag) => (
                                <span
                                    key={tag.text}
                                    className={`wholesome-bakes__tag wholesome-bakes__tag--${tag.type}`}
                                >
                                    {tag.text}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WholesomeBakes;

