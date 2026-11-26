import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative assets support GitHub Pages project subpaths and local previews.
export default defineConfig({
  base: './',
  plugins: [react()],
})
