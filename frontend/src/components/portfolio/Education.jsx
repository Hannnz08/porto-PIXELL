import { ArrowRight, Cpu, Network, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { EDUCATION } from "@/data/content";

const LEARNED = [
  { id: "foundation", icon: Cpu, color: "#E2F900", title: "Technical Foundation", desc: "Basic computer knowledge and technology fundamentals." },
  { id: "networking", icon: Network, color: "#00E5F0", title: "Networking", desc: "Introduction to computer networks and network devices." },
  { id: "handson", icon: Wrench, color: "#FF5700", title: "Hands-on Learning", desc: "Practical learning, configuration, and troubleshooting." },
];

export const Education = () => {
  return (
    <section className="pd-section" id="education" aria-labelledby="education-title" data-testid="education-section">
      <Reveal>
        <div className="pd-sectionhead">
          <span className="pd-tag pd-tag--lime">07 / Education</span>
          <h2 className="pd-h pd-h2" id="education-title">
            My <span className="pd-mark">Education</span>
            <br />
            Journey.
          </h2>
          <span className="pd-bar" aria-hidden="true" />
          <span className="pd-lbl pd-rot">Learn. Grow. Build.</span>
          <p>Perjalanan pendidikan yang membentuk dasar pengetahuan dan kemampuan saya di bidang teknologi.</p>
        </div>
      </Reveal>

      <ol className="pd-tl pd-tl--side">
        {EDUCATION.map((e, i) => (
          <li className="pd-row" key={e.school}>
            <div className="pd-tl-year">
              <p className="pd-h">{e.years}</p>
              <p className="pd-lbl">{e.level}</p>
            </div>
            <div className="pd-nd">
              <span className={e.node !== "orange" ? `is-${e.node}` : ""}>{e.num}</span>
            </div>
            <Reveal>
              <article className={`pd-card pd-card--accent pd-card--${e.color}`} data-testid={`education-item-${i + 1}`}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start" }}>
                  <div>
                    <p className="pd-lbl" style={{ margin: 0 }}>
                      Education {e.num}
                    </p>
                    <h3 className="pd-h" style={{ fontSize: 30, lineHeight: 1.05, marginTop: 4 }}>
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
          <span className="pd-bar" aria-hidden="true" style={{ marginTop: 16 }} />
          <div className="pd-learn-grid">
            {LEARNED.map((l) => {
              const Icon = l.icon;
              return (
                <article className="pd-card" key={l.id} style={{ gap: 12 }} data-testid={`education-learned-${l.id}`}>
                  <span className="pd-bx" style={{ background: l.color }}>
                    <Icon size={24} strokeWidth={2.25} aria-hidden="true" />
                  </span>
                  <h4 className="pd-h" style={{ fontSize: 22, margin: 0 }}>
                    {l.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5 }}>{l.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="pd-cta" data-testid="education-cta">
          <h3 className="pd-h">The journey continues.</h3>
          <p>Terus belajar dan mengembangkan kemampuan di bidang jaringan komputer dan teknologi informasi.</p>
          <a href="#projects" className="pd-btn" data-testid="education-cta-projects">
            Explore my projects <ArrowRight size={18} strokeWidth={2.5} />
          </a>
        </div>
      </Reveal>
    </section>
  );
};
