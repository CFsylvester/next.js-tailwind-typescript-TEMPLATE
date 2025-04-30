# Next.js | Tailwind | Typescript - TEMPLATE

[![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?style=flat)](package.json) [![Last Commit](https://img.shields.io/github/last-commit/CFsylvester/next.js-tailwind-typescript-TEMPLATE?style=flat&color=brightgreen)](https://github.com/clairesylvester/storyblok-video-compressor/commits) [![Maintenance](https://img.shields.io/badge/Maintained-yes-brightgreen.svg?style=flat)](https://github.com/CFsylvester/next.js-tailwind-typescript-TEMPLATE/graphs/commit-activity)

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-0070F3?style=flat&logo=next.js)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19.0.0-0070F3?style=flat&logo=react)](https://reactjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-0070F3?style=flat&logo=typescript)](https://www.typescriptlang.org/) [![Node](https://img.shields.io/badge/Node->=20.0.0-61DAFB?style=flat&logo=node.js)](https://nodejs.org/) [![SASS](https://img.shields.io/badge/SASS-1.69.5-CC6699?style=flat&logo=sass)](https://sass-lang.com/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-CC6699?style=flat&logo=tailwind-css)](https://tailwindcss.com/) [![Yarn](https://img.shields.io/badge/Yarn-1.22.22-F7740D?style=flat&logo=yarn)](https://yarnpkg.com/) [![License](https://img.shields.io/badge/License-MIT-666666?style=flat)](https://opensource.org/licenses/MIT)

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
git clone [your-repo-url]
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

## Grid Overlay Toggle

### File Structure

```
src/components/Grid/
├ index.tsx        # Main export
├ Overlay/index.tsx  # Grid overlay implementation
└ Toggle/index.tsx   # Grid toggle button
```

### Component Structure

The grid system consists of two main components:

- **GridToggle**: A floating button component that:
  - Displays the current breakpoint
  - Toggles the grid overlay visibility
  - Persists visibility state
- **GridOverlay**: A visual guide that:
  - Renders semi-transparent columns
  - Adapts to current breakpoint
  - Shows column structure and gutters

### Implementation

Add the grid system to your layout:

```tsx
'use client';
import { GridToggle, GridOverlay } from '@/components/Grid';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isGridVisible, setIsGridVisible] = useState(false);

  return (
    <>
      <GridToggle
        active={isGridVisible}
        onChange={setIsGridVisible}
        className="fixed bottom-4 right-4 z-50"
      />
      <GridOverlay active={isGridVisible} />
      {children}
    </>
  );
}
```

### Breakpoints Configuration

The grid system uses the following breakpoints (defined in `tailwind.config.cjs`):

```js
{
  xs: '320px',
  sm: '360px',
  md: '656px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}
```

### Grid Layout

The grid layout is defined in `globals.scss`:

```scss
.grid-layout {
  @apply h-full w-full mx-auto
    px-2 xs:px-2 sm:px-4 md:px-10
    grid grid-cols-4 gap-2
    md:grid-cols-12 md:gap-4;
}
```

This creates:

- Mobile: 4-column grid with 8px (2) gap
- Tablet & Desktop: 12-column grid with 16px (4) gap
- Responsive padding:
  - Mobile (xs): 8px
  - Small Mobile (sm): 16px
  - Tablet & up (md): 40px
