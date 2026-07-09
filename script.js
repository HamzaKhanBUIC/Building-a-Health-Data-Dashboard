/**
 * script.js - BioMetrics Pro Dashboard
 * Advanced health data visualization with interactive features
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize all dashboard components
    initTheme();
    initCharts();
    initCounterAnimations();
    initActivityFeed();
    initAlerts();
    initPatientTable();
    initNotifications();
    initEventListeners();
});

// ============================================
// Theme Management
// ============================================
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            updateChartsForTheme(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ============================================
// Chart Configuration & Rendering
// ============================================
let charts = {};

function getChartColors() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
        teal: '#0d9488',
        tealLight: 'rgba(13, 148, 136, 0.1)',
        blue: '#0284c7',
        blueLight: 'rgba(2, 132, 199, 0.1)',
        purple: '#7c3aed',
        purpleLight: 'rgba(124, 58, 237, 0.1)',
        orange: '#f97316',
        red: '#ef4444',
        green: '#10b981',
        fontColor: isDark ? '#94a3b8' : '#64748b',
        gridColor: isDark ? '#334155' : '#f1f5f9',
        tooltipBg: isDark ? '#1e293b' : '#ffffff',
        tooltipColor: isDark ? '#f1f5f9' : '#1e293b'
    };
}

function initCharts() {
    const colors = getChartColors();
    
    // Global Chart Defaults
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = colors.fontColor;
    Chart.defaults.scale.grid.color = colors.gridColor;
    Chart.defaults.plugins.tooltip.backgroundColor = colors.tooltipBg;
    Chart.defaults.plugins.tooltip.titleColor = colors.tooltipColor;
    Chart.defaults.plugins.tooltip.bodyColor = colors.tooltipColor;
    Chart.defaults.plugins.tooltip.padding = 12;
    Chart.defaults.plugins.tooltip.cornerRadius = 8;
    Chart.defaults.plugins.tooltip.titleFont = { size: 13, weight: '600' };
    Chart.defaults.plugins.tooltip.bodyFont = { size: 12 };

    // Render all charts
    charts.heartRate = renderHeartRateChart(colors);
    charts.cellCount = renderCellCountChart(colors);
    charts.patientDistribution = renderPatientDistributionChart(colors);
    charts.bloodPressure = renderBloodPressureChart(colors);
    charts.labResults = renderLabResultsChart(colors);
}

function updateChartsForTheme(theme) {
    const colors = getChartColors();
    
    // Update each chart's colors
    Object.values(charts).forEach(chart => {
        if (chart) {
            chart.options.scales.y.grid.color = colors.gridColor;
            chart.options.scales.x.grid.color = colors.gridColor;
            chart.update();
        }
    });
}

/**
 * Heart Rate Monitoring Chart (Line Chart)
 */
function renderHeartRateChart(colors) {
    const canvas = document.getElementById('heartRateChart');
    if (!canvas) return null;
    
    const ctx = canvas.getContext('2d');
    
    // Generate realistic heart rate data
    const timeLabels = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
    const bpmData = [72, 75, 78, 85, 82, 79, 74, 71, 73, 76, 80, 77];

    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [{
                label: 'Heart Rate (BPM)',
                data: bpmData,
                borderColor: colors.teal,
                backgroundColor: colors.tealLight,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: colors.teal,
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (context) => `${context.parsed.y} BPM`
                    }
                }
            },
            scales: {
                y: {
                    suggestedMin: 60,
                    suggestedMax: 100,
                    border: { display: false },
                    grid: { display: false }
                },
                x: {
                    border: { display: false },
                    grid: { display: false }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

/**
 * Cell Count Analysis Chart (Bar Chart)
 */
function renderCellCountChart(colors) {
    const canvas = document.getElementById('cellCountChart');
    if (!canvas) return null;
    
    const ctx = canvas.getContext('2d');
    
    const sampleLabels = ['WBC', 'RBC', 'Platelets', 'Hemoglobin'];
    const cellData = [7500, 4800000, 250000, 14.5];

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sampleLabels,
            datasets: [{
                label: 'Cell Count',
                data: cellData,
                backgroundColor: [colors.blue, colors.teal, colors.purple, colors.green],
                borderRadius: 8,
                barThickness: 'flex',
                maxBarThickness: 50
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    border: { display: false }
                },
                x: {
                    border: { display: false },
                    grid: { display: false }
                }
            }
        }
    });
}

/**
 * Patient Distribution Chart (Doughnut Chart)
 */
