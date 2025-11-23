import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  splitting: false,     // Important: avoid CJS split issues
  treeshake: true,      // Correct spelling
  clean: true,
  minify: true,         // Recommended for published UI libs
  target: "es2018",     // Modern output, widely supported
  shims: true,
  external: ["react", "react-dom"]
});