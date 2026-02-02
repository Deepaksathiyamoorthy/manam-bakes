
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import { allProducts, type Product } from '../data/products';
import './SearchModal.scss';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<Product[]>([]);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setResults([]);
            return;
        }

        const filtered = allProducts.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filtered);
    }, [searchTerm]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setSearchTerm('');
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="search-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="search-modal-content"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="search-header">
                            <div className="search-input-wrapper">
                                <FiSearch className="search-icon" />
                                <input
                                    type="text"
                                    placeholder="Search for cakes, healthy mixes..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    autoFocus
                                />
                                {searchTerm && (
                                    <button className="clear-search" onClick={() => setSearchTerm('')}>
                                        <FiX />
                                    </button>
                                )}
                            </div>
                            <button className="close-btn" onClick={onClose}>
                                <FiX />
                            </button>
                        </div>

                        <div className="search-results">
                            {results.length > 0 ? (
                                <div className="results-list">
                                    {results.map((product) => (
                                        <div key={product.id} className="search-result-item">
                                            <div className="result-image">
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                            <div className="result-info">
                                                <h4>{product.title}</h4>
                                                <span className="category-badge">{product.category}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : searchTerm ? (
                                <div className="no-results">
                                    <p>No products found for "{searchTerm}"</p>
                                </div>
                            ) : (
                                <div className="search-suggestions">
                                    <p>Popular Searches:</p>
                                    <div className="tags">
                                        <button onClick={() => setSearchTerm('Brownie')}>Brownie</button>
                                        <button onClick={() => setSearchTerm('Ragi')}>Ragi</button>
                                        <button onClick={() => setSearchTerm('Cake')}>Cake</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchModal;