function renderPatientDistributionChart(colors) {
    const canvas = document.getElementById('patientDistributionChart');
    if (!canvas) return null;
    
    const ctx = canvas.getContext('2d');

    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Stable', 'Critical', 'Recovering', 'Under Observation'],
            datasets: [{
                data: [45, 12, 28, 15],
                backgroundColor: [colors.green, colors.red, colors.orange, colors.blue],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                }
            }
        }
    });
}

/**
 * Blood Pressure Trends Chart (Multi-line Chart)
 */
function renderBloodPressureChart(colors) {
    const canvas = document.getElementById('bloodPressureChart');
    if (!canvas) return null;
    
    const ctx = canvas.getContext('2d');
    
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const systolic = [120, 118, 122, 119, 121, 117, 120];
    const diastolic = [80, 78, 82, 79, 81, 77, 80];

    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: days,
            datasets: [
                {
                    label: 'Systolic',
                    data: systolic,
                    borderColor: colors.red,
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    pointRadius: 3
                },
                {
                    label: 'Diastolic',
                    data: diastolic,
                    borderColor: colors.blue,
                    backgroundColor: 'rgba(2, 132, 199, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    pointRadius: 3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        padding: 10
                    }
                }
            },
            scales: {
                y: {
                    suggestedMin: 60,
                    suggestedMax: 140,
                    border: { display: false }
                },
                x: {
                    border: { display: false },
                    grid: { display: false }
                }
            }
        }
    });
}

/**
 * Lab Results Overview Chart (Radar Chart)
 */
