module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#f9f9fb'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
