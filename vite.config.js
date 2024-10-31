import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config();

const base_Url = `https://interview.civicplus.com/${process.env.REQUEST_PREFIX}`;

// https://vite.dev/config/
export default defineConfig({

  define: {
    'process.env': process.env
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: base_Url,
        changeOrigin: true,
      },
    },
  },
})
