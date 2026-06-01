import DashboardLayout from "@/components/layout/dashboard-layout";
import Sidebar from "@/components/layout/sidebar";
import BentoGrid from "@/components/layout/bento-grid";

import SkeletonCard from "@/components/cards/skeleton-card";

export default function Loading() {
  return (
    <DashboardLayout>
      <Sidebar />

      <main className="flex-1 p-6">
        <BentoGrid>

          {/* Hero Skeleton */}
          <div
            className="
              md:col-span-2
              xl:col-span-3
              row-span-2
              animate-pulse
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
            "
          />

          {/* Activity Skeleton */}
          <div
            className="
              row-span-2
              animate-pulse
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
            "
          />

          {/* Course Skeletons */}
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />

        </BentoGrid>
      </main>
    </DashboardLayout>
  );
}