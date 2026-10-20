import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        templateOne: resolve(__dirname, 'rahul_mehandi_art/index.html'),
        templateTwo: resolve(__dirname, 'template-two/index.html'),
      },
    },
  },
})
