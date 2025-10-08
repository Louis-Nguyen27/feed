<script setup lang="ts">
import { useFeedService } from '~/composables/useFeedService';

const feedService = useFeedService();
feedService.getGeneralFeed().then(res => {
    console.log(res);
});
</script>

<template>
    <div>
        Hello General Feed
    </div>
</template>