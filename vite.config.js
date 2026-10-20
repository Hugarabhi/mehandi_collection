import { readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export default {
  base: '/mehandi_collection/',
  plugins: [{
    name: 'copy-template-one-images',
    apply: 'build',
    generateBundle() {
      const imageDirectory = resolve(__dirname, 'template-one')
      for (const file of readdirSync(imageDirectory)) {
        if (!/\.(?:jpe?g|png|webp|avif)$/i.test(file)) continue
        this.emitFile({
          type: 'asset',
          fileName: `template-one/${file}`,
          source: readFileSync(resolve(imageDirectory, file)),
        })
      }
    },
  }],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        templateOne: resolve(__dirname, 'template-one/index.html'),
        templateTwo: resolve(__dirname, 'template-two/index.html'),
      },
    },
  },
}
