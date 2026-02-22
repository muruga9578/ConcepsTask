/**
 * Product List Page
 * Grid display of products with search, filters, sorting, pagination,
 * and product detail modal
 */
import React, { useState, useMemo } from 'react';
import { productsData } from '../../data/mockData';
import ProductDetailModal from './ProductDetailModal';

const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('Nike');
    const [sortBy, setSortBy] = useState('high-to-low');
    const [timeFilter, setTimeFilter] = useState('Today');
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(12);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let result = [...productsData];

        // Search filter
        if (searchTerm) {
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    p.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sort
        if (sortBy === 'high-to-low') {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'low-to-high') {
            result.sort((a, b) => a.price - b.price);
        }

        return result;
    }, [searchTerm, sortBy]);

    // Pagination
    const totalItems = filteredProducts.length;
    const totalPages = Math.ceil(totalItems / perPage);
    const startIndex = (currentPage - 1) * perPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + perPage);

    /**
     * Get rating badge color class based on rating value
     */
    const getRatingClass = (rating) => {
        if (rating >= 4.5) return 'high';
        if (rating >= 3.5) return 'medium';
        return 'low';
    };

    const timeFilters = ['Week', 'Today', 'Month', 'Month', 'All'];

    return (
        <>
            <div className="page-header">
                <h1>Search Results - Grid</h1>
                <p>Central Hub for Personal Customization</p>
            </div>

            {/* Search Bar */}
            <div className="search-bar">
                <div className="search-bar-input-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        className="search-bar-input"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </div>
                <button className="filter-btn">
                    🔽 Filter
                </button>
            </div>

            {/* Product List Header */}
            <div className="product-list-header">
                <div className="product-results-info">
                    1 - {Math.min(perPage, totalItems)} over {totalItems} results for <strong>{searchTerm || 'All'}</strong>
                </div>

                <div className="product-filters">
                    <select
                        className="filter-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="high-to-low">Price High to Low</option>
                        <option value="low-to-high">Price Low to High</option>
                    </select>

                    <div className="time-filter-group">
                        {timeFilters.map((filter, i) => (
                            <button
                                key={`${filter}-${i}`}
                                className={`time-filter-btn ${timeFilter === filter && i === timeFilters.indexOf(timeFilter) ? 'active' : ''}`}
                                onClick={() => setTimeFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="view-toggle">
                        <button className="view-toggle-btn active" title="Grid View">⊞</button>
                        <button className="view-toggle-btn" title="List View">☰</button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="product-grid">
                {currentProducts.map((product) => (
                    <div
                        key={product.id}
                        className="product-card"
                        onClick={() => setSelectedProduct(product)}
                    >
                        <div className="product-image">
                            <span style={{ fontSize: '4rem' }}>{product.image}</span>
                            {product.discount && (
                                <span className="product-save-badge">{product.discount}</span>
                            )}
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">{product.name}</h3>
                            <div className="product-footer">
                                <div className="product-rating">
                                    <span className={`rating-badge ${getRatingClass(product.rating)}`}>
                                        ⭐ {product.rating}
                                    </span>
                                </div>
                                <div className="product-price">
                                    {product.originalPrice && (
                                        <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                                    )}
                                    ${product.price.toFixed(2)}
                                </div>
                                <button
                                    className="add-to-cart-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        // Mock add to cart
                                    }}
                                >
                                    🛒 Add
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="card" style={{ marginTop: '0.5rem' }}>
                <div className="table-footer" style={{ border: 'none', padding: '0.75rem 0' }}>
                    <div className="show-per-page">
                        Show{' '}
                        <select
                            value={perPage}
                            onChange={(e) => {
                                setPerPage(Number(e.target.value));
                                setCurrentPage(1);
                            }}
                        >
                            <option value={12}>12</option>
                            <option value={24}>24</option>
                            <option value={48}>48</option>
                        </select>{' '}
                        Per page
                    </div>
                    <div className="pagination">
                        <button
                            className="pagination-btn"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                        >
                            ←
                        </button>
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            className="pagination-btn"
                            disabled={currentPage >= totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <ProductDetailModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </>
    );
};

export default ProductList;
