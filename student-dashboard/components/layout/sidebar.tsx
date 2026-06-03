"use client";

import { Home, BookOpen, BarChart3, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const navItems = [
  {
    name: "Dashboard",
    icon: Home,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside
      className="fixed left-0 top-0 z-20 hidden md:flex h-screen w-20 lg:w-64 flex-col border-r border-white/10 bg-[#0a0a0a] px-3 py-6
      "
    >
      
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-3">
        <div
          className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500
          "
        />

        <h1 className="hidden text-xl font-bold lg:block">
          Next-Gen
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive = active === item.name;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className="relative flex items-center gap-3 overflow-hidden rounded-2xl px-3 py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {/* Active Background */}
              {isActive && (
                <motion.div
                  layoutId="sidebar-highlight"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="absolute inset-0 rounded-2xl bg-white/10"
                />
              )}

              {/* Icon */}
              <Icon className="relative z-10 h-5 w-5 shrink-0" />

              {/* Text */}
              <span
                className={clsx(
                  "relative z-10 hidden lg:block",
                  isActive && "text-white"
                )}
              >
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom User Card */}
      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="mt-auto rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur"
      >
        <div className="flex items-center gap-3">
          <div
            className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500"
          />

          <div className="hidden lg:block">
            <p className="font-medium text-white">
              Vivek
            </p>

            <p className="text-sm text-zinc-400">
              Student
            </p>
          </div>
        </div>
      </motion.div>
    </aside>
  );
}