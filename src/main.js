import Vue from 'vue'
import App from './App.vue'
import router from './router'


import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyBvrWHqQYZAQrgxMw88qOrvWgGXt6UQNew",
  authDomain: "pzl01-57b95.firebaseapp.com",
  projectId: "pzl01-57b95",
  storageBucket: "pzl01-57b95.appspot.com",
  messagingSenderId: "1002855702683",
  appId: "1:1002855702683:web:e39037e8382d4c79c6663e",
  measurementId: "G-3P3Z9C0TRE"
}

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
    