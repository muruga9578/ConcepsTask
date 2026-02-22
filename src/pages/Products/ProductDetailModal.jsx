/**
 * Product Detail Modal
 * Displays full product details with image, description, specs, and CTA
 */
import React from 'react';

const ProductDetailModal = ({ product, onClose }) => {
    if (!product) return null;

    /**
     * Get rating stars display
     */
    const renderStars = (rating) => {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5 ? 1 : 0;
        const empty = 5 - full - half;
        return '★'.repeat(full) + (half ? '⯪' : '') + '☆'.repeat(empty);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="modal-header">
                    <h2>Product Details</h2>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>

                {/* Body */}
                <div className="modal-body">
                    {/* Product Image */}
                    <div className="modal-product-image">
                        {product.discount && (
                            <span className="product-save-badge">{product.discount}</span>
                        )}
                        <span style={{ fontSize: '6rem' }}>{product.image}</span>
                        <div className="modal-brand-logo">
                            {product.brand === 'Nike' ? '✓' : product.brand.charAt(0)}
                        </div>
                    </div>

                    {/* Product Name */}
                    <h3 className="modal-product-name">{product.name}</h3>

                    {/* Description */}
                    <p className="modal-product-desc">{product.description}</p>

                    {/* Product Details */}
                    <div className="modal-details">
                        <div className="modal-detail-row">
                            <span className="modal-detail-label">Availability</span>
                            <span className="in-stock-badge">{product.availability}</span>
                        </div>
                        <div className="modal-detail-row">
                            <span className="modal-detail-label">SKU</span>
                            <span className="modal-detail-value">{product.sku}</span>
                        </div>
                        <div className="modal-detail-row">
                            <span className="modal-detail-label">Category</span>
                            <span className="modal-detail-value">{product.category}</span>
                        </div>
                        <div className="modal-detail-row">
                            <span className="modal-detail-label">Rating</span>
                            <span className="modal-detail-value" style={{ color: '#f59e0b' }}>
                                {renderStars(product.rating)}
                            </span>
                        </div>
                        <div className="modal-detail-row">
                            <span className="modal-detail-label">More Info</span>
                            <span className="modal-detail-value">{product.moreInfo}</span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="modal-price">
                        {product.originalPrice && (
                            <span className="original">${product.originalPrice.toFixed(2)}</span>
                        )}
                        <span className="current">${product.price.toFixed(2)}</span>
                    </div>

                    {/* CTA Button */}
                    <button className="add-to-cart-primary">
                        🛒 Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;
