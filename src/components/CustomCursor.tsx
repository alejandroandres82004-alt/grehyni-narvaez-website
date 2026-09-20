"use client";

import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const addHoverListeners = () => {
      document.querySelectorAll(".cursor-view, .property-card, .gallery-item").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };

    window.addEventListener("mousemove", move);
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed pointer-events-none z-[90] hidden md:flex items-center justify-center transition-all duration-300 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        width: hovering ? 80 : 8,
        height: hovering ? 80 : 8,
        borderRadius: "50%",
        border: hovering ? "1px solid rgba(139, 115, 85, 0.6)" : "none",
        backgroundColor: hovering ? "rgba(139, 115, 85, 0.08)" : "rgba(139, 115, 85, 0.4)",
        transform: "translate(-50%, -50%)",
        mixBlendMode: hovering ? "normal" : "difference",
      }}
    >
      {hovering && (
        <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-medium">
          View
        </span>
      )}
    </div>
  );
}
