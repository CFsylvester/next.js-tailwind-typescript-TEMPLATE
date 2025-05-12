# Next.js | Tailwind | Typescript - TEMPLATE

[![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?style=flat)](package.json) [![Last Commit](https://img.shields.io/github/last-commit/CFsylvester/next.js-tailwind-typescript-TEMPLATE?style=flat&color=brightgreen)](https://github.com/clairesylvester/storyblok-video-compressor/commits) [![Maintenance](https://img.shields.io/badge/Maintained-yes-brightgreen.svg?style=flat)](https://github.com/CFsylvester/next.js-tailwind-typescript-TEMPLATE/graphs/commit-activity)

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-0070F3?style=flat&logo=next.js)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19.0.0-0070F3?style=flat&logo=react)](https://reactjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-0070F3?style=flat&logo=typescript)](https://www.typescriptlang.org/) [![Node](https://img.shields.io/badge/Node->=20.0.0-61DAFB?style=flat&logo=node.js)](https://nodejs.org/) [![SASS](https://img.shields.io/badge/SASS-1.69.5-CC6699?style=flat&logo=sass)](https://sass-lang.com/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-CC6699?style=flat&logo=tailwind-css)](https://tailwindcss.com/) [![Yarn](https://img.shields.io/badge/Yarn-1.22.22-F7740D?style=flat&logo=yarn)](https://yarnpkg.com/) [![License](https://img.shields.io/badge/License-MIT-666666?style=flat)](https://opensource.org/licenses/MIT)

## About

A modern, production-ready template for building fast and maintainable web applications. This template combines the power of Next.js for server-side rendering and static site generation, Tailwind CSS for rapid UI development, and TypeScript for enhanced code quality and developer experience. Features include:

✨ **Modern Stack**: Built with Next.js 15, React 19, and TypeScript 5  
🎨 **Styling**: Tailwind CSS with SASS support and a responsive grid system  
🛠️ **Developer Experience**: Comprehensive VS Code setup with ESLint and Prettier  
📱 **Responsive Design**: Mobile-first approach with customizable breakpoints  
🚀 **Performance**: Optimized build configuration for maximum performance  
🔧 **Tooling**: Pre-configured development tools and scripts

<details open>
<summary>Table of Contents</summary>

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [VS Code Setup](#vs-code-setup)
  - [Required Extensions](#required-extensions)
  - [Additional Recommended Extensions](#additional-recommended-extensions)
- [Editor Configuration](#editor-configuration)
- [Version Management](#version-management)
  - [Node.js Version](#nodejs-version)
  - [Yarn Version](#yarn-version)
- [Styling Configuration](#styling-configuration)
- [Package Versions & Dependencies](#package-versions)
  - [Core Technologies](#core-technologies)
  - [Styling & UI](#styling--ui)
  - [Development Tools](#development-tools)
  - [Type Definitions](#type-definitions)
- [Scripts](#scripts)
- [GitHub Pages Setup](#github-pages-setup)
  - [Configuration Steps](#configuration-steps)
  - [Custom Domain](#custom-domain)
- [Grid Overlay Toggle](#grid-overlay-toggle)
  - [File Structure](#file-structure)
  - [Component Structure](#component-structure)
  - [Implementation](#implementation)
  - [Breakpoints Configuration](#breakpoints-configuration)
  - [Grid Layout](#grid-layout)

</details>

## Prerequisites

[![Node.js](https://img.shields.io/badge/Node.js->=20.0.0-61DAFB?style=flat&logo=node.js)](https://nodejs.org/)
[![Yarn](https://img.shields.io/badge/Yarn->=1.22.0-F7740D?style=flat&logo=yarn)](https://yarnpkg.com/)
[![VS Code](https://img.shields.io/badge/Editor-VS%20Code-666666?style=flat&logo=visual-studio-code)](https://code.visualstudio.com/)

## Getting Started

1. Clone the repository:

```bash
git clone git@github.com:CFsylvester/next.js-tailwind-typescript-TEMPLATE.git [your-repo-name]
cd [your-repo-name]
```

2. Set up Node.js version:

```bash
# Set Node.js version (if using nvm)
nvm use
```

3. Install dependencies:

```bash
yarn install
```

4. Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## VS Code Setup

When you first open this project in VS Code, you'll automatically be prompted to install the recommended extensions in the bottom right corner. You can also install all recommended extensions at once:

1. Open the Command Palette `Cmd/Ctrl + Shift + P`
2. Type "Show Recommended Extensions"
3. Click "Install Workspace Recommended Extensions" (the cloud icon in the top right)

### Required Extensions

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code formatting
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - JavaScript/TypeScript linting
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Intelligent Tailwind CSS tooling

### Additional Recommended Extensions

- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) - Modern CSS syntax highlighting
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - Automatically rename paired HTML/JSX tags
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - Autocomplete filenames
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) - Autocomplete npm modules
- [TypeScript Next](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next) - Latest TypeScript features

## Editor Configuration

This project includes a `.vscode` folder with shared settings for VS Code users. These settings will:

- Set Prettier as the default formatter
- Enable format on save
- Enable ESLint auto-fix on save
- Require a Prettier config file to be present
- Enable enhanced Tailwind CSS IntelliSense features

These settings ensure that:

- All code is automatically formatted on save using **Prettier**
- ESLint problems are automatically fixed when possible
- The project's **Prettier** configuration is always used
- **Tailwind CSS IntelliSense** provides:
  - **Intelligent CSS class completion**
  - **Syntax highlighting** for Tailwind classes
  - **CSS class suggestions** in template strings
  - **Proper validation** of Tailwind classes
  - Support for **custom class attributes**
  - **Quick suggestions** in JSX/TSX files

## Version Management

This project uses:

- `.nvmrc` for Node.js version management (currently set to v20)
- `engines` in package.json to enforce Node.js (>=20.0.0) and Yarn (>=1.22.0) versions
- `packageManager` field in package.json to specify exact Yarn version (1.22.22)

### Node.js Version

To automatically use the correct Node.js version:

- Run `nvm use` in the project directory

### Yarn Version

The project is configured to use Yarn 1.22.22. When you run `yarn install`, it will verify that you're using a compatible version of Yarn. If you have an incompatible version, Yarn will show an error message indicating which version you need to use.

## Styling Configuration

Core styling configuration files:

- [tailwind.config.js](https://github.com/CFsylvester/next.js-tailwind-typescript-TEMPLATE/blob/main/tailwind.config.js) - Configuration including:

  - Custom breakpoints
  - Color palette
  - Custom shadows
  - Screen sizes

- [src/styles/globals.scss](https://github.com/CFsylvester/next.js-tailwind-typescript-TEMPLATE/blob/main/src/styles/globals.scss) - Global styles including:
  - Grid layout system
  - Base styles
  - Tailwind imports

## Package Versions & Dependencies

### Core Technologies

- ![Next.js](https://img.shields.io/badge/Next.js-15.3.1-0070F3?style=flat&logo=next.js) - React framework for production-grade applications
- ![React](https://img.shields.io/badge/React-19.0.0-0070F3?style=flat&logo=react) - JavaScript library for building user interfaces
- ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-0070F3?style=flat&logo=typescript) - Adds static typing to JavaScript
- ![Node.js](https://img.shields.io/badge/Node.js-20.0.0-61DAFB?style=flat&logo=node.js) - JavaScript runtime
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-CC6699?style=flat&logo=tailwind-css) - Utility-first CSS framework
- ![SASS](https://img.shields.io/badge/SASS-1.69.5-CC6699?style=flat&logo=sass) - CSS preprocessor for enhanced styling
- ![PostCSS](https://img.shields.io/badge/PostCSS-8.4.21-CC6699?style=flat&logo=postcss) - CSS transformation tool
- ![Webpack](https://img.shields.io/badge/Webpack-5-8DD6F9?style=flat&logo=webpack) - Module bundler (built into Next.js)

### Styling & UI

![Autoprefixer](https://img.shields.io/badge/Autoprefixer-10.4.14-CC6699?style=flat&logo=autoprefixer) - Automatically adds vendor prefixes to CSS rules

### Development Tools

![ESLint](https://img.shields.io/badge/ESLint-v9-13BB5F?style=flat&logo=eslint) - Linting utility for JavaScript and TypeScript

- ![Next ESLint](https://img.shields.io/badge/ESLint--Next-15.3.1-13BB5F?style=flat&logo=next.js) - Next.js specific ESLint rules
- ![Prettier ESLint](https://img.shields.io/badge/ESLint--Prettier-10.1.2-13BB5F?style=flat&logo=prettier) - Disables ESLint rules that conflict with Prettier

![Prettier](https://img.shields.io/badge/Prettier-v3.0.3-13BB5F?style=flat&logo=prettier) - Code formatter for consistent code style

### Type Definitions

- ![Node Types](https://img.shields.io/badge/@types/node-22.15.3-61DAFB?style=flat&logo=node.js) - TypeScript definitions for Node.js
- ![React Types](https://img.shields.io/badge/@types/react-19-0070F3?style=flat&logo=react) - TypeScript definitions for React
- ![React DOM Types](https://img.shields.io/badge/@types/react--dom-19-0070F3?style=flat&logo=react) - TypeScript definitions for React DOM

## Scripts

- `yarn dev` - Run development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint errors
- `yarn format` - Format code with Prettier
- `yarn check-format` - Check code formatting

## GitHub Pages Setup

### Configuration Steps

1. In your repository settings, go to **Settings** > **Pages**

2. Under **Build and deployment**:

   - Source: Deploy from a branch
   - Branch: Select either:
     - `main` and `/root` for serving from repository root
     - `main` and `/docs` if using a docs folder

3. Create (or update) `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: yarn install

      - name: Build
        run: yarn build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: out
```

4. Update `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

### Custom Domain

If using a custom domain:

1. Add your domain in repository **Settings** > **Pages** > **Custom domain**
2. Create a `CNAME` file in your repository root:

```
your-domain.com
```

3. Update DNS settings with your domain provider:
   - Type: CNAME
   - Name: www (or subdomain)
   - Value: your-username.github.io

## Grid Overlay Toggle

### File Structure

```

```
