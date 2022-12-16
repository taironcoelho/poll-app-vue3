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
      blue: {
        700: '#0169C9',
        600: '#0078E6',
        500: '#2898FF',
        400: '#49A8FF',
        300: '#92CBFF',
        200: '#DBEEFF',
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
      green: {
        600: '#5FC02A',
        500: '#78D644',
        400: '#93DE6A',
        300: '#BEEBA5',
        200: '#F1FBEC',
      },
      red: {
        600: '#EA1300',
        500: '#FF4433',
        400: '#FF5849',
        300: '#FF9B92',
        200: '#FFECEB',
      },
      yellow: {
        600: '#EDB900',
        500: '#FFC700',
        400: '#FFD749',
        300: '#FFE792',
        200: '#FFFBEB',
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
    boxShadow: { // https://tailwindcss.com/docs/box-shadow#box-shadows
      1: '0px 1px 4px rgba(26, 26, 26, 0.05)',
      2: '0px 2px 8px rgba(26, 26, 26, 0.05)',
      3: '0px 4px 24px rgba(0, 0, 0, 0.05)',
      'side-panel': '4px 0px 16px rgba(26, 26, 26, 0.05)',
      'hue-slider-knob': '0px 1px 2px rgba(0, 0, 0, 0.15)',
      left: '-4px 0px 16px rgba(26, 26, 26, 0.05), -1px 0px 4px rgba(0, 0, 0, 0.05)',
      top: '0px -4px 24px rgba(0, 0, 0, 0.05)',
      none: 'none',
    },
    minHeight: theme => ({
      12: theme('height.12'),
    }),
    extend: {
      minWidth: theme => ({
        4: theme('width.4'),
        5: theme('width.5'),
        64: theme('width.64'),
      }),
      maxWidth: theme => ({
        40: theme('width.40'),
        56: theme('width.56'),
        64: theme('width.64'),
        'table-column': '24ch',
      }),
      margin: {
        '-9/16': '-0.5625rem',
      },
      padding: {
        3.25: '0.8125rem',
      },
      borderWidth: {
        9: '9px',
      },
      spacing: {
        88: '22rem',
        112: '28rem',
        135: '33.75rem',
      },
      width: {
        '1/10': '10%',
        '3/10': '30%',
        '7/10': '70%',
        '9/10': '90%',
        82: '20.5rem',
        100: '25rem',
      },
      height: {
        43: '10.75rem',
      },
      keyframes: {
        'slide-right-in': {
          '0%': { transform: 'translate(100vw, 0)' },
          '100%': { transform: 'translate(0vw, 0)' },
        },
        'slide-right-out': {
          '0%': { transform: 'translate(0vw, 0)' },
          '100%': { transform: 'translate(100vw, 0)' },
        },
        'slide-left-in': {
          '0%': { transform: 'translate(-100vw, 0)' },
          '100%': { transform: 'translate(0vw, 0)' },
        },
        'slide-left-out': {
          '0%': { transform: 'translate(0vw, 0)' },
          '100%': { transform: 'translate(-100vw, 0)' },
        },
      },
      animation: {
        'slide-right-in': 'slide-right-in 500ms linear',
        'slide-right-out': 'slide-right-out 500ms linear',
        'slide-left-in': 'slide-left-in 500ms linear',
        'slide-left-out': 'slide-left-out 500ms linear',
      },
      zIndex: {
        'side-panel': '60',
        'modal-dialog': '70',
        toast: '80',
      },
    },
  },
  plugins: [],
};
