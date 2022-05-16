import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../Pages/HomePage.vue';
import TripsPage from '../Pages/TripsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home-page',
    component: HomePage,
  },
  {
    path: '/trips',
    name: 'trips-page',
    component: TripsPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
