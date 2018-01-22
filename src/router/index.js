import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/ShowHide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowHide',
      component: HelloWorld
    }
  ]
})
