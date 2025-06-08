# Intro

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and built largely by Claude Sonnet 4. The purpose of the website is to share details about a house development effort with the neighborhood.

# Folder structure

Not all folders+files necessarily exist. This was recommended by Claude, but initial launch did not require all assets.

house-build-site/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── images/           # Your construction photos go here
│       ├── foundation.jpg
│       ├── framing.jpg
│       └── interior.jpg
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
