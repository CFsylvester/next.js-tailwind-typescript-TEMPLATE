import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// This creates a config array with all of the plugins and settings for Next.js core-web-vitals
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("prettier"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      ".vercel/**",
      "coverage/**",
      "*.tsbuildinfo",
      "next-env.d.ts",
    ]
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "arrow-body-style": ["warn", "as-needed"],
      "no-var": "error",
      "prefer-const": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    }
  }
];

export default eslintConfig;
