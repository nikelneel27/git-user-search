import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About.vue'
import UserPage from '../components/UserPage.vue'
import UserData from '../pages/UserData.vue'
import SearchResult from '../pages/SearchResult.vue'
import Home from '../App.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/about-us',
            name: 'About',
            component: About
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/user/:username',
            name: 'UserPage',
            component: UserPage
        },
        {
            path: '/user/user-data',
            name: 'UserData',
            component: UserData
        },
        {
            path: '/search-result',
            name: 'SearchResult',
            component: SearchResult
        }
    ]
})