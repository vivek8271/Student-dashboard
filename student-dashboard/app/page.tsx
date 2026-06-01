import DashboardLayout from "@/components/layout/dashboard-layout";
import Sidebar from "@/components/layout/sidebar";
import BentoGrid from "@/components/layout/bento-grid";
import HeroCard from "@/components/cards/hero-card";
import ActivityCard from "@/components/cards/activity-card";
// import GlowCard from "@/components/cards/glow-card";
import CourseCard from "@/components/cards/course-card";
import type { Course } from "@/types/course";
import { getCourses } from "@/lib/supabase/queries";
import MobileNav from "@/components/layout/mobile-nav";
import { getActivity } from "@/lib/supabase/queries";

export default async function HomePage() {
  const courses = await getCourses();
  const profile = await getActivity();

  return (
    <DashboardLayout>
      <Sidebar />
      <main className="flex-1 p-6">

        <BentoGrid>
          {/* <HeroCard /> */}
          <HeroCard profile={ profile } />

          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index = {index}
            />
          ))}
        </BentoGrid>
      </main>
      <MobileNav />
    </DashboardLayout>
  );
}
