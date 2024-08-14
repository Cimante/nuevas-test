<script setup lang="ts">
import { useStore } from "@/store";
// import { fetchWeatherApi } from "openmeteo";

const store = useStore();

const props = defineProps<{
  id: string;
  latitude: number;
  longitude: number;
}>();

// const weatherParams = {
//   latitude: props.latitude,
//   longitude: props.longitude,
//   current: [
//     "temperature_2m",
//     "relative_humidity_2m",
//     "rain",
//     "snowfall",
//     "wind_speed_10m",
//     "wind_direction_10m",
//   ],
// };

// const url = "https://api.open-meteo.com/v1/forecast";
// const responses = await fetchWeatherApi(url, weatherParams);
// const response = responses[0];
// const current = response.current()!;
</script>

<template>
  <section class="Widget Widget-weather">
    <h3 class="Widget__title">Виджет погоды</h3>
    <pre class="Widget__content">{{ props }}</pre>
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
.Widget {
  &__title {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
}
</style>
