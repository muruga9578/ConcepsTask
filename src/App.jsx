/**
 * App Component
 * Root component with React Router configuration
 * Defines all application routes and navigation structure
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import Layout from './components/Layout/Layout';

// Auth Pages
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import VerifyOTP from './pages/Auth/VerifyOTP';

// App Pages
import Dashboard from './pages/Dashboard/Dashboard';
import ListPage from './pages/List/ListPage';
import ProductList from './pages/Products/ProductList';
import Registration from './pages/Registration/Registration';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public / Auth Routes */}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/verify-otp" element={<VerifyOTP />} />

                {/* Protected / App Routes (wrapped in Layout with Sidebar + Header) */}
                <Route element={<Layout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/list" element={<ListPage />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/registration" element={<Registration />} />
                </Route>

                {/* Default redirect to Sign In */}
                <Route path="*" element={<Navigate to="/signin" replace />} />
            </Routes>
        </Router>
    );
};

export default App;
