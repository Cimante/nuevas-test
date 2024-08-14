<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "@/store";
import { removeProperties } from "@/functions/removeProperties";

const store = useStore();
const route = useRoute();
const router = useRouter();

const id = ref(route.params.id);

const widgetOptions = ref(
  store.getDashboadWidgets.filter((widget) => widget.id === id.value)[0]
);

if (!widgetOptions.value) {
  router.back();
}

const tempOptions = reactive(
  removeProperties(widgetOptions.value, "id", "widgetType")
);

const restoreOptions = () => {
  Object.assign(
    tempOptions,
    removeProperties(widgetOptions.value, "id", "widgetType")
  );
};

const saveOptions = () => {
  store.updateWidget(widgetOptions.value["id"], tempOptions);
};

const labelDict = {
  city: "Город",
  text: "Текст",
  latitude: "Широта",
  longitude: "Долгота",
};
</script>

<template>
  <section class="Settings page-content">
    <button class="Settings__btn btn-back" @click="$router.back()">
      Назад
    </button>

    <h1 class="Settings__title">Настройки</h1>

    <form action="" class="Settings__form">
      <div
        class="Settings__input-group"
        v-for="(_, key, idx) in tempOptions"
        :key="idx"
      >
        <label class="input-group__label" :for="`${key}-${id}`">{{
          labelDict[key]
        }}</label>
        <input
          class="input-group__input"
          :id="`${key}-${id}`"
          :type="['latitude', 'longitude'].includes(key) ? 'number' : 'text'"
          v-model="tempOptions[key]"
        />
      </div>
    </form>

    <pre>{{ tempOptions }}</pre>

    <div class="Settings__controls">
      <button class="Settings__btn btn-apply" @click="saveOptions()">
        Сохранить
      </button>
      <button class="Settings__btn btn-revert" @click="restoreOptions()">
        Отменить изменения
      </button>
    </div>
  </section>
</template>

<style lang="scss">
.Settings {
  &__title {
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  &__form {
    display: inline-flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__btn {
    font-size: 0.875rem;
    cursor: pointer;
  }

  &__input-group {
    display: inline-flex;
    flex-direction: column;
  }

  .input-group {
    &__label {
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    &__input {
      padding: 0.5rem;
    }
  }

  &__controls {
    display: flex;
    gap: 0.5rem;
    margin-top: 4rem;
  }
}
</style>
