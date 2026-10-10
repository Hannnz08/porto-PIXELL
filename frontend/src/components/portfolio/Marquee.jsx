import { PixelIcon } from "./PixelIcon";
import { MARQUEE_ITEMS } from "@/data/content";

export const Marquee = () => {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="pd-marquee" aria-hidden="true" data-testid="marquee">
      <div className="pd-marquee-track">
        {[0, 1].map((half) => (
          <div key={half} style={{ display: "flex", alignItems: "center", gap: 56 }}>
            {doubled.map((item, i) => (
              <span key={`${half}-${i}`} style={{ display: "inline-flex", alignItems: "center", gap: 56 }}>
                <span className={`pd-marquee-item ${i % 2 === 1 ? "pd-marquee-item--hollow" : ""}`}>{item}</span>
                {i % 4 === 3 ? (
                  <PixelIcon name="star" size={16} />
                ) : (
                  <span className="pd-marquee-dot">•</span>
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
