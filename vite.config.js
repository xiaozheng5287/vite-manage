import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //为项目增加别名的配置
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
