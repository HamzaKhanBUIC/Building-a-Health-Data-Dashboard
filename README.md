# 🏥 BioMetrics Pro - Health Data Dashboard

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chart.js&logoColor=white)](https://www.chartjs.org/)

> A professional, feature-rich health data visualization dashboard for medical professionals and healthcare institutions.

![Dashboard Preview](https://via.placeholder.com/1200x675/0d9488/ffffff?text=BioMetrics+Pro+Dashboard)

---

## ✨ Features

### 📊 Interactive Data Visualizations
- **Heart Rate Monitoring** - Real-time line chart with smooth curves and interactive tooltips
- **Cell Count Analysis** - Colorful bar charts for blood component analysis
- **Patient Distribution** - Doughnut chart showing patient status breakdown
- **Blood Pressure Trends** - Dual-line chart tracking systolic and diastolic readings
- **Lab Results Overview** - Radar chart for comprehensive lab value visualization

### 🎨 Modern UI/UX
- **Dark/Light Theme Toggle** - Seamless theme switching with persistent preferences
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Counter animations, hover effects, and transitions
- **Professional Color Palette** - Clinical-grade colors for medical data presentation
- **Font Awesome Icons** - Comprehensive icon set for intuitive navigation

### 🔔 Interactive Components
- **Notification Panel** - Slide-out panel with unread notifications
- **Activity Feed** - Real-time activity stream with timestamps
- **Alerts System** - Critical, warning, and informational alerts
- **Search Functionality** - Quick search across patients, samples, and reports
- **Data Table** - Sortable, filterable patient records with status badges

### 📱 Navigation & Layout
- **Collapsible Sidebar** - Fixed navigation with storage indicator
- **Mobile Menu** - Hamburger menu for smaller screens
- **Sticky Header** - Persistent header with search and user profile
- **Breadcrumb Navigation** - Clear section indicators

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or package managers required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/biometrics-pro.git
   cd biometrics-pro
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file open
   open index.html
   
   # Option 2: Using a local server (recommended)
   npx serve .
   # or
   python -m http.server 8000
   ```

3. **Access the dashboard**
   Navigate to `http://localhost:8000` (or the port shown by your server)

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Semantic structure | HTML5 |
| **CSS3** | Styling & animations | CSS3 |
| **JavaScript** | Interactivity & logic | ES6+ |
| **Chart.js** | Data visualization | 4.x |
| **Font Awesome** | Icon library | 6.4.0 |
| **Google Fonts** | Typography (Inter) | Latest |

---

## 📁 Project Structure

```
biometrics-pro/
├── index.html          # Main HTML structure
├── style.css           # Complete styling with dark mode support
├── script.js           # All JavaScript functionality
├── README.md           # Documentation
└── .gitignore          # Git ignore rules
```

---

## 🎯 Key Components

### Charts
All charts are rendered using Chart.js with custom configurations:

```javascript
// Example: Heart Rate Chart
charts.heartRate = renderHeartRateChart(colors);
```

### Theme System
The dashboard supports both light and dark themes with localStorage persistence:

```javascript
// Toggle theme
document.documentElement.setAttribute('data-theme', 'dark');
```

### Responsive Breakpoints
- **Desktop**: > 1200px
- **Tablet**: 768px - 1200px
- **Mobile**: < 768px

---

## 🎨 Customization

### Changing Colors
Edit CSS variables in `style.css`:

```css
:root {
    --accent-teal: #0d9488;
    --accent-blue: #0284c7;
    --accent-purple: #7c3aed;
    /* Add your custom colors */
}
```

### Adding New Charts
1. Add a new `<canvas>` element in `index.html`
2. Create a render function in `script.js`
3. Initialize in `initCharts()`

### Modifying Data
Update the mock data arrays in `script.js`:

```javascript
const patients = [
    { id: 'PT-001', name: 'John Smith', ... },
    // Add more patients
];
```

---

## 🔌 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time WebSocket data streaming
- [ ] Export to PDF/CSV functionality
- [ ] User authentication system
- [ ] Database connectivity
- [ ] Advanced filtering and sorting
- [ ] Custom date range selectors
- [ ] Multi-language support
- [ ] Accessibility improvements (WCAG 2.1)
- [ ] Unit and integration tests

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [Chart.js](https://www.chartjs.org/) for the amazing charting library
- [Font Awesome](https://fontawesome.com/) for the icon set
- [Google Fonts](https://fonts.google.com/) for the Inter typeface
- The open-source community for continuous inspiration

---

## 📞 Support

For questions, issues, or feature requests, please:
- Open an issue on GitHub
- Contact via email
- Check existing documentation

---

<div align="center">

**Made with ❤️ for the healthcare community**

⭐ Star this repo if you find it helpful!

</div>
