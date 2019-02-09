import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Landing from './views/Landing';
import Dashboard from './views/Dashboard';
import profile from './views/Profile';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/user/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/user',
      name: 'profile',
      component: profile,
    },
  ],
});
