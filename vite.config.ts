import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/url': 'http://146.190.198.148:3000/api', // Proxy all requests with /api prefix to your backend
  //   },
  // },
})
