import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.js',
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        'src/tests/setup.js',
        'vite.config.ts',
        'eslint.config.js',
        'src/main.tsx',
        'src/App.tsx'],
      include: ['src/utils/**'],
    }
  }
})
