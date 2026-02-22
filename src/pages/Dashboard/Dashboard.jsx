/**
 * Dashboard Page
 * Main dashboard with metric cards, highlights, earnings chart,
 * team meeting, and teams table
 */
import React, { useState } from 'react';
import { metricCards, highlightsData, earningsData, meetingData, teamsData } from '../../data/mockData';

// ============ SUB-COMPONENTS ============

/** Metric Card displaying social media stats */
const MetricCard = ({ card }) => {
    const renderIcon = (icon) => {
        // If the icon path exists in our assets, show the image
        if (icon === '/assets/010-linkedin.png') {
            return <img src={icon} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />;
        }

        // Fallback for other hardcoded identifiers
        if (icon === 'linkedin') return '💼';
        if (icon === 'youtube') return '▶️';
        if (icon === 'instagram') return '📷';
        if (icon === 'tiktok') return '🎵';

        return icon;
    };

    return (
        <div className="metric-card">
            <div className={`metric-icon ${card.icon.includes('/') ? 'has-img' : card.icon}`}>
                {renderIcon(card.icon)}
            </div>
            <div>
                <div className="metric-value">{card.value}</div>
                <div className="metric-label">{card.label}</div>
            </div>
        </div>
    );
};

/** CTA Card promoting KeenThemes Network */
const CTACard = () => (
    <div className="card cta-card">
        <div className="cta-card-content">
            <div className="cta-avatars">
                {['#3b82f6', '#22c55e', '#f59e0b', '#ef4444'].map((color, i) => (
                    <div key={i} className="cta-avatar" style={{ background: color, zIndex: 4 - i }}>
                        {String.fromCharCode(65 + i)}
                    </div>
                ))}
            </div>
            <h3>
                Connect Today & Join<br />the <a href="#keenthemes">KeenThemes Network</a>
            </h3>
            <p>
                Enhance your projects with premium themes and templates. Join the KeenThemes community today for top-quality designs and resources.
            </p>
            <a href="#start" className="get-started-link" onClick={(e) => e.preventDefault()}>
                Get Started →
            </a>
        </div>
        <div className="cta-card-preview">
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                📋 Preview
            </div>
        </div>
    </div>
);

