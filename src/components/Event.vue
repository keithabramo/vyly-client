<template>
  <v-hover>
    <v-card
      light
      ripple
      slot-scope="{ hover }"
      :class="['event-card', eventClass, `elevation-${hover ? 12 : 2} `]"
    >
      <v-img :aspect-ratio="16/9" :src="event.imageURL"></v-img>
      <v-card-title class="px-2 pt-1 pb-0">
        <div
          class="grey--text text--darken-2 subheading text-truncate font-weight-bold"
        >{{ event.name }}</div>
        <HostSnippet :host="event.host"></HostSnippet>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="px-2 pt-0">
        <div class="gray--text text--darken-1">{{ event.date }}</div>
        <div class="gray--text text--darken-1 caption">{{ event.startTime }} - {{ event.endTime }}</div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import HostSnippet from "@/components/HostSnippet";
import EventTimings from "@/store/eventTimings";

const eventTimingToColor = {
  [EventTimings.past]: "warning",
  [EventTimings.present]: "primary",
  [EventTimings.future]: "info"
};

export default {
  components: {
    HostSnippet
  },
  props: ["event"],
  computed: {
    eventTextColor() {
      return eventTimingToColor[this.event.timing];
    },
    eventClass() {
      return this.event.timing + "-event";
    }
  }
};
</script>

<style lang="scss" scoped>
.subheading {
  width: 100%;
}
.event-card {
  border-left: solid 5px;

  &.past-event {
    border-color: var(--v-warning-base) !important;
  }
  &.present-event {
    border-color: var(--v-primary-base) !important;
  }
  &.future-event {
    border-color: var(--v-info-base) !important;
  }
}
</style>
