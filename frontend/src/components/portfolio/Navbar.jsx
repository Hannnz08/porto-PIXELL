import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/theme";
import { NAV_LINKS } from "@/data/content";

export const Navbar = () => {
  const { dark, toggle } = useTheme();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [location.pathname]);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -96 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pd-navwrap">
      <nav className="pd-nav" aria-label="Primary" data-testid="main-nav">
        <a href="/#home" className="pd-logo" data-testid="nav-logo" onClick={(e) => go(e, "home")}>
          HANN.DEV
        </a>
        <div className="pd-navlinks">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`/#${l.id}`}
              className={`pd-nl ${active === l.id && location.pathname === "/" ? "is-active" : ""}`}
              aria-current={active === l.id && location.pathname === "/" ? "page" : undefined}
              data-testid={`nav-link-${l.id}`}
              onClick={(e) => go(e, l.id)}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="pd-navactions">
          <button
            type="button"
            className="pd-iconbtn"
            onClick={toggle}
            aria-pressed={dark}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            data-testid="theme-toggle-button"
          >
            {dark ? <Sun size={20} strokeWidth={2.25} /> : <Moon size={20} strokeWidth={2.25} />}
          </button>
          <a href="/#contact" className="pd-btn" data-testid="nav-cta-contact" onClick={(e) => go(e, "contact")}>
            Let's Talk
          </a>
          <button
            type="button"
            className="pd-iconbtn pd-menubtn"
            data-testid="mobile-menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} strokeWidth={2.25} /> : <Menu size={20} strokeWidth={2.25} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="pd-mobilepanel" data-testid="mobile-nav-panel" style={{ display: "flex" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`/#${l.id}`}
              className={`pd-nl ${active === l.id ? "is-active" : ""}`}
              data-testid={`mobile-nav-link-${l.id}`}
              onClick={(e) => go(e, l.id)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
