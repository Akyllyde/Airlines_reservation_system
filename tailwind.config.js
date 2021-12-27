const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./window/main/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Raleway', ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
    extend: {},
  },
  plugins: [],
};
