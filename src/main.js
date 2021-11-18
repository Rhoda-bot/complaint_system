import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import axios  from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
axios.defaults.headers.common.authorization = localStorage.userToken
axios.defaults.baseURL = 'http://localhost/Tomilola/backend/'

createApp(App).use(router).mount('#app')
