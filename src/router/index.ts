import { createRouter, createWebHistory } from 'vue-router'
import Recorrido from '../components/Recorrido.vue'
        
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: Recorrido
    },
    {
      path: '/claveunica',
      name: 'hola',
      component: () => import('../views/Claveunica.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/activa',
      name: 'activa',
      component: () => import('../views/claveunica_activa.vue')
    },
    {
      path: '/recupera',
      name: 'recupera',
      component: () => import('../views/claveunica_recupera.vue')
    },
    {
      path: '/actualiza',
      name: 'actualiza',
      component: () => import('../views/claveunica_actualiza.vue')
    },
    {
      path: '/instituciones_publicas',
      name: 'instituciones_publicas',
      component: () => import('../views/claveunica_instituciones_publicas.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/claveunica_login.vue')
    },
  ]
})

export default router
