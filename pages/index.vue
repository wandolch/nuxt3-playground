<script setup>

import TodoList from "~/components/TodoList.vue";
const show = ref(false)

</script>

<template>
  <div>
    <TodoList/>
    <LazyInfoComponent v-if="show" />
    <button v-if="!show" @click="show = true">SHOW LAZY COMPONENT</button>


    <div style="margin-top: 100px"><NuxtLink noPrefetch to="/checkout">Go To Checkout</NuxtLink></div>
  </div>
</template>
