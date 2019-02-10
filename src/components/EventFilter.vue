<template>
  <div>
    <v-container fluid grid-list-md class="py-0">
      <v-layout row wrap>
        <v-form>
          <v-subheader class="mt-2 px-0 grey--text text--darken-1">FILTER</v-subheader>

          <v-text-field class="ma-0" v-model="address" label="Address"></v-text-field>

          <v-layout>
            <v-flex xs12 md6>
              <v-menu v-model="startDateMenu" :close-on-content-click="false" lazy>
                <v-text-field
                  slot="activator"
                  v-model="startDate"
                  label="Start Date"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="startDate" @input="startDateMenu = false"></v-date-picker>
              </v-menu>
            </v-flex>

            <v-flex xs12 md6>
              <v-menu v-model="endDateMenu" :close-on-content-click="false" lazy>
                <v-text-field
                  slot="activator"
                  v-model="endDate"
                  label="End Date"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="endDate" @input="endDateMenu = false"></v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>

          <!-- Would like to see these horizontal if possible -->
          <v-subheader class="mt-2 px-0 grey--text text--darken-1">EVENT TIMING</v-subheader>
          <v-layout row wrap>
            <v-flex xs12>
              <v-switch
                v-for="(eventTiming, index) in allEventTimings"
                :key="index"
                v-model="eventTimings[index]"
                :label="eventTiming.label"
                :color="eventTiming.color"
                class="ma-0"
                hide-details
              ></v-switch>
            </v-flex>
          </v-layout>

          <!-- Will need to do a for loop here and group in a grid for layout -->
          <v-subheader class="mt-2 px-0 grey--text text--darken-1">EVENT TYPE</v-subheader>

          <v-checkbox
            v-for="(eventType, index) in allEventTypes"
            :key="index"
            v-model="eventTypes[index]"
            :label="eventType.label"
            class="ma-0"
            hide-details
          ></v-checkbox>

          <!-- Would like to see these horizontal if possible -->
          <v-subheader class="mt-2 px-0 grey--text text--darken-1">EVENT VISIBILITY</v-subheader>
          <v-layout row wrap>
            <v-flex xs12>
              <v-switch
                v-for="(eventVisibility, index) in allEventVisibilities"
                :key="index"
                v-model="eventVisibilities[index]"
                :label="eventVisibility.label"
                class="ma-0"
                hide-details
              ></v-switch>
            </v-flex>
          </v-layout>

          <v-subheader class="mt-3 grey--text text--darken-1">HOSTS</v-subheader>
        </v-form>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { EventTimings, EventVisibilities, EventTypes } from '@/store/constants';

export default {
  data: () => ({
    address: '',
    startDate: '',
    endDate: '',
    eventTimings: [],
    eventTypes: [],
    eventVisibilities: [],
    hosts: [],

    startDateMenu: false,
    endDateMenu: false,
  }),
  computed: {
    allEventTypes() {
      return EventTypes;
    },
    allEventTimings() {
      return EventTimings;
    },
    allEventVisibilities() {
      return EventVisibilities;
    },
  },
};
</script>

<style>
</style>
