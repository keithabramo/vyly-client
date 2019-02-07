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
            <MyEvents></MyEvents>
        </v-navigation-drawer>
      </v-content>
    </v-container>
</template>

<script>
import Events from '@/components/Events';
import MyEvents from '@/components/MyEvents';
import EventFilter from '@/components/EventFilter';

export default {
  components: {
    Events,
    MyEvents,
    EventFilter,
  },
  data: () => ({
    drawerLeft: true,
    drawerRight: true,
  }),
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
</style>
