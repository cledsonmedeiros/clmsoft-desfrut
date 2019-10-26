import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page01.vue')
  },
  {
    path: '/pagina01',
    name: 'Page01',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page01.vue')
  },
  {
    path: '/pagina02',
    name: 'Page02',
    component: () => import(/* webpackChunkName: "about" */ '../views/PageEmConstrucao.vue')
  },
  {
    path: '/pagina03',
    name: 'Page03',
    component: () => import(/* webpackChunkName: "about" */ '../views/PageEmConstrucao.vue')
  },
  {
    path: '*/',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page01.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
