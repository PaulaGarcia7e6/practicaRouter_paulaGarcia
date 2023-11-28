<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './views/TheNavigation.vue';
</script>

<template>
  <div class="body">
    <header>
      <TheNavigation></TheNavigation>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.body {
  width: 90%;
  margin: 0 auto;
}

</style>
