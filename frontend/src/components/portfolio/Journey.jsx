import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { TopicIcon } from "./TopicIcon";
import { JOURNEY } from "@/data/content";

export const Journey = () => {
  return (
    <section className="pd-section" id="journey" aria-labelledby="journey-title" data-testid="journey-section">
      <Reveal>
        <div className="pd-sectionhead">
          <span className="pd-tag pd-tag--lime">05 / Learning Journey</span>
          <h2 className="pd-h pd-h2" id="journey-title">
            Learn. Build.
            <br />
            Test. Improve.
          </h2>
          <span className="pd-bar" aria-hidden="true" />
          <p style={{ maxWidth: 680 }}>
            Perjalanan belajar saya dalam memahami jaringan komputer, administrasi server, dan keamanan jaringan
            melalui teori dan praktik.
          </p>
        </div>
      </Reveal>

      <ol className="pd-tl pd-tl--center">
        {JOURNEY.map((j, i) => {
          const left = i % 2 === 0;
          const card = (
            <Reveal key="card">
              <article
                className={`pd-card ${j.color === "panel" ? "pd-card--panel" : `pd-card--accent pd-card--${j.color}`} ${
                  j.dashed ? "pd-card--dashed" : ""
                }`}
                data-testid={`journey-stage-${i + 1}`}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <TopicIcon name={j.icon} size={40} strokeWidth={2} />
                  <span className="pd-tag">{j.status}</span>
                </div>
                <div>
                  <span className="pd-lbl">{j.stage}</span>
                  <h3 className="pd-h" style={{ fontSize: 26, lineHeight: 1.05, marginTop: 2 }}>
                    {j.title}
                  </h3>
                </div>
                <ul>
                  {j.items.map((it) => (
                    <li key={it}>
                      <i aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
                {j.links.length > 0 && (
                  <div className="pd-lk">
                    {j.links.map((l) => (
                      <Link
                        key={l.slug}
                        to={`/projects/${l.slug}`}
                        className="pd-btn pd-btn--surface"
                        data-testid={`journey-link-${l.slug}`}
                      >
                        {l.label} <ArrowUpRight size={16} strokeWidth={2.25} />
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          );
          return (
            <li className="pd-row" key={j.stage}>
              {left ? card : <div />}
              <div className="pd-nd">
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              {left ? <div /> : card}
            </li>
          );
        })}
      </ol>

      <Reveal>
        <aside className="pd-keep" data-testid="journey-aside">
          <p className="pd-h">
            Keep learning.
            <br />
            <span>Keep building. →</span>
          </p>
        </aside>
      </Reveal>
    </section>
  );
};
