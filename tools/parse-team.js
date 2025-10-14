// tools/parse-team.js
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsonPath = resolve(__dirname, '..', 'src', 'data', 'team.json');
const outputPath = resolve(__dirname, '..', 'src', 'data', 'team-processed.json');

console.log('🗳️  Parsing team data...');

try {
	// Read and parse source JSON
	if (!fs.existsSync(jsonPath)) {
		console.error('🚨  Source file not found:', jsonPath);
		process.exit(1);
	}

	const rawData = fs.readFileSync(jsonPath, 'utf-8');
	const teamData = JSON.parse(rawData);

	console.log(`🗃️  Parsed ${teamData.length} team members`);

	// Process: filter active, sort by rank
	const teamMembers = teamData
		.filter(m => m.active === true)
		.sort((a, b) => a.rank - b.rank);

	console.log(`🧲 Filtered to ${teamMembers.length} active members`);

	// Write processed data for Pug CLI — using TABS for indentation
	fs.mkdirSync(dirname(outputPath), { recursive: true });
	fs.writeFileSync(outputPath, JSON.stringify({ teamMembers }, null, '\t'));

	console.log(`✏️  Wrote team data to: ${outputPath}`);
	console.log(`📐 Pug Indentation: TABS 🐶`);

	process.exit(0);

} catch (err) {
	console.error('⛔  Error processing team data:', err.message);
	process.exit(1);
}
