import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HostDashboard from './views/HostDashboard.vue';
import profile from './views/Profile.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user/dashboard/:userId',
      name: 'dashboard',
      component: HostDashboard,
    },
    {
      path: '/user/:userId',
      name: 'profile',
      component: profile,
    },
  ],
});
