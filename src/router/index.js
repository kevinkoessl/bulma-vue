import Vue from 'vue'
import VueRouter from 'vue-router'
import CMSView from "../components/CMSView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: CMSView
    },
    {
        path: '/:id',
        component: CMSView
    },
    {
        path: '/checkout',
        name: 'Checkout',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
