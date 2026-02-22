/**
 * Mock/Dummy Data for the entire application
 * Used across Dashboard, List, Product, and Registration pages
 */

// ============ DASHBOARD DATA ============

/** Social media metric cards */
export const metricCards = [
    { id: 1, platform: 'LinkedIn', icon: '/assets/010-linkedin.png', value: '9.3k', label: 'Amazing mates', color: '#0077b5' },
    { id: 2, platform: 'YouTube', icon: 'youtube', value: '24k', label: 'Lessons Views', color: '#ff0000' },
    { id: 3, platform: 'Instagram', icon: 'instagram', value: '608', label: 'New subscribers', color: '#e4405f' },
    { id: 4, platform: 'TikTok', icon: 'tiktok', value: '2.5k', label: 'Stream audience', color: '#000000' },
];

/** Highlights / sales summary data */
export const highlightsData = {
    allTimeSales: '$295.7k',
    changePercent: '+2.7%',
    segments: [
        { name: 'Metronic', color: '#22c55e', percent: 50 },
        { name: 'Bundle', color: '#f59e0b', percent: 30 },
        { name: 'MetronicNest', color: '#3b82f6', percent: 20 },
    ],
    stats: [
        { icon: '🖥️', label: 'Online Store', value: '$172k', change: '3.9%', direction: 'up' },
        { icon: '📘', label: 'Facebook', value: '$85k', change: '0.7%', direction: 'down' },
        { icon: '📸', label: 'Instagram', value: '$36k', change: '8.2%', direction: 'up' },
    ],
};

/** Earnings chart data (monthly) */
export const earningsData = [
    { month: 'Jan', value: 8000 },
    { month: 'Feb', value: 12000 },
    { month: 'Mar', value: 15000 },
    { month: 'Apr', value: 18000 },
    { month: 'May', value: 14000 },
    { month: 'Jun', value: 34233 },
    { month: 'Jul', value: 28000 },
    { month: 'Aug', value: 22000 },
    { month: 'Sep', value: 30000 },
    { month: 'Oct', value: 26000 },
    { month: 'Nov', value: 32000 },
    { month: 'Dec', value: 29000 },
];

/** Team meeting info */
export const meetingData = {
    title: 'Team Meeting',
    time: '09:00 - 09:30',
    description: 'Team meeting to discuss strategies, outline project milestones, define key goals, and establish clear timelines.',
    location: 'Amsterdam',
    teamSize: 3,
};

/** Teams table data */
export const teamsData = [
    { id: 1, name: 'Product Management', desc: 'Product development & lifecycle', rating: 5, lastModified: '21 Oct, 2024', members: ['A', 'K', 'M'] },
    { id: 2, name: 'Marketing Team', desc: 'Campaigns & market analysis', rating: 3.5, lastModified: '15 Oct, 2024', members: ['B', 'K', 'L'] },
    { id: 3, name: 'HR Department', desc: 'Talent acquisition, employee welfare', rating: 5, lastModified: '10 Oct, 2024', members: ['C', 'K', 'N'] },
    { id: 4, name: 'Sales Division', desc: 'Customer relations, sales strategy', rating: 5, lastModified: '05 Oct, 2024', members: ['D', 'K', 'P'] },
];

// ============ LIST PAGE DATA ============

/** Employee/user list data */
export const listData = Array.from({ length: 52 }, (_, i) => {
    const names = ['Mani', 'Velu', 'Kavi', 'Ram', 'Priya', 'Arun', 'Deepa', 'Suresh', 'Lakshmi', 'Ganesh'];
    const departments = [
        { name: 'Product Management', desc: 'Product development & lifecycle' },
        { name: 'Marketing Team', desc: 'Campaigns & market analysis' },
        { name: 'HR Department', desc: 'Talent acquisition, employee welfare' },
        { name: 'Sales Division', desc: 'Customer relations, sales strategy' },
        { name: 'Engineering', desc: 'Software development & architecture' },
    ];
    const name = names[i % names.length];
    const dept = departments[i % departments.length];
    return {
        id: i + 1,
        no: String(i + 1).padStart(2, '0'),
        name,
        email: `${name.toLowerCase()}123@gmail.com`,
        department: dept.name,
        departmentDesc: dept.desc,
        number: '9874563211',
        location: 'Coimbatore, TamilNadu',
        address: 'Sree Mahalakshmi Garden Layout',
        currentlyWorking: i % 2 === 0 ? 'Yes' : 'No',
        experience: `${(i % 5) + 1} Year${(i % 5) + 1 > 1 ? 's' : ''}`,
    };
});

