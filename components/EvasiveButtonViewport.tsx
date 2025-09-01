"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useMode } from "@/components/mode/ModeProvider";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;   // styles for the button
  maxEvades?: number;   // how many jumps before it stops running
  zIndex?: number;      // layer priority when fixed
};

export default function EvasiveButtonViewport({
  href,
  children,
  className = "btn-ghost",
  maxEvades = 8,
  zIndex = 60,
}: Props) {
  const { mode } = useMode();

  // accessibility flags
  const [enabled, setEnabled] = useState(true);          // disabled on touch / reduced motion
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia?.("(pointer: coarse)").matches;
    if (reduce || coarse) setEnabled(false);
  }, []);

  // lifecycle
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  // layout + behavior state
  const [activated, setActivated] = useState(false);      // false = in-flow link; true = fixed runner
  const [evades, setEvades] = useState(0);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // measure initial size so the wrapper can keep layout stable after activation
  useLayoutEffect(() => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setSize({ w: r.width, h: r.height });
  }, []);

  // keep the fixed button inside the viewport on resize/scroll
  useEffect(() => {
    if (!activated) return;
    const clamp = () => {
      const W = window.innerWidth, H = window.innerHeight;
      setPos(p => ({
        x: Math.min(Math.max(0, p.x), Math.max(0, W - size.w - 8)),
        y: Math.min(Math.max(0, p.y), Math.max(0, H - size.h - 8)),
      }));
    };
    clamp();
    window.addEventListener("resize", clamp);
    window.addEventListener("scroll", clamp, { passive: true });
    return () => {
      window.removeEventListener("resize", clamp);
      window.removeEventListener("scroll", clamp);
    };
  }, [activated, size.w, size.h]);

  function randomJump(awayFrom?: { x: number; y: number }) {
    const W = window.innerWidth, H = window.innerHeight;
    const maxX = Math.max(0, W - size.w - 8);
    const maxY = Math.max(0, H - size.h - 8);

    let tries = 0; let nx = pos.x; let ny = pos.y;
    do {
      nx = Math.random() * maxX;
      ny = Math.random() * maxY;
      tries++;
    } while (
      tries < 20 &&
      awayFrom &&
      Math.hypot((nx + size.w / 2) - awayFrom.x, (ny + size.h / 2) - awayFrom.y) < 220
    );

    setPos({ x: nx, y: ny });
  }

  function onPointerEnter(e: React.PointerEvent) {
    // Only troll in Explore mode and when enabled
    if (!enabled || mode !== "explore") return;

    // First hover → switch to fixed at current spot, then jump
    if (!activated) {
      const r = btnRef.current!.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
      setPos({ x: r.left, y: r.top });     // fixed is relative to viewport, so rect is perfect
      setActivated(true);

      // Next frame, jump away from the pointer
      requestAnimationFrame(() => {
        setEvades(1);
        randomJump({ x: e.clientX, y: e.clientY });
      });
      return;
    }

    // Already activated → keep evading until cap
    if (evades < maxEvades) {
      setEvades(n => n + 1);
      randomJump({ x: e.clientX, y: e.clientY });
    }
  }

  // STEADY mode or disabled → plain link, no trolling at all
  if (!enabled || mode === "steady") return;

  // Wrapper keeps layout space to avoid shifting content when we switch to fixed
  return (
    <div
      ref={wrapRef}
      className="relative inline-block align-middle"
      style={{ width: size.w || undefined, height: size.h || undefined }}
    >
      {!activated ? (
        // Normal, in-flow link (initial)
        <Link
          href={href}
          ref={btnRef}
          onPointerEnter={onPointerEnter}
          onMouseEnter={onPointerEnter}
          className={className}
        >
          {children}
        </Link>
      ) : (
        // Viewport runner (fixed)
        <Link
          href={href}
          ref={btnRef}
          onPointerEnter={onPointerEnter}
          onMouseEnter={onPointerEnter}
          className={clsx(className, "fixed", "btn-accent")}
          style={{
            left: Math.round(pos.x),
            top: Math.round(pos.y),
            zIndex,
            transition: "left .12s ease-out, top .12s ease-out",
          }}
          // Do NOT troll keyboard users
          onFocus={() => {}}
        >
          {evades >= maxEvades ? "okay you win — click me" : children}
        </Link>
      )}
    </div>
  );
}