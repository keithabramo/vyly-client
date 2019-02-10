import Event1Image from '@/assets/eventImages/Event1.jpg';
import Event2Image from '@/assets/eventImages/Event2.jpg';
import Event3Image from '@/assets/eventImages/Event3.jpg';
import Event4Image from '@/assets/eventImages/Event4.jpg';
import { EventTimings, EventTypes } from '@/store/constants';

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
      // eslint-disable-next-line no-param-reassign
      state.events = events;
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
          name: 'Keith\'s First Event',
          description: `Eiusmod eu proident duis cillum. Ad veniam dolor Lorem velit pariatur nostrud cillum ipsum dolor magna consectetur. Magna reprehenderit cillum laborum aliqua irure aliquip enim. Fugiat ullamco cillum pariatur consequat est elit commodo non. Dolor aliquip id eu occaecat sint exercitation consequat ut. Dolore commodo do aliquip dolor quis deserunt aliquip labore amet aliquip. Minim pariatur sunt labore nostrud labore fugiat enim amet deserunt enim ea incididunt.
                        Sit fugiat ea officia proident officia ad id. Ad dolor duis eiusmod sunt excepteur id mollit ut nulla cillum culpa consequat sit. Enim aute duis laboris ex adipisicing. Do labore ad sit amet voluptate in est deserunt incididunt. Ut labore ipsum nulla laborum non magna ullamco fugiat esse mollit fugiat dolor magna. Aliqua nisi sit Lorem ipsum aute minim est ea sit est adipisicing ex.`,
          hostId: 3,
          type: EventTypes.CHARITY.name,
          date: '10/13/2019',
          startTime: '9:45 am',
          endTime: '12:45 pm',
          imageURL: Event1Image,
          timing: EventTimings.PAST.name,
          rsvp: 53,
          interested: 100,
          host: {
            id: 4,
            name: 'Keith Abramo',
            averageRating: 3.8, // will need to eventually get average of their all events
            totalRatings: 45, // will need to eventually get average of their all events
            imageURL: Event1Image,
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
          name: 'Becca\'s 29th Birthday!',
          description: `Eiusmod eu proident duis cillum. Ad veniam dolor Lorem velit pariatur nostrud cillum ipsum dolor magna consectetur. Magna reprehenderit cillum laborum aliqua irure aliquip enim. Fugiat ullamco cillum pariatur consequat est elit commodo non. Dolor aliquip id eu occaecat sint exercitation consequat ut. Dolore commodo do aliquip dolor quis deserunt aliquip labore amet aliquip. Minim pariatur sunt labore nostrud labore fugiat enim amet deserunt enim ea incididunt.
                        Sit fugiat ea officia proident officia ad id. Ad dolor duis eiusmod sunt excepteur id mollit ut nulla cillum culpa consequat sit. Enim aute duis laboris ex adipisicing. Do labore ad sit amet voluptate in est deserunt incididunt. Ut labore ipsum nulla laborum non magna ullamco fugiat esse mollit fugiat dolor magna. Aliqua nisi sit Lorem ipsum aute minim est ea sit est adipisicing ex.`,
          hostId: 4,
          type: EventTypes.RAFFLE.name,
          date: '2/14/2019',
          startTime: '12:00 am',
          endTime: '12:00 am',
          imageURL: Event2Image,
          timing: EventTimings.PRESENT.name,
          rsvp: 530,
          interested: 2000,
          host: {
            id: 4,
            name: 'Keith Abramo',
            averageRating: 4.8, // will need to eventually get average of their all events
            totalRatings: 45, // will need to eventually get average of their all events
            imageURL: Event2Image,
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
          description: `Eiusmod eu proident duis cillum. Ad veniam dolor Lorem velit pariatur nostrud cillum ipsum dolor magna consectetur. Magna reprehenderit cillum laborum aliqua irure aliquip enim. Fugiat ullamco cillum pariatur consequat est elit commodo non. Dolor aliquip id eu occaecat sint exercitation consequat ut. Dolore commodo do aliquip dolor quis deserunt aliquip labore amet aliquip. Minim pariatur sunt labore nostrud labore fugiat enim amet deserunt enim ea incididunt.
                        Sit fugiat ea officia proident officia ad id. Ad dolor duis eiusmod sunt excepteur id mollit ut nulla cillum culpa consequat sit. Enim aute duis laboris ex adipisicing. Do labore ad sit amet voluptate in est deserunt incididunt. Ut labore ipsum nulla laborum non magna ullamco fugiat esse mollit fugiat dolor magna. Aliqua nisi sit Lorem ipsum aute minim est ea sit est adipisicing ex.`,
          hostId: 4,
          type: EventTypes.PARTY.name,
          date: '10/13/2019',
          startTime: '9:45 am',
          endTime: '12:45 pm',
          imageURL: Event3Image,
          timing: EventTimings.FUTURE.name,
          rsvp: 530,
          interested: 2000,
          host: {
            id: 4,
            name: 'Keith Abramo',
            averageRating: 1.8, // will need to eventually get average of their all events
            totalRatings: 45, // will need to eventually get average of their all events
            imageURL: Event3Image,
          },
          ratings: [
            { score: 3.5, comment: 'this was rad' },
            { score: 5, comment: 'this was rad' },
            { score: 1, comment: 'this was rad' },
            { score: 2, comment: 'this was rad' },
          ],
        },
        {
          id: 4,
          name: 'second event',
          description: `Eiusmod eu proident duis cillum. Ad veniam dolor Lorem velit pariatur nostrud cillum ipsum dolor magna consectetur. Magna reprehenderit cillum laborum aliqua irure aliquip enim. Fugiat ullamco cillum pariatur consequat est elit commodo non. Dolor aliquip id eu occaecat sint exercitation consequat ut. Dolore commodo do aliquip dolor quis deserunt aliquip labore amet aliquip. Minim pariatur sunt labore nostrud labore fugiat enim amet deserunt enim ea incididunt.
                        Sit fugiat ea officia proident officia ad id. Ad dolor duis eiusmod sunt excepteur id mollit ut nulla cillum culpa consequat sit. Enim aute duis laboris ex adipisicing. Do labore ad sit amet voluptate in est deserunt incididunt. Ut labore ipsum nulla laborum non magna ullamco fugiat esse mollit fugiat dolor magna. Aliqua nisi sit Lorem ipsum aute minim est ea sit est adipisicing ex.`,
          hostId: 4,
          type: EventTypes.FESTIVAL.name,
          date: '10/13/2019',
          startTime: '9:45 am',
          endTime: '12:45 pm',
          imageURL: Event4Image,
          timing: EventTimings.FUTURE.name,
          rsvp: 530,
          interested: 2000,
          host: {
            id: 4,
            name: 'Keith Abramo',
            averageRating: 3.8, // will need to eventually get average of their all events
            totalRatings: 45, // will need to eventually get average of their all events
            imageURL: Event4Image,
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
