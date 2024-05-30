import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
