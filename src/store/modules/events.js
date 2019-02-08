export default {
  namespaced: true,
  state: {
    events: [],
  },
  getters: {
    myEvents(state, userId) {
      return state.events.find((event) => {
        return event.userIds.contains(userId);
      });
    },
    event(state, eventId) {
      return state.events.find((event) => {
        return event.userIds.contains(userId);
      });
    },
  },
  mutations: {

    /* Events */
    setEvents(state, events) {
      state.events = events;
    },
    addEvent(state, event) {
      state.events.push(event);
    },
    removeEvent(state, event) {
      const index = state.events.findIndex((e) => {
        return e.id === event.id;
      });

      state.events.splice(index, 1);
    },
    updateEvent(state, event) {
      const oldEvent = state.events.find((e) => {
        return e.id === event.id;
      });

      Object.assign(oldEvent, event);
    },

    /* Event Ratings */
    addRating(state, { eventId, rating }) {
      const oldEvent = state.events.find((e) => {
        return e.id === eventId;
      });

      oldEvent.ratings.push(rating);
    },
    removeRating(state, { eventId, rating }) {
      const event = state.events.find((e) => {
        return e.id === eventId;
      });

      const index = event.ratings.findIndex((r) => {
        return r.id === rating.id;
      });
      
      event.ratings.splice(index, 1);
    },
    updateRating(state, { eventId, rating }) {
      const event = state.events.find((e) => {
        return e.id === eventId;
      });

      const oldRating = event.ratings.find((r) => {
        return r.id === rating.id;
      });

      Object.assign(oldRating, rating);
    },
  },
  actions: {
    getEvents({ commit }, filter) {
      // Will eventually call API to get event
      // Find events from API with filter
      const events = [
        {
          id: 1,
          name: 'first event',
          description: 'event description',
          hostId: 4,
          type: 'Charity',
        },
        {
          id: 2,
          name: 'second event',
          description: 'event description 3',
          hostId: 4,
          type: 'Raffle',
        },
      ];

      commit('setEvents', events);
    },

    save({ commit }, event) {
      // Will eventually call API to save event

      commit('addEvent', event);
    },

    update({ commit }, event) {
      // Will eventually call API first

      commit('updateEvent', event);
    },

    delete({ commit }, event) {
      // Will eventually call API first

      commit('removeEvent', event);
    },

    saveRating({ commit }, payload) {
      // Will eventually call API first

      commit('addRating', payload);
    },

    updateRating({ commit }, payload) {
      // Will eventually call API first

      commit('updateRating', payload);
    },

    deleteRating({ commit }, payload) {
      // Will eventually call API first

      commit('removeRating', payload);
    },
  },
};
