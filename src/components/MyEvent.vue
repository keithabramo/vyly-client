<template>
  <v-timeline-item small :color="tempColor">
    <span
      slot="opposite"
      :class="`headline font-weight-bold ${tempColor}--text`"
      v-text="event.date"
    ></span>
    <Event :event="event"></Event>
    <!-- <div class="py-3">
      <h2 :class="`headline font-weight-light mb-3 ${tempColor}--text`">{{ event.name }}</h2>
      <div>
        Lorem ipsum dolor sit amet, no nam oblique veritus.
        Commune scaevola imperdiet nec ut, sed euismod convenire principes at.
        Est et nobis iisque percipit, an vim zril disputando voluptatibus,
        vix an salutandi sententiae.
      </div>
    </div> -->
  </v-timeline-item>
</template>

<script>
import Event from '@/components/Event';

export default {
  components: {
    Event
  },
  props: ['event'],
  data() {
    return {
      tempColor: 'green',
    };
  },
};
</script>

<style>
</style>
