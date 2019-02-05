<template>
  <div>
    <h1>HOME</h1>
    <v-navigation-drawer
      class="secondary text--light-grey"
      app
      clipped
      right
      hide-overlay
      v-model="drawerRight"
    >
      <Events></Events>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Events from '@/components/Events';

export default {
  components: {
    Events
  },
  data() {
    return {
      drawerRight: true,
    };
  },
};
</script>
