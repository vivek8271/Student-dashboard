"use client";

import { motion } from "framer-motion";

type Props = {
  value: number;
};

export default function ProgressBar({
  value,
}: Props) {
  return (
    <div
      className="
        h-2
        overflow-hidden
        rounded-full
        bg-white/10
      "
    >
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: `${value}%`,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="
          h-full
          rounded-full
          bg-gradient-to-r
          from-cyan-500
          to-violet-500
        "
      />
    </div>
  );
}