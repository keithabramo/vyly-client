<template>
  <v-hover>
    <v-card light ripple slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
      <v-img :aspect-ratio="16/9" :src="event.imageURL"></v-img>
      <v-card-title>
        <div>
          <span class="headline">{{ event.name }}</span>
          <div class="grey--text text--darken-1">{{ event.host.name }}</div>
          <div class="d-flex">
            <v-rating
              :value="event.host.averageRating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="ml-2 grey--text text--darken-2">
              <span>{{ event.host.averageRating }}</span>
              <span>({{ event.host.totalRatings }})</span>
            </div>
          </div>
        </div>
        <!-- <v-spacer></v-spacer>
        <v-btn icon class="mr-0">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn> -->
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: ["event"]
};
</script>

<style>
</style>
