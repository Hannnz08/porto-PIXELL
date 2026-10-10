import { PixelIcon } from "./PixelIcon";

export const PixelSprite = ({ name, size = 72, className = "", float = true, delay = 0 }) => (
  <span
    className={`pd-sprite ${float ? "pd-float" : ""} ${className}`}
    style={{ animationDelay: `${delay}s` }}
    aria-hidden="true"
  >
    <PixelIcon name={name} size={size} />
  </span>
);
