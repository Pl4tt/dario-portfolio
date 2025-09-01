"use client";
import { useMode } from "@/components/mode/ModeProvider";

export default function ModeToggle() {
  const { mode, toggle } = useMode();
  return (
    <button onClick={toggle} className="btn-ghost text-xs" aria-label="Toggle site mode">
      Mode: {mode === "explore" ? "Explore" : "Steady"}
    </button>
  );
}