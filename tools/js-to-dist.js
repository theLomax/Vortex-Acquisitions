const fs = require('fs');
const path = require('path');
const srcDir = path.join(__dirname, '..', 'src', 'js');
const outDir = path.join(__dirname, '..', 'dist', 'js');

fs.mkdirSync(outDir, { recursive: true });
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.js'));
files.forEach(f => {
  fs.copyFileSync(path.join(srcDir, f), path.join(outDir, f));
});
console.log(`Copied ${files.length} JS files to dist/js`);
