import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import react from "@astrojs/react";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        //scssのエイリアス
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    }
  }
});