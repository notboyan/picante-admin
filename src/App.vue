<script setup>
import Header from './header/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="layout">
    <Header />
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  padding: 2rem;
  flex: 1;
}
</style>