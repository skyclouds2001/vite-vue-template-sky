import process from 'node:process'

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-url': {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': false,
      },
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
