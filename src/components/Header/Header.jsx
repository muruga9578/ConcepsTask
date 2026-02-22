/**
 * Header Component
 * Top navbar with breadcrumbs, actions, theme toggle, and user profile
 */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Header = ({ onMobileMenuToggle }) => {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

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
                <button className="header-icon-btn" title="Search">🔍</button>
                <button className="header-icon-btn" title="Calendar">📅</button>
                <button className="header-icon-btn" title="Messages">💬</button>
                <button className="header-icon-btn" title="Apps">⊞</button>

                {/* User Avatar */}
                <div className="header-avatar" title="User Profile">
                    U
                </div>

                {/* View Profile */}
                <button className="view-profile-btn">View Profile</button>
            </div>
        </header>
    );
};

export default Header;
