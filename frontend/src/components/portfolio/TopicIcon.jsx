import { Network, Router, Server, ShieldCheck, Wrench, Rocket } from "lucide-react";

const MAP = {
  network: Network,
  router: Router,
  server: Server,
  shield: ShieldCheck,
  wrench: Wrench,
  rocket: Rocket,
};

export const TopicIcon = ({ name, size = 40, strokeWidth = 2, ...rest }) => {
  const Icon = MAP[name] || Network;
  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
};
