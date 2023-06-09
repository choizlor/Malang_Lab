const { transform } = require('typescript');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'box-gradient':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)',
          'bg-1':
          "url('https://s3.ap-northeast-2.amazonaws.com/static.malang-lab.com/static/bg-1.png')",
        'bg-2':
          "url('https://s3.ap-northeast-2.amazonaws.com/static.malang-lab.com/static/bg-2.png')",
        'bg-3':
          "url('https://s3.ap-northeast-2.amazonaws.com/static.malang-lab.com/static/bg-3.png')",
        'bg-4':
          "url('https://s3.ap-northeast-2.amazonaws.com/static.malang-lab.com/static/bg-4.png')",
      },
      colors: {
        black: '#44474B',
        lightgray: '#ACACAC',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-20%)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')],
};
