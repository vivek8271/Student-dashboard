import GlowCard from "./glow-card";
import { Flame } from "lucide-react";

type Props = {
  profile: {
    name: string;
    streak: number;
  };
};

export default function HeroCard({ profile }: Props) {
  return (
    <GlowCard
      className="md:col-span-2 xl:col-span-3 row-span-2">
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-zinc-400">
            Welcome back,
          </p>

          <h1
            className="mt-2 text-4xl font-bold tracking-tight lg:text-6xl">
            {profile.name} 👋
          </h1>
        </div>

        <div
          className="flex items-center gap-3 self-start rounded-2xl border border-orange-500/20 bg-orange-500/10 px-4 py-2">
          <Flame className="h-5 w-5 text-orange-400" />

          <span className="text-sm text-orange-200">
            {profile.streak} Day Learning Streak
          </span>
        </div>
      </div>
    </GlowCard>
  );
}