import { useEffect, useRef } from "react";
import "./CursorGlow.css";

export default function CursorGlow() {
  const spotRef = useRef(null);
  const rafId = useRef(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (reduceMotion.matches || !finePointer.matches) return;

    const el = spotRef.current;
    if (!el) return;

    el.classList.add("is-active");

    const onMove = (e) => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <div ref={spotRef} className="cursor-glow" aria-hidden="true" />;
}
