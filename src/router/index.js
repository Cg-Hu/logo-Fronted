import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GenView from '../views/GenView.vue';

// /这个表示的是主页
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gen',
    name: 'gen',
    component: GenView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
