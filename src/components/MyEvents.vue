<template>
    <div>
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-timeline>
                    <MyEvent v-for="(event, i) in events" :key="i" :event="event" >
                    </MyEvent>
                </v-timeline>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import MyEvent from '@/components/MyEvent';

export default {
  components: {
    MyEvent,
  },
  data: () => ({
    events: [
      {
        color: 'cyan',
        year: '1960',
      },
      {
        color: 'green',
        year: '1970',
      },
      {
        color: 'pink',
        year: '1980',
      },
      {
        color: 'amber',
        year: '1990',
      },
      {
        color: 'orange',
        year: '2000',
      },
    ],
  }),
};
</script>

<style>
</style>
