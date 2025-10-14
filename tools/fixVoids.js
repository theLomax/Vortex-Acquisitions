// closeVoids.js
import { readFile, writeFile } from 'fs/promises';

const originalHtml = await readFile('dist/index.html', 'utf8');
const closeVoids = originalHtml.replace(/<(br|meta|link|hr|input)([^>]*?)>(?!\s*\/)/g, '<$1$2/>');
await writeFile('dist/index.html', closeVoids);
console.log('🪡  Voids closed!');
