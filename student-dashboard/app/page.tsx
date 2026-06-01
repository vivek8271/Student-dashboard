import DashboardLayout from "@/components/layout/dashboard-layout";
import Sidebar from "@/components/layout/sidebar";
import BentoGrid from "@/components/layout/bento-grid";
import HeroCard from "@/components/cards/hero-card";
import ActivityCard from "@/components/cards/activity-card";
// import GlowCard from "@/components/cards/glow-card";
import CourseCard from "@/components/cards/course-card";
import type { Course } from "@/components/types/course";
import { getCourses } from "@/components/lib/supabase/queries";

export default async function HomePage() {
  const courses = await getCourses();
  // const courses: Course[] = [
  //   {
  //     id: "1",
  //     title: "Advanced React Patterns",
  //     progress: 75,
  //     icon_name: "Code2",
  //     created_at: "",
  //   },
  //   {
  //     id: "2",
  //     title: "Database Design",
  //     progress: 60,
  //     icon_name: "Database",
  //     created_at: "",
  //   },
  //   {
  //     id: "3",
  //     title: "AI Fundamentals",
  //     progress: 90,
  //     icon_name: "BrainCircuit",
  //     created_at: "",
  //   },
  // ];

  return (
    <DashboardLayout>
      <Sidebar />
      <main className="flex-1 p-6">

        <BentoGrid>
          <HeroCard />
          <ActivityCard />

          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
            />
          ))}
        </BentoGrid>
      </main>
    </DashboardLayout>
  );
}
