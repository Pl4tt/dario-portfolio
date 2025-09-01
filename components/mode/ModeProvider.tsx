"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Mode = "explore" | "steady";
type Ctx = { mode: Mode; setMode: (m: Mode) => void; toggle: () => void };
const ModeCtx = createContext<Ctx | null>(null);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("explore");

  // hydrate from localStorage
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("site-mode")) as Mode | null;
    if (saved === "explore" || saved === "steady") setMode(saved);
  }, []);

  // reflect to CSS + localStorage
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    // explore: cyan accent, teal trust  •  steady: swap them
    if (mode === "explore") {
      root.style.setProperty("--accent", "182 90% 56%");
      root.style.setProperty("--trust",  "170 66% 46%");
    } else {
      root.style.setProperty("--accent", "170 66% 46%");
      root.style.setProperty("--trust",  "182 90% 56%");
    }
    root.setAttribute("data-mode", mode);
    localStorage.setItem("site-mode", mode);
  }, [mode]);

  const value = useMemo<Ctx>(() => ({ mode, setMode, toggle: () => setMode(m => m === "explore" ? "steady" : "explore") }), [mode]);
  return <ModeCtx.Provider value={value}>{children}</ModeCtx.Provider>;
}

export function useMode() {
  const ctx = useContext(ModeCtx);
  if (!ctx) throw new Error("useMode must be used within <ModeProvider/>");
  return ctx;
}