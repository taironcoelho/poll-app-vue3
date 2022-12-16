/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: { // https://tailwindcss.com/docs/customizing-colors#custom-colors
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
      deepPurple: {
        600: '#1C0E32',
        500: '#1F0F38',
        400: '#625774',
        300: '#A59FAF',
        200: '#E9E7EB',
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
    fontFamily: { // https://tailwindcss.com/docs/font-family#font-families
      sans: 'Stolzl',
    },
    fontSize: { // https://tailwindcss.com/docs/font-size#font-sizes
      h1: ['64px', '80px'],
      h2: ['32px', '40px'],
      h3: ['24px', '32px'],
      h5: ['20px', '28px'],
      h6: ['16px', '24px'],
      sub1: ['24px', '36px'],
      sub2: ['18px', '28px'],
      sub3: ['16px', '24px'],
      'body-ml': ['16px', '28px'], // Multi line
      'body-sl': ['16px', '24px'], // Single line
      'body-sm-ml': ['14px', '24px'], // Multi line small
      'body-sm-sl': ['14px', '20px'], // Single line small
      'body-xs-ml': ['12px', '20px'], // Multi line extrasmall
      'body-xs-sl': ['12px', '18px'], // Single line extrasmall
      description: ['12px', '16px'],
      tag: ['14px', '16px'],
      'tag-sm': ['12px', '14px'],
      label: ['14px', '16px'],
      'label-sm': ['12px', '16px'],
      input: ['14px', '20px'],
      btn: ['16px', '24px'],
      'btn-sm': ['14px', '16px'],
      'btn-text': ['16px', '28px'],
      'btn-text-sm': ['14px', '18px'],
      link: ['16px', '24px'],
      'link-sm': ['14px', '20px'],
      avatar: ['16px', '16px'],
      'avatar-sm': ['14px', '16px'],
      'avatar-xs': ['12px', '16px'],
      badge: ['12px', '18px'],
      'badge-sm': ['10px', '14px'],
      banner: ['15px', '24px'],
      'translation-label': ['11px', '12px'],
      'rich-text-area': ['14px', '32px'],
    },
  },
  plugins: [],
};
