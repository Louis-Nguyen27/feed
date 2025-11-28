<script setup lang="ts">
const d = new Date();
const inputDate = ref();
</script>
<template>
    <input type="date" v-model="inputDate" />
    <button>
        {{ inputDate }}
    </button>
    <div>Date string: {{ inputDate.toLocaleString() }}</div>
    <div>Locale string: {{ d.toLocaleString() }}</div>
    <div>UTC: {{ d.toUTCString() }}</div>
    <WeekCalendar />
</template>
