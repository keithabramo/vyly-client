<template>
    <div>
        <v-toolbar flat>
            <v-toolbar-title>Upcoming Events</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>sort</v-icon>
            </v-btn>
        </v-toolbar>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex v-for="event in events" :key="event.id" xs6>
                    <Event :event="event"></Event>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Event from '@/components/Event';

export default {
  components: {
    Event,
  },
  data() {
    return {
      events: [
        {
          id: 1,
          name: 'first event',
        },
        {
          id: 2,
          name: 'first event',
        },
        {
          id: 3,
          name: 'first event',
        },
        {
          id: 4,
          name: 'first event',
        },
      ],
    };
  },
};
</script>

<style>
</style>
