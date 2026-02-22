/**
 * Layout Component
 * Wraps pages with Sidebar and Header for authenticated views
 */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleSidebar = () => setSidebarCollapsed((prev) => !prev);
    const toggleMobile = () => setMobileOpen((prev) => !prev);
    const closeMobile = () => setMobileOpen(false);

    return (
        <div className="app-layout">
            <Sidebar
                collapsed={sidebarCollapsed}
                onToggle={toggleSidebar}
                mobileOpen={mobileOpen}
                onCloseMobile={closeMobile}
            />
            <main className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
                <Header onMobileMenuToggle={toggleMobile} />
                <div className="page-wrapper">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
