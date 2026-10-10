import { PixelIcon } from "./PixelIcon";

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
          Back to top <PixelIcon name="arrow-up" size={18} />
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
          <a
            href="https://github.com/Hannnz08"
            target="_blank"
            rel="noopener noreferrer"
            className="pd-fl"
            data-testid="footer-link-github"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/farhan-rifqi-ramadhani-652782404"
            target="_blank"
            rel="noopener noreferrer"
            className="pd-fl"
            data-testid="footer-link-linkedin"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/0frhn.rfqi__"
            target="_blank"
            rel="noopener noreferrer"
            className="pd-fl"
            data-testid="footer-link-instagram"
          >
            Instagram
          </a>
        </nav>
        <span className="pd-lbl">© 2026 HANN.DEV</span>
      </div>
    </footer>
  );
};
