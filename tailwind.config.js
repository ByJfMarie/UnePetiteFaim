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
        '92': '28rem'
      },
      fontFamily: {
        'RobotoMono': ['Roboto Mono', 'monospace'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
