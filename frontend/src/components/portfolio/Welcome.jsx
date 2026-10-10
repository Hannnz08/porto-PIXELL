import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PixelIcon } from "./PixelIcon";

const NodeMotif = ({ flip = false }) => (
  <svg
    viewBox="0 0 240 140"
    style={{ width: "100%", display: "block", transform: flip ? "scaleX(-1)" : "none" }}
    shapeRendering="crispEdges"
    aria-hidden="true"
  >
    <line x1="118" y1="100" x2="22" y2="14" stroke="currentColor" strokeWidth="2.5" />
    <line x1="118" y1="100" x2="218" y2="44" stroke="currentColor" strokeWidth="2.5" />
    <line x1="118" y1="100" x2="22" y2="126" stroke="currentColor" strokeWidth="2.5" />
    <rect x="10" y="2" width="18" height="18" fill="#00E5F0" stroke="#000000" strokeWidth="2.5" />
    <rect x="206" y="32" width="18" height="18" fill="#00E5F0" stroke="#000000" strokeWidth="2.5" />
    <rect x="10" y="114" width="18" height="18" fill="#00E5F0" stroke="#000000" strokeWidth="2.5" />
    <rect x="106" y="88" width="24" height="24" fill="#E2F900" stroke="#000000" strokeWidth="3" />
  </svg>
);

const fadeUp = (reduced, delay) => ({
  initial: { opacity: 0, y: reduced ? 0 : 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
});

export const Welcome = ({ onEnter }) => {
  const reduced = useReducedMotion();

  useEffect(() => {
    const onWheel = (e) => {
      if (e.deltaY > 8) onEnter();
    };
    let startY = null;
    const onTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (startY !== null && startY - e.touches[0].clientY > 24) onEnter();
    };
    const onKey = (e) => {
      if (["ArrowDown", "PageDown", " ", "Enter"].includes(e.key)) onEnter();
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };
  }, [onEnter]);

  return (
    <motion.div
      className="pd-welcome"
      data-testid="welcome-screen"
      exit={{ opacity: 0, y: reduced ? 0 : "-100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="pd-welcome-grid" aria-hidden="true" />

      <div className="pd-w-deco" aria-hidden="true">
        <div className="pd-w-icons">
          {["code", "user", "globe"].map((name, i) => (
            <motion.span key={name} className={`pd-w-ic ${i === 1 ? "pd-w-ic--lime" : ""}`} {...fadeUp(reduced, 0.15 + i * 0.12)}>
              <PixelIcon name={name} size={24} />
            </motion.span>
          ))}
        </div>
        <motion.span className="pd-w-sq pd-w-sq--l" {...fadeUp(reduced, 0.5)} />
        <motion.span className="pd-w-sq pd-w-sq--r" {...fadeUp(reduced, 0.6)} />
        <motion.span className="pd-w-dot pd-w-dot--l" {...fadeUp(reduced, 0.7)} />
        <motion.span className="pd-w-dot pd-w-dot--r" {...fadeUp(reduced, 0.75)} />
        <motion.span className="pd-w-tri pd-w-tri--l" {...fadeUp(reduced, 0.8)} />
        <motion.span className="pd-w-tri pd-w-tri--r" {...fadeUp(reduced, 0.85)} />
        <motion.div className="pd-w-motif pd-w-motif--l" {...fadeUp(reduced, 0.9)}>
          <NodeMotif />
        </motion.div>
        <motion.div className="pd-w-motif pd-w-motif--r" {...fadeUp(reduced, 0.95)}>
          <NodeMotif flip />
        </motion.div>
      </div>

      <h1 className="pd-h pd-welcome-title">
        <span className="pd-mask">
          <motion.span
            className="pd-mask-inner"
            initial={reduced ? { opacity: 0 } : { y: "115%" }}
            animate={reduced ? { opacity: 1 } : { y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Welcome to my
          </motion.span>
        </span>
        <span className="pd-mask">
          <motion.span
            className="pd-mask-inner"
            initial={reduced ? { opacity: 0 } : { y: "115%" }}
            animate={reduced ? { opacity: 1 } : { y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="pd-mark">Portfolio</span> Website
          </motion.span>
        </span>
      </h1>

      <motion.div className="pd-welcome-badge" data-testid="welcome-badge" {...fadeUp(reduced, 0.95)}>
        HANN.DEV <span style={{ color: "#FF5700" }}>•</span> TJKT STUDENT
      </motion.div>

      <motion.div className="pd-w-loadwrap" {...fadeUp(reduced, 1.15)}>
        <div className="pd-w-bar" role="presentation">
          <div className="pd-w-bar-fill" />
        </div>
        <span className="pd-lbl pd-w-loadtext">Preparing your experience...</span>
      </motion.div>

      <motion.button
        type="button"
        className="pd-w-scrollhint"
        onClick={onEnter}
        data-testid="welcome-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.4 }}
      >
        <motion.span
          animate={reduced ? {} : { y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
        >
          Scroll ke bawah untuk masuk <PixelIcon name="chevrons-down" size={16} />
        </motion.span>
      </motion.button>

      <span className="pd-w-corner-lbl pd-w-corner-lbl--l">// HANN.DEV / WELCOME</span>
      <span className="pd-w-corner-lbl pd-w-corner-lbl--r">TJKT · NETWORKING</span>
    </motion.div>
  );
};
