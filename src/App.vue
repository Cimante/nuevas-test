<script setup lang="ts">
import { useStore } from "@/store";
import Sidebar from "@/components/Sidebar.vue";
import { widgetType } from "./types/widget";

const store = useStore();

const onDashboardDrop = (e: DragEvent): void => {
  const { target } = e;
  if (target && (target as HTMLElement).className !== "Sidebar") {
    store.addWidget(e.dataTransfer?.getData("widget_type") as widgetType);
  }
};
</script>

<template>
  <main
    class="container"
    @drop="onDashboardDrop($event)"
    @dragenter.prevent
    @dragover.prevent
  >
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
