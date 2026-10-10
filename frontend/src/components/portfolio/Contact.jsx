import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { PixelIcon } from "./PixelIcon";
import { MotionBar } from "@/motion";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const CHANNELS = [
  {
    id: "email",
    color: "#00E5F0",
    icon: "mail",
    title: "Email",
    desc: "Untuk diskusi, proyek, dan peluang PKL.",
    meta: "farhanrr08@gmail.com",
    url: "mailto:farhanrr08@gmail.com",
  },
  {
    id: "instagram",
    color: null,
    icon: "instagram",
    title: "Instagram",
    desc: "Terhubung dan lihat keseharian saya.",
    meta: "@0frhn.rfqi__",
    url: "https://www.instagram.com/0frhn.rfqi__",
  },
  {
    id: "github",
    color: "#E2F900",
    icon: "github",
    title: "GitHub",
    desc: "Lihat kode dan catatan proyek.",
    meta: "github.com/Hannnz08",
    url: "https://github.com/Hannnz08",
  },
  {
    id: "linkedin",
    color: "#FF5700",
    icon: "linkedin",
    title: "LinkedIn",
    desc: "Terhubung secara profesional.",
    meta: "in/farhan-rifqi-ramadhani",
    url: "https://www.linkedin.com/in/farhan-rifqi-ramadhani-652782404",
  },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Pesan terkirim. Terima kasih!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Pesan gagal terkirim. Coba lagi.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="pd-section" id="contact" aria-labelledby="contact-title" data-testid="contact-section">
      <div className="pd-contact">
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
            <span className="pd-tag pd-tag--lime">06 / Get In Touch</span>
            <h2 className="pd-h pd-h2" id="contact-title">
              Let's
              <br />
              connect.
            </h2>
            <MotionBar />
            <p style={{ margin: 0, maxWidth: 440, fontSize: 18, lineHeight: 1.55 }}>
              Jika ingin berdiskusi tentang jaringan komputer, proyek IT, atau peluang PKL, silakan hubungi saya.
            </p>
            <div className="pd-contact-cards" style={{ width: "100%" }}>
              {CHANNELS.map((c) => {
                const TagName = c.url ? "a" : "div";
                return (
                  <TagName
                    className="pd-cc"
                    style={{
                      background: c.color || "var(--surface)",
                      color: c.color ? "#000000" : "var(--ink)",
                      textDecoration: "none",
                    }}
                    key={c.id}
                    data-testid={`contact-card-${c.id}`}
                    {...(c.url ? { href: c.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className="pd-bx">
                      <PixelIcon name={c.icon} size={26} />
                    </span>
                    <span style={{ flex: 1 }}>
                      <b className="pd-h" style={{ display: "block" }}>
                        {c.title}
                      </b>
                      <small>{c.desc}</small>
                      <span className="pd-lbl">{c.meta}</span>
                    </span>
                    <PixelIcon name="arrow-up-right" size={24} />
                  </TagName>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <a href="#contact-form" className="pd-bigcta" data-testid="contact-bigcta">
              <span className="pd-lbl" style={{ alignSelf: "flex-start", background: "#fff", color: "#000", border: "2px solid #000", padding: "2px 8px" }}>
                Open for discussion
              </span>
              <span className="pd-h">
                Mari berkolaborasi <PixelIcon name="arrow-up-right" size={52} />
              </span>
            </a>

            <form className="pd-form" id="contact-form" onSubmit={submit} data-testid="contact-form">
              <h3 className="pd-h">Kirim pesan</h3>
              <div className="pd-fg">
                <label className="pd-lbl" htmlFor="contact-name">
                  Nama
                </label>
                <input
                  id="contact-name"
                  className="pd-in"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  data-testid="contact-name-input"
                />
              </div>
              <div className="pd-fg">
                <label className="pd-lbl" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  className="pd-in"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  data-testid="contact-email-input"
                />
              </div>
              <div className="pd-fg">
                <label className="pd-lbl" htmlFor="contact-message">
                  Pesan
                </label>
                <textarea
                  id="contact-message"
                  className="pd-in"
                  rows="4"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  data-testid="contact-message-input"
                />
              </div>
              <button
                type="submit"
                className="pd-btn"
                style={{ justifyContent: "center", minHeight: 48 }}
                disabled={sending}
                data-testid="contact-submit-button"
              >
                {sending ? "Mengirim..." : "Kirim pesan"} <PixelIcon name="send" size={18} />
              </button>
              <p className="pd-lbl" style={{ margin: 0, fontSize: 13 }}>
                Pesan sukses hanya tampil setelah server menerima
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
