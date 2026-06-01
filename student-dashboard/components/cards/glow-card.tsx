"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { fadeUp } from "../animations/fade-up";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlowCard({
  children,
  className,
}: Props) {
  return (
    <motion.article
      variants={{fadeUp}}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      // className={clsx(
      //   `
      //   relative
      //   overflow-hidden
      //   rounded-3xl
      //   border
      //   border-white/10
      //   bg-white/[0.03]
      //   p-6
      //   backdrop-blur-xl

      //   before:absolute
      //   before:inset-0
      //   before:bg-gradient-to-br
      //   before:from-violet-500/5
      //   before:via-transparent
      //   before:to-cyan-500/5
      //   before:opacity-0
      //   before:transition-opacity
      //   hover:before:opacity-100
      // `,
      //   className
      // )}
    >
      {/* Gradient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          border
          border-white/5
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.article>
  );
}