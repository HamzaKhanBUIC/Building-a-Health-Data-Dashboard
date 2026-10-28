# Health Data Dashboard (practice project)

> A one-page dashboard mock-up that plots sample heart-rate and white-cell-count data with Chart.js, built to practise CSS Grid layouts and charting.

**Status:** Learning project. Mock data only, no backend. Desktop layout only (not mobile-responsive).
**Demo:** [Live page](https://hamzakhanbuic.github.io/Building-a-Health-Data-Dashboard/)

## What it shows

The page ("BioMetrics Pro") has a sidebar, three metric cards (Active Patients, Average Vitals Alerts, Samples Processed), a 12-hour heart-rate line chart and a leukocyte-count bar chart. The card values and the chart data are hard-coded sample values in `index.html` and `script.js`. No real patient data is used.

Files: `index.html` (layout), `style.css` (CSS Grid layout and colors), `script.js` (Chart.js setup). Chart.js is loaded from the jsDelivr CDN.

## Quickstart

No build step and no dependencies. Open `index.html` in a browser (an internet connection is needed for Chart.js and Google Fonts), or serve it locally:

```bash
git clone https://github.com/HamzaKhanBUIC/Building-a-Health-Data-Dashboard.git
cd Building-a-Health-Data-Dashboard
python -m http.server 8000
```

Then open http://localhost:8000.

## Configuration

None.

## Limitations

- All data is mock data, defined inside the chart functions in `script.js`. There is no API, and the data is not separated from the rendering code.
- Not mobile-responsive: `style.css` has no `@media` rules and a fixed 260 px sidebar. On a 375 px wide phone the content is clipped.
- Only heart rate and white-cell count are charted. There is no blood-pressure data.
- Charts are drawn once on load. They do not update.
- The sidebar links and the search box do nothing.
- `script.js` is a classic script, not an ES module.
- Chart.js is loaded from the CDN without a pinned version or an integrity hash.
- No tests. No accessibility testing has been done.
- Not a medical tool.

## License

MIT. See [LICENSE](LICENSE).
