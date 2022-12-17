/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFF',
      red: '#FF4433',
      green: '#78D644',
      yellow: '#FFC700',
      black: '#000',
      transparent: 'transparent',
      orange: {
        700: '#D45F00',
        600: '#E65F00',
        500: '#FF6A00',
        400: '#FF8B39',
        300: '#FFCDAA',
        200: '#FFF0E6',
      },
      purple: {
        600: '#6A35BE',
        500: '#8442EE',
        400: '#A97BF3',
        300: '#CEB3F8',
        200: '#F3ECFD',
      },
      grey: {
        900: '#1A1A1A',
        800: '#2F2F2F',
        700: '#535353',
        600: '#6D6D6D',
        550: '#888888',
        500: '#A0A0A0',
        450: '#B1B1B1',
        400: '#D9D9D9',
        300: '#EAEAEA',
        250: '#F2F2F2',
        200: '#F5F5F5',
        100: '#FAFAFA',
      },
    },
    fontFamily: {
      sans: 'Stolzl',
    },
    fontSize: {
      h1: ['64px', '80px'],
      h2: ['32px', '40px'],
      h3: ['24px', '32px'],
      label: ['14px', '16px'],
      body: ['14px', '20px'],
    },
  },
  plugins: [],
};
