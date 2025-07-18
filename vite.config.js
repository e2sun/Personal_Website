// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Personal_Website/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
})