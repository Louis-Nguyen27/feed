<template>
    <div class="border border-amber-200 shadow-md rounded-lg p-4">
        <div class="flex flex-row gap-2 items-center">
            <!-- <Icon name="ic:baseline-account-circle" :width="50" :height="50" /> -->
             <ProfileIcon />
            <h3 class="text-2xl font-semibold">{{ name }} - {{ id }}</h3>
        </div>
        <div class="text-xl text-gray-700 my-3">
            {{ content }}
        </div>
        <div>
            <button @click="liked = !liked">
                <HeartIcon v-if="!liked" />
                <HeartFillIcon v-else />
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    id: number
    name: string
    content: string
}>();
const liked = ref(false);
</script>