"use client";
import React, { useState, useEffect, createContext, useContext } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("light");
  const handleThemeChange = () => {
    // (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) checks if the user's system is in dark mode or not
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      // Commentd out the setMode because useEffect was triggering handleThemeChange which repeatedly changed light->dark and dark->light mode causing an infinte loop

      setMode("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    handleThemeChange();
    console.log("mode is  ", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
