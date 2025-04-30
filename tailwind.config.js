/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '360px',
        md: '656px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        navy: '#1e293b',
        deepNavy: '#1c2541',
        lightNavy: '#27345c',
      },
      boxShadow: {
        neumorphic: '0px 4px 12px rgba(0, 0, 0, 0.5), 0px 1px 3px rgba(0, 0, 0, 0.3)',
        'neumorphic-inset': 'inset 0px 2px 4px rgba(0, 0, 0, 0.5), inset 0px 1px 2px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
