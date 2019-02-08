import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
import events from './modules/events';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    users,
    events,
  },
});
