import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'D&D Dice',
        short_name: 'D&D Dice',
        description: 'Virtual dice roller for Dungeons & Dragons',

        lang: 'en',

        start_url: '/',
        scope: '/',

        display: 'standalone',

        theme_color: '#ffffff',
        background_color: '#ffffff',

        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
