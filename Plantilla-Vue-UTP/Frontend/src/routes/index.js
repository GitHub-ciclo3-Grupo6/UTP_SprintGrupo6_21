
import Vue from 'vue'
import VueRouter from 'vue-router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from '../views/index.vue'
import Login from '../views/login.vue'
import Admin from '../views/admin.vue'
import Services from '../views/services.vue'


Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/admin', component: Admin, meta: { rutaProtegida: true } },
    { path: '/services', component: Services }
]

const router = new VueRouter({
    mode: 'history',
    routes
})



export { router }