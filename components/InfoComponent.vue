<script setup lang="ts">

const lazyInfoStore = useLazyInfoStore()
await useAsyncData('todos', () => lazyInfoStore.fetchLazyInfo())


</script>

<template>
  <div>THIS IS LAZY</div>
</template>