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

        <div class="pa-0">
          <div class="grey--text text--darken-2 body-2">{{ event.date }}</div>
          <div class="grey--text text--darken-2 caption">{{ event.startTime }} - {{ event.endTime }}</div>
        </div>
      </v-card-title>
      <v-divider class="mt-2 mb-1"></v-divider>

      <v-card-text class="pa-0 grey--text text--darken-2 caption">
        <v-container class="py-2 px-2">
          <v-layout row>
            <span class="pr-1 text-no-wrap">
              <v-icon small>star</v-icon>
              {{ event.rsvp }} going
            </span>
            <span class="text-no-wrap">
              <v-icon small>star_half</v-icon>
              {{ event.interested }} interested
            </span>
          </v-layout>
          <v-layout row>
            <p class="pt-2 pb-0 mx-1 mb-2">{{ truncatedDescription }}</p>
          </v-layout>
          <v-layout row>
            <v-spacer></v-spacer>
            <HostSnippet :host="event.host"></HostSnippet>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
import HostSnippet from "@/components/HostSnippet";
import { EventTimings } from "@/store/constants";

export default {
  components: {
    HostSnippet
  },
  props: ["event"],
  computed: {
    truncatedDescription() {
      const truncateAt = 75;

      return this.event.description.length > truncateAt ? this.event.description.substring(0,truncateAt) + '...' : this.event.description;
    },
    eventClass() {
      let eventClass = "";

      switch (this.event.timing) {
        case EventTimings.PAST.name:
          eventClass = "past-event";
          break;
        case EventTimings.PRESENT.name:
          eventClass = "present-event";
          break;
        case EventTimings.FUTURE.name:
          eventClass = "future-event";
          break;
      }
      return eventClass;
    }
  }
};
</script>

<style lang="scss" scoped>
.subheading {
  width: 100%;
}
.v-divider {
  border-color: var(--v-grey-base) !important;
}
.event-card {
  border-left: solid 5px;

  &.past-event {
    border-color: var(--v-warning-base) !important;

    // .v-divider {
    //   border-color: var(--v-warning-base) !important;
    // }
  }
  &.present-event {
    border-color: var(--v-primary-base) !important;

    // .v-divider {
    //   border-color: var(--v-primary-base) !important;
    // }
  }
  &.future-event {
    border-color: var(--v-info-base) !important;

    // .v-divider {
    //   border-color: var(--v-info-base) !important;
    // }
  }
}
</style>
