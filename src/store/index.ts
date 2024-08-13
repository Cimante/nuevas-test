import { defineStore } from "pinia";
import { widgetType } from "@/types/widget";
import { IWidget } from "@/interfaces/IWidget";

export const useStore = defineStore("store", {
  state: () => ({
    availableWidgets: ["text", "weather"],
    dashboardWidgets: [] as IWidget[],
  }),
  actions: {
    addWidget(widget: widgetType) {
      this.dashboardWidgets.push({
        id: Date.now().toString(),
        widgetType: widget,
      });
    },
  },
});
