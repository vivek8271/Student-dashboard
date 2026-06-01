"use client";

import { AlertTriangle, RefreshCcw } from "lucide-react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: Props) {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#050505]
        p-6
        text-white
      "
    >
      <section
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-red-500/20
          bg-white/[0.03]
          p-8
          text-center
          backdrop-blur-xl
        "
      >
        {/* Icon */}
        <div
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-red-500/10
          "
        >
          <AlertTriangle
            className="
              h-10
              w-10
              text-red-400
            "
          />
        </div>

        {/* Title */}
        <h1
          className="
            mt-6
            text-2xl
            font-bold
          "
        >
          Something went wrong
        </h1>

        {/* Message */}
        <p
          className="
            mt-3
            text-sm
            leading-relaxed
            text-zinc-400
          "
        >
          We couldn't load your dashboard data.
          Please try again.
        </p>

        {/* Error Debug */}
        <div
          className="
            mt-6
            rounded-2xl
            border
            border-white/10
            bg-black/30
            p-4
            text-left
            text-xs
            text-red-300
          "
        >
          {error.message}
        </div>

        {/* Retry Button */}
        <button
          onClick={() => reset()}
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-gradient-to-r
            from-violet-500
            to-cyan-500
            px-5
            py-3
            font-medium
            text-white
            transition-transform
            hover:scale-[1.02]
          "
        >
          <RefreshCcw className="h-4 w-4" />

          Try Again
        </button>
      </section>
    </main>
  );
}