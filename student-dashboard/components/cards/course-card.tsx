"use client";

import GlowCard from "./glow-card";
import ProgressBar from "../ui/progress-bar";

import { iconMap } from "../../lib/icon-map";

import type { Course } from "../../types/course";

type Props = {
  course: Course;
  index?: number;
};

export default function CourseCard({
  course,
}: Props) {
  const Icon =
    iconMap[course.icon_name] || iconMap.BookOpen;

  return (
    <GlowCard>
      <div className="flex h-full flex-col">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-white/5
          "
          >
            <Icon className="h-6 w-6 text-cyan-400" />
          </div>

          <span className="text-sm text-zinc-400">
            {course.progress}%
          </span>
        </div>

        {/* Title */}
        <div className="mt-6">
          <h3
            className="
            text-lg
            font-semibold
            leading-snug
          "
          >
            {course.title}
          </h3>
        </div>

        {/* Bottom */}
        <div className="mt-auto pt-6">
          <ProgressBar value={course.progress} />
        </div>
      </div>
    </GlowCard>
  );
}