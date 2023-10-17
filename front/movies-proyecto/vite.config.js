import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  serve: {
    Proxy:{
      '/API/PelisApi': "http://localhost:3000"
    }
  },
  plugins: [react()],
})
