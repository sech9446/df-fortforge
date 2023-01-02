import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

const file = fileURLToPath(new URL('package.json', import.meta.url))
const json = readFileSync(file, 'utf8')
const pkg = JSON.parse(json)

// https://vitejs.dev/config/
export default defineConfig({
  base: "/df-fortforge",
  plugins: [svelte()],
  define: {
    __VERSION__: JSON.stringify(pkg.version),
    __SUPPORT_DF_VERSION__: JSON.stringify(pkg.supportDFVersion),
  },
})
