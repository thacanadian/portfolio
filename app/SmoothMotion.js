"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      root.classList.add("motion-reduced");
      return () => root.classList.remove("motion-reduced");
    }

    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: coarsePointer ? 0.13 : 0.075,
      smoothWheel: true,
      wheelMultiplier: coarsePointer ? 1 : 0.92,
      touchMultiplier: 1,
      syncTouch: false,
      autoResize: true,
    });

    root.classList.add("has-lenis");

    const onScroll = ({ progress = 0, velocity = 0, direction = 1 }) => {
      const clampedVelocity = Math.max(-11, Math.min(11, velocity));
      const lag = coarsePointer ? 0 : -clampedVelocity * 0.62;

      root.style.setProperty("--smooth-progress", String(Math.max(0, Math.min(1, progress))));
      root.style.setProperty("--scroll-lag", `${lag.toFixed(2)}px`);
      root.style.setProperty("--scroll-lag-soft", `${(lag * 0.48).toFixed(2)}px`);
      root.style.setProperty("--scroll-speed", String(Math.min(Math.abs(clampedVelocity) / 11, 1)));
      root.dataset.scrollDirection = direction < 0 ? "up" : "down";
    };

    const onAnchorClick = (event) => {
      const link = event.target.closest?.('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, {
        offset: -18,
        lerp: coarsePointer ? 0.12 : 0.07,
      });

      if (window.location.hash !== href) {
        window.history.replaceState(null, "", href);
      }
    };

    lenis.on("scroll", onScroll);
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      root.classList.remove("has-lenis");
      delete root.dataset.scrollDirection;
      root.style.removeProperty("--smooth-progress");
      root.style.removeProperty("--scroll-lag");
      root.style.removeProperty("--scroll-lag-soft");
      root.style.removeProperty("--scroll-speed");
    };
  }, []);

  return null;
}
