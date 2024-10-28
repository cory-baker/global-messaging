import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import veauryVitePlugins from 'veaury/vite/index.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    veauryVitePlugins({
      type: "vue",
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: "src/main.ts", // Your main entry point
      name: "Messaging",
      fileName: (format) => `messaging.${format}.js`,
    },
  }
})
