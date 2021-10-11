import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './routes'

//Axios para llamadas
import axios from 'axios'
/* axios.defaults.baseURL = "https://app-ferre.herokuapp.com/api" */

axios.defaults.baseURL = 'http://localhost:3001/api';
//Obtener el token de localstorage
store._actions.obtenerToken[0]();

router.beforeEach((to, from, next) => {

  const rutaEsProtegida = to.matched.some(item => item.meta.rutaProtegida)
  if (rutaEsProtegida && store.state.token === null) next('/login')
  else next();

})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


/* Se puede exportar pasa usar sus caracteristicas
const vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export { vm } */