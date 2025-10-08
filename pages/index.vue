<template>
    <main>
        <section class="flex flex-col p-4 gap-4">
            <template v-for="feed in feeds" :key="feed.id">
                <PostCard :id="feed.id" :name="feed.name" :content="feed.content" />
            </template>
            <div ref="skeleton">
                <PostSkeleton />
            </div>
        </section>
    </main>
</template>
<script setup lang="ts">
definePageMeta({
    scrollToTop: false
})
import PostCard from '~/components/PostCard.vue';
import type { Post } from '~/types/post';

const feeds = useState<Post[]>('feeds', () => [])
const getNewFeeds = async () => {
    const newFeeds: Post[] = await $fetch('/api/newfeed');
    console.log(newFeeds)
    feeds.value = [...feeds.value, ...newFeeds];
}

//await callOnce(getNewFeeds)

const skeleton = useTemplateRef('skeleton');
const { isIntersecting } = useInViewport(skeleton);

watch(isIntersecting, async (value, oldValue) => {
    if(value && !oldValue) await getNewFeeds();
});

const sp = useState('sp', () => 0)

onBeforeRouteLeave(() => {
    sp.value = window.scrollY
    console.log(sp.value)
})

onActivated(() => {
    console.log('hi')
    window.scroll({top: sp.value})
})


</script>