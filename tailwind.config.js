/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    // screens: {
    //   // xs: '370px', // to cater for disclaimer height for iPhone 5/5S/SE
    //   sm: '640px',
    //   // => @media (min-width: 640px) { ... }
    //   md: '768px',
    //   // => @media (min-width: 768px) { ... }
    //   lg: '1024px',
    //   // => @media (min-width: 1024px) { ... }
    //   xl: '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
