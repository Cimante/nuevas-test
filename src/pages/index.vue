<script setup lang="ts">
import { useStore } from "@/store";
import WidgetText from "@/components/widgets/widgetText.vue";

const store = useStore();
</script>

<template>
  <section class="Dashboard">
    <h1 class="Dashboard__title">Интерактивный дашборд</h1>
    <section class="Dashboard__widgets">
      <template v-for="(_, idx) in store.dashboardWidgets" :key="idx">
        <WidgetText :text="`Текстовый виджет ${idx + 1}`" />
      </template>
    </section>
  </section>
</template>

<style lang="scss">
.Dashboard {
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
    gap: 2rem;
  }
}
</style>
