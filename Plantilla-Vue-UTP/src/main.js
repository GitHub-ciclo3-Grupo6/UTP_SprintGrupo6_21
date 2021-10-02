import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//importando las paginas de /views
import Home from './views/index.vue'
import Login from './views/login.vue'
import Admin from './views/admin.vue'
import Services from './views/services.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

//creando las rutas de navegación.
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/admin', component: Admin },
  { path: '/services', component: Services }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
