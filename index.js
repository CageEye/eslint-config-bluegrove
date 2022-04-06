module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'prettier'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-plusplus': 'off',
    'import/extensions': ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    ' @typescript-eslint/no-empty-function': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'max-classes-per-file': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/quotes': 'off',
    'no-underscore-dangle': 'off',
    'react/function-component-definition': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['Label'],
        labelAttributes: ['label'],
        depth: 3,
      },
    ],
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx', '**/*.test.tsx'],
      },
    ],
    'no-param-reassign': 'off',
    'react/no-array-index-key': 'off',
    //temp
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-nested-ternary': 'off',
  },
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
};
