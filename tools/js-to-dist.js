import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = join(__dirname, '..', 'src', 'js');
const outDir = join(__dirname, '..', 'dist', 'js');

fs.mkdirSync(outDir, { recursive: true });
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.js'));
files.forEach(f => {
  fs.copyFileSync(join(srcDir, f), join(outDir, f));
});
console.log(`Copied ${files.length} JS files to dist/js`);
