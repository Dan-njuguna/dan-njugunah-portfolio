"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    return <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
        <Sun size={24} className="absolute transition-all rotate-180 scale-0 dark:scale-100" />
        <Moon size={24} className="transition-all rotate-180 scale-100 dark:-rotate-90 dark:scale-0" />
    </button>
};