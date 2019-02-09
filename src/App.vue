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
import backgroundImage from '@/assets/landing-background.jpg';
// import backgroundImage from "@/assets/landing-background-2.jpg"
// import backgroundImage from "https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({
    backgroundImage,
  }),
};
</script>