// ============ PRODUCT DATA ============

/** Product list data */
export const productsData = [
    {
        id: 1,
        name: 'Cloud Shift Lightweight Runner Pro Edition',
        price: 99.00,
        originalPrice: null,
        rating: 5.0,
        image: '👟',
        discount: null,
        sku: 'SH-001-BLK-42',
        category: 'Sneakers',
        availability: 'In Stock',
        description: 'Lightweight and stylish, these sneakers offer all-day comfort with breathable mesh, cushioned soles, and a durable grip. Perfect for casual wear, workouts, or daily adventures. Available in multiple colors and sizes.',
        moreInfo: '10g powder, powder measure & water dispensing bottle (empty)',
        brand: 'Nike',
    },
    {
        id: 2,
        name: 'Titan Edge High Impact Stability Lightweight Trainers',
        price: 65.99,
        originalPrice: null,
        rating: 3.5,
        image: '👞',
        discount: null,
        sku: 'SH-002-WHT-40',
        category: 'Trainers',
        availability: 'In Stock',
        description: 'High impact stability trainers designed for intense workouts and daily training. Features reinforced soles and breathable upper material.',
        moreInfo: 'Premium packaging included',
        brand: 'Nike',
    },
    {
        id: 3,
        name: 'Wave Strike Dynamic Boost Sneaker',
        price: 120.00,
        originalPrice: null,
        rating: 4.5,
        image: '👡',
        discount: null,
        sku: 'SH-003-PNK-38',
        category: 'Sneakers',
        availability: 'In Stock',
        description: 'Dynamic boost sneakers with wave-strike technology for optimal energy return. Perfect for running and casual wear.',
        moreInfo: 'Extra laces included',
        brand: 'Adidas',
    },
    {
        id: 4,
        name: 'Wave Strike Dynamic Boost Sneaker',
        price: 140.00,
        originalPrice: 179.00,
        rating: 3.7,
        image: '🥿',
        discount: 'SAVE 25%',
        sku: 'SH-004-BRN-43',
        category: 'Sneakers',
        availability: 'In Stock',
        description: 'Premium edition dynamic boost sneakers with enhanced cushioning and premium materials.',
        moreInfo: 'Gift box packaging',
        brand: 'Nike',
    },
    {
        id: 5,
        name: 'Cloud Shift Lightweight Runner Pro Edition',
        price: 99.00,
        originalPrice: 140.00,
        rating: 5.0,
        image: '👟',
        discount: 'SAVE 40%',
        sku: 'SH-005-GRN-41',
        category: 'Sneakers',
        availability: 'In Stock',
        description: 'Limited edition lightweight runner with premium leather accents and enhanced arch support.',
        moreInfo: '10g powder, powder measure & water dispensing bottle (empty)',
        brand: 'Nike',
    },
    {
        id: 6,
        name: 'Titan Edge High Impact Stability Lightweight Trainers',
        price: 65.99,
        originalPrice: null,
        rating: 3.5,
        image: '👞',
        discount: null,
        sku: 'SH-006-BLU-39',
        category: 'Trainers',
        availability: 'In Stock',
        description: 'Professional grade trainers for athletes and fitness enthusiasts.',
        moreInfo: 'Includes cleaning kit',
        brand: 'Puma',
    },
    {
        id: 7,
        name: 'Velocity Boost Xtreme High Shock Absorbers',
        price: 280.00,
        originalPrice: 315.00,
        rating: 4.0,
        image: '🥾',
        discount: 'SAVE 10%',
        sku: 'SH-007-RED-44',
        category: 'Sneakers',
        availability: 'In Stock',
        description: 'Xtreme shock absorption technology for maximum comfort during high-impact activities.',
        moreInfo: 'Premium insoles included',
        brand: 'Nike',
    },
    {
        id: 8,
        name: 'Velocity Boost Xtreme High Shock Absorbers',
        price: 110.00,
        originalPrice: null,
        rating: 4.0,
        image: '👟',
        discount: null,
        sku: 'SH-008-GRY-42',
        category: 'Sneakers',
        availability: 'In Stock',
        description: 'Standard edition shock absorbers with excellent grip and durability.',
        moreInfo: 'Waterproof coating applied',
        brand: 'Reebok',
    },
    {
        id: 9,
        name: 'Cloud Shift Lightweight Runner Pro Edition',
        price: 99.00,
        originalPrice: null,
        rating: 5.0,
        image: '🥿',
        discount: null,
        sku: 'SH-009-YLW-40',
        category: 'Sneakers',
        availability: 'In Stock',
        description: 'Neon edition lightweight runner with glow-in-the-dark soles.',
        moreInfo: 'Limited edition packaging',
        brand: 'Nike',
    },
    {
        id: 10,
        name: 'Titan Edge High Impact Stability Lightweight Trainers',
        price: 46.00,
        originalPrice: 110.00,
        rating: 3.5,
        image: '👞',
        discount: 'SAVE 60%',
        sku: 'SH-010-PNK-37',
        category: 'Trainers',
        availability: 'In Stock',
        description: 'Clearance sale trainers with all the quality at an unbeatable price.',
        moreInfo: 'Final sale - no returns',
        brand: 'Adidas',
    },
    {
        id: 11,
        name: 'Wave Strike Dynamic Boost Sneaker',
        price: 120.00,
        originalPrice: null,
        rating: 4.5,
        image: '👡',
        discount: null,
        sku: 'SH-011-WHT-41',
        category: 'Sneakers',
        availability: 'In Stock',
        description: 'Classic white dynamic boost sneakers for everyday style.',
        moreInfo: 'Eco-friendly materials',
        brand: 'Nike',
    },
    {
        id: 12,
        name: 'Velocity Boost Xtreme High Shock Absorbers',
        price: 110.00,
        originalPrice: null,
        rating: 4.0,
        image: '🥾',
        discount: null,
        sku: 'SH-012-BLK-45',
        category: 'Sneakers',
        availability: 'In Stock',
        description: 'Black edition shock absorbers with sleek matte finish.',
        moreInfo: 'Includes travel bag',
        brand: 'Puma',
    },
];

