import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/** * IMPORTACIÓN DE ESTILOS 
 * Usamos Bootstrap 5 para el diseño responsivo y 
 * Bootstrap Icons para los iconos de WhatsApp y redes sociales.
 */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')