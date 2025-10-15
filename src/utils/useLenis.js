// src/utils/useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,          // scroll duration (lower = faster)
      easing: (t) => t,       // linear easing for snappier feel
      smoothWheel: true,      // enable smooth wheel scrolling
      smoothTouch: false,     // optional: disable smoothing on touch
      wheelMultiplier: 1.6,   // increase scroll speed
      lerp: 0.25,             // responsiveness — higher = less lag
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
};

export default useLenis;
