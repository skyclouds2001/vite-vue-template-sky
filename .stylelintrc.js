module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: [],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'no-empty-source': null,
  },
  overrides: [
    {
      files: ['**/*.vue'],
      extends: ['stylelint-config-standard-vue'],
    },
    {
      files: ['**/*.scss'],
      extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
    },
    {
      files: ['**/*.less'],
      extends: ['stylelint-config-recommended-less'],
    },
  ],
}
