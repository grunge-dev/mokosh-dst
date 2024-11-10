import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVitest from '@vitest/eslint-plugin';
import tseslint from 'typescript-eslint';

const config = [
  {
    files: ['**/*.js'],
    ignores: ['**/dist/**', '**/node_modules/**'],
    plugins: {
      vitest: pluginVitest,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/dist/**', '**/node_modules/**'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      vitest: pluginVitest,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
    },
  },
];

export default config;
