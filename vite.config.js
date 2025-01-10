import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  base: '/Todo-list/', // Replace 'repo-name' with your GitHub repository name
  build: {
    outDir: 'dist',
  },
  plugins:[react()]
});
