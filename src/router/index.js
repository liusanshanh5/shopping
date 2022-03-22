import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import('@/views/home/Home.vue')
const category = () => import('@/views/category/Category.vue')
const shopCart = () => import('@/views/cart/ShopCart.vue')
const profile = () => import('@/views/profile/Profile.vue')
const detail = () => import('@/views/detail/Detail.vue')
const routes =[
  {
    path: '/',
    redirect: 'home'
  },
  {
    path:'/home',
    name:'home',
    component:home
  },
  {
    path:'/category',
    name:'category',
    component:category
  },
  {
    path:'/shopCart',
    name:'shopCart',
    component:shopCart
  },
  {
    path:'/profile',
    name:'profile',
    component:profile
  },
  {
    // path:'/detail/:iid', // 使用params跳转路由要用动态路由
    path:'/detail',  // 使用query
    name:'detail',
    component:detail 
  }
]
export default new Router({
  routes,
  mode:'history'
})

