
import raagiImg from '../assets/chocolate-brownies-white-plate 1.svg';
import wholewheatImg from '../assets/Frame 1153.svg';
import kambuImg from '../assets/front-view-chocolate-cake-plate 1.svg';
import pbImg from '../assets/Peanut-Butter-Brownies-1-of-1 1.svg';
import blondiesImg1 from '../assets/assetss/Frame 1151.svg';
import rosePistachioImg from '../assets/assetss/front-view-delicious-chocolate-cake-with-almonds 1.svg';
import kambuBrownieImg from '../assets/assetss/front-view-chocolate-cake-plate 1.svg';
import pbBrownieImg from '../assets/assetss/Peanut-Butter-Brownies-1-of-1 1.svg';
import cookieImg1 from '../assets/assetss/a.svg';
import cookieImg2 from '../assets/assetss/b.svg';
import cookieImg3 from '../assets/assetss/c.svg';
import cookieImg4 from '../assets/assetss/d.svg';
import bananaCakeImg from '../assets/assetss/e.svg';
import carrotCakeImg from '../assets/assetss/f.svg';
import teaCakeImg from '../assets/assetss/g.svg';

// Wholewheat Cakes Inputs (Reused inputs from WholewheatCakes.tsx)
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

// Organics Imports
import healthmixImg from '../assets/org/1.svg';
import cocoaRagiImg from '../assets/org/2.svg';
import beetrootImg from '../assets/org/3.svg';
import carrotImg from '../assets/org/4.svg';
import ragiAlmondImg from '../assets/org/5.svg';
import blackUradImg from '../assets/org/7.svg';
import ragiFlourImg from '../assets/org/6.svg';
import bananaPowderImg from '../assets/org/8.svg';
import datesPowderImg from '../assets/org/9.svg';
import mixedNutsImg from '../assets/org/10.svg';
import mixedNutsSeedsImg from '../assets/org/11.svg';
import moringaPowderImg from '../assets/org/12.svg';
import moringaChutneyImg from '../assets/org/13.svg';
import almondDrinkImg from '../assets/org/14.svg';
import chocoNuttyImg from '../assets/org/15.svg';

export interface Product {
    id: string | number;
    title: string;
    description: string;
    image: string;
    category: string;
    tags?: string[];
}

