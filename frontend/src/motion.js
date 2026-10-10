import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1];

export const DUR = {
  micro: 0.18,
  ui: 0.25,
  reveal: 0.55,
  hero: 0.85,
};

export const useReduced = () => useReducedMotion();

export const useFinePointer = () => {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFine(mq.matches);
    const fn = (e) => setFine(e.matches);
    mq.addEventListener?.("change", fn);
    return () => mq.removeEventListener?.("change", fn);
  }, []);
  return fine;
};

export const MotionBar = ({ style }) => (
  <motion.span
    className="pd-bar"
    aria-hidden="true"
    style={{ transformOrigin: "left center", ...style }}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
  />
);
