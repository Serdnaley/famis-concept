/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  "env": {
    "vue/setup-compiler-macros": true,
  },
  "rules": {
    "vue/multi-word-component-names": 0,
    curly: 0,
    semi: [2, 'never'],
    'comma-dangle': [2, 'always-multiline'],
    'padding-line-between-statements': [2,
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var', 'directive'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var', 'directive'],
        next: ['const', 'let', 'var', 'directive'],
      },
    ],
    'no-multi-spaces': 2,
    'eol-last': [2, 'always'],
    'arrow-parens': [2, 'always'],
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1, maxBOF: 0 }],
    'quote-props': [2, 'as-needed'],
    'object-curly-spacing': [2, 'always'],
    'comma-spacing': [2, { before: false, after: true }],
    'space-before-function-paren': [2, 'always'],
    'no-unused-vars': 2,
    'lines-between-class-members': 0,
  },
}
