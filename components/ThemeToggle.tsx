"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      aria-label="Toggle Theme"
      className="p-2 rounded"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="text-yellow-300" />
      ) : (
        <Moon className="text-gray-800" />
      )}
    </button>
  );
}
