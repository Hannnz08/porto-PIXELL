import { PixelIcon } from "./PixelIcon";

const MAP = {
  network: "network",
  router: "router",
  server: "server",
  shield: "shield",
  wrench: "wrench",
  rocket: "rocket",
};

export const TopicIcon = ({ name, size = 40, color }) => (
  <PixelIcon name={MAP[name] || "network"} size={size} color={color} />
);
