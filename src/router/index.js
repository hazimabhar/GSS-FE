import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/home/Home.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import Report from '../views/report/Report.vue'
import Inventory from '@/views/inventory/Inventory.vue'
import Payment from '@/views/cashier/Payment.vue'
import AccessRight from '@/views/security/accessright/AccessRight.vue'
import Role from '@/views/security/role/Role.vue'
import User from '@/views/security/user/User.vue'

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
        {
          path: '/inventory',
          name: 'Inventory',
          component: Inventory
        },
        {
          path: '/payment',
          name: 'Payment',
          component: Payment
        },
        {
          path: '/accessright',
          name: 'Access Right',
          component: AccessRight
        },
        {
          path: '/role',
          name: 'Role',
          component: Role
        },
        {
          path: '/user',
          name: 'User',
          component: User
        },
      ]
    },
  ]
})

export default router
