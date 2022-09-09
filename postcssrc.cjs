const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require('postcss-preset-env')
const postcssImport = require('postcss-import')
const cssnano = require('cssnano')
const postcssLess = require('postcss-less')

module.exports = (ctx) => ({
  parser: ctx.parser ? 'sugarss' : false,
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    postcssImport,
    autoprefixer,
    postcssPresetEnv,
    cssnano,
    postcssLess,
  },
})
