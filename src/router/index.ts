import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../Pages/HomePage.vue';
import TripsPage from '../Pages/TripsPage.vue';
import TripsUpcomingPage from '../Pages/TripsUpcomingPage.vue';
import WalletPage from "../Pages/WalletPage.vue";
import PaymentsPage from "../Pages/PaymentsPage.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home-page',
    component: HomePage,
  },
  {
    path: '/home',
    name: 'home-page',
    component: HomePage,
  },
  {
    path: '/trips',
    name: 'trips-page',
    component: TripsPage,
  },
  {
    path: '/trips-upcoming',
    name: 'trips-upcoming-page',
    component: TripsUpcomingPage,
  },
  {
    path: '/wallet',
    name: 'wallet-page',
    component: WalletPage,
  },
  {
    path: '/payments',
    name: 'payments-page',
    component: PaymentsPage,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
