# Intro
This is a heavily AI-supported website build. The site is meant for temporary and very limited use to inform neighbors about the home we are building.

# Structure
house_build_website/
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