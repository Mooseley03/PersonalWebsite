const fs = require('fs');
const path = require('path');

// Path to the generated index.html in the build folder
const indexPath = path.join(__dirname, '../build/index.html');

// Read the index.html file
fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading index.html file:', err);
    return;
  }

  // Add the <base href> tag if it's not already present
  const baseTag = '<base href="/PersonalWebsite/" />\n';
  if (!data.includes(baseTag)) {
    const updatedData = data.replace('<head>', `<head>\n${baseTag}`);
    
    // Write the updated content back to index.html
    fs.writeFile(indexPath, updatedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to index.html file:', err);
      } else {
        console.log('Successfully added <base href> to index.html');
      }
    });
  }
});
