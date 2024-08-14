<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useStore } from "@/store";
import Sidebar from "@/components/Sidebar.vue";

const store = useStore();

onBeforeMount(() => {
  store.loadDashboard();
});
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
