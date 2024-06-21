import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/home/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Report from '../views/Report.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/report',
          name: 'Report',
          component: Report
        },
      ]
    },
  ]
})

export default router
