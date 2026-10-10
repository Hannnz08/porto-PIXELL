import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/motion";

const Node = ({ x, y, label, i = 0 }) => {
  const reduced = useReducedMotion();
  return (
    <motion.g
      className="pd-topo-node"
      initial={reduced ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: 0.3 + i * 0.07, ease: EASE }}
    >
      <rect x={x - 36} y={y - 18} width="72" height="36" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fontFamily="Space Grotesk, sans-serif"
        letterSpacing="0.8"
        fill="#000000"
      >
        {label}
      </text>
    </motion.g>
  );
};

const Line = ({ i = 0, ...props }) => {
  const reduced = useReducedMotion();
  const dashed = Boolean(props.strokeDasharray);
  const initial = reduced ? false : dashed ? { opacity: 0 } : { pathLength: 0, opacity: 0 };
  return (
    <motion.line
      stroke="#000000"
      strokeWidth="3"
      initial={initial}
      whileInView={dashed ? { opacity: 1 } : { pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
      {...props}
    />
  );
};

export const Topology = ({ kind }) => {
  return (
    <svg
      viewBox="0 0 400 160"
      style={{ display: "block", width: "100%", height: "auto" }}
      role="img"
      aria-label="Contoh diagram topologi (placeholder)"
    >
      {kind === "routing" && (
        <>
          <Line i={0} x1="60" y1="38" x2="200" y2="38" />
          <Line i={1} x1="200" y1="38" x2="340" y2="38" />
          <Line i={2} x1="60" y1="38" x2="130" y2="122" />
          <Line i={3} x1="200" y1="38" x2="270" y2="122" />
          <Node i={0} x="60" y="38" label="R1" />
          <Node i={1} x="200" y="38" label="R2" />
          <Node i={2} x="340" y="38" label="R3" />
          <Node i={3} x="130" y="122" label="SWITCH" />
          <Node i={4} x="270" y="122" label="PC" />
        </>
      )}
      {kind === "server" && (
        <>
          <Line i={0} x1="60" y1="122" x2="200" y2="122" />
          <Line i={1} x1="200" y1="122" x2="340" y2="122" />
          <Line i={2} x1="340" y1="122" x2="300" y2="38" />
          <Line i={3} x1="340" y1="122" x2="376" y2="38" />
          <Node i={0} x="60" y="122" label="CLIENT" />
          <Node i={1} x="200" y="122" label="SWITCH" />
          <Node i={2} x="340" y="122" label="SERVER" />
          <Node i={3} x="300" y="38" label="WEB" />
          <Node i={4} x="376" y="38" label="DNS" />
        </>
      )}
      {kind === "security" && (
        <>
          <Line i={0} x1="60" y1="78" x2="200" y2="78" />
          <Line i={1} x1="200" y1="78" x2="340" y2="78" />
          <Line i={2} x1="200" y1="78" x2="200" y2="138" />
          <Node i={0} x="60" y="78" label="LAN" />
          <Node i={1} x="200" y="78" label="FIREWALL" />
          <Node i={2} x="340" y="78" label="WAN" />
          <Node i={3} x="200" y="138" label="DMZ" />
        </>
      )}
      {kind === "troubleshooting" && (
        <>
          <Line i={0} x1="60" y1="78" x2="200" y2="78" strokeDasharray="6 5" />
          <Line i={1} x1="200" y1="78" x2="340" y2="78" strokeDasharray="6 5" />
          <Node i={0} x="60" y="78" label="PC" />
          <Node i={1} x="200" y="78" label="GATEWAY" />
          <Node i={2} x="340" y="78" label="DNS" />
        </>
      )}
    </svg>
  );
};
