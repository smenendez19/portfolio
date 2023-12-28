import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import eslint from 'vite-plugin-eslint'
import { resolve } from 'path'
import { hash } from './src/utils/functions.js'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { compression } from 'vite-plugin-compression2'


export default defineConfig({
  base: "/portfolio/",
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    eslint(),
    VueI18nPlugin({ fullInstall: false }),
    compression()
  ],
  server: {
    host: "0.0.0.0",
    port: 8000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]` + hash + `.js`,
        chunkFileNames: `[name]` + hash + `.js`,
        assetFileNames: `[name]` + hash + `.[ext]`
      }
    }
  }
})
