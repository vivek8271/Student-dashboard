import DashboardLayout from "@/components/layout/dashboard-layout";
import Sidebar from "@/components/layout/sidebar";
import BentoGrid from "@/components/layout/bento-grid";

import SkeletonCard from "@/components/cards/skeleton-card";

export default function Loading() {
  return (
    <DashboardLayout>
      <Sidebar />

      <main className="flex-1 p-6 pb-24 md:ml-20 lg:ml-64">
        <BentoGrid>

          {/* Hero Skeleton */}
          <div
            className="
                      relative
                      overflow-hidden
                      md:col-span-2
                      xl:col-span-3
                      row-span-2
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.03]
                    "
          >

            <div
              className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-white/10
                        to-transparent
                      "
              style={{
                animation:
                  "shimmer 2s linear infinite",
              }}
            />

          </div>


          {/* Activity Skeleton */}

          <div
            className="
                      relative
                      overflow-hidden
                      row-span-2
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.03]
                    "
          >

            <div
              className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-white/10
                        to-transparent
                    "
              style={{
                animation:
                  "shimmer 2s linear infinite",
              }}
            />
          </div>


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