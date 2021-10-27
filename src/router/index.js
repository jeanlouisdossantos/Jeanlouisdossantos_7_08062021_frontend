import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import signup from '../views/signup.vue'
import Createpost from '../views/Createpost.vue'
import store from '../store'

const routes = [
  {
    
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter : (to,from,next)=>{ 
      if(store.getters.isLogged) {
        
        next()}
      else {
        alert("vous n'etes pas connecter")
        next({name :"Login"})}
    
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/createpost',
    name: 'createpost',
    component: Createpost,
    beforeEnter : (to,from,next)=>{ 
      if(store.getters.isLogged) {
        
        next()}
      else {
      
        alert("vous n'avez pas acces ici")
        next({name :"Login"})}
    
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
