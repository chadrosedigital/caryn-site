"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window) || !Element.prototype.animate) return;

    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (motion.matches || entry.target.contains(document.activeElement)) return;

        const animation = entry.target.animate(
          [
            { opacity: 0, transform: "translateY(16px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 560, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.08 });

    // Leave the initial view untouched; enhance only content reached by scrolling.
    document.querySelectorAll(
      ".intro > *, .section-heading, .service-card, .split-copy, .offering-panel, .pathways > article, .testimonial-grid > figure, .contact",
    ).forEach((element) => {
      if (element.getBoundingClientRect().top >= window.innerHeight) observer.observe(element);
    });

    const cancelAnimations = () => {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const onMotionChange = () => { if (motion.matches) cancelAnimations(); };
    const onFocus = (event: FocusEvent) => {
      animations.forEach((animation) => {
        const target = (animation.effect as KeyframeEffect | null)?.target;
        if (event.target instanceof Node && target?.contains(event.target)) {
          animation.cancel();
          animations.delete(animation);
        }
      });
    };
    motion.addEventListener("change", onMotionChange);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      cancelAnimations();
      motion.removeEventListener("change", onMotionChange);
      document.removeEventListener("focusin", onFocus);
    };
  }, []);

  return null;
}
