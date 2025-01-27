/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': false,
      },
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
