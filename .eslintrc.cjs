module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'json-server'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
    "max-len": [
      "error",
      {
        code: 100,
        ignoreComments: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": "warn"

  },
}
