import Vue from 'vue'
import Router from 'vue-router'

import home from '@/pages/home'
import viewDevice from '@/pages/view-device'
import viewBrand from '@/pages/view-brand'
import settings from '@/pages/settings'
import about from '@/pages/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/view-device',
      name: 'view-device',
      component: viewDevice
    },
    {
      path: '/view-brand',
      name: 'view-brand',
      component: viewBrand
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
