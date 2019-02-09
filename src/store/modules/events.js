import Event1Image from '@/assets/eventImages/Event1.jpg';
import Event2Image from '@/assets/eventImages/Event2.jpg';
import Event3Image from '@/assets/eventImages/Event3.jpg';
import Event4Image from '@/assets/eventImages/Event4.jpg';


export default {
  namespaced: true,
  state: {
    events: [],
  },
  getters: {
    myEvents(state, userId) {
      // return state.events.find(event => event.userIds.contains(userId));
      return state.events;
    },
  },
  mutations: {

    /* Events */
    setEvents(state, events) {
      console.log(events);

      // eslint-disable-next-line no-param-reassign
      state.events = events;

      console.log(state.events);
    },
    addEvent(state, event) {
      state.events.push(event);
    },
    removeEvent(state, event) {
      const index = state.events.findIndex(e => e.id === event.id);

      state.events.splice(index, 1);
    },
    updateEvent(state, event) {
      const oldEvent = state.events.find(e => e.id === event.id);

      Object.assign(oldEvent, event);
    },

    /* Event Ratings */
    addRating(state, { eventId, rating }) {
      const oldEvent = state.events.find(e => e.id === eventId);

      oldEvent.ratings.push(rating);
    },
    removeRating(state, { eventId, rating }) {
      const event = state.events.find(e => e.id === eventId);

      const index = event.ratings.findIndex(r => r.id === rating.id);

      event.ratings.splice(index, 1);
    },
    updateRating(state, { eventId, rating }) {
      const event = state.events.find(e => e.id === eventId);

      const oldRating = event.ratings.find(r => r.id === rating.id);

      Object.assign(oldRating, rating);
    },
  },
  actions: {
    getEvents({ commit }) {
      // Will eventually call API to get event
      // Find events from API with filter
      const events = [
        {
          id: 1,
          name: 'first event',
          description: 'event description',
          hostId: 3,
          type: 'Charity',
          date: '10/13/2019',
          imageURL: Event1Image,
          host: {
            id: 4,
            name: 'Keith Abramo',
            averageRating: 3.8, // will need to eventually get average of their all events
            totalRatings: 45, // will need to eventually get average of their all events
          },
          ratings: [
            { score: 3.5, comment: 'this was rad' },
            { score: 5, comment: 'this was rad' },
            { score: 4, comment: 'this was rad' },
            { score: 2, comment: 'this was rad' },
          ],
        },
        {
          id: 2,
          name: 'second event',
          description: 'event description 3',
          hostId: 4,
          type: 'Raffle',
          date: '10/13/2019',
          imageURL: Event2Image,
          host: {
            id: 4,
            name: 'Keith Abramo',
            averageRating: 3.8, // will need to eventually get average of their all events
            totalRatings: 45, // will need to eventually get average of their all events
          },
          ratings: [
            { score: 3.5, comment: 'this was rad' },
            { score: 5, comment: 'this was rad' },
            { score: 4, comment: 'this was rad' },
            { score: 2, comment: 'this was rad' },
          ],
        },
        {
          id: 3,
          name: 'second event',
          description: 'event description 3',
          hostId: 4,
          type: 'Party',
          date: '10/13/2019',
          imageURL: Event3Image,
          host: {
            id: 4,
            name: 'Keith Abramo',
            averageRating: 3.8, // will need to eventually get average of their all events
            totalRatings: 45, // will need to eventually get average of their all events
          },
          ratings: [
            { score: 3.5, comment: 'this was rad' },
            { score: 5, comment: 'this was rad' },
            { score: 4, comment: 'this was rad' },
            { score: 2, comment: 'this was rad' },
          ],
        },
        {
          id: 4,
          name: 'second event',
          description: 'event description 3',
          hostId: 4,
          type: 'Festival',
          date: '10/13/2019',
          imageURL: Event4Image,
          host: {
            id: 4,
            name: 'Keith Abramo',
            averageRating: 3.8, // will need to eventually get average of their all events
            totalRatings: 45, // will need to eventually get average of their all events
          },
          ratings: [
            { score: 3.5, comment: 'this was rad' },
            { score: 5, comment: 'this was rad' },
            { score: 4, comment: 'this was rad' },
            { score: 2, comment: 'this was rad' },
          ],
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
