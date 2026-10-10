import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, User } from "lucide-react";
import { Reveal } from "./Reveal";
import { EASE } from "@/motion";

const TITLE_LINES = [
  { text: "Building", mark: false },
  { text: "Networks.", mark: false },
  { text: "Solving", mark: true },
  { text: "Problems.", mark: true },
];

const EVIDENCE = [
  { tag: "Sertifikat", tagColor: "lime", title: "5 Sertifikat", sub: "MTCNA · Cisco · DTA · Citraweb", link: "Lihat sertifikat →", href: "#certificates", id: "certificate" },
  { tag: "Proyek lab", tagColor: "cyan", title: "Dokumentasi lab", sub: "MikroTik · Ubuntu · Security", link: "Lihat proyek →", href: "#projects", id: "projects" },
  { tag: "Pendidikan", tagColor: "ghost", title: "SMK Ma'arif Kota Mungkid", sub: "TJKT · 2024–sekarang", link: "Lihat riwayat →", href: "#education", id: "education" },
];

export const Hero = ({ active }) => {
  const heroRef = useRef(null);
  const figRef = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: figRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [36, -36]);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 55, damping: 16, mass: 0.7 });
  const sy = useSpring(py, { stiffness: 55, damping: 16, mass: 0.7 });
  const backX = useTransform(sx, (v) => v * 26);
  const backY = useTransform(sy, (v) => v * 26);
  const frameX = useTransform(sx, (v) => v * 12);
  const frameY = useTransform(sy, (v) => v * 12);
  const tagsX = useTransform(sx, (v) => v * 18);
  const tagsY = useTransform(sy, (v) => v * 10);

  const onPointerMove = (e) => {
    if (reduced || e.pointerType !== "mouse" || !heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onPointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <section
      className="pd-hero"
      id="home"
      aria-labelledby="hero-title"
      data-testid="hero-section"
      ref={heroRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="pd-hero-left">
        <motion.span
          className="pd-tag pd-tag--cyan"
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4, ease: EASE }}
        >
          TJKT Student
        </motion.span>

        <h1 className="pd-h pd-hero-title" id="hero-title" data-testid="hero-title">
          {TITLE_LINES.map((l, i) => (
            <span className="pd-mask" key={l.text}>
              <motion.span
                className="pd-mask-inner"
                initial={reduced ? { opacity: 0 } : { y: "115%" }}
                animate={active ? (reduced ? { opacity: 1 } : { y: 0 }) : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.75, ease: EASE }}
              >
                {l.mark ? <span className="pd-mark">{l.text}</span> : l.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="pd-hero-lead"
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.5, ease: EASE }}
        >
          Saya siswa SMK jurusan TJKT yang memiliki ketertarikan di bidang jaringan komputer, server, dan keamanan
          jaringan.
        </motion.p>

        <motion.div
          className="pd-hero-ctas"
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.5, ease: EASE }}
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
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.05, duration: 0.55, ease: EASE }}
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
        <motion.div className="pd-portrait-wrap" style={{ y: reduced ? 0 : y }}>
          <motion.div className="pd-portrait-back" style={{ x: backX, y: backY }} aria-hidden="true" />
          <motion.div
            className="pd-portrait"
            style={{ x: frameX, y: frameY }}
            initial={{ opacity: 0, rotate: reduced ? 0 : 2, scale: reduced ? 1 : 0.96 }}
            animate={active ? { opacity: 1, rotate: 0, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7, ease: EASE }}
          >
            <div className="pd-portrait-inner">
              <User size={64} strokeWidth={1.75} />
              <span className="pd-lbl">[Foto asli — ganti di sini]</span>
            </div>
          </motion.div>
          <figcaption className="pd-lbl pd-figcap">FIG.01 / Profile</figcaption>
        </motion.div>
        <Reveal delay={0.2}>
          <motion.div className="pd-hero-tags" style={{ x: tagsX, y: tagsY }}>
            <span className="pd-tag pd-tag--cyan">Network Engineering</span>
            <span className="pd-tag">MikroTik</span>
            <span className="pd-tag">GNS3</span>
          </motion.div>
        </Reveal>
      </figure>
    </section>
  );
};
