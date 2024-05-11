import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Portfolio-ReactJS/',
  build: {
    outDir: 'docs' // This is important for GitHub Pages
  }
})
