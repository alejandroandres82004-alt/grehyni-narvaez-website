"use client";

import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    // Observe all current .reveal elements
    const observe = () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        observer.observe(el);
      });
    };

    observe();

    // Watch for new .reveal elements added after async data loads
    const mutationObserver = new MutationObserver(() => {
      observe();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
