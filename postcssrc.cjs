const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require('postcss-preset-env')
const postcssImport = require('postcss-import')
const cssnano = require('cssnano')
const postcssLess = require('postcss-less')
const postcssStyl = require('postcss-styl')
const postcssSass = require('postcss-sass')
const postcssScss = require('postcss-scss')
const tailwindcss = require('tailwindcss')

module.exports = (ctx) => ({
  parser: ctx.parser ? 'sugarss' : false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    postcssImport,
    autoprefixer,
    postcssPresetEnv,
    cssnano,
    postcssLess,
    postcssStyl,
    postcssSass,
    postcssScss,
    tailwindcss
  },
})
