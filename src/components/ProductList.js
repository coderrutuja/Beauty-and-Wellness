import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

const products = [
    {
        name: 'Facial Cleanser',
        description: 'A gentle cleanser for daily use.',
        price: 19.99,
        image: image1
    },
    {
        name: 'Moisturizing Cream',
        description: 'Hydrates and nourishes your skin.',
        price: 29.99,
        image: image2
    },
    {
        name: 'Sunscreen SPF 50',
        description: 'Protects your skin from harmful UV rays.',
        price: 24.99,
        image: image3
    }
];

const ProductList = () => {
    return (
        <section id="products" className="product-list-section">
            <div className="container">
                <h2>Our Products</h2>
                <div className="row">
                    {products.map((product, index) => (
                        <div key={index} className="col-md-4">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
