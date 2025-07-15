<template>
    <header class="border-b border-gray-400 p-4 bg-white sticky top-0">
        <nav class="flex flex-row gap-3">
            <nuxt-link class="rounded-xl hover:bg-amber-300 p-3 text-2xl" to="/">Home</nuxt-link>
            <nuxt-link class="rounded-xl hover:bg-amber-300 p-3 text-2xl" to="/create-post">Create Post</nuxt-link>
            <button @click="coutP">Scroll Pos</button>
        </nav>
    </header>
    <slot></slot>
    <footer>
        &copy; 2025 Talent Get Go .Inc
    </footer>
</template>
<script setup lang="ts">
const coutP = () => {
    console.log(window.scrollY)
    window.scroll({top : 900})
}
</script>