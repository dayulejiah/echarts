import Vue from 'vue'
import VueRouter from 'vue-router'
import MapPage from '../views/MapPage'
import ScreenPage from '../views/ScreenPage'
import MonthPage from '../views/MonthPage'
import CountryTopPage from '../views/CountryTopPage'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: ScreenPage
  },
  {
    path: '/mappage',
    component: MapPage
  },
  {
    path: '/screenpage',
    component: ScreenPage
  },
  {
    path: '/monthpage',
    component: MonthPage
  },
  {
    path: '/countrytop',
    component: CountryTopPage
  }

]

const router = new VueRouter({
  routes
})

export default router
