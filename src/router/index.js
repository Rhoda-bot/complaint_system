import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
AdminDashboard
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/signin',
    name: 'Login',
    component:Login
  },
  {
    path: '/signup',
    name: 'Registration',
    component:Registration
  },
  {
    path: '/admin',
    name: 'AdminLogin',
    component:AdminLogin
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component:AdminDashboard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
