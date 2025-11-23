import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
  clean: true,
  minify: true,
  target: "es2018",
  shims: true,
  external: ["react", "react-dom"],
  tsconfig: "./tsconfig.json" // <--- prevents wrong tsconfig loading
});