<script setup lang="ts">
import { useStore } from "@/store";
import WidgetText from "@/components/widgets/widgetText.vue";

const store = useStore();

const startDrag = (e: DragEvent, item: string): void => {
  console.log("DRAG", item);
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("widget_type", item);
  }
};
</script>

<template>
  <aside class="Sidebar">
    <h2 class="Sidebar__title">Виджеты</h2>
    <ul class="Sidebar__list">
      <li
        class="Sidebar__item"
        v-for="(widget, idx) in store.availableWidgets"
        :key="idx"
      >
        <WidgetText
          v-if="widget === 'text'"
          text="Текстовый виджет"
          draggable="true"
          @dragstart="startDrag($event, widget)"
        />
      </li>
    </ul>
  </aside>
</template>

<style lang="scss">
.Sidebar {
  height: 100vh;
  background-color: $black;
  color: $white;
  padding: 1rem;

  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  &__list {
    padding: 0;
    list-style: none;
  }

  &__item {
    margin-bottom: 1rem;
  }
}
</style>
