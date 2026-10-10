import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Topology } from "./Topology";
import { PROJECTS, PROJECT_FILTERS } from "@/data/content";

export const Projects = () => {
  const [filter, setFilter] = useState("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.cat === filter);

  return (
    <section className="pd-section" id="projects" aria-labelledby="projects-title" data-testid="projects-section">
      <Reveal>
        <div className="pd-sectionhead">
          <span className="pd-tag pd-tag--lime">03 / Selected Work</span>
          <h2 className="pd-h pd-h2" id="projects-title">
            Projects that
            <br />
            prove my skills.
          </h2>
          <span className="pd-bar" aria-hidden="true" />
          <p>
            Dokumentasi proyek laboratorium dan praktik yang membantu saya memahami jaringan komputer, server, dan
            keamanan jaringan.
          </p>
        </div>
      </Reveal>

      <div className="pd-filters" role="group" aria-label="Filter kategori proyek">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            className="pd-f"
            aria-pressed={filter === f.key}
            data-testid={`project-filter-${f.key}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="pd-projects-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className={`pd-pc pd-pc--span${p.span} ${
                p.color === "panel" ? "pd-pc--panel" : `pd-pc--accent pd-pc--${p.color}`
              }`}
              data-testid={`project-card-${p.slug}`}
            >
              <div className="pd-dg">
                <Topology kind={p.topo} />
                <span className="pd-lbl pd-dg-tag">Sample diagram · ganti dengan topologi asli</span>
              </div>
              <div className="pd-pc-body">
                <span className="pd-lbl pd-cat">{p.catLabel}</span>
                <h3 className="pd-h">{p.title}</h3>
                <p>{p.desc}</p>
                <ul className="pd-chips" style={{ margin: 0 }}>
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <Link
                  to={`/projects/${p.slug}`}
                  className="pd-btn pd-btn--surface"
                  aria-label={`View case study: ${p.title}`}
                  data-testid={`project-case-link-${p.slug}`}
                >
                  View Case Study <ArrowRight size={16} strokeWidth={2.25} />
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
