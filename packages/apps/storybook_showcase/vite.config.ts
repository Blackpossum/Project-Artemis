/ <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

/**
 * Optional Plugin: Fix Vite dynamic imports across pnpm monorepo
 */
function monorepoDynamicImportFix() {
  return {
    name: 'monorepo-dynamic-import-fix',
    resolveId(id: string) {
      if (id.startsWith('/virtual:')) return id;
      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    monorepoDynamicImportFix()
  ],

  // -------------------------------------------------------------
  //  Absolute Path Aliases
  // -------------------------------------------------------------
  resolve: {
    alias: {
     '@ui': path.resolve(__dirname, '../../ui/src'),
     '@showcase': path.resolve(__dirname, './src')
}
  },

  // -------------------------------------------------------------
  //  Allow reading files outside this directory (pnpm monorepo stuff)
  // -------------------------------------------------------------
  server: {
    fs: {
      allow: [
        dirname,                                // ----> storybook_showcase
        path.resolve(dirname, '../../ui'),      // ---> component library
        path.resolve(dirname, '../../..'),      // ----> monorepo root
      ],
    },
  },

  // -------------------------------------------------------------
  //  Vitest + Storybook test integration 
  // -------------------------------------------------------------
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
