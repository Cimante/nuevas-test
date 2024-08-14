<script setup lang="ts">
import { useStore } from "@/store";
import draggable from "vuedraggable";
import WidgetText from "@/components/widgets/widgetText.vue";

const store = useStore();
</script>

<template>
  <section class="Dashboard">
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
              :text="`${element.text}`"
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
  padding: 1rem 2rem;
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
