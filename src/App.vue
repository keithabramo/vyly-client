<template>
    <v-app dark>
        <v-img
            height="100vh"
            :src="backgroundImage"
            gradient="to top, rgba(0,0,0,.8), rgba(0,0,0,.8)"
        >
          <Navbar></Navbar>
          <router-view/>
        </v-img>
    </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({
    backgroundImage: require('@/assets/landing-background.jpg'),
    // backgroundImage: require("@/assets/landing-background-2.jpg")
    // backgroundImage: "https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"
  }),
};
</script>
