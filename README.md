# Conceps Media Works - Front-End Technical Assignment

A professional, fully responsive dashboard and product management application built as a technical evaluation project.

## 🚀 Setup Instructions

### Prerequisites
- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher (or yarn)

### Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory:
   ```bash
   cd conceps-media-works
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Running Locally
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to the URL provided in the terminal (typically `http://localhost:5173`).

---

## 📍 Screen Navigation

The application is structured into the following routes:

### Authentication Flows
- **`/signin`**: Entry point for existing users to authenticate.
- **`/signup`**: New user registration screen with form validation.
- **`/verify-otp`**: Multi-factor authentication simulation using OTP.

### Main Application (Protected)
- **`/dashboard`**: Comprehensive overview featuring analytical metrics, social media stats, and interactive tables.
- **`/list`**: A data-driven listing page with advanced search, filtering, and pagination.
- **`/products`**: An e-commerce styled product gallery showcasing grid layouts and professional UI.
- **`/registration`**: A multi-field responsive form designed for complex data entry tasks.

---

## 🛠 Technologies Used

- **React.js**: Modern functional components and hooks pattern.
- **JavaScript (ES6+)**: Clean, modular, and maintainable code structure.
- **HTML5**: Semantic markup for better accessibility and SEO.
- **CSS3 (Vanilla)**: High-fidelity layout control using **Flexbox** and **Grid** without external CSS frameworks.
- **React Hooks**: Efficient state and side-effect management using `useState`, `useEffect`, `useContext`, `useMemo`, etc.
- **React Router**: Client-side routing for seamless page transitions.
- **Context API**: Global state management for theme switching and application configuration.
- **Mock/Dummy Data**: Centralized data management to simulate real-world API responses.

---

## 📝 Assumptions Made

- **Backend Integration**: No live backend APIs are included. All application data is managed via a centralized `mockData.js` file to demonstrate front-end capabilities.
- **Authentication**: Login, Sign Up, and OTP verification flows are implemented for UI/UX demonstration. Successful submission redirects the user to the dashboard without actual server-side validation.
- **Dashboard Metrics**: All charts, social media stats, and team ratings are populated with sample data to showcase visual representation.
- **Source of Truth**: The provided UI designs were treated as the primary source of truth for layouts, spacing, and typography.
- **Extendability**: The project architecture follows a modular component-based pattern, ensuring it is easily extendable for future backend integration or feature additions.
