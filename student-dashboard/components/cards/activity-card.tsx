import GlowCard from "./glow-card";

export default function ActivityCard() {
  return (
    <GlowCard className="row-span-2">
      <div className="flex h-full flex-col">
        <h2 className="text-lg font-semibold">
          Activity
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Weekly progress
        </p>

        {/* Fake Graph */}
        <div className="mt-auto flex items-end gap-2">
          {[40, 70, 55, 90, 60, 80, 65].map(
            (height, index) => (
              <div
                key={index}
                style={{
                  height: `${height}%`,
                }}
                className="
                  flex-1
                  rounded-full
                  bg-gradient-to-t
                  from-cyan-500
                  to-violet-500
                  opacity-80
                "
              />
            )
          )}
        </div>
      </div>
    </GlowCard>
  );
}