/** Highlights Card with sales breakdown */
const HighlightsCard = () => (
    <div className="card highlights-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h3 className="card-title" style={{ margin: 0 }}>Highlights</h3>
            <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.25rem' }}>⋮</button>
        </div>
        <p className="all-time-sales">All time sales</p>
        <div className="sales-value">
            {highlightsData.allTimeSales}
            <span className="sales-badge">{highlightsData.changePercent}</span>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container">
            {highlightsData.segments.map((seg, i) => (
                <div
                    key={i}
                    className="progress-segment"
                    style={{ width: `${seg.percent}%`, background: seg.color }}
                />
            ))}
        </div>

        {/* Legend */}
        <div className="legend">
            {highlightsData.segments.map((seg, i) => (
                <div key={i} className="legend-item">
                    <div className="legend-dot" style={{ background: seg.color }} />
                    {seg.name}
                </div>
            ))}
        </div>

        {/* Stats */}
        <div className="stats-list">
            {highlightsData.stats.map((stat, i) => (
                <div key={i} className="stat-item">
                    <span className="stat-icon">{stat.icon}</span>
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                    <span className={`stat-change ${stat.direction}`}>
                        {stat.direction === 'up' ? '↑' : '↓'} {stat.change}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

/** SVG Line Chart for Earnings */
const EarningsChart = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('12 months');
    const maxVal = Math.max(...earningsData.map((d) => d.value));
    const chartWidth = 460;
    const chartHeight = 200;
    const padding = { left: 45, right: 15, top: 15, bottom: 30 };
    const innerW = chartWidth - padding.left - padding.right;
    const innerH = chartHeight - padding.top - padding.bottom;

    // Generate SVG path points
    const points = earningsData.map((d, i) => ({
        x: padding.left + (i / (earningsData.length - 1)) * innerW,
        y: padding.top + innerH - (d.value / maxVal) * innerH,
    }));

    // Create smooth path
    const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

    // Area path (fill under line)
    const areaPath = `${linePath} L ${points[points.length - 1].x} ${padding.top + innerH} L ${points[0].x} ${padding.top + innerH} Z`;

    // Y-axis ticks
    const yTicks = [0, 10000, 20000, 30000, 40000];

    return (
        <div className="card">
            <div className="earnings-header">
                <h3 className="card-title" style={{ margin: 0 }}>Earnings</h3>
                <div className="earnings-controls">
                    <label className="earnings-toggle">
                        <input type="checkbox" />
                        Referrals only
                    </label>
                    <select
                        className="earnings-select"
                        value={selectedPeriod}
                        onChange={(e) => setSelectedPeriod(e.target.value)}
                    >
                        <option>12 months</option>
                        <option>6 months</option>
                        <option>3 months</option>
                    </select>
                </div>
            </div>

            <div className="chart-container">
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
                    {/* Grid lines */}
                    {yTicks.map((tick) => {
                        const y = padding.top + innerH - (tick / maxVal) * innerH;
                        return (
                            <g key={tick}>
                                <line x1={padding.left} y1={y} x2={chartWidth - padding.right} y2={y} stroke="var(--border-color)" strokeWidth="0.5" />
                                <text x={padding.left - 8} y={y + 4} textAnchor="end" fontSize="9" fill="var(--text-muted)">
                                    {tick >= 1000 ? `${tick / 1000}k` : tick}
                                </text>
                            </g>
                        );
                    })}

                    {/* Area */}
                    <path d={areaPath} fill="url(#chart-gradient)" opacity="0.15" />

                    {/* Line */}
                    <path d={linePath} fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Data points */}
                    {points.map((p, i) => (
                        <circle key={i} cx={p.x} cy={p.y} r="3" fill="var(--primary)" stroke="var(--bg-secondary)" strokeWidth="2" />
                    ))}

                    {/* X-axis labels */}
                    {earningsData.map((d, i) => (
                        <text
                            key={i}
                            x={padding.left + (i / (earningsData.length - 1)) * innerW}
                            y={chartHeight - 5}
                            textAnchor="middle"
                            fontSize="9"
                            fill="var(--text-muted)"
                        >
                            {d.month}
                        </text>
                    ))}

                    {/* Tooltip for June (highlighted) */}
                    <g>
                        <rect x={points[5].x - 55} y={points[5].y - 40} width="110" height="32" rx="4" fill="var(--bg-secondary)" stroke="var(--border-color)" strokeWidth="0.5" />
                        <text x={points[5].x - 48} y={points[5].y - 24} fontSize="8" fill="var(--text-muted)">June, 2024 Sales</text>
                        <text x={points[5].x - 48} y={points[5].y - 13} fontSize="10" fontWeight="700" fill="var(--text-primary)">$34,233.00</text>
                        <text x={points[5].x + 30} y={points[5].y - 13} fontSize="8" fontWeight="600" fill="var(--success)">+24%</text>
                    </g>

                    {/* Gradient definition */}
                    <defs>
                        <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--primary)" />
                            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

/** Team Meeting Card */
const MeetingCard = () => (
    <div className="card meeting-card">
        <div className="meeting-header">
            <div>
                <h3 className="card-title" style={{ margin: 0 }}>{meetingData.title}</h3>
                <p className="meeting-time">{meetingData.time}</p>
            </div>
            <div className="meeting-icon">📹</div>
        </div>
        <p className="meeting-desc">{meetingData.description}</p>
        <div className="meeting-details">
            <div className="meeting-detail-item">
                <span className="detail-label">📍 Location</span>
                <span className="detail-value">{meetingData.location}</span>
            </div>
            <div className="meeting-detail-item">
                <span className="detail-label">👥 Team</span>
                <span className="detail-value">
                    {['#3b82f6', '#22c55e', '#f59e0b'].map((color, i) => (
                        <span
                            key={i}
                            style={{
                                display: 'inline-flex',
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                background: color,
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '0.6rem',
                                fontWeight: 600,
                                marginRight: -4,
                                border: '2px solid var(--bg-secondary)',
                            }}
                        >
                            {String.fromCharCode(65 + i)}
                        </span>
                    ))}
                </span>
            </div>
        </div>
        <p className="join-meeting-link">Join Meeting</p>
    </div>
);

/** Teams Table */
const TeamsTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(2);
    const totalItems = 52;
    const itemsPerPage = 5;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const filteredTeams = teamsData.filter((team) =>
        team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderStars = (rating) => {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5 ? 1 : 0;
        const empty = 5 - full - half;
        return (
            <span className="rating-stars">
                {'★'.repeat(full)}
                {half ? '⯪' : ''}
                {'☆'.repeat(empty)}
            </span>
        );
    };

    const memberColors = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6'];

    return (
        <div className="card table-card">
            <div className="table-header">
                <h3 className="table-title">Teams</h3>
                <div className="search-input-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search Teams"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <table className="data-table">
                <thead>
                    <tr>
                        <th style={{ width: 40 }}><input type="checkbox" /></th>
                        <th>Team ⇅</th>
                        <th>Rating ⇅</th>
                        <th>Last Modified ⇅</th>
                        <th>Members ⇅</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTeams.map((team) => (
                        <tr key={team.id}>
                            <td><input type="checkbox" /></td>
                            <td>
                                <div className="name-cell">{team.name}</div>
                                <div className="email-cell">{team.desc}</div>
                            </td>
                            <td>{renderStars(team.rating)}</td>
                            <td>{team.lastModified}</td>
                            <td>
                                <div className="member-avatars">
                                    {team.members.map((m, i) => (
                                        <div
                                            key={i}
                                            className="member-avatar"
                                            style={{ background: memberColors[i % memberColors.length], zIndex: team.members.length - i }}
                                        >
                                            {m}
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="table-footer">
                <div className="show-per-page">
                    Show <select defaultValue={5}><option>5</option><option>10</option><option>25</option></select> per page
                </div>
                <div className="pagination">
                    <span className="pagination-info">1-10 of {totalItems}</span>
                    <button className="pagination-btn" disabled>←</button>
                    {[1, 2, 3, 4, 5].map((page) => (
                        <button
                            key={page}
                            className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="pagination-btn" disabled={currentPage >= totalPages}>→</button>
                </div>
            </div>
        </div>
    );
};

// ============ MAIN DASHBOARD PAGE ============

const Dashboard = () => {
    return (
        <>
            <div className="page-header">
                <h1>Dashboard</h1>
                <p>Central Hub for Personal Customization</p>
            </div>

            <div className="dashboard-grid">
                {/* Left Column - Row 1: Metric Cards */}
                <div className="card" style={{ padding: 0, border: 'none', background: 'transparent', boxShadow: 'none' }}>
                    <div className="metric-cards">
                        {metricCards.map((card) => (
                            <MetricCard key={card.id} card={card} />
                        ))}
                    </div>
                </div>

                {/* Right Column - Row 1: CTA Card */}
                <CTACard />

                {/* Left Column - Row 2: Highlights */}
                <HighlightsCard />

                {/* Right Column - Row 2: Earnings Chart */}
                <EarningsChart />

                {/* Left Column - Row 3: Team Meeting */}
                <MeetingCard />

                {/* Right Column - Row 3: Teams Table */}
                <TeamsTable />
            </div>
        </>
    );
};

export default Dashboard;
