<template>
  <div>
    <nuxt-layout>
      <nuxt-loading-indicator :throttle="0" :height="10" />
      <keep-alive>
        <nuxt-page />
      </keep-alive>
      
    </nuxt-layout>
  </div>
</template>
<script setup lang="ts">

</script>
