import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { config } from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  /*server: {
    origin: 'http://127.0.0.1:3000/',
    proxy: {
      // string shorthand
      '/foo': 'http://127.0.0.1:4567',
      // with options
      '/api': {
        target: 'http://127.0.0.1:4567',
        ws: true,
      }
    }
  }*/
})