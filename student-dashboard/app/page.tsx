import DashboardLayout from "@/components/layout/dashboard-layout";
import Sidebar from "@/components/layout/sidebar";
import BentoGrid from "@/components/layout/bento-grid";
import HeroCard from "@/components/cards/hero-card";
import ActivityCard from "@/components/cards/activity-card";


export default function HomePage() {
  return (
    <DashboardLayout>
      <Sidebar />
      <main className="flex-1 p-6">
        
        <BentoGrid>
            <HeroCard />
            <ActivityCard />
        </BentoGrid>
      </main>
    </DashboardLayout>
  );
}