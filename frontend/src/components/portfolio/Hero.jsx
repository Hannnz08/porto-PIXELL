import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, User } from "lucide-react";
import { Reveal } from "./Reveal";

const TITLE_LINES = [
  { text: "Building", mark: false },
  { text: "Networks.", mark: false },
  { text: "Solving", mark: true },
  { text: "Problems.", mark: true },
];

const EVIDENCE = [
  { tag: "Sertifikat", tagColor: "lime", title: "MTCNA", sub: "Terbit 30 Juni 2026", link: "Lihat sertifikat →", href: "#certificates", id: "certificate" },
  { tag: "Proyek lab", tagColor: "cyan", title: "Dokumentasi lab", sub: "MikroTik · Ubuntu · Security", link: "Lihat proyek →", href: "#projects", id: "projects" },
  { tag: "Pendidikan", tagColor: "ghost", title: "SMK Ma'arif Kota Mungkid", sub: "TJKT · 2024–sekarang", link: "Lihat riwayat →", href: "#education", id: "education" },
];

export const Hero = ({ active }) => {
  const figRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: figRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <section className="pd-hero" id="home" aria-labelledby="hero-title" data-testid="hero-section">
      <div className="pd-hero-left">
        <motion.span
          className="pd-tag pd-tag--cyan"
          initial={{ opacity: 0, y: 12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          TJKT Student
        </motion.span>

        <h1 className="pd-h pd-hero-title" id="hero-title" data-testid="hero-title">
          {TITLE_LINES.map((l, i) => (
            <span className="pd-mask" key={l.text}>
              <motion.span
                className="pd-mask-inner"
                initial={{ y: "115%" }}
                animate={active ? { y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                {l.mark ? <span className="pd-mark">{l.text}</span> : l.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="pd-hero-lead"
          initial={{ opacity: 0, y: 16 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          Saya siswa SMK jurusan TJKT yang memiliki ketertarikan di bidang jaringan komputer, server, dan keamanan
          jaringan.
        </motion.p>

        <motion.div
          className="pd-hero-ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <a href="#projects" className="pd-btn" data-testid="hero-cta-projects">
            Lihat Proyek <ArrowRight size={18} strokeWidth={2.5} />
          </a>
          <a href="#contact" className="pd-btn pd-btn--surface" data-testid="hero-cta-contact">
            Hubungi Saya <ArrowUpRight size={18} strokeWidth={2.5} />
          </a>
        </motion.div>

        <motion.div
          className="pd-evgrid"
          initial={{ opacity: 0, y: 24 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.05, duration: 0.55 }}
        >
          {EVIDENCE.map((ev) => (
            <a key={ev.id} href={ev.href} className="pd-ev" data-testid={`hero-evidence-${ev.id}`}>
              <span className={`pd-tag ${ev.tagColor !== "ghost" ? `pd-tag--${ev.tagColor}` : ""}`}>{ev.tag}</span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <b style={{ display: "block" }}>{ev.title}</b>
                <small>{ev.sub}</small>
              </span>
              <span className="pd-lbl">{ev.link}</span>
              <ArrowRight size={18} strokeWidth={2.5} className="pd-ev-arrow" aria-hidden="true" />
            </a>
          ))}
        </motion.div>
      </div>

      <figure className="pd-hero-right" ref={figRef}>
        <motion.div className="pd-portrait-wrap" style={{ y }}>
          <div className="pd-portrait-back" aria-hidden="true" />
          <motion.div
            className="pd-portrait"
            initial={{ opacity: 0, rotate: 2, scale: 0.96 }}
            animate={active ? { opacity: 1, rotate: 0, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pd-portrait-inner">
              <User size={64} strokeWidth={1.75} />
              <span className="pd-lbl">[Foto asli — ganti di sini]</span>
            </div>
          </motion.div>
          <figcaption className="pd-lbl pd-figcap">FIG.01 / Profile</figcaption>
        </motion.div>
        <Reveal delay={0.2}>
          <div className="pd-hero-tags">
            <span className="pd-tag pd-tag--cyan">Network Engineering</span>
            <span className="pd-tag">MikroTik</span>
            <span className="pd-tag">GNS3</span>
          </div>
        </Reveal>
      </figure>
    </section>
  );
};
