<script setup lang="ts">
import { onMounted, reactive, onBeforeUnmount } from "vue";
import { useStore } from "@/store";
import { fetchWeatherApi } from "openmeteo";

const store = useStore();

const props = defineProps<{
  id: string;
  city: string;
  latitude: number;
  longitude: number;
  applied: boolean;
}>();

const url = "https://api.open-meteo.com/v1/forecast";
const weatherParams = {
  latitude: props.latitude,
  longitude: props.longitude,
  current: ["temperature_2m", "rain", "snowfall", "wind_speed_10m"],
};

let weatherData: any = reactive({});

const refreshWeather = async () => {
  const responses = await fetchWeatherApi(url, weatherParams);
  const response = responses[0];
  const current = response.current()!;

  return {
    temperature2m: current.variables(0)!.value(),
    rain: current.variables(1)!.value(),
    snowfall: current.variables(2)!.value(),
    windSpeed10m: current.variables(3)!.value(),
  };
};

let refreshIntervalId: ReturnType<typeof setInterval>;
const applyInterval = () => {
  refreshIntervalId = setInterval(() => {
    refreshWeather();
  }, 1000 * 60 * 60);
};

if (props.applied) {
  onMounted(() => {
    refreshWeather().then((data) => {
      weatherData.value = data;
    });
    applyInterval();
  });

  onBeforeUnmount(() => {
    clearInterval(refreshIntervalId);
  });
}
</script>

<template>
  <section class="Widget Widget-weather">
    <h3 class="Widget__title">{{ props.applied ? props.city : "Погода" }}</h3>
    <section class="Widget__content" v-if="weatherData && props.applied">
      <p class="Widget__content-item">
        <b>Температура:</b> {{ weatherData.value?.temperature2m.toFixed(1) }}°C
      </p>
      <p class="Widget__content-item">
        <b>Скорость ветра:</b>
        {{ weatherData.value?.windSpeed10m.toFixed(1) }} км/ч
      </p>
      <p class="Widget__content-item" v-if="weatherData.value?.rain > 0">
        <b>Дождь:</b> {{ weatherData.value?.rain.toFixed(1) }} мм.
      </p>
      <p class="Widget__content-item" v-if="weatherData.value?.snowfall > 0">
        <b>Снег:</b> {{ weatherData.value?.snowfall.toFixed(1) }} см.
      </p>
    </section>
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
    margin-bottom: 0;
    font-weight: 600;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-top: 1rem;
  }

  &__content-item {
    margin: 0;
    font-size: 0.875rem;
  }
}
</style>
