/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F103F',
        secondary: '#0e0f2e',
        accent: '#C961DE',
        text: '#ffffff',
        'text-secondary': 'rgba(255,255,255,0.52)',
        highlight: '#C961DE',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out forwards',
        fadeInUp: 'fadeInUp 500ms ease-out forwards',
        slideIn: 'slideIn 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
