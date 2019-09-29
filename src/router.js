import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component:()=>import('./views/PageDetail')
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import('./views/Login')
    },
    {
      path: '/about',
      name: 'about',
      component:()=>import('./views/About')
    },
    {
      path: '/register',
      name: 'register',
      component:()=>import('./views/Register1')
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component:()=>import('./views/LoginPage')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
