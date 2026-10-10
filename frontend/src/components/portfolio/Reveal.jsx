import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/motion";

export const Reveal = ({ children, delay = 0, className, y = 28 }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};
