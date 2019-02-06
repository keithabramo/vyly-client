<template>
    <v-timeline-item small :color="event.color">
        <span
            slot="opposite"
            :class="`headline font-weight-bold ${event.color}--text`"
            v-text="event.year"
        ></span>
        <div class="py-3">
            <h2 :class="`headline font-weight-light mb-3 ${event.color}--text`">Lorem ipsum</h2>
            <div>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</div>
        </div>
    </v-timeline-item>
</template>

<script>
export default {
  data: () => ({
  }),
  props: {
      event: {
        color: String,
        year: Number,
      },
  },
};
</script>

<style>
</style>
