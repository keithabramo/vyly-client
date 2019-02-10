<template>
  <v-container px-1 fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs-12>
        <v-timeline class="pa-0">
          <MyEvent v-for="(event, i) in myEvents" :key="i" :event="event"></MyEvent>
        </v-timeline>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MyEvent from '@/components/MyEvent';
import { mapGetters } from 'vuex';

export default {
  components: {
    MyEvent,
  },
  computed: {
    ...mapGetters('events', ['myEvents']),
  },
};
</script>

<style lang="scss" scoped>
$timeline-margin: 30px;

.v-timeline-item__body {
  max-width: calc(50% - $timeline-margin);
  margin-right: 30px;
}

.v-timeline-item__opposite {
  max-width: calc(50% - $timeline-margin);
  margin-left: 30px;
}
</style>
