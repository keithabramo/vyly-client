<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <router-view class="container"/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import MyEvents from '@/components/MyEvents';
import Filter from '@/components/Filter';

export default {
  name: 'App',
  components: {
    Navbar,
    MyEvents,
    Filter,
  },
  data() {
    return {

    };
  },
};
</script>
