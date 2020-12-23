import firebase from "firebase"
import Vue from 'vue'
import VueRouter from 'vue-router'
import Solo from '../views/Solo.vue'
import Vs from '../views/Vs.vue'
import RemoteVs from '../views/RemoteVs.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Signout from '../views/Signout.vue'

Vue.use(VueRouter)

//どのコンポーネントにするかコンポーネントの数だけpathをつくる
const routes = [
  {
    path: '/solo',
    name: 'Solo',
    component: Solo
  },
  {
    path: '/',
    name: 'Vs',
    component: Vs
  },
  {
    path: '/remotevs',
    name: 'RemoteVs',
    component: RemoteVs,
    meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signout',
    name: 'Signout',
    component: Signout,
    meta: { requiresAuth: true }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    // 認証状態を取得
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        // 認証されていない場合、認証画面へ
        next({ name: 'Signin' })
      }
    })
  } else {
    next()
  }
})

export default router
