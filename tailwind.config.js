module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#F2F2F5'
      },
      height: {
        '86': '21rem',
        '88': '24rem',
        '90': '26rem',
        '92': '28rem',
        '120': '40rem',
      },
      width: {
        '70\/': '70%',
        '86': '21rem',
        '88': '24rem',
        '90': '26rem',
        '92': '28rem',
      },
      minWidth: {
        'tst': '60rem',

      },
      margin: {
        '100%': '100%',
        '50%': '30%'
      },
      fontFamily: {
        'RobotoMono': ['Roboto Mono', 'monospace'],
      },
      screens: {
        '2sm': '425px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
