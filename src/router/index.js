import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MenuCompleto',
    component: () => import(/* webpackChunkName: "about" */ '../views/MenuCompleto.vue')
  },
  {
    path: '/acaiecremesnatigela',
    name: 'AcaiECremesNaTigela',
    component: () => import(/* webpackChunkName: "about" */ '../views/AcaiECremesNaTigela.vue')
  },
  {
    path: '*/',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/MenuCompleto.vue'),
  },
  {
    path: '/acainocopo',
    name: 'AcaiNoCopo',
    component: () => import(/* webpackChunkName: "about" */ '../views/AcaiNoCopo.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
