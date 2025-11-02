import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
// export default defineConfig({
//   plugins: [tailwindcss(),react()],
// })


//delete When Backend prepared
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.postalpincode.in', // target base URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // remove /api prefix
      },
    },
  },
})
