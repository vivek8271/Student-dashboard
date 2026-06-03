export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: keyof typeof import("../lib/icon-map").iconMap;
  created_at: string;
}