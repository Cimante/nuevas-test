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
        widgetType: "weather" as widgetType,
      },
    ] as IWidget[],
    dashboardWidgets: [] as IWidget[],
  }),
  actions: {
    removeWidget(id: string) {
      this.dashboardWidgets = this.dashboardWidgets.filter(
        (widget) => widget.id !== id
      );
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
