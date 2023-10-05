<script setup lang="ts">
import Cart from "./components/Cart.vue";
</script>

<template>
  <div class="main">
    <Cart></Cart>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  main {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
