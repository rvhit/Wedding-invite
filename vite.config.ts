import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base on build so the site works under any GitHub Pages sub-path.
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? './' : '/',
  plugins: [react()],
}))
