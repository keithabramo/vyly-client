<template>
  <div>
    <h1>HOME</h1>
    <v-navigation-drawer
      app
      clipped
      right
      hide-overlay
      v-model="drawerRight"
      width="450"
    >
      
      <MyEvents></MyEvents>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Events from '@/components/Events';
import MyEvents from '@/components/MyEvents';

export default {
  components: {
    Events,
    MyEvents
  },
  data() {
    return {
      drawerRight: true,
    };
  },
};
</script>
