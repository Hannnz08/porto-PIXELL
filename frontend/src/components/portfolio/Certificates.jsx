import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCw, Expand, X, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { CERTIFICATES } from "@/data/content";

const CertModal = ({ cert, onClose }) => {
  const [page, setPage] = useState(0);
  const total = cert.pages.length;

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
      <div role="dialog" aria-modal="true" aria-label={`Sertifikat ${cert.title}`} className="pd-modal">
        <div className="pd-modal-head">
          <div>
            <h3 className="pd-h">{cert.title}</h3>
            <span className="pd-lbl">
              Page {page + 1} of {total}
            </span>
          </div>
          <button
            type="button"
            className="pd-close"
            aria-label="Tutup"
            onClick={onClose}
            data-testid="certificate-modal-close"
          >
            <X size={22} strokeWidth={2.5} />
          </button>
        </div>
        <div className="pd-modal-body">
          <img
            className="pd-cert-doc pd-cert-doc--modal"
            src={cert.pages[page]}
            alt={`${cert.title} — halaman ${page + 1}`}
            data-testid="certificate-modal-image"
          />
        </div>
        <div className="pd-modal-foot">
          <button
            type="button"
            className="pd-vb"
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
            data-testid="certificate-prev-page"
          >
            ← Previous Page
          </button>
          <button
            type="button"
            className="pd-vb"
            disabled={page >= total - 1}
            onClick={() => setPage((p) => p + 1)}
            data-testid="certificate-next-page"
          >
            Next Page →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CertCard = ({ cert, onView, delay }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Reveal delay={delay}>
      <div>
        <button
          type="button"
          className="pd-flip"
          onClick={() => setFlipped((f) => !f)}
          aria-pressed={flipped}
          aria-label={`Sertifikat ${cert.title} — balik kartu`}
          data-testid={`certificate-card-${cert.id}`}
        >
          <div className={`pd-flip-inner ${flipped ? "is-flipped" : ""}`}>
            <div className="pd-face">
              <div className="pd-cert-im">
                <img className="pd-cert-doc" src={cert.pages[0]} alt={`${cert.title} — halaman 1`} />
              </div>
              <div className="pd-cert-ft">
                <h3 className="pd-h">{cert.title}</h3>
                <span className="pd-lbl">
                  {cert.issuer} · {cert.issued}
                </span>
                <div className="pd-cert-row">
                  <span className="pd-chip">
                    Flip card <RotateCw size={14} strokeWidth={2.5} />
                  </span>
                  {cert.pages.length > 1 && <span className="pd-tag">{cert.pages.length} halaman</span>}
                </div>
              </div>
            </div>
            <div className="pd-face pd-face--back">
              <div className="pd-cert-meta">
                <span className="pd-lbl">Detail sertifikat</span>
                <dl>
                  <div>
                    <dt>Judul</dt>
                    <dd>{cert.title}</dd>
                  </div>
                  {cert.subtitle && (
                    <div>
                      <dt>Deskripsi</dt>
                      <dd>{cert.subtitle}</dd>
                    </div>
                  )}
                  <div>
                    <dt>Penerbit</dt>
                    <dd>{cert.issuer}</dd>
                  </div>
                  <div>
                    <dt>Tanggal terbit</dt>
                    <dd>{cert.issued}</dd>
                  </div>
                  <div>
                    <dt>ID kredensial</dt>
                    <dd style={{ wordBreak: "break-all" }}>{cert.credentialId}</dd>
                  </div>
                  {cert.verifyUrl && (
                    <div>
                      <dt>Kredensial</dt>
                      <dd>
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "inherit", textDecoration: "underline" }}
                          onClick={(e) => e.stopPropagation()}
                          data-testid={`certificate-verify-link-${cert.id}`}
                        >
                          Verifikasi kredensial <ExternalLink size={12} style={{ display: "inline" }} />
                        </a>
                      </dd>
                    </div>
                  )}
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
          <button
            type="button"
            className="pd-vb"
            onClick={() => onView(cert)}
            data-testid={`certificate-view-full-button-${cert.id}`}
          >
            View full certificate <Expand size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </Reveal>
  );
};

export const Certificates = () => {
  const [viewing, setViewing] = useState(null);

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
        {CERTIFICATES.map((cert, i) => (
          <CertCard key={cert.id} cert={cert} delay={i * 0.08} onView={setViewing} />
        ))}
      </div>

      <AnimatePresence>{viewing && <CertModal cert={viewing} onClose={() => setViewing(null)} />}</AnimatePresence>
    </section>
  );
};
