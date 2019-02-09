<template>
  <div>
    <div>
      <v-avatar size="14px">
        <img :src="host.imageURL">
      </v-avatar>
      <span class="ml-1 gray--text text--darken-1 caption">{{ host.name }}</span>
    </div>
    <div class="caption">
      <v-rating
        :value="host.averageRating"
        color="amber"
        dense
        half-increments
        readonly
        size="12"
        class="left"
      ></v-rating>
      <span class="ml-1 grey--text text--darken-1">
        {{ host.averageRating }}
        ({{ host.totalRatings }})
      </span>
    </div>
  </div>
</template>

<script>

export default {
  props: ['host'],
};
</script>

<style>
</style>
