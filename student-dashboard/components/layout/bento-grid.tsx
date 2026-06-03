"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../animations/stagger-container";

type Props = {
  children: React.ReactNode;
};

export default function BentoGrid({
  children,
}: Props) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid auto-rows-[180px] gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {children}
    </motion.section>
  );
}