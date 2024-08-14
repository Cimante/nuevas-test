import { defineStore } from "pinia";
import { toRaw } from "vue";
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
    addWidget(widget: widgetType) {
      this.dashboardWidgets.push({
        id: Date.now().toString(),
        widgetType: widget,
      } as IWidget);
    },
    removeWidget(id: string) {
      console.log(toRaw(this.dashboardWidgets));

      this.dashboardWidgets = this.dashboardWidgets.filter(
        (widget) => widget.id !== id
      );

      console.log(toRaw(this.dashboardWidgets));
    },
  },
  getters: {
    getDashboadWidgets: (state) => state.dashboardWidgets,
  },
});
