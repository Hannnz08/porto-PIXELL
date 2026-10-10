import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LINES = [
  { text: "Welcome to my", mark: false },
  { text: "Portfolio", mark: true },
  { text: "Website", mark: false },
];

export const Welcome = ({ onEnter }) => {
  return (
    <motion.div
      className="pd-welcome"
      data-testid="welcome-screen"
      exit={{ y: "-100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
    >
      <span className="pd-welcome-corner pd-welcome-corner--tl" aria-hidden="true" />
      <span className="pd-welcome-corner pd-welcome-corner--tr" aria-hidden="true" />
      <span className="pd-welcome-corner pd-welcome-corner--bl" aria-hidden="true" />
      <span className="pd-welcome-corner pd-welcome-corner--br" aria-hidden="true" />

      <h1 className="pd-h pd-welcome-title">
        {LINES.map((l, i) => (
          <span className="pd-mask" key={l.text}>
            <motion.span
              className="pd-mask-inner"
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.25 + i * 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {l.mark ? <span className="pd-mark">{l.text}</span> : l.text}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.div
        className="pd-welcome-badge"
        data-testid="welcome-badge"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.4 }}
      >
        HANN.DEV <span style={{ color: "#FF5700" }}>•</span> TJKT STUDENT
      </motion.div>

      <motion.p
        className="pd-welcome-sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05, duration: 0.4 }}
      >
        Networking · Linux · Security
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        style={{ marginTop: 40 }}
      >
        <button type="button" className="pd-btn" onClick={onEnter} data-testid="enter-portfolio-button">
          Enter Portfolio <ArrowRight size={18} strokeWidth={2.5} />
        </button>
      </motion.div>

      <span className="pd-welcome-note">// HANN.DEV / WELCOME</span>
    </motion.div>
  );
};
