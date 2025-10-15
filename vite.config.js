import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0',
    strictPort: false,
    allowedHosts: ['.railway.app']
  },
  server: {
    port: 5174,
    host: true,
    strictPort: false
  }
})
