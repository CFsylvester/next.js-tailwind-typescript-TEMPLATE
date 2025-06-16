# 🚀 Next.js | Tailwind | TypeScript – TEMPLATE

[![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?style=flat)](package.json) [![Last Commit](https://img.shields.io/github/last-commit/CFsylvester/next.js-tailwind-typescript-TEMPLATE?style=flat&color=brightgreen)](https://github.com/clairesylvester/storyblok-video-compressor/commits) [![Maintenance](https://img.shields.io/badge/Maintained-yes-brightgreen.svg?style=flat)](https://github.com/CFsylvester/next.js-tailwind-typescript-TEMPLATE/graphs/commit-activity)

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-0070F3?style=flat&logo=next.js)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19.0.0-0070F3?style=flat&logo=react)](https://reactjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-0070F3?style=flat&logo=typescript)](https://www.typescriptlang.org/) [![Node](https://img.shields.io/badge/Node->=20.0.0-61DAFB?style=flat&logo=node.js)](https://nodejs.org/) [![SASS](https://img.shields.io/badge/SASS-1.69.5-CC6699?style=flat&logo=sass)](https://sass-lang.com/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-CC6699?style=flat&logo=tailwind-css)](https://tailwindcss.com/) [![Yarn](https://img.shields.io/badge/Yarn-1.22.22-F7740D?style=flat&logo=yarn)](https://yarnpkg.com/) [![License](https://img.shields.io/badge/License-MIT-666666?style=flat)](https://opensource.org/licenses/MIT)

</br>

<details>
  <summary>Related Articles</summary>
                             
- [Toggle Vision 👀](https://www.linkedin.com/feed/update/urn:li:activity:7320859432408514560) — A LinkedIn post by [Claire Sylvester (template creator)](https://github.com/CFsylvester) exploring the thinking behind grid toggling UX.
- [Re‑Toggled Vision: A Lean, SCSS‑First Grid Overlay](https://www.linkedin.com/pulse/retoggled-vision-lean-cssfirst-grid-overlay-claire-sylvester-jh5yc/) - A LinkedIn post by [Claire Sylvester (template creator)](https://github.com/CFsylvester) reworking the original "Toggle Vision" CSS grid overlay toggle.
  
</details>

<details>
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
- [Package Versions & Dependencies](#package-versions--dependencies)
  - [Core Technologies](#core-technologies)
  - [Styling & UI](#styling--ui)
  - [Development Tools](#development-tools)
  - [Type Definitions](#type-definitions)
- [Scripts](#scripts)
- [CI & Deployments](#ci--deployments)
  - [CI Workflows Includes](#ci-workflow-includes)
  - [Vercel Deploy Flow](#-vercel-deploy-flow)
- [Grid Overlay Toggle](#grid-overlay-toggle)
  - [Breakpoints Configuration](#breakpoints-configuration)
  - [Layout Root (Dynamic SCSS Variables)](#layout-root-dynamic-scss-variables)
  - [Grid Calculations](#grid-calculations)
  - [Layout SCSS](#layout-scss)
  - [Grid Overlay SCSS](#grid-overlay-scss)
  - [Component Structure](#component-structure)
  - [GridOverlayToggle Component](#gridoverlaytoggle-component)
  - [Implementation](#implementation)

</details>

## Prerequisites

[![Node.js](https://img.shields.io/badge/Node.js->=20.0.0-61DAFB?style=flat&logo=node.js)](https://nodejs.org/)
[![Yarn](https://img.shields.io/badge/Yarn->=1.22.0-F7740D?style=flat&logo=yarn)](https://yarnpkg.com/)
[![VS Code](https://img.shields.io/badge/Editor-VS%20Code-666666?style=flat&logo=visual-studio-code)](https://code.visualstudio.com/)

> ⚠️ Direct pushes to `main` are blocked by CI unless the commit message includes `[override-main]`.
> Use Pull Requests into `main`, or merge from `staging`.

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

## CI & Deployments

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/CFsylvester/next.js-tailwind-typescript-TEMPLATE)
[![CI Checks](https://github.com/CFsylvester/next.js-tailwind-typescript-TEMPLATE/actions/workflows/ci.yml/badge.svg)](https://github.com/CFsylvester/next.js-tailwind-typescript-TEMPLATE/actions/workflows/ci.yml)

This template includes a built-in GitHub Actions workflow (`ci.yml`) that runs automatically on all pull requests and pushes to `main` and `staging`.

### CI Workflow Includes

- 🔍 Linting with ESLint
- ✅ Type-checking with TypeScript
- 🔨 Build verification (`next build`)
- 🛑 Main branch is protected — requires `[override-main]` in commit message to push directly

> All CI checks must pass before merging into `main` or `staging`.  
> Preview deployments are automatically handled by Vercel for all branches and PRs.

---

### 🌐 Vercel Deploy Flow

| Branch     | Environment | Deployment                        |
| ---------- | ----------- | --------------------------------- |
| `main`     | Production  | ✅ Auto-deploy to prod            |
| `staging`  | Staging     | ✅ Auto-deploy to preview/staging |
| feature PR | Preview     | ✅ Deploy Preview via Vercel      |

## Grid Overlay Toggle

### Breakpoints Configuration

The grid system uses the following breakpoints (defined in `tailwind.config.cjs`):

```js
 screens: {
  xs: '320px', //  4 cols
  sm: '480px', //  4 cols
  md: '592px', //  6 cols
  lg: '784px', //  8 cols
  xl: '976px', // 10 cols
  '2xl': '1168px', // 12 cols
  '3xl': '1360px', // 14 cols
  '4xl': '1552px', // 16 cols
}
```

### Layout Root (Dynamic SCSS Variables)

The grid system relies on dynamic scss variables updated at the above breakpoints to coincide with a responsive layout that is always divisible by multiples of 2. These dynamic, responsive, variables are used in both the `.layout` and `[data-grid-overlay]` scss selectors.

```scss
:root {
  // dynamic variables
  --layout-cols: 4;
  --layout-padding: theme('spacing.4');

  // hardcoded gap
  --layout-gap: theme('spacing.4');

  // clamp layout col width
  --layout-col-width: clamp(
    60px,
    calc(
      (100vw - (2 * var(--layout-padding)) - ((var(--layout-cols) - 1) * var(--layout-gap))) /
        var(--layout-cols)
    ),
    124px
  );

  @screen md {
    --layout-cols: 6;
    --layout-padding: theme('spacing.6');
  }

  @screen lg {
    --layout-cols: 8;
    --layout-padding: theme('spacing.8');
  }

  @screen xl {
    --layout-cols: 10;
    --layout-padding: theme('spacing.10');
  }

  @screen 2xl {
    --layout-cols: 12;
    --layout-padding: theme('spacing.12');
  }

  @screen 3xl {
    --layout-cols: 14;
    --layout-padding: theme('spacing.14');
  }

  @screen 4xl {
    --layout-cols: 16;
    --layout-padding: theme('spacing.16');
  }
}
```

### Grid Calculations

With a hardcoded variable of `--layout-gap: theme('spacing.4')` (16px), the grid remains fully responsive and divisible by multiples of 2.

- **Responsive Columns & Padding:**

  - **xs** (`320px`): `--layout-cols: 4;` / `--layout-padding: theme('spacing.4')` (16px)
  - **sm** (`480px`): `--layout-cols: 4;` / `--layout-padding: theme('spacing.4')` (16px)
  - **md** (`592px`): `--layout-cols: 6;` / `--layout-padding: theme('spacing.6')` (24px)
  - **lg** (`784px`): `--layout-cols: 8;` / `--layout-padding: theme('spacing.8')` (32px)
  - **xl** (`976px`): `--layout-cols: 10;` / `--layout-padding: theme('spacing.10')` (40px)
  - **2xl** (`1168px`): `--layout-cols: 12;` / `--layout-padding: theme('spacing.12')` (48px)
  - **3xl** (`1360px`): `--layout-cols: 14;` / `--layout-padding: theme('spacing.14')` (56px)
  - **4xl** (`1552px`): `--layout-cols: 16;` / `--layout-padding: theme('spacing.16')` (64px)

- **Clamp Layout Column Width:**

```scss
--layout-col-width: clamp(
  60px,
  calc(
    (100vw - (2 * var(--layout-padding)) - ((var(--layout-cols) - 1) * var(--layout-gap))) /
      var(--layout-cols)
  ),
  124px
);
```

This expression dynamically adjusts the column width based on the current `--layout-padding` and `--layout-cols` values at each breakpoint.

### Layout SCSS

A responsive grid container that adapts to the dynamic variables defined in the layout.scss `:root`. It is utilized on the main element in the server rendered `layout.tsx` found in the app directory.

```scss
.layout {
  @apply grid
    h-full
    justify-center
    gap-x-[var(--layout-gap)]
    px-[var(--layout-padding)]
    grid-cols-[repeat(var(--layout-cols),var(--layout-col-width))];

  > .module {
    @apply h-fit z-0;

    &:not(:only-child) {
      @apply py-module;
    }

    &:only-child {
      @apply my-auto;
    }
  }

  //... &[data-grid-overlay] logic below
}
```

### Grid Overlay SCSS

A purely css driven grid overlay that coincides with the layout class and it's breakpoints. When the data-overlay-grid is set to active, the grid overlay fades into visibility. It is dependent on being used on the same element as the `.layout` class. This is utilized on the main element in the server rendered `layout.tsx` found in the app directory.

```scss
.layout {
  // ...layout logic above

  &[data-grid-overlay] {
    @apply mx-auto bg-repeat-x z-10;

    width: calc(
      var(--layout-cols) * var(--layout-col-width) + (var(--layout-cols) - 1) * var(--layout-gap)
    );

    background-image: repeating-linear-gradient(
      to right,
      rgba(255, 0, 0, 0.2) 0,
      rgba(255, 0, 0, 0.2) var(--layout-col-width),
      transparent var(--layout-col-width),
      transparent calc(var(--layout-col-width) + var(--layout-gap))
    );
    background-size: calc(var(--layout-col-width) + var(--layout-gap)) 100%;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.3s ease-in-out,
      visibility 0.3s ease-in-out;

    &[data-grid-overlay='active'] {
      opacity: 1;
      visibility: visible;
    }
  }
}
```

### Component Structure

- **GridOverlayToggle**: A client-side button that:

  - Reads and toggles a `data-grid-overlay` attribute on the `<main>` element
  - Displays the active breakpoint label
  - Shows a grid icon with an active/inactive state

- **[data-grid-overlay]**: A purely CSS-driven overlay that:
  - Uses CSS variables (`--layout-cols`, `--layout-col-width`, `--layout-gap`, etc.) to match the current layout
  - Renders semi‑transparent columns across the viewport
  - Transitions in/out when `data-grid-overlay="active"` is set by the GridOverlayToggle

### GridOverlayToggle Component

A client side button that triggers the css overlay grid. Updates the main element data-grid-overlay with the active state.

```tsx
const [active, setActive] = useState(false);
const overlayRef = useRef<HTMLElement | null>(null);

// Grab the element with [data-grid-overlay] once on mount
useEffect(() => {
  overlayRef.current = document.querySelector('[data-grid-overlay]');
}, []);

// Update the attribute whenever `active` changes
useEffect(() => {
  if (overlayRef.current) {
    overlayRef.current.setAttribute('data-grid-overlay', active ? 'active' : '');
  }
}, [active]);
```

### Implementation

Add the grid system to your server render layout found in `layout.tsx` within the app directory:

```tsx
// check env vars
const devMode = process.env.NODE_ENV === 'development';
const isGridOverlayOverride = process.env.GRID_OVERLAY_OVERRIDE === 'true';

// show grid overlay if dev mode is true or if the grid overlay override is true
const showGridOverlay = devMode || isGridOverlayOverride;

return (
  <html lang="en" className={montserrat.variable}>
    <body>
      {/* DEV GRID TOGGLE */}
      {showGridOverlay && <GridOverlayToggle />}

      {/* MAIN CONTENT */}
      {/* GRID OVERLAY relies on the layout class */}
      <main data-grid-overlay className={'layout'}>
        {children}
      </main>
    </body>
  </html>
);
```
