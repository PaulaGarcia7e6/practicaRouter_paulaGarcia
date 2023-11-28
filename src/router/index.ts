import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/destination/:id',
      name: 'destination.show',
      component: () => import('@/views/DestinationShow.vue'),
      props: route=>({ ...route.params,id:parseInt(route.params.id as string)}),
      children: [
        {
          path: ':experienceSlug',
          name: 'experience.name',
          component: () => import('@/views/ExperienceShow.vue'),
          props: route=>({ ...route.params,id:parseInt(route.params.id as string)})
        }
      ]
    }
  ]
})

export default router
