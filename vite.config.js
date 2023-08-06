import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Todo_List_Frontend_Mentor/",
  plugins: [react()],
})