// ============ SIDEBAR NAVIGATION DATA ============

/** Sidebar menu items */
export const sidebarMenuItems = {
    main: [
        { id: 'dashboard', label: 'Dashboards', icon: '/assets/dashboard.png', path: '/dashboard' },
    ],
    user: [
        { id: 'list', label: 'List', icon: '/assets/list_img.png', path: '/list' },
        { id: 'public-profile', label: 'Public Profile', icon: '/assets/pub_pro_img.png', path: '#', badge: '+' },
        { id: 'my-account', label: 'My Account', icon: '/assets/my_acc_img.png', path: '#', badge: '+' },
        { id: 'community', label: 'Community', icon: '/assets/com_img.png', path: '#', badge: '+' },
        { id: 'user-management', label: 'User Management', icon: '/assets/manage_img.png', path: '#', badge: '+' },
        { id: 'authentication', label: 'Authentication', icon: '/assets/security-user.png', path: '#', badge: '+' },
    ],
    apps: [
        { id: 'store-client', label: 'Store Client', icon: '🛒', path: '/products', badge: '+' },
        { id: 'store-admin', label: 'Store Admin', icon: '🏪', path: '#', badge: 'Soon', disabled: true },
        { id: 'store-services', label: 'Store - Services', icon: '🔧', path: '#', badge: 'Soon', disabled: true },
        { id: 'ai-prompt', label: 'AI Promt', icon: '🤖', path: '#', badge: 'Soon', disabled: true },
        { id: 'invoice-generator', label: 'Invoice Generator', icon: '📄', path: '#', badge: 'Soon', disabled: true },
        { id: 'email-client', label: 'Email Client', icon: '✉️', path: '#', badge: 'Soon', disabled: true },
        { id: 'social-network', label: 'Social Network', icon: '🌐', path: '#', badge: 'Soon', disabled: true },
    ],
};
