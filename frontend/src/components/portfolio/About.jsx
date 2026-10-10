import { Reveal } from "./Reveal";
import { PixelIcon } from "./PixelIcon";
import { MotionBar } from "@/motion";

const CARDS = [
  {
    id: "pendidikan",
    num: "01",
    color: "cyan",
    icon: "gradcap",
    title: "Pendidikan",
    body: <p>SMK Ma'arif Kota Mungkid. Jurusan Teknik Jaringan Komputer dan Telekomunikasi.</p>,
  },
  {
    id: "fokus",
    num: "02",
    color: "lime",
    icon: "target",
    title: "Fokus Karier",
    body: <p>Network Engineer / System Administrator.</p>,
  },
  {
    id: "tujuan",
    num: "03",
    color: "panel",
    icon: "flag",
    title: "Tujuan",
    body: (
      <p>
        Mengembangkan kemampuan konfigurasi jaringan, administrasi server, dan{" "}
        <mark style={{ background: "#FF5700", color: "#000", border: "2px solid #000", padding: "0 4px" }}>
          troubleshooting
        </mark>
        .
      </p>
    ),
  },
  {
    id: "bidang",
    num: "04",
    color: "panel",
    icon: "book",
    title: "Bidang yang Dipelajari",
    body: (
      <ul className="pd-mini">
        <li>Jaringan Komputer</li>
        <li>Linux</li>
        <li>Server</li>
        <li className="is-hot">Network Security</li>
      </ul>
    ),
  },
];

export const About = () => {
  return (
    <section className="pd-section" id="about" aria-labelledby="about-title" data-testid="about-section">
      <div className="pd-about">
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 24 }}>
            <span className="pd-tag pd-tag--lime">01 / About Me</span>
            <h2 className="pd-h pd-h2" id="about-title">
              Kenal
              <br />
              Lebih
              <br />
              Dekat
            </h2>
            <MotionBar />
            <p style={{ margin: 0, maxWidth: 420, fontSize: 18, lineHeight: 1.55 }}>
              Saya siswa SMK jurusan Teknik Jaringan Komputer dan Telekomunikasi (TJKT). Saya tertarik mempelajari
              jaringan komputer, konfigurasi perangkat, administrasi server, dan troubleshooting melalui praktik
              langsung.
            </p>
            <a href="#skills" className="pd-btn" data-testid="about-cta-skills">
              Lihat Skills <PixelIcon name="arrow-right" size={16} />
            </a>
            <span className="pd-lbl pd-muted">// about.tjkt</span>
          </div>
        </Reveal>

        <div className="pd-about-cards">
          {CARDS.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <article
                className={`pd-card ${c.color === "panel" ? "pd-card--panel" : `pd-card--accent pd-card--${c.color}`}`}
                data-testid={`about-card-${c.id}`}
                style={{ gap: 8 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <PixelIcon name={c.icon} size={30} />
                  <span className="pd-tag">{c.num}</span>
                </div>
                <h3 className="pd-h">{c.title}</h3>
                {c.body}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="pd-about-fig">
          <figure style={{ position: "relative", margin: 0 }}>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                right: -12,
                top: -12,
                width: "92%",
                height: "92%",
                border: "3px solid #000",
                background: "#E2F900",
              }}
            />
            <div className="pd-portrait" style={{ aspectRatio: "3 / 4" }}>
              <div className="pd-portrait-inner">
                <PixelIcon name="network" size={64} />
                <span className="pd-lbl">[Foto perangkat jaringan — ganti di sini]</span>
              </div>
            </div>
            <figcaption className="pd-lbl pd-figcap">FIG.02 / Network gear</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
};
