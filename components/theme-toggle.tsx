"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 gap-2">
        <button className="bg-secondary text-foreground py-2 rounded-md text-sm">
          light
        </button>
        <button className="bg-secondary text-foreground py-2 rounded-md text-sm">
          dark
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      <button
        onClick={() => setTheme("light")}
        className={`bg-secondary hover:bg-accent text-foreground py-2 rounded-md transition text-sm ${
          theme === "light" ? "border border-foreground" : ""
        }`}
      >
        light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`bg-secondary hover:bg-accent text-foreground py-2 rounded-md transition text-sm ${
          theme === "dark" ? "border border-foreground" : ""
        }`}
      >
        dark
      </button>
    </div>
  );
}
