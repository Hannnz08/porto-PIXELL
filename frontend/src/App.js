import { useEffect, useState } from "react";
import "@/App.css";
import "@/portfolio.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import { ThemeProvider, useTheme } from "@/theme";
import { Navbar } from "@/components/portfolio/Navbar";
import { Welcome } from "@/components/portfolio/Welcome";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certificates } from "@/components/portfolio/Certificates";
import { Journey } from "@/components/portfolio/Journey";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CaseStudy } from "@/components/portfolio/CaseStudy";

const HomePage = () => {
  const [entered, setEntered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setEntered(true);
        setTimeout(() => {
          if (window.__lenis) window.__lenis.scrollTo(el, { offset: -96, immediate: true });
          else el.scrollIntoView();
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <AnimatePresence>
        {!entered && <Welcome onEnter={() => setEntered(true)} />}
      </AnimatePresence>
      <Hero active={entered} />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Journey />
      <Education />
      <Contact />
    </>
  );
};

const Shell = () => {
  const { dark } = useTheme();
  return (
    <div className="pd" data-theme={dark ? "dark" : "light"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
      </Routes>
      <Footer />
      <Toaster position="bottom-right" theme={dark ? "dark" : "light"} />
    </div>
  );
};

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const lenis = new Lenis({ lerp: 0.09, anchors: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
