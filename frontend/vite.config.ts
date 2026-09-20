import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 子路径部署: VITE_APP_BASE=/resonance npm run build (默认根路径, 本地开发无需配置)
const appBase = process.env.VITE_APP_BASE || ''
// 后端 API 域名(前后端分离部署时用, 如 https://resonance-backend.onrender.com; 同源部署留空)
const apiBaseUrl = process.env.VITE_API_BASE_URL || ''

export default defineConfig({
  plugins: [react()],
  base: appBase || '/',
  define: {
    __APP_BASE__: JSON.stringify(appBase),
    __API_BASE_URL__: JSON.stringify(apiBaseUrl),
  },
  server: {
    port: 5174,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:8001',
        changeOrigin: true,
      },
    },
  },
})
