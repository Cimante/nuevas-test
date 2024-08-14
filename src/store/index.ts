import { defineStore } from "pinia";
import { storageGet, storageSet } from "@/functions/storage";
import { widgetType } from "@/types/widgetType";
import { IWidget } from "@/interfaces/IWidget";

export const useStore = defineStore("store", {
  state: () => ({
    availableWidgets: [
      {
        id: "0",
        text: "Контент виджета",
        widgetType: "text" as widgetType,
      },
      {
        id: "1",
        city: "Москва",
        latitude: 55.4521,
        longitude: 37.3704,
        widgetType: "weather" as widgetType,
      },
    ],
    dashboardWidgets: [] as IWidget[],
  }),
  actions: {
    removeWidget(id: string) {
      this.dashboardWidgets = this.dashboardWidgets.filter(
        (widget: IWidget) => widget.id !== id
      );
      this.saveDashboard();
    },
    updateWidget(id: string, options: any) {
      const target = this.dashboardWidgets.find((w: IWidget) => w.id === id);
      if (target) {
        Object.assign(target, options);
        this.saveDashboard();
      }
    },
    saveDashboard() {
      storageSet(this.dashboardWidgets, "dashboardWidgets");
    },

    loadDashboard() {
      this.dashboardWidgets = storageGet<IWidget[]>("dashboardWidgets");
    },
  },
  getters: {
    getDashboadWidgets: (state) => state.dashboardWidgets,
  },
});
