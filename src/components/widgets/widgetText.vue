<script setup lang="ts">
import { useStore } from "@/store";

const store = useStore();

const props = defineProps<{
  id: string;
  text: string;
}>();
</script>

<template>
  <section class="Widget Widget-text">
    <h3 class="Widget__title">Текстовый виджет</h3>
    <p class="Widget__content">{{ props.text }}</p>
    <section class="Widget__controls">
      <router-link
        :to="`/settings/${props.id}`"
        class="Widget__btn btn-settings"
      >
        Настройки
      </router-link>
      <button
        class="Widget__btn btn-delete"
        @click="store.removeWidget(props.id)"
      >
        Удалить
      </button>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins";

.Widget {
  &__title {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
}
</style>
