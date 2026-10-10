
import './App.css';

import Header from './components/Header';
import HeroSection from './view/HeroSection';
import AboutUs from './view/AboutUs';
import Projects from './view/Projects';
import Volunteer from './view/Volunteer';
import Recognition from './view/Recognition';
import Skills from './view/Skills';
import Contact from './view/Contact';
import Footer from './components/Footer';

import { useEffect, useRef, useState } from 'react';

const isMobile = () =>
  window.matchMedia('(max-width: 767px)').matches;

function App() {
  const cursorRef = useRef();
  const ringRef = useRef();

  const [activeSection, setActiveSection] = useState('home');

  // Custom cursor
  useEffect(() => {
    // No custom cursor on touch devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    document.addEventListener('mousemove', onMove);

    const loop = () => {
      if (!cursorRef.current || !ringRef.current) return;

      cursorRef.current.style.left = `${mx}px`;
      cursorRef.current.style.top = `${my}px`;

      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      ringRef.current.style.left = `${rx}px`;
      ringRef.current.style.top = `${ry}px`;

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Navigate between horizontal pages
  const navigateTo = (page) => {
    const container = document.querySelector(
      '.portfolio-container'
    );

    if (!container) return;

    const panels = Array.from(
      container.querySelectorAll('.portfolio-panel')
    );

    const target = panels.find(
      (panel) => panel.dataset.page === page
    );

    if (!target) return;

    // Phones stack the pages vertically; desktop swipes horizontally
    const mobile = isMobile();

    target.scrollIntoView({
      behavior: 'smooth',
      block: mobile ? 'start' : 'nearest',
      inline: mobile ? 'nearest' : 'start',
    });

    setActiveSection(page);
  };

  // Detect active horizontal page
  useEffect(() => {
    const container = document.querySelector(
      '.portfolio-container'
    );

    if (!container) return;

    const panels = Array.from(
      container.querySelectorAll('.portfolio-panel')
    );

    const handleScroll = () => {
      const mobile = isMobile();
      const containerRect =
        container.getBoundingClientRect();

      let closestPanel = panels[0];
      let closestDistance = Infinity;

      // Mobile: pages are stacked vertically, so the active page is the
      // last one whose top has crossed the upper part of the screen.
      if (mobile) {
        const passed = panels.filter(
          (panel) =>
            panel.getBoundingClientRect().top <=
            window.innerHeight * 0.4
        );
        const current = passed[passed.length - 1] || panels[0];
        setActiveSection(current.dataset.page);
        return;
      }

      panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect();

        const distance = Math.abs(
          rect.left - containerRect.left
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestPanel = panel;
        }
      });

      if (closestPanel) {
        setActiveSection(
          closestPanel.dataset.page
        );
      }
    };

    container.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );
    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      container.removeEventListener(
        'scroll',
        handleScroll
      );
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

    // Keyboard: ← / → move between the pages (desktop layout)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      if (e.repeat || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;

      // Phones scroll vertically, so arrow navigation is desktop-only
      if (isMobile()) return;

      // Don't hijack the arrows while typing in the contact form
      const el = document.activeElement;
      const typing =
        el &&
        (el.tagName === 'INPUT' ||
          el.tagName === 'TEXTAREA' ||
          el.tagName === 'SELECT' ||
          el.isContentEditable);
      if (typing) return;

      // ...or while a popup is open (popups lock the page scroll)
      if (document.body.style.overflow === 'hidden') return;

      const container = document.querySelector('.portfolio-container');
      if (!container) return;

      const panels = Array.from(
        container.querySelectorAll('.portfolio-panel')
      );
      const containerLeft = container.getBoundingClientRect().left;

      // Which page are we on right now?
      let current = 0;
      let best = Infinity;
      panels.forEach((panel, i) => {
        const distance = Math.abs(
          panel.getBoundingClientRect().left - containerLeft
        );
        if (distance < best) {
          best = distance;
          current = i;
        }
      });

      const next = e.key === 'ArrowRight' ? current + 1 : current - 1;
      if (next < 0 || next >= panels.length) return;

      e.preventDefault();
      panels[next].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setActiveSection(panels[next].dataset.page);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <div
        className="cursor"
        ref={cursorRef}
      />

      <div
        className="cursor-ring"
        ref={ringRef}
      />

      <Header
        activeSection={activeSection}
        onNavigate={navigateTo}
      />

      <main className="portfolio-container">

        {/* =================================================
            HOME
        ================================================= */}
        <section
          className="portfolio-panel"
          data-page="home"
        >
          <HeroSection
            onNavigate={navigateTo}
          />
        </section>


        {/* =================================================
            ABOUT ME
            Solar System Skills stays HERE
        ================================================= */}
        <section
          className="portfolio-panel"
          data-page="about-me"
        >
          <div className="portfolio-page-content">

            <AboutUs />

            {/* DO NOT REMOVE OR MODIFY */}
            <Skills />

          </div>
        </section>


        {/* =================================================
            VOLUNTEER & LEADERSHIP
        ================================================= */}
        <section
          className="portfolio-panel"
          data-page="volunteer"
        >
          <div className="portfolio-page-content">
            <Volunteer />
          </div>
        </section>


        {/* =================================================
            WORK & EDUCATION
        ================================================= */}
        <section
          className="portfolio-panel"
          data-page="work-education"
        >
          <div className="portfolio-page-content">
            <Recognition />
          </div>
        </section>


        {/* =================================================
            PROJECTS
        ================================================= */}
        <section
          className="portfolio-panel"
          data-page="projects"
        >
          <div className="portfolio-page-content">
            <Projects />
          </div>
        </section>


        {/* =================================================
            CONTACT
        ================================================= */}
        <section
          className="portfolio-panel"
          data-page="contact"
        >
          <div className="portfolio-page-content">
            <Contact />
            <Footer />
          </div>
        </section>

      </main>
    </>
  );
}

export default App;