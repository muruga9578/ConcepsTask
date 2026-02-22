/**
 * List Page
 * Data table with employee/team list, search, and pagination
 */
import React, { useState, useMemo } from 'react';
import { listData } from '../../data/mockData';

const ListPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    // Filter data based on search
    const filteredData = useMemo(() => {
        return listData.filter(
            (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    // Pagination calculations
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / perPage);
    const startIndex = (currentPage - 1) * perPage;
    const currentData = filteredData.slice(startIndex, startIndex + perPage);

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;
        let start = Math.max(1, currentPage - 2);
        let end = Math.min(totalPages, start + maxVisible - 1);
        if (end - start < maxVisible - 1) {
            start = Math.max(1, end - maxVisible + 1);
        }
        for (let i = start; i <= end; i++) pages.push(i);
        return pages;
    };

    return (
        <>
            <div className="page-header">
                <h1>List</h1>
                <p>Central Hub for Personal Customization</p>
            </div>

            <div className="card table-card">
                <div className="table-header">
                    <h3 className="table-title">List</h3>
                    <div className="search-input-wrapper">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search Teams"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Number</th>
                                <th>Location</th>
                                <th>Address</th>
                                <th>Currently Working</th>
                                <th>Experience</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.no}</td>
                                    <td>
                                        <div className="name-cell">{item.name}</div>
                                        <div className="email-cell">{item.email}</div>
                                    </td>
                                    <td>
                                        <div className="name-cell">{item.department}</div>
                                        <div className="email-cell">{item.departmentDesc}</div>
                                    </td>
                                    <td>{item.number}</td>
                                    <td>{item.location}</td>
                                    <td>{item.address}</td>
                                    <td>{item.currentlyWorking}</td>
                                    <td>{item.experience}</td>
                                </tr>
                            ))}
                            {currentData.length === 0 && (
                                <tr>
                                    <td colSpan="8" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                                        No results found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="table-footer">
                    <div className="show-per-page">
                        Show{' '}
                        <select
                            value={perPage}
                            onChange={(e) => {
                                setPerPage(Number(e.target.value));
                                setCurrentPage(1);
                            }}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                        </select>{' '}
                        per page
                    </div>
                    <div className="pagination">
                        <span className="pagination-info">
                            {startIndex + 1}-{Math.min(startIndex + perPage, totalItems)} of {totalItems}
                        </span>
                        <button
                            className="pagination-btn"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                        >
                            ←
                        </button>
                        {getPageNumbers().map((page) => (
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
        </>
    );
};

export default ListPage;
