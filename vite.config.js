import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project sites need a repository-name base path.
  // Change this to '/YOUR-REPOSITORY-NAME/' before deploying.
  base: '/',
})