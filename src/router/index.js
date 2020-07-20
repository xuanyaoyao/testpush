import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import List from '@/pages/list'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login/login'
import test from '@/pages/test'

Vue.use(VueRouter)
Vue.use(VueResource)

export default new VueRouter({
  routes: [
    {
      path: '/list',
      component: List
    },
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/test',
      component: test
    }
  ]
})
