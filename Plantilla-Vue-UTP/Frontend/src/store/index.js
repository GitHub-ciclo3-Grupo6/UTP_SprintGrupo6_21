import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { router } from '../routes'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: null
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload
        }
    },
    actions: {

        async login({ commit }, usuario) {
            try {
                /* const res = await fetch('https://app-ferre.herokuapp.com/api/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(usuario)
                }) */
                const res = await axios.post('/api/user/login', usuario)
                const usuarioDB = res.data
                console.log(usuarioDB.data.token)
                commit('setToken', usuarioDB.data.token)
                localStorage.setItem('token', usuarioDB.data.token)
                router.push("/admin")

            } catch (error) {
                console.log('error: ', error)
            }
        },

        obtenerToken({ commit }) {
            if (localStorage.getItem('token')) {
                console.log("se obtuvo el token")
                commit('setToken', localStorage.getItem('token'))
            } else {
                console.log(" no token")
                commit('setToken', null)
            }
        },

        cerrarSesion({ commit }) {
            localStorage.removeItem('token')
            commit('setToken', null)
            router.push("/login")
        }
    }
})

export default store
