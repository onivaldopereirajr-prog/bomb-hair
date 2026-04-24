import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/bomb-hair/', // <-- ADICIONEI ESTA LINHA AQUI
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('framer-motion')) return 'motion'
          if (id.includes('lucide-react') || id.includes('@heroicons/react')) return 'icons'
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-helmet-async')) return 'vendor'
          return 'vendor'
        },
      },
    },
  },
})