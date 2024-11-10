import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,ts}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      exclude: [
        'coverage/**',
        'dist/**',
        '**/*.d.ts',
        'test/**',
        '**/*.test.ts',
        '**/*.spec.ts',
        'vitest.config.ts',
        'eslint.config.js',
      ],
    },
    testTimeout: 10000,
  },
});
