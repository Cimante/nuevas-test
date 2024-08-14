import { widgetType } from "@/types/widgetType";

export interface IWidget {
  id: string;
  widgetType: widgetType;
  text?: string;
  latitude?: number;
  longitude?: number;
  city?: string;
}
