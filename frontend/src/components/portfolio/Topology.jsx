const Node = ({ x, y, label }) => (
  <g>
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
  </g>
);

const Line = (props) => <line stroke="#000000" strokeWidth="3" {...props} />;

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
          <Line x1="60" y1="38" x2="200" y2="38" />
          <Line x1="200" y1="38" x2="340" y2="38" />
          <Line x1="60" y1="38" x2="130" y2="122" />
          <Line x1="200" y1="38" x2="270" y2="122" />
          <Node x="60" y="38" label="R1" />
          <Node x="200" y="38" label="R2" />
          <Node x="340" y="38" label="R3" />
          <Node x="130" y="122" label="SWITCH" />
          <Node x="270" y="122" label="PC" />
        </>
      )}
      {kind === "server" && (
        <>
          <Line x1="60" y1="122" x2="200" y2="122" />
          <Line x1="200" y1="122" x2="340" y2="122" />
          <Line x1="340" y1="122" x2="300" y2="38" />
          <Line x1="340" y1="122" x2="376" y2="38" />
          <Node x="60" y="122" label="CLIENT" />
          <Node x="200" y="122" label="SWITCH" />
          <Node x="340" y="122" label="SERVER" />
          <Node x="300" y="38" label="WEB" />
          <Node x="376" y="38" label="DNS" />
        </>
      )}
      {kind === "security" && (
        <>
          <Line x1="60" y1="78" x2="200" y2="78" />
          <Line x1="200" y1="78" x2="340" y2="78" />
          <Line x1="200" y1="78" x2="200" y2="138" />
          <Node x="60" y="78" label="LAN" />
          <Node x="200" y="78" label="FIREWALL" />
          <Node x="340" y="78" label="WAN" />
          <Node x="200" y="138" label="DMZ" />
        </>
      )}
      {kind === "troubleshooting" && (
        <>
          <Line x1="60" y1="78" x2="200" y2="78" strokeDasharray="6 5" />
          <Line x1="200" y1="78" x2="340" y2="78" strokeDasharray="6 5" />
          <Node x="60" y="78" label="PC" />
          <Node x="200" y="78" label="GATEWAY" />
          <Node x="340" y="78" label="DNS" />
        </>
      )}
    </svg>
  );
};
