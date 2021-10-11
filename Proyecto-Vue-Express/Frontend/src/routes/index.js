
import Vue from 'vue'
import VueRouter from 'vue-router'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from '../views/index.vue'
import Login from '../views/login.vue'
import Admin from '../views/admin/admin.vue'
import Product from '../views/admin/product.vue'
import Order from '../views/admin/order.vue'
import User from '../views/admin/user.vue'
import Services from '../views/services.vue'


Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home, meta: {title:"FerreSoft" } },
    { path: '/login', component: Login, meta: { title:"Login - FerreSoft" } },
    { path: '/admin', component: Admin, meta: { rutaProtegida: true,title:"Admin - FerreSoft" } },
    { path: '/admin/product', component: Product, meta: { rutaProtegida: true,title:"Productos - FerreSoft" } },
    { path: '/admin/order', component: Order, meta: { rutaProtegida: true,title:"Ordenes - FerreSoft" } },
    { path: '/admin/user', component: User, meta: { rutaProtegida: true,title:"Usuarios - FerreSoft" } },
    { path: '/services', component: Services,meta: {title:"Servicios - FerreSoft" } }
]

const router = new VueRouter({
    mode: 'history',
    routes
})



export { router }