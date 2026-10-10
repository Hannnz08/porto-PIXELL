import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { PixelIcon } from "./PixelIcon";
import { PixelSprite } from "./PixelSprite";
import { MotionBar, EASE } from "@/motion";
import { EDUCATION } from "@/data/content";

const LEARNED = [
  { id: "foundation", icon: "cpu", color: "#E2F900", title: "Technical Foundation", desc: "Basic computer knowledge and technology fundamentals." },
  { id: "networking", icon: "network", color: "#00E5F0", title: "Networking", desc: "Introduction to computer networks and network devices." },
  { id: "handson", icon: "wrench", color: "#FF5700", title: "Hands-on Learning", desc: "Practical learning, configuration, and troubleshooting." },
];

export const Education = () => {
  const tlRef = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: tlRef, offset: ["start 85%", "end 55%"] });

  return (
    <section className="pd-section" id="education" aria-labelledby="education-title" data-testid="education-section">
      <PixelSprite name="gradcap" size={84} className="pd-sprite--head" delay={0.7} />
      <Reveal>
        <div className="pd-sectionhead">
          <span className="pd-tag pd-tag--lime">07 / Education</span>
          <h2 className="pd-h pd-h2" id="education-title">
            My <span className="pd-mark">Education</span>
            <br />
            Journey.
          </h2>
          <MotionBar />
          <span className="pd-lbl pd-rot">Learn. Grow. Build.</span>
          <p>Perjalanan pendidikan yang membentuk dasar pengetahuan dan kemampuan saya di bidang teknologi.</p>
        </div>
      </Reveal>

      <ol className="pd-tl pd-tl--side" ref={tlRef}>
        {reduced ? (
          <span className="pd-tl-line" aria-hidden="true" />
        ) : (
          <motion.span className="pd-tl-line" style={{ scaleY: scrollYProgress }} aria-hidden="true" />
        )}
        {EDUCATION.map((e, i) => (
          <li className="pd-row" key={e.school}>
            <div className="pd-tl-year">
              <p className="pd-h">{e.years}</p>
              <p className="pd-lbl">{e.level}</p>
            </div>
            <div className="pd-nd">
              <motion.span
                className={e.node !== "orange" ? `is-${e.node}` : ""}
                initial={reduced ? false : { scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: 0.1, ease: EASE }}
              >
                {e.num}
              </motion.span>
            </div>
            <Reveal>
              <article className={`pd-card pd-card--accent pd-card--${e.color}`} data-testid={`education-item-${i + 1}`}>
                <div className="pd-edu-headrow" style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start" }}>
                  <div className="pd-edu-headtext">
                    <p className="pd-lbl" style={{ margin: 0 }}>
                      Education {e.num}
                    </p>
                    <h3 className="pd-h pd-edu-title" style={{ lineHeight: 1.05, marginTop: 4 }}>
                      {e.school}
                    </h3>
                  </div>
                  <span
                    style={{
                      width: 64,
                      height: 64,
                      flex: "none",
                      display: "grid",
                      placeItems: "center",
                      border: "3px solid #000",
                      background: "#FFFFFF",
                      padding: 6,
                    }}
                  >
                    <img
                      src={e.logo}
                      alt={`Logo ${e.school}`}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      data-testid={`education-logo-${i + 1}`}
                    />
                  </span>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {e.tags.map((t) => (
                    <span className="pd-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                {e.major && (
                  <p style={{ margin: 0, fontSize: 15 }}>
                    <span className="pd-lbl" style={{ marginRight: 8 }}>
                      Jurusan
                    </span>
                    <b>{e.major}</b>
                  </p>
                )}
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55 }}>{e.desc}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal>
        <div style={{ marginTop: 72 }}>
          <h3 className="pd-h" style={{ fontSize: 48 }}>
            What I learned
          </h3>
          <MotionBar style={{ marginTop: 16 }} />
          <div className="pd-learn-grid">
            {LEARNED.map((l) => (
              <article className="pd-card" key={l.id} style={{ gap: 12 }} data-testid={`education-learned-${l.id}`}>
                <span className="pd-bx" style={{ background: l.color }}>
                  <PixelIcon name={l.icon} size={24} />
                </span>
                <h4 className="pd-h" style={{ fontSize: 22, margin: 0 }}>
                  {l.title}
                </h4>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5 }}>{l.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="pd-cta" data-testid="education-cta">
          <h3 className="pd-h">The journey continues.</h3>
          <p>Terus belajar dan mengembangkan kemampuan di bidang jaringan komputer dan teknologi informasi.</p>
          <a href="#projects" className="pd-btn" data-testid="education-cta-projects">
            Explore my projects <PixelIcon name="arrow-right" size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  );
};
