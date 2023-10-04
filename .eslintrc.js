module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['import', 'prettier'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'n/exports-style': ['error', 'module.exports'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'none'
      }
    ],
    semi: 0
  }
};
