import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/views/Home.vue'
import HawaiiVue from '@/views/Hawaii.vue'
import BrazilVue from '@/views/Brazil.vue'
import JamaicaVue from '@/views/Jamaica.vue'
import PanamaVue from '@/views/Panama.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/1/brazil',
      name: 'brazil',
      component: BrazilVue
    },
    {
      path: '/1/panama',
      name: 'panama',
      component: PanamaVue
    },
    {
      path: '/1/hawaii',
      name: 'hawaii',
      component: HawaiiVue
    },
    {
      path: '/1/jamaica',
      name: 'jamaica',
      component: JamaicaVue
    },
  ]
})

export default router
