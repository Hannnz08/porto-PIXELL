import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { TopicIcon } from "./TopicIcon";
import { SKILLS, SKILL_FILTERS } from "@/data/content";

export const Skills = () => {
  const [filter, setFilter] = useState("all");
  const visible = SKILLS.filter((s) => filter === "all" || s.cat === filter);

  return (
    <section className="pd-section" id="skills" aria-labelledby="skills-title" data-testid="skills-section">
      <Reveal>
        <div className="pd-sectionhead">
          <span className="pd-tag pd-tag--lime">02 / Technical Stack</span>
          <h2 className="pd-h pd-h2" id="skills-title">
            Tools I use.
            <br />
            Systems I build.
          </h2>
          <span className="pd-bar" aria-hidden="true" />
          <p>Teknologi yang saya pelajari dan gunakan dalam praktik laboratorium.</p>
        </div>
      </Reveal>

      <div className="pd-filters" role="group" aria-label="Filter kategori skill">
        {SKILL_FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            className="pd-f"
            aria-pressed={filter === f.key}
            data-testid={`skill-filter-${f.key}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="pd-skills-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((s) => (
            <motion.article
              key={s.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className={`pd-card ${s.color === "black" ? "pd-card--black" : `pd-card--accent pd-card--${s.color}`}`}
              data-testid={`skill-card-${s.id}`}
            >
              <div className="pd-skill-top">
                <TopicIcon name={s.icon} size={48} strokeWidth={2} color={s.color === "black" ? "#E2F900" : undefined} />
                <b className="pd-skill-num">{s.num}</b>
              </div>
              <div className="pd-skill-title">
                <h3 className="pd-h">{s.title}</h3>
                {s.tag && <span className="pd-tag">{s.tag}</span>}
              </div>
              <p className="pd-card-desc">{s.desc}</p>
              <ul className={`pd-chips ${s.color === "black" ? "pd-chips--lime" : ""}`}>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </AnimatePresence>

        <aside className="pd-card" aria-label="Keterangan status" data-testid="skill-legend">
          <span className="pd-lbl">Legenda status</span>
          <div className="pd-legend">
            <span>
              <b>PRACTICED</b> — sudah dipraktikkan
            </span>
            <span>
              <b>LEARNING</b> — sedang dipelajari
            </span>
            <span>
              <b>EXPLORING</b> — baru dijelajahi
            </span>
          </div>
          <p className="pd-card-desc" style={{ marginTop: "auto" }}>
            Tag hanya dipasang jika bisa diverifikasi. Tidak ada persentase kemahiran.
          </p>
        </aside>
      </div>
    </section>
  );
};
