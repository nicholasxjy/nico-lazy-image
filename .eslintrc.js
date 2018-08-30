module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
      classes: true,
      defaultParams: true
    },
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'react/no-find-dom-node': 0
  }
}
