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
                v-model="eventTiming.future"
                label="Future"
                color="info"
                class="ma-0 pa-0"
                hide-details
              ></v-switch>
              <v-switch
                v-model="eventTiming.present"
                label="Happening Now"
                color="primary"
                class="ma-0"
                hide-details
              ></v-switch>
              <v-switch
                v-model="eventTiming.past"
                label="Past"
                color="warning"
                class="ma-0"
                hide-details
              ></v-switch>
            </v-flex>
          </v-layout>

          <!-- Will need to do a for loop here and group in a grid for layout -->
          <v-subheader class="mt-2 px-0 grey--text text--darken-1">EVENT TYPE</v-subheader>
          <v-checkbox v-model="eventTypes" label="Charity" class="ma-0" hide-details></v-checkbox>
          <v-checkbox v-model="eventTypes" label="Festival" class="ma-0" hide-details></v-checkbox>
          <v-checkbox v-model="eventTypes" label="Party" class="ma-0" hide-details></v-checkbox>
          <v-checkbox v-model="eventTypes" label="Raffle" class="ma-0" hide-details></v-checkbox>

          <!-- Would like to see these horizontal if possible -->
          <v-subheader class="mt-2 px-0 grey--text text--darken-1">EVENT VISIBILITY</v-subheader>
          <v-layout row wrap>
            <v-flex xs12>
              <v-switch
                v-model="eventVisibility.open"
                label="Public"
                class="ma-0"
                hide-details>
              </v-switch>
              <v-switch
                v-model="eventVisibility.private"
                label="Private"
                class="ma-0"
                hide-details>
              </v-switch>
            </v-flex>
          </v-layout>

          <v-subheader class="mt-3 grey--text text--darken-1">HOSTS</v-subheader>
        </v-form>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    address: '',
    startDate: '',
    endDate: '',
    eventTiming: {
      past: false,
      present: true,
      future: true,
    },
    eventTypes: [],
    eventVisibility: {
      open: true,
      closed: true,
    },
    hosts: [],

    startDateMenu: false,
    endDateMenu: false,
  }),
};
</script>

<style>
</style>
