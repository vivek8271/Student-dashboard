export interface Course {
  id: string;
  // `title` is the human-readable course name used throughout the app
  title: string;
  progress: number;
  icon_name: keyof typeof import("../lib/icon-map").iconMap;
  created_at: string;
}