# Next.js | Tailwind | TypeScript

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Yarn](https://img.shields.io/badge/Yarn-1.22.22-2C8EBB?style=flat&logo=yarn)](https://yarnpkg.com/)
[![Node](https://img.shields.io/badge/Node->=20.0.0-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

#TEMPLATE

## Prerequisites

- Node.js >= 20.0.0
- Yarn >= 1.22.0
- Visual Studio Code (recommended)

## VS Code Extensions

When you first open this project in VS Code, you'll automatically be prompted to install the recommended extensions. Look for this popup in the bottom right corner:

![VS Code Extension Prompt](https://code.visualstudio.com/assets/docs/editor/extension-marketplace/extensions-recommendations.png)

You can also install all recommended extensions at once:

1. Open the Command Palette (Cmd/Ctrl + Shift + P)
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

These extensions are automatically suggested through the `.vscode/extensions.json` configuration:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "csstools.postcss",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "christian-kohler.npm-intellisense",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

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

## Editor Configuration

This project includes a `.vscode` folder with shared settings for VS Code users. These settings will:

- Set Prettier as the default formatter
- Enable format on save
- Enable ESLint auto-fix on save
- Require a Prettier config file to be present
- Enable enhanced Tailwind CSS IntelliSense features

To maintain consistent code style across your team:

1. Use Visual Studio Code
2. Install the recommended extensions (Prettier and ESLint)
3. The project's `.vscode/settings.json` will automatically:
   ```json
   {
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": "explicit"
     },
     "prettier.requireConfig": true,
     "editor.quickSuggestions": {
       "strings": true
     },
     "tailwindCSS.includeLanguages": {
       "typescript": "javascript",
       "typescriptreact": "javascript"
     },
     "tailwindCSS.classAttributes": ["class", "className", "ngClass", "containerClassName"],
     "css.validate": false,
     "tailwindCSS.validate": true,
     "editor.inlineSuggest.enabled": true
   }
   ```

These settings ensure that:

- All code is automatically formatted on save using Prettier
- ESLint problems are automatically fixed when possible
- The project's Prettier configuration is always used
- Tailwind CSS IntelliSense provides:
  - Intelligent CSS class completion
  - Syntax highlighting for Tailwind classes
  - CSS class suggestions in template strings
  - Proper validation of Tailwind classes
  - Support for custom class attributes
  - Quick suggestions in JSX/TSX files

## Version Management

This project uses:

- `.nvmrc` for Node.js version management (currently set to v20)
- `engines` in package.json to enforce Node.js (>=20.0.0) and Yarn (>=1.22.0) versions
- `packageManager` field in package.json to specify exact Yarn version (1.22.22)

### Node.js Version

To automatically use the correct Node.js version:

- If you use nvm: Run `nvm use` in the project directory

### Yarn Version

The project is configured to use Yarn 1.22.22. When you run `yarn install`, it will verify that you're using a compatible version of Yarn. If you have an incompatible version, Yarn will show an error message indicating which version you need to use.

## Package Versions & Dependencies

### Core Technologies

- **Next.js** (15.3.1) - React framework for production-grade applications
- **React** (^19.0.0) - JavaScript library for building user interfaces
- **TypeScript** (^5) - Adds static typing to JavaScript for better developer experience
- **Tailwind CSS** (^3.3.0) - Utility-first CSS framework for rapid UI development

### Styling & UI

- **Sass** (^1.69.5) - Advanced CSS preprocessor
- **PostCSS** (^8.4.21) - Tool for transforming CSS with JavaScript
- **Autoprefixer** (^10.4.14) - Automatically adds vendor prefixes to CSS rules

### Development Tools

- **ESLint** (^9) - Linting utility for JavaScript and TypeScript

  - **eslint-config-next** (15.3.1) - Next.js specific ESLint rules
  - **eslint-config-prettier** (^10.1.2) - Disables ESLint rules that conflict with Prettier

- **Prettier** (^3.0.3) - Code formatter for consistent code style

### Type Definitions

- **@types/node** (^22.15.3) - TypeScript definitions for Node.js
- **@types/react** (^19) - TypeScript definitions for React
- **@types/react-dom** (^19) - TypeScript definitions for React DOM

## Scripts

- `yarn dev` - Run development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint errors
- `yarn format` - Format code with Prettier
- `yarn check-format` - Check code formatting

## Development Tools

### Grid System Visualization

This project includes a built-in grid visualization system for development. It helps you ensure your layouts align with the configured Tailwind/CSS grid system.

#### Breakpoints Configuration

The project uses custom breakpoints defined in `tailwind.config.js`:

```js
screens: {
  xs: '320px',   // Extra small devices (small phones)
  sm: '360px',   // Small devices (phones)
  md: '656px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (laptops)
  xl: '1280px',  // Extra large devices (large laptops)
  '2xl': '1536px' // Extra extra large devices (large desktops)
}
```

These breakpoints are:

- `xs`: 320px - Small phones
- `sm`: 360px - Standard phones
- `md`: 656px - Tablets & small laptops
- `lg`: 1024px - Laptops & small desktops
- `xl`: 1280px - Large laptops & desktops
- `2xl`: 1536px - Large desktops & 4K displays

The GridToggle component automatically detects and displays the current breakpoint, making it easy to verify responsive layouts.

#### Grid Configuration

The grid system is defined in `src/styles/globals.scss` and uses these breakpoints:

```scss
.grid-layout {
  @apply h-full w-full mx-auto 
    px-2 xs:px-2 sm:px-4 md:px-10 
    grid grid-cols-4 gap-2 
    md:grid-cols-12 md:gap-4;
}
```

This creates a responsive grid system that adapts at different breakpoints:

- **Mobile** (`xs`: 320px to `sm`: 360px):
  - 4-column grid
  - 2px gap
  - 2px padding
- **Small Mobile** (`sm`: 360px to `md`: 656px):
  - 4-column grid
  - 2px gap
  - 4px padding
- **Tablet/Desktop** (`md`: 656px and above):
  - 12-column grid
  - 4px gap
  - 10px padding

#### Grid Toggle Component

The project includes a development-only grid overlay system with two main components:

1. **GridToggle**: A button that shows current breakpoint and toggles grid visibility

   ```tsx
   <GridToggle active={isGridVisible} onChange={setIsGridVisible} />
   ```

   Features:

   - Shows current breakpoint (xs, sm, md, lg, xl, 2xl)
   - Toggles grid overlay visibility
   - Styled with neumorphic design

2. **GridOverlay**: A visual overlay showing grid columns
   ```tsx
   <GridOverlay active={isGridVisible} />
   ```
   Features:
   - Displays semi-transparent columns matching your grid configuration
   - Responsive to all breakpoints
   - Non-interactive (pointer-events-none)

To use in your layout:

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
