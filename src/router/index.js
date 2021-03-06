import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from "../views/Test.vue"
import HomeWork from "../views/HomeWork.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:Home
  },
  {
    path:'/test',
    component:Test
  },
  {
    path:"/home",
    component:HomeWork
  }
]


const router = new VueRouter({
  routes
})

export default router
