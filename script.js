/**
 * script.js
 * Renders the clinical mock data arrays onto the HTML5 Canvas containers.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Establish the color palette to sync with CSS
    const chartTheme = {
        teal: '#0d9488',
        tealLight: 'rgba(13, 148, 136, 0.1)',
        blue: '#0284c7',
        blueHover: '#0369a1',
        fontColor: '#64748b',
        gridLine: '#f1f5f9'
    };

    // 2. Global Chart Defaults for typography and tooltips
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = chartTheme.fontColor;
    Chart.defaults.scale.grid.color = chartTheme.gridLine;
    Chart.defaults.plugins.tooltip.backgroundColor = '#1e293b'; // Dark slate tooltips
    Chart.defaults.plugins.tooltip.padding = 12;
    Chart.defaults.plugins.tooltip.cornerRadius = 8;
    Chart.defaults.plugins.tooltip.titleFont = { size: 13, weight: '600' };

    // 3. Mount Visualizations
    renderHeartRateChart(chartTheme);
    renderCellCountChart(chartTheme);
});

/**
 * Line Chart: Continuous physiological data (Heart Rate)
 */
function renderHeartRateChart(theme) {
    const canvas = document.getElementById('heartRateChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Mock Data: 12-hour continuous monitoring
    const timeLabels = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
    const bpmData = [72, 75, 78, 85, 82, 79, 74, 71, 73, 76, 80, 77];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [{
                label: 'Heart Rate (BPM)',
                data: bpmData,
                borderColor: theme.teal,
                backgroundColor: theme.tealLight,
                borderWidth: 3,
                fill: true,
                tension: 0.4, // Creates the smooth 'clinical' curve
                pointBackgroundColor: '#ffffff',
                pointBorderColor: theme.teal,
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false } // Hidden for cleaner UI; title explains content
            },
            scales: {
                y: {
                    suggestedMin: 60,
                    suggestedMax: 100,
                    border: { display: false }
                },
                x: {
                    border: { display: false },
                    grid: { display: false } // Removes vertical grid lines to focus on trend
                }
            }
        }
    });
}

/**
 * Bar Chart: Comparative quantitative data (Cell Counts)
 */
function renderCellCountChart(theme) {
    const canvas = document.getElementById('cellCountChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Mock Data: Distinct clinical samples
    const sampleLabels = ['Sample Alpha', 'Sample Beta', 'Sample Gamma', 'Sample Delta'];
    const cellData = [4500, 3200, 5800, 4100];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sampleLabels,
            datasets: [{
                label: 'Leukocyte Count (cells/mcL)',
                data: cellData,
                backgroundColor: theme.blue,
                hoverBackgroundColor: theme.blueHover,
                borderRadius: 6, // High-end rounded bar corners
                barThickness: 'flex',
                maxBarThickness: 45 // Prevents bars from getting too wide on large screens
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
