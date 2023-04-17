import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css' // Import the Bootstrap CSS file

createApp(App).use(store).use(router).mount('#app')
