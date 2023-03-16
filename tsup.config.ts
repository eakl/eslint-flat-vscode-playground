import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: './src/index.ts'
  },
  format: ['esm'],
  splitting: false,
  minify: false,
  clean: true,
  dts: true,
  shims: true,
  treeshake: 'recommended'
})
