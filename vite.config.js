import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',
  plugins: [vue()],
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify('https://api.example.com/data')
  }
})
