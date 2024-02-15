import process from 'node:process'

export default {
  plugins: {
    tailwindcss: {},
    'postcss-import': {},
    'postcss-url': {},
    'postcss-preset-env': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
