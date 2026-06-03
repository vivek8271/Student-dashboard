export default function SkeletonCard() {
  return (
    <article
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      {/* Shimmer Effect */}
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"/>

      <div className="relative z-10">
        
        {/* Icon */}
        <div
          className="h-12 w-12 rounded-2xl bg-white/10"/>

        {/* Title */}
        <div className="mt-6 space-y-3">
          <div
            className="h-4 w-3/4 rounded-full bg-white/10"/>

          <div
            className="h-4 w-1/2 rounded-full bg-white/10"/>
        </div>

        {/* Progress */}
        <div
          className="mt-10 h-2 rounded-full bg-white/10"/>

      </div>


    </article>
  );
}