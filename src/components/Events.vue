<template>
    <div>
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
import { mapState } from 'vuex';

export default {
  components: {
    Event,
  },
  computed: {
    ...mapState('events', [
      'events',
    ]),
  },
};
</script>

<style>
</style>
