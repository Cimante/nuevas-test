<script setup lang="ts">
import { useStore } from "@/store";
import draggable from "vuedraggable";
import WidgetText from "@/components/widgets/widgetText.vue";
import WidgetWeather from "@/components/widgets/widgetWeather.vue";

const store = useStore();
</script>

<template>
  <section class="Dashboard page-content">
    <h1 class="Dashboard__title">Интерактивный дашборд</h1>
    <section class="Dashboard__widgets">
      <draggable
        tag="div"
        class="Dashboard__widgets"
        v-model="store.dashboardWidgets"
        :group="{ name: 'widgets', pull: 'clone' }"
        @change="store.saveDashboard"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="Dashboard__widget-item">
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
              :applied="true"
              :city="element.city"
              draggable="true"
            />
          </div>
        </template>
      </draggable>
    </section>
  </section>
</template>

<style lang="scss">
.Dashboard {
  display: flex;
  flex-direction: column;
  overflow: auto;

  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  &__widgets {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    height: 100%;
  }
}
</style>
