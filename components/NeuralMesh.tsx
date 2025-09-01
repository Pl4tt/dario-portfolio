"use client";

import { useEffect, useRef } from "react";

export default function NeuralMesh() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let animationId: number;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.scale(dpr, dpr);

    type Node = { x: number; y: number; vx: number; vy: number };
    const N = 44;
    const nodes: Node[] = Array.from({ length: N }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    function onResize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    }
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);

    function onMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function onMouseLeave() { mouse.current = null; }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    function frame() {
      ctx.clearRect(0, 0, width, height);

      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "rgba(0, 200, 255, 0.08)");
      grad.addColorStop(1, "rgba(0, 255, 200, 0.06)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          const threshold = 120;
          if (dist < threshold) {
            let alpha = (1 - dist / threshold) * 0.6;
            if (mouse.current) {
              const mdx = (a.x + b.x) / 2 - mouse.current.x;
              const mdy = (a.y + b.y) / 2 - mouse.current.y;
              const md = Math.hypot(mdx, mdy);
              alpha *= Math.max(0.2, Math.min(1, 160 / (md + 1)));
            }
            ctx.strokeStyle = `rgba(0, 230, 220, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        let r = 1.4;
        let alpha = 0.8;
        if (mouse.current) {
          const mdx = n.x - mouse.current.x;
          const mdy = n.y - mouse.current.y;
          const md = Math.hypot(mdx, mdy);
          r += Math.max(0, 3 - md / 40);
          alpha *= Math.max(0.3, Math.min(1, 200 / (md + 1)));
        }
        ctx.fillStyle = `rgba(255,255,255,${0.3 * alpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(frame);
    }

    animationId = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return <canvas ref={ref} className="w-full h-full rounded-[2rem]"></canvas>;
}
