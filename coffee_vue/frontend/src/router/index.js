import { createRouter, createWebHistory } from 'vue-router'
import indexView from '../views/index.vue'
import ListView from '../views/ListView.vue'
import DetailView from '../views/DetailView.vue'

const routes = [
  {
    path: '',
    name: 'index',
    component: indexView
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: DetailView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router