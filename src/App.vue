<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import Event from '@/components/Event';
import Events from '@/components/Events';
import MyEvents from '@/components/MyEvents';
import Filter from '@/components/Filter';

export default {
  name: 'App',
  components: {
    Navbar,
    Event,
    Events,
    MyEvents,
    Filter,
  },
  data() {
    return {

    };
  },
};
</script>
