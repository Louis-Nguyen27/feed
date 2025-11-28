<script setup lang="ts">
const d = new Date();
</script>
<template>
    <div>Locale string: {{ d.toLocaleString() }}</div>
    <div>UTC: {{ d.toUTCString() }}</div>
    <WeekCalendar />
</template>
