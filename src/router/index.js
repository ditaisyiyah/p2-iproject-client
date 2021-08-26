import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import NewsPage from '../views/NewsPage.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/register', name: 'RegisterPage', component: RegisterPage },
  { path: '/news', name: 'NewsPage', component: NewsPage },
  { path: '*', name: 'NotFound', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  const token = localStorage.access_token;
  const authPage = to.name == 'LoginPage' || to.name == 'RegisterPage';
  if(token && authPage ){
    next('/');
  }else if(!token && !authPage){
    next('/login');
  }else{
    next();
  }
})

export default router