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

  function handleMouseMove(
    e: React.MouseEvent<HTMLElement>
  ) {
    const rect =
      e.currentTarget.getBoundingClientRect();

    e.currentTarget.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );

    e.currentTarget.style.setProperty(
      "--mouse-y",
      `${e.clientY - rect.top}px`
    );
  }

  return (
    <motion.article
      variants={{ fadeUp }}
      onMouseMove={handleMouseMove}
      whileHover={{
        scale: 1.02,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={clsx(
        `
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-xl
      `,
        className
      )}
    >
      {/* Mouse Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: `
            radial-gradient(
              250px circle at var(--mouse-x) var(--mouse-y),
              rgba(168, 85, 247, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Border Glow */}
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