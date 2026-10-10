import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { PixelIcon } from "./PixelIcon";
import { PixelSprite } from "./PixelSprite";
import { Topology } from "./Topology";
import { MotionBar, EASE, useFinePointer } from "@/motion";
import { PROJECTS, PROJECT_FILTERS } from "@/data/content";

const ProjectCard = ({ p, idx }) => {
  const reduced = useReducedMotion();
  const fine = useFinePointer();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 16 });
  const sry = useSpring(ry, { stiffness: 150, damping: 16 });
  const tilt = !reduced && fine && p.span === 7;

  const onPointerMove = (e) => {
    if (!tilt) return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 4);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 4);
  };
  const onPointerLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: reduced ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3, delay: idx * 0.06, ease: EASE }}
      style={tilt ? { rotateX: srx, rotateY: sry, transformPerspective: 1000 } : undefined}
      whileHover={tilt ? { y: -4 } : undefined}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`pd-pc pd-pc--span${p.span} ${p.color === "panel" ? "pd-pc--panel" : `pd-pc--accent pd-pc--${p.color}`} ${
        tilt ? "pd-pc--tilt" : ""
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
          View Case Study <PixelIcon name="arrow-right" size={16} />
        </Link>
      </div>
    </motion.article>
  );
};

export const Projects = () => {
  const [filter, setFilter] = useState("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.cat === filter);

  return (
    <section className="pd-section" id="projects" aria-labelledby="projects-title" data-testid="projects-section">
      <PixelSprite name="planet" size={88} className="pd-sprite--head" delay={0.9} />
      <Reveal>
        <div className="pd-sectionhead">
          <span className="pd-tag pd-tag--lime">03 / Selected Work</span>
          <h2 className="pd-h pd-h2" id="projects-title">
            Projects that
            <br />
            prove my skills.
          </h2>
          <MotionBar />
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
          {visible.map((p, idx) => (
            <ProjectCard key={p.slug} p={p} idx={idx} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
