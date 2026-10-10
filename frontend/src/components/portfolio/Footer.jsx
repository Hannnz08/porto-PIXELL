import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pd-footer" data-testid="footer">
      <div className="pd-footer-shapes" aria-hidden="true">
        <span className="sq" />
        <span className="ci" />
        <span className="tr" />
      </div>

      <div className="pd-footer-top">
        <a href="/#home" className="pd-logo" data-testid="footer-logo">
          HANN.DEV
        </a>
        <button type="button" className="pd-btt" onClick={toTop} data-testid="back-to-top-button">
          Back to top <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      </div>

      <h2 className="pd-h pd-footer-title">
        Thank you for visiting my <span>portfolio.</span>
      </h2>
      <p className="pd-footer-lead">Terus belajar, terus berkembang, dan membangun kemampuan melalui proyek nyata.</p>

      <div className="pd-footer-bottom">
        <nav aria-label="Footer" className="pd-flinks">
          <a href="/#home" className="pd-fl" data-testid="footer-link-home">
            Home
          </a>
          <a href="/#projects" className="pd-fl" data-testid="footer-link-projects">
            Projects
          </a>
          <span className="pd-lbl" style={{ color: "#858585" }}>
            Email dan sosial: tampil jika diisi
          </span>
        </nav>
        <span className="pd-lbl">© 2026 HANN.DEV</span>
      </div>
    </footer>
  );
};
