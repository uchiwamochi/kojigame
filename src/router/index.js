import Vue from 'vue'
import VueRouter from 'vue-router'
import Solo from '../views/Solo.vue'
import Vs from '../views/Vs.vue'
import RemoteVs from '../views/RemoteVs.vue'

Vue.use(VueRouter)

//どのコンポーネントにするかコンポーネントの数だけpathをつくる
const routes = [
  {
    path: '/solo',
    name: 'Solo',
    component: Solo
  },
  {
    path: '/vs',
    name: 'Vs',
    component: Vs
  },
  {
    path: '/remotevs',
    name: 'RemoteVs',
    component: RemoteVs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
