/**
 * Sign In Page
 * Email/Password login with Google/Apple OAuth buttons
 * Includes form validation for email format and password length
 */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const [view, setView] = useState('signin'); // 'signin' or 'forgot'
    const [resetEmail, setResetEmail] = useState('');
    const [resetSuccess, setResetSuccess] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    /**
     * Validates the sign-in form fields
     * @returns {boolean} True if valid
     */
    const validate = () => {
        const newErrors = {};

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Mock authentication - navigate to dashboard
            navigate('/dashboard');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    /**
     * Handles the reset password "Send" action
     */
    const handleResetPassword = (e) => {
        e.preventDefault();
        if (resetEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetEmail)) {
            setResetSuccess(true);
            setTimeout(() => {
                setResetSuccess(false);
                setResetEmail('');
                setView('signin');
            }, 2000);
        }
    };

    if (view === 'forgot') {
        return (
            <div className="auth-page">
                <div className="auth-card">
                    <h1>Forgot Password?</h1>
                    <p className="subtitle">
                        Enter your email to reset your password.
                    </p>

                    {resetSuccess && (
                        <div style={{
                            padding: '0.75rem',
                            background: 'var(--success-bg)',
                            color: 'var(--success)',
                            borderRadius: 'var(--border-radius)',
                            marginBottom: '1rem',
                            fontSize: '0.875rem',
                            fontWeight: 500
                        }}>
                            ✅ Reset link sent to your email!
                        </div>
                    )}

                    <form onSubmit={handleResetPassword}>
                        <div className="form-group">
                            <label htmlFor="reset-email">Email</label>
                            <div className="input-wrapper">
                                <input
                                    id="reset-email"
                                    type="email"
                                    placeholder="email@email.com"
                                    value={resetEmail}
                                    onChange={(e) => setResetEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn-primary" style={{ marginBottom: '1rem' }}>
                            Send
                        </button>

                        <p className="subtitle" style={{ textAlign: 'center', margin: 0 }}>
                            <a href="#back" onClick={(e) => { e.preventDefault(); setView('signin'); }}>
                                Back to Sign In
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Sign in</h1>
                <p className="subtitle">
                    Need an account? <Link to="/signup">Sign up</Link>
                </p>

                {/* Social Login Buttons */}
                <div className="social-buttons">
                    <button className="social-btn" type="button">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Use Google
                    </button>
                    <button className="social-btn" type="button">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                        Use Apple
                    </button>
                </div>

                {/* Divider */}
                <div className="divider">OR</div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="signin-email">Email</label>
                        <div className="input-wrapper">
                            <input
                                id="signin-email"
                                type="email"
                                name="email"
                                placeholder="email@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                                autoComplete="email"
                            />
                        </div>
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <div className="label-row">
                            <label htmlFor="signin-password">Password</label>
                            <a href="#forgot" onClick={(e) => { e.preventDefault(); setView('forgot'); }}>
                                Forgot Password?
                            </a>
                        </div>
                        <div className="input-wrapper">
                            <input
                                id="signin-password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={handleChange}
                                className={errors.password ? 'error' : ''}
                                autoComplete="current-password"
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>

                    <div className="checkbox-group">
                        <input
                            type="checkbox"
                            id="remember-me"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button type="submit" className="btn-primary">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
