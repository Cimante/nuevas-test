<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <section class="Widget Widget-text">
    <p>{{ props.text }}</p>
  </section>
</template>
