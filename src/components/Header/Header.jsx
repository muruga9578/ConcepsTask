import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Header = ({ onMobileMenuToggle }) => {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Hardcoded user info for demo
    const user = {
        name: 'Ursua Amador',
        email: 'ursua.amador@example.com',
        initial: 'U'
    };

    /**
     * Handle logout
     */
    const handleLogout = () => {
        // Redirect to login page for demo
        navigate('/login');
    };

    /**
     * Close dropdown when clicking outside
     */
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowUserDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    /**
     * Generate breadcrumb from current path
     */
    const getBreadcrumbs = () => {
        const path = location.pathname;
        const segments = path.split('/').filter(Boolean);

        if (segments.length === 0) return ['Dashboards', 'Default'];

        const labels = {
            dashboard: 'Dashboards',
            list: 'List',
            products: 'Store Client',
            registration: 'Registration',
        };

        return ['Dashboards', labels[segments[0]] || segments[0]];
    };

    const breadcrumbs = getBreadcrumbs();

    return (
        <header className="header">
            <div className="header-left">
                {/* Mobile hamburger */}
                <button className="mobile-menu-btn" onClick={onMobileMenuToggle}>
                    ☰
                </button>

                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    {breadcrumbs.map((crumb, i) => (
                        <React.Fragment key={i}>
                            {i > 0 && <span>›</span>}
                            <span className={i === breadcrumbs.length - 1 ? 'current' : ''}>
                                {crumb}
                            </span>
                        </React.Fragment>
                    ))}
                </nav>
            </div>

            <div className="header-right">
                {/* Theme Toggle */}
                <button
                    className="theme-toggle-btn"
                    onClick={toggleTheme}
                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>

                {/* Icon Buttons */}
                <button className="header-icon-btn" title="Search">
                    <img src="/assets/magnifier.png" alt="Search" />
                </button>
                <button className="header-icon-btn" title="Calendar">
                    <img src="/assets/Union.png" alt="Calendar" />
                </button>
                <button className="header-icon-btn" title="Messages">
                    <img src="/assets/messages.png" alt="Messages" />
                </button>
                <button className="header-icon-btn" title="Apps">
                    <img src="/assets/dashboard.png" alt="Apps" />
                </button>

                {/* User Avatar & Dropdown */}
                <div className="user-profile-wrapper" ref={dropdownRef}>
                    <div
                        className="header-avatar"
                        title="User Profile"
                        onClick={() => setShowUserDropdown(!showUserDropdown)}
                    >
                        {user.initial}
                    </div>

                    {showUserDropdown && (
                        <div className="user-dropdown-menu">
                            <div className="dropdown-user-info">
                                <div className="dropdown-avatar">{user.initial}</div>
                                <div className="user-details">
                                    <span className="user-name">{user.name}</span>
                                    <span className="user-email">{user.email}</span>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" onClick={() => navigate('/registration')}>
                                <span className="item-icon">👤</span>
                                My Profile
                            </button>
                            <button className="dropdown-item" onClick={() => setShowUserDropdown(false)}>
                                <span className="item-icon">⚙️</span>
                                Settings
                            </button>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item logout-btn" onClick={handleLogout}>
                                <span className="item-icon">🚪</span>
                                Logout
                            </button>
                        </div>
                    )}
                </div>

                {/* View Profile Button - Hidden on mobile */}
                <button className="view-profile-btn">View Profile</button>
            </div>
        </header>
    );
};

export default Header;
