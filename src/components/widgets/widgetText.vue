<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <section class="Widget Widget-text">
    <h3 class="Widget__title">Текстовый виджет</h3>
    <p class="Widget__content">{{ props.text }}</p>
  </section>
</template>

<style lang="scss" scoped>
.Widget {
  &__title {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  &__content {
    margin: 0;
  }
}
</style>
