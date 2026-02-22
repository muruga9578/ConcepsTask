/**
 * Application Entry Point
 * Renders the React app into the DOM with ThemeProvider context
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

// Global styles
import './styles/index.css';
import './styles/pages.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
