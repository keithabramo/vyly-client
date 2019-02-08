export default {
  namespaced: true,
  state: {
    users: [],
  },
  getters: {
    user(state, userId) {
      return state.users.find((user) => {
        return user.id === userId;
      });
    },
  },
  mutations: {

    /* Users */
    setUsers(state, users) {
      state.users = users;
    },
    addUser(state, user) {
      state.users.push(user);
    },
    removeUser(state, user) {
      const index = state.users.findIndex((e) => {
        return e.id === user.id;
      });

      state.users.splice(index, 1);
    },
    updateUser(state, user) {
      const oldUser = state.users.find((e) => {
        return e.id === user.id;
      });

      Object.assign(oldUser, user);
    },
  },
  actions: {
    getUsers({ commit }, filter) {
      // Will userually call API to get user
      // Find users from API with filter
      const users = [
        {
          id: 4,
          name: 'first user',
        },
        {
          id: 5,
          name: 'second user',
        },
      ];

      commit('setUsers', users);
    },

    save({ commit }, user) {
      // Will userually call API to save user

      commit('addUser', user);
    },

    update({ commit }, user) {
      // Will userually call API first

      commit('updateUser', user);
    },

    delete({ commit }, user) {
      // Will userually call API first

      commit('removeUser', user);
    },
  },
};
