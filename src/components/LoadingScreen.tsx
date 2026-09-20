"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1200);
    const remove = setTimeout(() => setVisible(false), 2000);
    return () => { clearTimeout(timer); clearTimeout(remove); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-dark flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <div className="relative">
          <span className="font-serif text-6xl md:text-8xl font-light text-white/90 tracking-[0.05em]">
            GN
          </span>
          <div
            className="absolute bottom-0 left-0 h-[1px] bg-accent"
            style={{
              animation: "loadingLine 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes loadingLine {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
