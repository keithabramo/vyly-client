<template>
  <v-container>
    <v-content>
      <v-navigation-drawer
        app
        clipped
        v-model="drawerLeft"
        floating
        value="true"
        class="navigation-drawer-gradient-left"
      >
        <EventFilter></EventFilter>
      </v-navigation-drawer>

      <v-navigation-drawer
        app
        clipped
        width="450"
        v-model="drawerRight"
        floating
        value="true"
        class="navigation-drawer-gradient-right"
        right
        hide-overlay
      >
        <v-toolbar flat class="transparent">
          <span
            class="scale px-1"
            @click="showMyEvents = false"
            :class="!showMyEvents ?
                eventSectionActiveClass
                : eventSectionInActiveClass"
          >All Events</span>
          <span
            class="scale px-1"
            @click="showMyEvents = true"
            :class="showMyEvents ?
                eventSectionActiveClass
                : eventSectionInActiveClass"
          >My Events</span>

          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>sort</v-icon>
          </v-btn>
        </v-toolbar>

        <Events v-show="!showMyEvents"></Events>
        <MyEvents v-show="showMyEvents"></MyEvents>
      </v-navigation-drawer>
    </v-content>
  </v-container>
</template>

<script>
import Events from '@/components/Events';
import MyEvents from '@/components/MyEvents';
import EventFilter from '@/components/EventFilter';
import { mapActions } from 'vuex';

export default {
  components: {
    Events,
    MyEvents,
    EventFilter,
  },
  mounted() {
    this.getEvents();
  },
  data() {
    return {
      drawerLeft: true,
      drawerRight: true,
      showMyEvents: false,
      eventSectionActiveClass: ['primary--text', 'title'],
      eventSectionInActiveClass: ['grey--text text--darken-1'],
    };
  },
  methods: {
    ...mapActions('events', [
      'getEvents',
    ]),
  },
};
</script>

<style scoped>
.theme--dark.v-navigation-drawer.navigation-drawer-gradient-left {
  background: linear-gradient(
    to bottom left,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.5)
  );
}

.theme--dark.v-navigation-drawer.navigation-drawer-gradient-right {
  background: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 0.5)
  );
}

.scale {
  cursor: pointer;
  transition: all 0.3s;
}

.scale.title {
  transition: all 0.3s;
}
</style>