function renderLabResultsChart(colors) {
    const canvas = document.getElementById('labResultsChart');
    if (!canvas) return null;
    
    const ctx = canvas.getContext('2d');

    return new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Glucose', 'Cholesterol', 'Iron', 'Vitamin D', 'B12', 'Folate'],
            datasets: [{
                label: 'Current Levels',
                data: [85, 70, 90, 65, 80, 75],
                backgroundColor: colors.tealLight,
                borderColor: colors.teal,
                borderWidth: 2,
                pointBackgroundColor: colors.teal,
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        color: colors.gridColor
                    },
                    grid: {
                        color: colors.gridColor
                    },
                    pointLabels: {
                        color: colors.fontColor,
                        font: { size: 11 }
                    },
                    ticks: {
                        display: false,
                        backdropColor: 'transparent'
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// ============================================
// Counter Animations
// ============================================
function initCounterAnimations() {
    const counters = document.querySelectorAll('.metric-value[data-target]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    };
    
    // Use Intersection Observer for performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ============================================
// Activity Feed
// ============================================
function initActivityFeed() {
    const activityList = document.getElementById('activityList');
    if (!activityList) return;
    
    const activities = [
        {
            icon: 'fa-check-circle',
            type: 'success',
            title: 'Lab results approved for Patient #1234',
            time: '5 minutes ago'
        },
        {
            icon: 'fa-exclamation-triangle',
            type: 'warning',
            title: 'Abnormal reading detected - Patient #5678',
            time: '12 minutes ago'
        },
        {
            icon: 'fa-user-plus',
            type: 'info',
            title: 'New patient registered - Sarah Johnson',
            time: '1 hour ago'
        },
        {
            icon: 'fa-file-alt',
            type: 'info',
            title: 'Report generated for Clinical Trial #CT-2024',
            time: '2 hours ago'
        },
        {
            icon: 'fa-sync',
            type: 'success',
            title: 'Data synchronization completed',
            time: '3 hours ago'
        }
    ];
    
    activityList.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon ${activity.type}">
                <i class="fas ${activity.icon}"></i>
            </div>
            <div class="activity-content">
                <p class="activity-title">${activity.title}</p>
                <span class="activity-time">${activity.time}</span>
            </div>
        </div>
    `).join('');
}

// ============================================
// Alerts Panel
// ============================================
function initAlerts() {
    const alertsList = document.getElementById('alertsList');
    if (!alertsList) return;
    
    const alerts = [
        {
            title: 'Critical: Patient vitals unstable',
            message: 'Patient #3421 showing irregular heart rate patterns. Immediate attention required.'
        },
        {
            title: 'Warning: Equipment maintenance due',
            message: 'MRI Scanner #2 scheduled for maintenance tomorrow at 10 AM.'
        },
        {
            title: 'Info: New lab protocol update',
            message: 'Updated blood testing protocols effective from next Monday.'
        }
    ];
    
    alertsList.innerHTML = alerts.map(alert => `
        <div class="alert-item">
            <i class="fas fa-exclamation-circle alert-icon"></i>
            <div class="alert-content">
                <h4 class="alert-title">${alert.title}</h4>
                <p class="alert-message">${alert.message}</p>
            </div>
        </div>
    `).join('');
}

// ============================================
// Patient Data Table
// ============================================
function initPatientTable() {
    const tableBody = document.querySelector('#patientTable tbody');
    if (!tableBody) return;
    
    const patients = [
        { id: 'PT-001', name: 'John Smith', age: 45, condition: 'Hypertension', checkup: '2024-01-15', status: 'stable' },
        { id: 'PT-002', name: 'Emily Davis', age: 32, condition: 'Diabetes Type 2', checkup: '2024-01-14', status: 'recovering' },
        { id: 'PT-003', name: 'Michael Brown', age: 67, condition: 'Cardiac Arrhythmia', checkup: '2024-01-15', status: 'critical' },
        { id: 'PT-004', name: 'Sarah Wilson', age: 28, condition: 'Anemia', checkup: '2024-01-13', status: 'stable' },
        { id: 'PT-005', name: 'Robert Taylor', age: 54, condition: 'Post-Surgery Recovery', checkup: '2024-01-15', status: 'recovering' }
    ];
    
    tableBody.innerHTML = patients.map(patient => `
        <tr>
            <td><strong>${patient.id}</strong></td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.condition}</td>
            <td>${patient.checkup}</td>
            <td><span class="status-badge ${patient.status}">${patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}</span></td>
            <td>
                <div class="action-btns">
                    <button class="action-btn" title="View Details"><i class="fas fa-eye"></i></button>
                    <button class="action-btn" title="Edit"><i class="fas fa-edit"></i></button>
                    <button class="action-btn" title="More"><i class="fas fa-ellipsis-h"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

// ============================================
// Notifications
// ============================================
function initNotifications() {
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationPanel = document.getElementById('notificationPanel');
    const closeBtn = document.getElementById('closeNotificationPanel');
    const overlay = document.getElementById('overlay');
    const notificationBody = document.getElementById('notificationBody');
    
    if (!notificationBtn || !notificationPanel) return;
    
    const notifications = [
        {
            title: 'New lab results ready',
            message: 'Blood test results for Patient #1234 are available for review.',
            time: '5 min ago',
            unread: true
        },
        {
            title: 'Appointment reminder',
            message: 'Follow-up appointment with Dr. Johnson in 30 minutes.',
            time: '25 min ago',
            unread: true
        },
        {
            title: 'System update completed',
            message: 'Dashboard has been updated with new features.',
            time: '1 hour ago',
            unread: false
        },
        {
            title: 'Weekly report ready',
            message: 'Your weekly patient summary report is ready to download.',
            time: '2 hours ago',
            unread: false
        }
    ];
    
    if (notificationBody) {
        notificationBody.innerHTML = notifications.map(notif => `
            <div class="notification-item ${notif.unread ? 'unread' : ''}">
                <div class="notification-content">
                    <h4 class="notification-title">${notif.title}</h4>
                    <p class="notification-message">${notif.message}</p>
                    <span class="notification-time">${notif.time}</span>
                </div>
            </div>
        `).join('');
    }
    
    const togglePanel = () => {
        notificationPanel.classList.toggle('active');
        overlay.classList.toggle('active');
    };
    
    notificationBtn.addEventListener('click', togglePanel);
    
    if (closeBtn) {
        closeBtn.addEventListener('click', togglePanel);
    }
    
    if (overlay) {
        overlay.addEventListener('click', togglePanel);
    }
}

// ============================================
// Event Listeners
// ============================================
function initEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
    
    // Sidebar navigation
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu on selection
            if (sidebar) {
                sidebar.classList.remove('active');
            }
        });
    });
    
    // Refresh button
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            refreshBtn.querySelector('i').classList.add('fa-spin');
            setTimeout(() => {
                refreshBtn.querySelector('i').classList.remove('fa-spin');
                // Simulate data refresh
                location.reload();
            }, 1000);
        });
    }
    
    // Export button
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            alert('Export functionality would generate a PDF/CSV report of the current dashboard data.');
        });
    }
    
    // Search functionality
    const searchInput = document.getElementById('patient-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            // Implement search filtering logic here
            console.log('Searching for:', searchTerm);
        });
    }
    
    // Time range selector for heart rate chart
    const timeRangeSelect = document.getElementById('hrTimeRange');
    if (timeRangeSelect) {
        timeRangeSelect.addEventListener('change', (e) => {
            const selectedRange = e.target.value;
            console.log('Time range changed to:', selectedRange);
            // Update chart data based on selected time range
        });
    }
}
