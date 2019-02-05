<template>
    <div>
        <Event v-for="event in events" :key="event.id" class="ma-1"></Event>
    </div>
</template>

<script>
import Event from '@/components/Event';

export default {
    components: {
        Event
    },
    data() {
        return {
            events: [
                {
                    id: 1,
                    name: 'first event'
                },
                {
                    id: 2,
                    name: 'first event'
                },
                {
                    id: 3,
                    name: 'first event'
                },
                {
                    id: 4,
                    name: 'first event'
                },
            ]
        }
    }
};
</script>

<style>

</style>
