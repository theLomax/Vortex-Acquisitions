# Vortex Acquisitions

A static website built with Pug, Sass, and pnpm.

## Description

A modern, statically generated website with a focus on clean code and automated validation. The site uses a data pipeline for team management and a custom build process to ensure valid HTML and CSS.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Team Data Processing](#team-data-processing)
- [Build Process](#build-process)
- [Icons](#icons)
- [Deployment](#deployment)

## Installation
1.  Clone the repository.
2.  Install dependencies: `pnpm install`

## Usage
- `pnpm dev`: Start the development server with live reload.
- `pnpm build`: Clean and compile all assets for production.
- `pnpm serve`: Serve the `dist` folder.
- `pnpm watch`: Watch source files and rebuild on change.

The site is available at `http://localhost:3000`.

## Team Data Processing
The site uses a JSON data file to manage team member information.
- **Source**: `src/data/team.json`
- **Process**: The `parse-team.js` script filters for active members, sorts by rank, and writes the processed data to `src/data/team-processed.json`.
- **Usage**: The processed JSON is passed to the Pug template during the build.

## Build Process
The build process includes several custom scripts:
- **`parse-team.js`**: Processes team data.
- **`js-to-dist.js`**: Copies JavaScript files from `src/js` to `dist/js`.
- **`fixVoids.js`**: Ensures valid HTML by adding self-closing syntax to void elements (`<meta/>`, `<link/>`), required by `html-validate`.

## Icons
Icons are provided by a custom Icomoon font generated at [icomoon.io](https://icomoon.io/). The font files and CSS are located in `src/assets/fonts/icomoon`. To update the icon set, modify the Icomoon project and regenerate the font files.

## Deployment
The site is deployed automatically via GitHub Actions using the `SamKirkland/FTP-Deploy-Action`.

- **Trigger**: Pushes to the `main` branch.
- **Process**: The `deploy.yml` workflow runs `pnpm build` and uploads the `dist` folder to the FTP server.
- **Credentials**: The FTP server, username, and password are stored as GitHub secrets.

[<img alt="Deployed with FTP Deploy Action" src="https://img.shields.io/badge/Deployed With-FTP DEPLOY ACTION-%3CCOLOR%3E?style=for-the-badge&color=0077b6">](https://github.com/SamKirkland/FTP-Deploy-Action)
