import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Topology } from "./Topology";
import { PROJECTS } from "@/data/content";

const PLACEHOLDER = "[Dokumentasi lengkap menyusul — belum ada catatan terverifikasi untuk bagian ini.]";

export const CaseStudy = () => {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="pd-section" data-testid="case-study-missing">
        <span className="pd-tag pd-tag--orange">404</span>
        <h1 className="pd-h pd-h2" style={{ marginTop: 20 }}>
          Project not found.
        </h1>
        <Link to="/" className="pd-btn" style={{ marginTop: 24, alignSelf: "flex-start" }} data-testid="case-back-home">
          <ArrowLeft size={16} strokeWidth={2.25} /> Back to portfolio
        </Link>
      </div>
    );
  }

  const blocks = [
    { id: "objective", title: "Problem / Objective", body: project.desc },
    { id: "addressing", title: "Addressing / Configuration", body: PLACEHOLDER },
    { id: "implementation", title: "Implementation", body: PLACEHOLDER },
    { id: "validation", title: "Validation Evidence", body: PLACEHOLDER },
    { id: "challenges", title: "Challenges", body: PLACEHOLDER },
    { id: "lessons", title: "Lessons Learned", body: PLACEHOLDER },
  ];

  return (
    <motion.main
      className="pd-section"
      data-testid={`case-study-${project.slug}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to="/#projects" className="pd-btn pd-btn--surface" data-testid="case-back-link" style={{ alignSelf: "flex-start", marginBottom: 32 }}>
        <ArrowLeft size={16} strokeWidth={2.25} /> All projects
      </Link>

      <div className="pd-sectionhead" style={{ marginTop: 32 }}>
        <span className={`pd-tag pd-tag--${project.color === "panel" ? "ghost" : project.color}`}>{project.catLabel}</span>
        <h1 className="pd-h pd-h2">{project.title}</h1>
        <span className="pd-bar" aria-hidden="true" />
        <ul className="pd-chips" style={{ margin: 0 }}>
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      <div className="pd-card pd-card--panel" style={{ padding: 0, overflow: "hidden" }}>
        <div className="pd-dg" style={{ borderBottom: "3px solid var(--line)" }}>
          <Topology kind={project.topo} />
          <span className="pd-lbl pd-dg-tag">Sample diagram · ganti dengan topologi asli</span>
        </div>
      </div>

      <div className="pd-case-grid" style={{ marginTop: 32 }}>
        {blocks.map((b) => (
          <div className="pd-card pd-case-block" key={b.id} data-testid={`case-block-${b.id}`}>
            <h3 className="pd-h">{b.title}</h3>
            <p>{b.body}</p>
          </div>
        ))}
      </div>
    </motion.main>
  );
};
