# Health Data Visualization Dashboard

> Responsive clinical telemetry and patient vital metrics dashboard built with vanilla JavaScript, CSS Grid, and Chart.js.

[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla_ES6-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Chart.js](https://img.shields.io/badge/Visualization-Chart.js-FF6384.svg?logo=chartdotjs)](https://www.chartjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Overview

Clinical data visualization requires high visual clarity and immediate legibility under low cognitive overhead.

This project implements a responsive frontend health data dashboard that translates simulated medical vitals, cardiovascular time-series trends, and patient laboratory metrics into clean interactive charts.

---

## Core Capabilities

- **Clinical Vitals Visualization**: Dynamic time-series rendering of cardiovascular telemetry and blood pressure metrics via Chart.js.
- **Pure Web Standards**: Built without heavy UI frameworks, using semantic HTML5 and vanilla ES6 modules.
- **Custom Clinical Palette**: High-contrast, accessibility-focused color schemes designed for clinical readability.
- **Modular Data Interface**: Data series in `script.js` are decoupled from rendering logic to allow straightforward connection to REST API endpoints.

---

## Repository Structure

```
.
├── index.html                # Semantic dashboard layout
├── style.css                 # Custom responsive CSS Grid and clinical palette
├── script.js                 # Chart configuration and metric rendering
└── README.md
```

---

## Local Setup

This project runs directly in any modern browser with zero build steps or external package managers required:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HamzaKhanBUIC/Building-a-Health-Data-Dashboard.git
   cd Building-a-Health-Data-Dashboard
   ```

2. **Open in browser**:
   Open `index.html` in Chrome, Firefox, or Safari, or serve with a local HTTP server:
   ```bash
   python -m http.server 8000
   ```

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
