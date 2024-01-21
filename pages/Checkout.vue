<script setup lang="ts">

const lazyInfoStore = useLazyInfoStore()
await useAsyncData('todos', () => lazyInfoStore.fetchLazyInfo())
const asd = lazyInfoStore.lazyInfo?.info


</script>

<template>
  <h1>Checkout</h1>
  <div>{{asd}}</div>
</template>