export const allProducts: Product[] = [
    // Wholesome Bakes - Healthy Brownies
    { id: 1, title: 'Raagi Brownie', description: '', image: raagiImg, category: 'Healthy Brownie' },
    { id: 2, title: 'Wholewheat Brownie', description: '', image: wholewheatImg, category: 'Healthy Brownie' },
    { id: 3, title: 'Kambu Brownie', description: '', image: kambuImg, category: 'Healthy Brownie' },
    { id: 4, title: 'Peanut Butter Brownie', description: '', image: pbImg, category: 'Healthy Brownie' },

    // Wholesome Bakes - Wholewheat Blondies
    { id: 5, title: 'Wholewheat Blondies', description: 'Soft blondies with a wholesome wheat base', image: blondiesImg1, category: 'Wholewheat Blondies' },
    { id: 6, title: 'Rose Pistachio Blondies', description: 'Delicate rose flavour with crunchy pistachio bits', image: kambuBrownieImg, category: 'Wholewheat Blondies' },
    { id: 7, title: 'Kambu Brownie', description: '', image: rosePistachioImg, category: 'Wholewheat Blondies' },
    { id: 8, title: 'Peanut Butter Brownie', description: '', image: pbBrownieImg, category: 'Wholewheat Blondies' },

    // Wholesome Bakes - Cookies
    { id: 9, title: 'Wholewheat Cookies', description: 'Crisp cookies baked with wholewheat flour', image: cookieImg1, category: 'Cookies' },
    { id: 10, title: 'Ragi Cookies', description: 'Crunchy cookies made with ragi goodness', image: cookieImg2, category: 'Cookies' },
    { id: 11, title: 'Kambu Cookies', description: 'Crunchy cookies made with ragi goodness', image: cookieImg3, category: 'Cookies' },
    { id: 12, title: 'Multimillet Cookies', description: 'Cookies made using a blend of healthy millets', image: cookieImg4, category: 'Cookies' },

    // Wholesome Bakes - Tea Cakes
    { id: 13, title: 'Banana Cake', description: 'Naturally sweet banana cake with jaggery', image: bananaCakeImg, category: 'Tea Cakes' },
    { id: 14, title: 'Carrot Cake', description: 'Moist carrot cake with wholesome ingredients', image: carrotCakeImg, category: 'Tea Cakes' },
    { id: 15, title: 'Tea Cake', description: 'Light and soft everyday tea-time cake', image: teaCakeImg, category: 'Tea Cakes' },

    // Wholewheat Cakes
    { id: 'ww1', title: 'Vanilla Toffee', description: 'Soft vanilla cake layered with rich toffee flavour', image: cake1, category: 'Wholewheat Cakes' },
    { id: 'ww2', title: 'Vanilla Blueberry', description: 'Classic vanilla cake paired with fruity blueberry notes', image: cake2, category: 'Wholewheat Cakes' },
    { id: 'ww3', title: 'Vanilla Choco', description: 'Vanilla cake blended with smooth chocolate richness', image: cake3, category: 'Wholewheat Cakes' },
    { id: 'ww4', title: 'Strawberry Truffle', description: 'Vanilla cake blended with smooth chocolate richness', image: cake4, category: 'Wholewheat Cakes' },
    { id: 'ww5', title: 'Pineapple Truffle', description: 'Light pineapple cake finished with truffle cream', image: cake5, category: 'Wholewheat Cakes' },
    { id: 'ww6', title: 'Butterscotch', description: 'Moist cake with classic butterscotch sweetnes', image: cake6, category: 'Wholewheat Cakes' },
    { id: 'ww7', title: 'Mango Truffle', description: 'Tropical mango cake with a smooth truffle finish', image: cake7, category: 'Wholewheat Cakes' },
    { id: 'ww8', title: 'Chocolate', description: 'Rich chocolate cake baked using wholewheat flour', image: cake8, category: 'Wholewheat Cakes' },
    { id: 'ww9', title: 'Choco Berry', description: 'Soft cake infused with rose and milk flavours', image: viewAll1, category: 'Wholewheat Cakes' },
    { id: 'ww10', title: 'Rosemilk', description: 'Classic red velvet cake with a soft, moist crumb', image: viewAll2, category: 'Wholewheat Cakes' },
    { id: 'ww11', title: 'Red Velvet', description: 'Red velvet cake layered with creamy cheese frosting', image: viewAll3, category: 'Wholewheat Cakes' },
    { id: 'ww12', title: 'Rasmalai', description: 'Indian-inspired cake flavoured with rich rasmalai', image: viewAll4, category: 'Wholewheat Cakes' },

    // Organics - Health Mixes
    { id: 'hm1', title: 'Healthmix (51 Natural Ingredients)', description: 'Nutrient-rich traditional health mix made with 51 natural ingredients', image: healthmixImg, category: 'Health Mixes' },
    { id: 'hm2', title: 'Cocoa Sprouted Ragi Malt', description: 'Sprouted ragi malt blended with natural cocoa for daily nourishment', image: cocoaRagiImg, category: 'Health Mixes' },
    { id: 'hm3', title: 'Beetroot Malt', description: 'Wholesome beetroot malt made for everyday nutrition', image: beetrootImg, category: 'Health Mixes' },
    { id: 'hm4', title: 'Carrot Malt', description: 'Natural carrot-based malt packed with goodness', image: carrotImg, category: 'Health Mixes' },
    { id: 'hm5', title: 'Sprouted Ragi Almond Mix', description: 'Sprouted ragi combined with almonds for balanced nutrition', image: ragiAlmondImg, category: 'Health Mixes' },
    { id: 'hm6', title: 'Sprouted Ragi Flour', description: 'Finely milled flour made from sprouted ragi grains', image: ragiFlourImg, category: 'Health Mixes' },
    { id: 'hm7', title: 'Black Urad Dal Mix', description: 'Traditional black urad dal blend for healthy cooking', image: blackUradImg, category: 'Health Mixes' },

    // Organics - Natural Powders
    { id: 'np1', title: 'Raw Kerala Banana Powder', description: 'Naturally processed raw banana powder from Kerala', image: bananaPowderImg, category: 'Natural Powders' },
    { id: 'np2', title: 'Dates Powder', description: 'Natural sweetener made from premium dried dates', image: datesPowderImg, category: 'Natural Powders' },
    { id: 'np3', title: 'Mixed Nuts Powder', description: 'Powdered blend of carefully selected nutritious nuts', image: mixedNutsImg, category: 'Natural Powders' },
    { id: 'np4', title: 'Mixed Nuts & Seeds Powder', description: 'Healthy mix of nuts and seeds for daily use', image: mixedNutsSeedsImg, category: 'Natural Powders' },

    // Organics - Moringa Special
    { id: 'ms1', title: 'Moringa Powder', description: 'Pure moringa leaf powder packed with natural nutrients', image: moringaPowderImg, category: 'Moringa Special' },
    { id: 'ms2', title: 'Moringa Chutney / Rice Mix', description: 'Flavourful moringa-based mix for rice and meals', image: moringaChutneyImg, category: 'Moringa Special' },
    { id: 'ms3', title: 'Almond Drink Mix', description: 'Smooth almond-based mix for a nourishing drink', image: almondDrinkImg, category: 'Moringa Special' },
    { id: 'ms4', title: 'Choco nutty drink', description: 'Rich chocolate drink blended with crunchy nutty goodness', image: chocoNuttyImg, category: 'Moringa Special' },
];
