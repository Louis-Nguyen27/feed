<script setup lang="ts">

const props = defineProps({
    startTime: {
        type: Number,
        default: 0,
    },
    endTime: {
        type: Number,
        default: 23,
    },
    intervalMinutes: {
        type: Number,
        default: 30,
    },
    MondayDate: {
        type: Date,
        default: () => {
            const today = new Date();
            const day = today.getDay();
            const diff = today.getDate() - day + (day === 0 ? -6 : 1);
            return new Date(today.setDate(diff));
        },
    },

});

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const numberOfDays = 7;

const numberOfMainRows = computed(() => {
    return props.endTime - props.startTime + 1; // 1 for header
});

const numberOfSubRows = computed(() => {
    return 60 / props.intervalMinutes;
});

const flag = ref(false);

</script>

<template>
    <div class="grid grid-cols-8">
        <div class="grid grid-rows-24">
            <div>

            </div>
            <div class="border border-gray-400 p-4" v-for="j in numberOfMainRows" :key="j">
                {{ j - 1 }}:00
            </div>
        </div>
        <div class="grid grid-rows-24" v-for="i in numberOfDays" :key="i">
            <div>
                {{ daysOfWeek[i - 1] }} {{ MondayDate.getDate() + i - 1 }}/{{ MondayDate.getMonth() + 1 }}
            </div>
            <div class="border border-gray-400" v-for="j in numberOfMainRows" :key="j">
                <div v-for="k in numberOfSubRows" :key="k" class="h-10 border-b border-gray-300  overflow-visible" :id="`calendar-cell-${i}-${j}-${k}`">
                    <week-calendar-content-card 
                        :rows-length="2"
                        :is-empty="k == 1"
                    />
                </div>
            </div>

        </div>
    </div>
</template>