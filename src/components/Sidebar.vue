<script setup lang="ts">
import { useStore } from "@/store";
import WidgetText from "@/components/widgets/widgetText.vue";
import WidgetWeather from "@/components/widgets/widgetWeather.vue";
import draggable from "vuedraggable";

const store = useStore();

const cloneWidget = (widget: any) => {
  const cloneWidget = {
    ...widget,
    id: Date.now().toString(),
  };
  return cloneWidget;
};
</script>

<template>
  <aside class="Sidebar">
    <h2 class="Sidebar__title">Виджеты</h2>
    <draggable
      class="Sidebar__list"
      v-model="store.availableWidgets"
      :group="{ name: 'widgets', pull: 'clone', put: false }"
      :clone="cloneWidget"
      item-key="id"
    >
      <template #item="{ element }">
        <div class="list-group-item">
          <WidgetText
            v-if="element.widgetType === 'text'"
            :id="element.id"
            :text="`${element.text}`"
            draggable="true"
          />
          <WidgetWeather
            v-if="element.widgetType === 'weather'"
            :id="element.id"
            :latitude="element.latitude"
            :longitude="element.longitude"
            :applied="false"
            :city="element.city"
            draggable="true"
          />
        </div>
      </template>
    </draggable>
  </aside>
</template>

<style lang="scss">
.Sidebar {
  display: flex;
  flex-direction: column;
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
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;
    padding: 0;
    list-style: none;
  }

  &__item {
    margin-bottom: 1rem;
  }
}
</style>
