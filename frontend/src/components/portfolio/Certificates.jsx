import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCw, Expand, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { CERTIFICATE } from "@/data/content";

const CertModal = ({ onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="pd-modal-overlay"
      data-testid="certificate-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div role="dialog" aria-modal="true" aria-label="Sertifikat" className="pd-modal">
        <div className="pd-modal-head">
          <div>
            <h3 className="pd-h">{CERTIFICATE.title}</h3>
            <span className="pd-lbl">Page 1 of 1</span>
          </div>
          <button type="button" className="pd-close" aria-label="Tutup" onClick={onClose} data-testid="certificate-modal-close">
            <X size={22} strokeWidth={2.5} />
          </button>
        </div>
        <div className="pd-modal-body">
          <div className="pd-ph">
            <span className="pd-lbl">[Halaman 1 — gambar asli ukuran penuh]</span>
          </div>
        </div>
        <div className="pd-modal-foot">
          <button type="button" className="pd-vb" disabled data-testid="certificate-prev-page">
            ← Previous Page
          </button>
          <button type="button" className="pd-vb" disabled data-testid="certificate-next-page">
            Next Page →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const Certificates = () => {
  const [flipped, setFlipped] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <section className="pd-section" id="certificates" aria-labelledby="certs-title" data-testid="certificates-section">
      <Reveal>
        <div className="pd-sectionhead">
          <span className="pd-tag pd-tag--lime">04 / Certificates</span>
          <h2 className="pd-h pd-h2" id="certs-title">
            Certificates
          </h2>
          <span className="pd-bar" aria-hidden="true" />
          <p>Dokumen sertifikat asli. Klik atau ketuk kartu untuk membaliknya, atau buka versi ukuran penuh.</p>
        </div>
      </Reveal>

      <div className="pd-certs-grid">
        <Reveal>
          <div>
            <button
              type="button"
              className="pd-flip"
              onClick={() => setFlipped((f) => !f)}
              aria-pressed={flipped}
              aria-label={`Sertifikat ${CERTIFICATE.title} — balik kartu`}
              data-testid="certificate-card"
            >
              <div className={`pd-flip-inner ${flipped ? "is-flipped" : ""}`}>
                <div className="pd-face">
                  <div className="pd-cert-im">
                    <div className="pd-ph">
                      <span className="pd-lbl">[Halaman 1 — gambar sertifikat asli]</span>
                    </div>
                  </div>
                  <div className="pd-cert-ft">
                    <h3 className="pd-h">{CERTIFICATE.title}</h3>
                    <span className="pd-lbl">{CERTIFICATE.issued}</span>
                    <div className="pd-cert-row">
                      <span className="pd-chip">
                        Flip card <RotateCw size={14} strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pd-face pd-face--back">
                  <div className="pd-cert-meta">
                    <span className="pd-lbl">Detail sertifikat</span>
                    <dl>
                      <div>
                        <dt>Judul</dt>
                        <dd>{CERTIFICATE.title}</dd>
                      </div>
                      <div>
                        <dt>Tanggal terbit</dt>
                        <dd>30 Juni 2026</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="pd-cert-ft">
                    <div className="pd-cert-row">
                      <span className="pd-chip">
                        Back to front <RotateCw size={14} strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <div className="pd-cert-row" style={{ marginTop: 12 }}>
              <button type="button" className="pd-vb" onClick={() => setOpen(true)} data-testid="certificate-view-full-button">
                View full certificate <Expand size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>{open && <CertModal onClose={() => setOpen(false)} />}</AnimatePresence>
    </section>
  );
};
