import { createRouter, createWebHistory } from 'vue-router'
import HousesView from '../views/HousesView.vue'
import HouseAddView from '../views/HouseAddView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HousesView
    },
    {
      path: '/domki',
      name: 'houses',
      component: HousesView
    },
    {
      path: '/domki/dodaj',
      name: 'house-add',
      component: HouseAddView
    },
  ],
})

export default router
