import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import WebTerminal from '../views/WebTerminal.vue'
import SocialTrading from '../views/SocialTrading.vue'
import CRM from '../views/CRM.vue'
import Trader from '../views/Trader.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/web-terminal',
    name: 'WebTerminal',
    component: WebTerminal
  },
  {
    path: '/social-trading',
    name: 'SocialTrading',
    component: SocialTrading
  },
  {
    path: '/crm',
    name: 'CRM',
    component: CRM
  },
  {
    path: '/trader',
    name: 'Trader',
    component: Trader
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router