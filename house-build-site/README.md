# Intro

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and built largely by Claude Sonnet 4. The purpose of the website is to share details about a house development effort with the neighborhood.

# Folder structure

Not all folders+files necessarily exist. This was recommended by Claude, but initial launch did not require all assets.

house-build-site/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── images/
│       ├── Overhead_239r_site_at_purchase.jpeg
│       ├── proposed_site_plan.png
│       ├── rendering_rear.png
│       └── rendering_front_side.png
│   └── pdfs/
|       ├── REFUSAL_LETTER-239R_BEECH_ST.pdf
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.js
│   │   ├── Gallery.js
│   │   ├── Timeline.js
│   │   ├── ContactForm.js
│   │   └── Analytics.js
│   ├── pages/           # Main page components
│   │   └── HomePage.js
│   ├── styles/          # Additional CSS if needed
│   │   └── custom.css
│   ├── utils/           # Helper functions
│   │   └── analytics.js
│   ├── data/            # Static data
│   │   └── milestones.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── README.md
└── .gitignore

# Testing Locally

## Prerequisites
- Node.js (v14 or higher) and npm installed on your machine

## Setup & Development
Follow these steps to test the app locally:

1. **Navigate to the project directory** (if not already there):
   ```bash
   cd house-build-site
   ```
   Make sure you're inside the `house-build-site` folder before running npm commands.

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will open automatically in your default browser at `http://localhost:3000`. The development server will hot-reload when you make changes to the code.

## Running Tests
To run the test suite:
```bash
npm test
```
Press `a` to run all tests, or `q` to quit the test watcher.

# Deploy Process
To build and deploy the site to GitHub Pages, run these commands in order:

```bash
rm -rf build
rm -rf node_modules/.cache
npm install
npm run build
npm run deploy
```

**Notes:**
- `npm install` ensures all dependencies are up to date
- `npm run build` creates an optimized production build
- `npm run deploy` pushes the build to the `gh-pages` branch