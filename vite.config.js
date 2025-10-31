
import { resolve } from 'path'

export default {
  base: '/Grupo8less/',  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html')
      }
    }
  }
}