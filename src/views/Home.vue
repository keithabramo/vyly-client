<template>
  <div>
    <h1>HOME</h1>
    <v-navigation-drawer
      class="secondary text--light-grey"
      app
      clipped
      right
      v-model="drawerRight"
    ></v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawerRight: true,
    };
  },
};
</script>
