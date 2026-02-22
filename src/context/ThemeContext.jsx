/**
 * Theme Context Provider
 * Manages dark/light theme toggle across the application
 */
import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

/**
 * Custom hook to access theme context
 * @returns {{ theme: string, toggleTheme: Function }}
 */
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

/**
 * ThemeProvider wraps the app and provides theme state
 */
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check localStorage for saved preference
        const saved = localStorage.getItem('conceps-theme');
        return saved || 'light';
    });

    useEffect(() => {
        // Apply theme to document root
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('conceps-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
