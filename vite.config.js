import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "grab-food",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./MainContent": "./src/components/MainContent",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:5173',
    },
  }
})
