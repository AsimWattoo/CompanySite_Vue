import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let app = createApp(App)

// Adding use statement
app.use(router)

// Building the app
app.mount('#app')
