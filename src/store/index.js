import Vue from 'vue'
import Vuex from 'vuex'
import UsersModule from './user-modules'

Vue.use(Vuex)

export default new Vuex.Store({
    // state: {
    //     username: null

    // },
    // mutations: {
    //     getUsername(state, username) {
    //         state.username = username;
    //     }
    // },
    // actions: {
    // },
    modules: {
        UsersModule
    }
})



