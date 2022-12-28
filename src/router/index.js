import Vue from 'vue'
import VueRouter from 'vue-router'
import mainLayout from '../layouts/mainLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: mainLayout,
    children: [
      {
        path: '/',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/products/:id',
        component: () => import('../views/ProductView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
