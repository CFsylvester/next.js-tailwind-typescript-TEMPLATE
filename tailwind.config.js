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
        xs: '320px',
        sm: '360px',
        md: '656px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        brand: {
          navy: '#1F2A52',
          gray: '#272c30',
          'light-gray': '#D3D3D3',
          slate: '#3c454d',
          sapphire: '#2C4DDA',
          amethyst: '#BB3EEF',
          blush: '#E8AEB7',
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
      backgroundImage: {
        // Metal Values
        'metal-gold': 'var(--metal-gold)',
        'metal-black': 'var(--metal-black)',
        'metal-silver': 'var(--metal-silver)',
      },
    },
  },
  plugins: [],
};
