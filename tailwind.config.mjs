/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B3022',
          dark: '#132419',
          light: '#243d2a',
        },
        ivory: {
          DEFAULT: '#FDFCF8',
          alt: '#F5F5F0',
        },
        accent: {
          DEFAULT: '#B2967D',
          light: '#c4ad97',
          dark: '#9a826b',
        },
        secondary: {
          DEFAULT: '#A6705D',
          light: '#b88572',
          dark: '#8f5f4e',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
