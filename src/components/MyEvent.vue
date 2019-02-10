<template>
  <v-timeline-item :color="color" small>
    <v-card slot="opposite" :class="`transparent ${color}--text`" flat>
      <v-layout align-center justify-center>
        <strong class="display-1 font-weight-regular mr-2">9</strong>
        <div class="column text-sm-left">
          <div class="title font-weight-light">Tuesday</div>
          <div class="text-uppercase font-weight-light">February 2015</div>
        </div>
      </v-layout>
    </v-card>
    <Event :event="event"></Event>
  </v-timeline-item>
</template>

<script>
import Event from '@/components/Event';
import { EventTimings } from '@/store/constants';

export default {
  components: {
    Event,
  },
  props: ['event'],
  computed: {
    color() {
      const eventTiming = Object.values(EventTimings).find(e => e.name === this.event.timing)
      return eventTiming.color;
    },
  },
};
</script>

<style lang="scss" >
$timeline-margin: 25px;

.v-timeline-item__body, .v-timeline-item__opposite {
  max-width: calc(50% - #{$timeline-margin}) !important;
}

.v-timeline-item:nth-child(even):not(.v-timeline-item--left) .v-timeline-item__opposite,
.v-timeline-item--right .v-timeline-item__opposite {
  margin-right: ($timeline-margin * 2) !important;
}

.v-timeline-item:nth-child(odd):not(.v-timeline-item--left) .v-timeline-item__opposite,
.v-timeline-item--right .v-timeline-item__opposite {
  margin-left: ($timeline-margin * 2) !important;
}
</style>
