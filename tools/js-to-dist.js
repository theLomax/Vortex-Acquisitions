import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = join(__dirname, '..', 'src', 'js');
const outDir = join(__dirname, '..', 'dist', 'js');

try {
	if (!fs.existsSync(srcDir)) {
		console.error('🚨  Source directory not found:', srcDir);
		process.exit(1);
	}

	fs.mkdirSync(outDir, { recursive: true });
	const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.js'));

	if (files.length === 0) {
		console.log('⚠️  No JS files found in', srcDir);
		process.exit(0);
	}

	files.forEach(f => {
		const srcFile = join(srcDir, f);
		const destFile = join(outDir, f);
		fs.copyFileSync(srcFile, destFile);
		console.log(`📄 |📄  Copied: ${f}`);
	});

	console.log(`🎉  Successfully copied ${files.length} JS file(s) to ${outDir}`);
} catch (err) {
	console.error('⛔  Error copying JS files:', err.message);
	process.exit(1);
}
