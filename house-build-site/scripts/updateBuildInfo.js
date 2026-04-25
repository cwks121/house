const fs = require('fs');
const path = require('path');

// Generate build info with current timestamp
const buildInfo = {
  timestamp: new Date().toISOString(),
  date: new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/New_York'
  })
};

// Write to public folder
const filePath = path.join(__dirname, '../public/buildInfo.json');
fs.writeFileSync(filePath, JSON.stringify(buildInfo, null, 2));

console.log(`✓ Build info updated: ${buildInfo.date}`);
