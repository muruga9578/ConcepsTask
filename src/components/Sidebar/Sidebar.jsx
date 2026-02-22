/**
 * Sidebar Component
 * Collapsible navigation sidebar with menu sections
 */
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { sidebarMenuItems } from '../../data/mockData';

const Sidebar = ({ collapsed, onToggle, mobileOpen, onCloseMobile }) => {
    const location = useLocation();

    /**
     * Renders icon - supports both image paths and emoji text
     */
    const renderIcon = (icon) => {
        if (icon && (icon.startsWith('/') || icon.startsWith('.') || icon.endsWith('.png') || icon.endsWith('.svg'))) {
            return <img src={icon} alt="" style={{ width: '20px', height: '20px' }} />;
        }
        return icon;
    };

    /**
     * Renders a single menu item with optional badge
     */
    const renderMenuItem = (item) => {
        const isActive = location.pathname === item.path;
        const isDisabled = item.disabled;

        if (isDisabled) {
            return (
                <div
                    key={item.id}
                    className={`sidebar-menu-item ${isActive ? 'active' : ''}`}
                    style={{ opacity: 0.5, cursor: 'not-allowed' }}
                >
                    <span className="icon">{renderIcon(item.icon)}</span>
                    <span>{item.label}</span>
                    {item.badge && (
                        <span className={`badge ${item.badge === 'Soon' ? 'soon' : ''}`}>
                            {item.badge}
                        </span>
                    )}
                </div>
            );
        }

        return (
            <NavLink
                key={item.id}
                to={item.path}
                end
                className={({ isActive: navActive }) => {
                    // Only mark as active if it's a real path matching the URL
                    const isRealActive = navActive && item.path !== '#';
                    return `sidebar-menu-item ${isRealActive ? 'active' : ''}`;
                }}
                onClick={onCloseMobile}
            >
                <span className="icon">{renderIcon(item.icon)}</span>
                <span>{item.label}</span>
                {item.badge && item.badge !== 'Soon' && (
                    <span className="badge">{item.badge}</span>
                )}
                {item.badge === 'Soon' && (
                    <span className="badge soon">Soon</span>
                )}
            </NavLink>
        );
    };

    return (
        <>
            {/* Mobile overlay */}
            <div
                className={`mobile-overlay ${mobileOpen ? 'visible' : ''}`}
                onClick={onCloseMobile}
            />

            <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
                {/* Logo */}
                <div className="sidebar-logo">
                    <h2>CONCEPS</h2>
                </div>

                {/* Toggle Button */}
                <button className="sidebar-toggle" onClick={onToggle} title="Toggle Sidebar">
                    {collapsed ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    )}
                </button>

                <div className="sidebar-content">
                    {/* Main Section */}
                    <div className="sidebar-section">
                        {sidebarMenuItems.main.map(renderMenuItem)}
                    </div>

                    {/* User Section */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title">USER</div>
                        {sidebarMenuItems.user.map(renderMenuItem)}
                    </div>

                    {/* Apps Section */}
                    <div className="sidebar-section">
                        <div className="sidebar-section-title">APPS</div>
                        {sidebarMenuItems.apps.map(renderMenuItem)}
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
