<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <main class="container">
    <Sidebar />
    <router-view />
  </main>
</template>

<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 20rem 1fr;
  overflow: hidden;
}
</style>
