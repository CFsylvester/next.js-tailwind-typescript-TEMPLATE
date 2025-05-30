/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,scss}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      fontSize: {
        lg: ['2rem', { lineHeight: '2.5rem' }], // 32px
        md: ['1.5rem', { lineHeight: '2rem' }], // 24px
        sm: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        title: ['1.125rem', { lineHeight: '1.5rem' }], // 18px
        subtitle: ['1rem', { lineHeight: '1.5rem' }], // 16px
        label: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        body: ['0.9375rem', { lineHeight: '1.625rem' }], // ~15px
        caption: ['0.75rem', { lineHeight: '1.125rem' }], // 12px
      },
      screens: {
        xs: '320px', //  4 cols
        sm: '480px', //  4 cols
        md: '592px', //  6 cols
        lg: '784px', //  8 cols
        xl: '976px', // 10 cols
        '2xl': '1168px', // 12 cols
        '3xl': '1360px', // 14 cols
        '4xl': '1552px', // 16 cols
      },
      spacing: {
        tight: '4px',
        text: '8px',
        component: '16px',
        card: '24px',
        section: '32px',
        container: '48px',
        layout: '64px',
        module: '80px',
        hero: '120px',
      },
      colors: {
        brand: {
          'light-gray': '#D3D3D3',
        },
        neu: {
          navy: {
            base: '#1e293b',
            dark: '#1c2541',
            light: '#27345c',
          },
          white: {
            base: '#F5F6FA',
            dark: '#EDEEF2',
            darker: '#BABDC2',
            border: '#DADBDF',
            text: '#3A3A3A',
          },
        },
      },
      boxShadow: {
        'neu-navy-base': '0px 4px 12px rgba(0, 0, 0, 0.5), 0px 1px 3px rgba(0, 0, 0, 0.3)',
        'neu-navy-inset':
          'inset 0px 2px 4px rgba(0, 0, 0, 0.5), inset 0px 1px 2px rgba(0, 0, 0, 0.3)',

        'neu-white-base':
          '6px 6px 12px rgba(0, 0, 0, 0.08), -6px -6px 12px rgba(255, 255, 255, 0.8)',
        'neu-white-inset':
          'inset 4px 4px 8px rgba(0, 0, 0, 0.08), inset -4px -4px 8px rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
};
