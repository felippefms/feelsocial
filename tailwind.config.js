/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-notosans)']
      },
      animation:{
        'fadein': 'fadein 1.3s',
        'slidein': 'slidein 0.5s forwards',
        'slideout': 'slideout 0.5s forwards'
      },
      keyframes: {
        fadein: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        slidein: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideout: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
}
