module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#F2F2F5'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
