import type { StorybookConfig } from '@storybook/react-vite';
import { dirname } from "path";
import { fileURLToPath } from "url";

/**
 * This function resolves the absolute path of a package.
 * Required for monorepos + PNPM + Yarn PnP compatibility.
 */
function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const config: StorybookConfig = {
  stories: [
    // Load ALL stories in src EXCEPT the Storybook bootstrap folder
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",

    // Exclude everything inside src/app completely
    // "!../src/app/**/*.mdx",
    // "!../src/app/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    

    // OPTIONAL: Load UI library stories
    // "../../../ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
};

export default config;