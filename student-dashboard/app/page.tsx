import DashboardLayout from "@/components/layout/dashboard-layout";
import Sidebar from "@/components/layout/sidebar";
import BentoGrid from "@/components/layout/bento-grid";
import HeroCard from "@/components/cards/hero-card";
import ActivityCard from "@/components/cards/activity-card";
import CourseCard from "@/components/cards/course-card";
import MobileNav from "@/components/layout/mobile-nav";

import {
  getActivity,
  getCourses,
  getProfile,
} from "@/lib/supabase/queries";

export default async function HomePage() {

  const courses = await getCourses();
  const profile = (await getProfile()) ?? { name: "Student", streak: 0 };
  const rawActivity = await getActivity();
  const activity = Array.isArray(rawActivity)
    ? rawActivity.map((a) => ({
      day: a.day ?? a.label ?? "",
      hours: Number(a.hours ?? a.hours_spent ?? 0),
    }))
    : [];

  return (
    <DashboardLayout>
      <Sidebar />

      <main className="
        flex-1
        p-6
        pb-24
        md:ml-20
        lg:ml-64
      ">
        <BentoGrid>

          <HeroCard profile={profile} />
          <ActivityCard data={activity} />
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </BentoGrid>
      </main>

      <MobileNav />
    </DashboardLayout>
  );
}