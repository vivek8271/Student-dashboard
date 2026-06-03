"use client";

import { useState } from "react";
import { Home, BookOpen, BarChart3, Settings } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Stats",
    icon: BarChart3,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function MobileNav() {
  const [active, setActive] = useState("Home");

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-3xl border border-white/10 bg-black/40 p-2 backdrop-blur-2xl md:hidden">
      {navItems.map((item) => {
        const Icon = item.icon;

        const isActive =
          active === item.name;

        return (
          <button
            key={item.name}
            onClick={() =>
              setActive(item.name)
            }
            className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl text-zinc-400">
            {/* Active Background */}
            {isActive && (
              <motion.div
                layoutId="mobile-nav"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="absolute inset-0 rounded-2xl bg-white/10"/>
            )}

            {/* Icon */}
            <Icon
              className={`
                relative z-10 h-5 w-5 transition-colors
                ${isActive
                  ? "text-white"
                  : "text-zinc-500"
                }
              `}
            />
          </button>
        );
      })}
    </nav>
  );
}