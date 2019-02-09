<template>
    <div>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-timeline>
                    <MyEvent v-for="(event, i) in myEvents" :key="i" :event="event" >
                    </MyEvent>
                </v-timeline>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import MyEvent from '@/components/MyEvent';
import { mapGetters } from 'vuex';

export default {
  components: {
    MyEvent,
  },
  computed: {
    ...mapGetters('events', [
      'myEvents',
    ]),
  },
};
</script>

<style>
</style>
