/// <reference types="vite/client" />

/** 部署子路径前缀(如 /resonance), 由 vite.config.ts 的 VITE_APP_BASE 构建时注入; 默认空 = 根路径 */
declare const __APP_BASE__: string
/** 后端 API 域名(前后端分离部署时用), 由 vite.config.ts 的 VITE_API_BASE_URL 构建时注入; 默认空 = 同源 */
declare const __API_BASE_URL__: string
