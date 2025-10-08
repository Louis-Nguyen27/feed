<script setup lang="ts">
const feedService = useFeedService();

const { data } = await feedService.getGeneralFeed();

console.log(data)

</script>

<template>
    <div>
        <div v-for="item in data" :key="item.id">
            <div>{{ item.id }}</div>
            <div>{{ item.name }}</div>
            <div>{{ item.content }}</div>
            <hr />
        </div>
    </div>
    <div>
        Hello General Feed
    </div>
</template>