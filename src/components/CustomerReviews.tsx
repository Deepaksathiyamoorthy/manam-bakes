import React from 'react';
import './CustomerReviews.scss';
import customerImage from '../assets/customer-girl.jpg';
import loveIcon from '../assets/customer-love-icon.svg';

const CustomerReviews: React.FC = () => {
    const marqueeItems = [
        { text: "Handcrafted Cakes", icon: "🥧" },
        { text: "Warm Pastries", icon: "🥯" },
        { text: "Pure Ingredients", icon: "🍰" },
        { text: "Sweet Moments", icon: "🍩" },
        { text: "Handcrafted Cakes", icon: "🥧" },
        { text: "Warm Pastries", icon: "🥯" },
        { text: "Pure Ingredients", icon: "🍰" },
        { text: "Sweet Moments", icon: "🍩" },
    ];

    return (
        <section className="customer-reviews">
            <div className="customer-reviews__marquee">
                <div className="customer-reviews__marquee-content">
                    {marqueeItems.concat(marqueeItems).map((item, index) => (
                        <span key={index}>
                            {item.text} <em className="icon">{item.icon}</em>
                        </span>
                    ))}
                </div>
            </div>

            <div className="customer-reviews__container">
                <div className="customer-reviews__image">
                    <img src={customerImage} alt="Happy customer with balloons" />
                </div>

                <div className="customer-reviews__content">
                    <div className="customer-reviews__content-header">
                        <h2>
                            See What Our <br />
                            <em>Customers Share</em>
                        </h2>
                        <img src={loveIcon} alt="Love" className="love-icon" />
                    </div>

                    <p>
                        We're grateful to have a growing community that celebrates their
                        sweetest moments with us. From birthday surprises to wedding
                        memories, here are a few heartfelt stories our customers have
                        shared on Instagram.
                    </p>

                    <div className="customer-reviews__stats">
                        <div className="customer-reviews__stats-item">
                            <h3>10,000+</h3>
                            <span>Happy Customers</span>
                        </div>
                        <div className="customer-reviews__stats-item">
                            <h3>4.9 ★</h3>
                            <span>Instagram Love</span>
                        </div>
                        <div className="customer-reviews__stats-item">
                            <h3>2,500+</h3>
                            <span>Cakes Delivered</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
