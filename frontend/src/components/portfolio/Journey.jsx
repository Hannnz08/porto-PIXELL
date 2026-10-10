import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { TopicIcon } from "./TopicIcon";
import { PixelIcon } from "./PixelIcon";
import { MotionBar, EASE } from "@/motion";
import { JOURNEY } from "@/data/content";

export const Journey = () => {
  const tlRef = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: tlRef, offset: ["start 85%", "end 55%"] });

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
          <MotionBar />
          <p style={{ maxWidth: 680 }}>
            Perjalanan belajar saya dalam memahami jaringan komputer, administrasi server, dan keamanan jaringan
            melalui teori dan praktik.
          </p>
        </div>
      </Reveal>

      <ol className="pd-tl pd-tl--center" ref={tlRef}>
        {reduced ? (
          <span className="pd-tl-line" aria-hidden="true" />
        ) : (
          <motion.span className="pd-tl-line" style={{ scaleY: scrollYProgress }} aria-hidden="true" />
        )}
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
                        {l.label} <PixelIcon name="arrow-up-right" size={16} />
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
                <motion.span
                  initial={reduced ? false : { scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: 0.1, ease: EASE }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
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
