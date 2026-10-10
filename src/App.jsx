// // // // // import './App.css';
// // // // // import Header from './components/Header';
// // // // // import HeroSection from './view/HeroSection';
// // // // // import AboutUs from './view/AboutUs';
// // // // // import Projects from './view/Projects';
// // // // // import Volunteer from './view/Volunteer';
// // // // // import Recognition from './view/Recognition';
// // // // // import Skills from './view/Skills';
// // // // // import Contact from './view/Contact';
// // // // // import Footer from './components/Footer';
// // // // // import { useEffect, useRef } from "react";

// // // // // function App() {
// // // // //   const cursorRef = useRef();
// // // // //   const ringRef = useRef();

// // // // //   useEffect(() => {
// // // // //     let mx = 0, my = 0, rx = 0, ry = 0;
// // // // //     let raf;

// // // // //     const onMove = e => { mx = e.clientX; my = e.clientY; };
// // // // //     document.addEventListener('mousemove', onMove);

// // // // //     const loop = () => {
// // // // //       cursorRef.current.style.left = mx + 'px';
// // // // //       cursorRef.current.style.top  = my + 'px';
// // // // //       rx += (mx - rx) * 0.12;
// // // // //       ry += (my - ry) * 0.12;
// // // // //       ringRef.current.style.left = rx + 'px';
// // // // //       ringRef.current.style.top  = ry + 'px';
// // // // //       raf = requestAnimationFrame(loop);
// // // // //     };
// // // // //     raf = requestAnimationFrame(loop);
// // // // //   return (
// // // // //     <>
// // // // //       <Header />
// // // // //       <HeroSection />
// // // // //       <AboutUs />
// // // // //       <Projects />
// // // // //       <Volunteer />
// // // // //       <Recognition />
// // // // //       <Skills />
// // // // //       <Contact />
// // // // //       <Footer />
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // export default App;

// // // // import './App.css';
// // // // import Header from './components/Header';
// // // // import HeroSection from './view/HeroSection';
// // // // import AboutUs from './view/AboutUs';
// // // // import Projects from './view/Projects';
// // // // import Volunteer from './view/Volunteer';
// // // // import Recognition from './view/Recognition';
// // // // import Skills from './view/Skills';
// // // // import Contact from './view/Contact';
// // // // import Footer from './components/Footer';
// // // // import { useEffect, useRef, useState } from "react";

// // // // function App() {
// // // //   const cursorRef = useRef();
// // // //   const ringRef = useRef();
// // // //   const heroRef = useRef();
// // // //   const [isHeroInView, setIsHeroInView] = useState(true);

// // // //   useEffect(() => {
// // // //     let mx = 0, my = 0, rx = 0, ry = 0;
// // // //     let raf;

// // // //     const onMove = e => { mx = e.clientX; my = e.clientY; };
// // // //     document.addEventListener('mousemove', onMove);

// // // //     const loop = () => {
// // // //       if (!cursorRef.current || !ringRef.current) return;
// // // //       cursorRef.current.style.left = mx + 'px';
// // // //       cursorRef.current.style.top  = my + 'px';
// // // //       rx += (mx - rx) * 0.12;
// // // //       ry += (my - ry) * 0.12;
// // // //       ringRef.current.style.left = rx + 'px';
// // // //       ringRef.current.style.top  = ry + 'px';
// // // //       raf = requestAnimationFrame(loop);
// // // //     };
// // // //     raf = requestAnimationFrame(loop);

// // // //     return () => {
// // // //       document.removeEventListener('mousemove', onMove);
// // // //       cancelAnimationFrame(raf);
// // // //     };
// // // //   }, []);

// // // //   // Track hero section visibility
// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       ([entry]) => {
// // // //         setIsHeroInView(entry.isIntersecting);
// // // //       },
// // // //       { threshold: 0 }
// // // //     );

// // // //     if (heroRef.current) {
// // // //       observer.observe(heroRef.current);
// // // //     }

// // // //     return () => {
// // // //       if (heroRef.current) {
// // // //         observer.unobserve(heroRef.current);
// // // //       }
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       <div className="cursor" ref={cursorRef} />
// // // //       <div className="cursor-ring" ref={ringRef} />
// // // //       {!isHeroInView && <Header />}
// // // //       <div ref={heroRef}>
// // // //         <HeroSection />
// // // //       </div>
// // // //       <AboutUs />
// // // //       <Projects />
// // // //       <Volunteer />
// // // //       <Recognition />
// // // //       <Skills />
// // // //       <Contact />
// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }

// // // // export default App;
// // // import './App.css';
// // // import Header from './components/Header';
// // // import HeroSection from './view/HeroSection';
// // // import AboutUs from './view/AboutUs';
// // // import Projects from './view/Projects';
// // // import Volunteer from './view/Volunteer';
// // // import Recognition from './view/Recognition';
// // // import Skills from './view/Skills';
// // // import Contact from './view/Contact';
// // // import Footer from './components/Footer';
// // // import { useEffect, useRef } from 'react';

// // // function App() {
// // //   const cursorRef = useRef();
// // //   const ringRef = useRef();
// // //   const containerRef = useRef();

// // //   useEffect(() => {
// // //     let mx = 0;
// // //     let my = 0;
// // //     let rx = 0;
// // //     let ry = 0;
// // //     let raf;

// // //     const onMove = (e) => {
// // //       mx = e.clientX;
// // //       my = e.clientY;
// // //     };

// // //     document.addEventListener('mousemove', onMove);

// // //     const loop = () => {
// // //       if (!cursorRef.current || !ringRef.current) return;

// // //       cursorRef.current.style.left = mx + 'px';
// // //       cursorRef.current.style.top = my + 'px';

// // //       rx += (mx - rx) * 0.12;
// // //       ry += (my - ry) * 0.12;

// // //       ringRef.current.style.left = rx + 'px';
// // //       ringRef.current.style.top = ry + 'px';

// // //       raf = requestAnimationFrame(loop);
// // //     };

// // //     raf = requestAnimationFrame(loop);

// // //     return () => {
// // //       document.removeEventListener('mousemove', onMove);
// // //       cancelAnimationFrame(raf);
// // //     };
// // //   }, []);

// // //   return (
// // //     <>
// // //       <div className="cursor" ref={cursorRef} />
// // //       <div className="cursor-ring" ref={ringRef} />

// // //       <Header />

// // //       <main className="portfolio-container" ref={containerRef}>

// // //         {/* HOME */}
// // //         <section id="home" className="portfolio-panel">
// // //           <div className="panel-content">
// // //             <HeroSection />
// // //           </div>
// // //         </section>

// // //         {/* ABOUT */}
// // //         <section id="about" className="portfolio-panel">
// // //           <div className="panel-content">
// // //             <AboutUs />
// // //           </div>
// // //         </section>

// // //         {/* PROJECTS */}
// // //         <section id="projects" className="portfolio-panel">
// // //           <div className="panel-content">
// // //             <Projects />
// // //           </div>
// // //         </section>

// // //         {/* VOLUNTEERING */}
// // //         <section id="volunteer" className="portfolio-panel">
// // //           <div className="panel-content">
// // //             <Volunteer />
// // //           </div>
// // //         </section>

// // //         {/* RECOGNITION */}
// // //         <section id="recognition" className="portfolio-panel">
// // //           <div className="panel-content">
// // //             <Recognition />
// // //           </div>
// // //         </section>

// // //         {/* SKILLS */}
// // //         <section id="skills" className="portfolio-panel">
// // //           <div className="panel-content">
// // //             <Skills />
// // //           </div>
// // //         </section>

// // //         {/* CONTACT */}
// // //         <section id="contact" className="portfolio-panel">
// // //           <div className="panel-content">
// // //             <Contact />
// // //             <Footer />
// // //           </div>
// // //         </section>

// // //       </main>
// // //     </>
// // //   );
// // // }

// // // export default App;
// // import './App.css';
// // import Header from './components/Header';
// // import HeroSection from './view/HeroSection';
// // import AboutUs from './view/AboutUs';
// // import Projects from './view/Projects';
// // import Volunteer from './view/Volunteer';
// // import Recognition from './view/Recognition';
// // import Skills from './view/Skills';
// // import Contact from './view/Contact';
// // import Footer from './components/Footer';
// // import { useEffect, useRef, useState } from 'react';

// // function App() {
// //   const cursorRef = useRef();
// //   const ringRef = useRef();
// //   const [activeSection, setActiveSection] = useState('home');

// //   useEffect(() => {
// //     let mx = 0;
// //     let my = 0;
// //     let rx = 0;
// //     let ry = 0;
// //     let raf;

// //     const onMove = (e) => {
// //       mx = e.clientX;
// //       my = e.clientY;
// //     };

// //     document.addEventListener('mousemove', onMove);

// //     const loop = () => {
// //       if (!cursorRef.current || !ringRef.current) return;

// //       cursorRef.current.style.left = mx + 'px';
// //       cursorRef.current.style.top = my + 'px';

// //       rx += (mx - rx) * 0.12;
// //       ry += (my - ry) * 0.12;

// //       ringRef.current.style.left = rx + 'px';
// //       ringRef.current.style.top = ry + 'px';

// //       raf = requestAnimationFrame(loop);
// //     };

// //     raf = requestAnimationFrame(loop);

// //     return () => {
// //       document.removeEventListener('mousemove', onMove);
// //       cancelAnimationFrame(raf);
// //     };
// //   }, []);

// //   /*
// //    * Navigate horizontally between the major pages.
// //    */
// //   const navigateTo = (id) => {
// //     const section = document.getElementById(id);

// //     if (!section) return;

// //     section.scrollIntoView({
// //       behavior: 'smooth',
// //       block: 'nearest',
// //       inline: 'start',
// //     });

// //     setActiveSection(id);
// //   };

// //   /*
// //    * Detect which horizontal page is currently visible.
// //    */
// //   useEffect(() => {
// //     const container = document.querySelector('.portfolio-container');

// //     if (!container) return;

// //     const sections = Array.from(
// //       container.querySelectorAll('.portfolio-panel')
// //     );

// //     const handleScroll = () => {
// //       const containerRect = container.getBoundingClientRect();

// //       let closestSection = sections[0];
// //       let closestDistance = Infinity;

// //       sections.forEach((section) => {
// //         const rect = section.getBoundingClientRect();

// //         const distance = Math.abs(
// //           rect.left - containerRect.left
// //         );

// //         if (distance < closestDistance) {
// //           closestDistance = distance;
// //           closestSection = section;
// //         }
// //       });

// //       if (closestSection) {
// //         setActiveSection(closestSection.id);
// //       }
// //     };

// //     container.addEventListener('scroll', handleScroll, {
// //       passive: true,
// //     });

// //     handleScroll();

// //     return () => {
// //       container.removeEventListener('scroll', handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       {/* Custom cursor */}
// //       <div className="cursor" ref={cursorRef} />
// //       <div className="cursor-ring" ref={ringRef} />

// //       {/* ONE header only */}
// //       <Header
// //         activeSection={activeSection}
// //         onNavigate={navigateTo}
// //       />

// //       <main className="portfolio-container">

// //         {/* =====================================
// //             HOME
// //             ===================================== */}
// //         <section
// //           id="home"
// //           className="portfolio-panel"
// //         >
// //           <HeroSection
// //             onNavigate={navigateTo}
// //           />
// //         </section>

// //         {/* =====================================
// //             ABOUT
// //             ===================================== */}
// //         <section
// //           id="about-me"
// //           className="portfolio-panel"
// //         >
// //           <div className="portfolio-page-content">

// //             <AboutUs />

// //             <Volunteer />

// //             <Recognition />

// //             <Skills />

// //           </div>
// //         </section>

// //         {/* =====================================
// //             PROJECTS
// //             ===================================== */}
// //         <section
// //           id="projects"
// //           className="portfolio-panel"
// //         >
// //           <div className="portfolio-page-content">
// //             <Projects />
// //           </div>
// //         </section>

// //         {/* =====================================
// //             CONTACT
// //             ===================================== */}
// //         <section
// //           id="contact"
// //           className="portfolio-panel"
// //         >
// //           <div className="portfolio-page-content">
// //             <Contact />
// //             <Footer />
// //           </div>
// //         </section>

// //       </main>
// //     </>
// //   );
// // }

// // export default App;
// import './App.css';

// import Header from './components/Header';
// import HeroSection from './view/HeroSection';
// import AboutUs from './view/AboutUs';
// import Projects from './view/Projects';
// import Volunteer from './view/Volunteer';
// import Recognition from './view/Recognition';
// import Skills from './view/Skills';
// import Contact from './view/Contact';
// import Footer from './components/Footer';

// import { useEffect, useRef, useState } from 'react';

// function App() {
//   const cursorRef = useRef();
//   const ringRef = useRef();

//   const [activeSection, setActiveSection] = useState('home');

//   // Custom cursor
//   useEffect(() => {
//     let mx = 0;
//     let my = 0;
//     let rx = 0;
//     let ry = 0;
//     let raf;

//     const onMove = (e) => {
//       mx = e.clientX;
//       my = e.clientY;
//     };

//     document.addEventListener('mousemove', onMove);

//     const loop = () => {
//       if (!cursorRef.current || !ringRef.current) return;

//       cursorRef.current.style.left = `${mx}px`;
//       cursorRef.current.style.top = `${my}px`;

//       rx += (mx - rx) * 0.12;
//       ry += (my - ry) * 0.12;

//       ringRef.current.style.left = `${rx}px`;
//       ringRef.current.style.top = `${ry}px`;

//       raf = requestAnimationFrame(loop);
//     };

//     raf = requestAnimationFrame(loop);

//     return () => {
//       document.removeEventListener('mousemove', onMove);
//       cancelAnimationFrame(raf);
//     };
//   }, []);

//   // Horizontal navigation
//   const navigateTo = (page) => {
//     const container = document.querySelector('.portfolio-container');

//     if (!container) return;

//     const panels = Array.from(
//       container.querySelectorAll('.portfolio-panel')
//     );

//     const target = panels.find(
//       (panel) => panel.dataset.page === page
//     );

//     if (!target) return;

//     target.scrollIntoView({
//       behavior: 'smooth',
//       block: 'nearest',
//       inline: 'start',
//     });

//     setActiveSection(page);
//   };

//   // Detect which horizontal page is currently visible
//   useEffect(() => {
//     const container = document.querySelector('.portfolio-container');

//     if (!container) return;

//     const panels = Array.from(
//       container.querySelectorAll('.portfolio-panel')
//     );

//     const handleScroll = () => {
//       const containerRect = container.getBoundingClientRect();

//       let closestPanel = panels[0];
//       let closestDistance = Infinity;

//       panels.forEach((panel) => {
//         const rect = panel.getBoundingClientRect();

//         const distance = Math.abs(
//           rect.left - containerRect.left
//         );

//         if (distance < closestDistance) {
//           closestDistance = distance;
//           closestPanel = panel;
//         }
//       });

//       if (closestPanel) {
//         setActiveSection(
//           closestPanel.dataset.page
//         );
//       }
//     };

//     container.addEventListener('scroll', handleScroll, {
//       passive: true,
//     });

//     handleScroll();

//     return () => {
//       container.removeEventListener(
//         'scroll',
//         handleScroll
//       );
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className="cursor"
//         ref={cursorRef}
//       />

//       <div
//         className="cursor-ring"
//         ref={ringRef}
//       />

//       <Header
//         activeSection={activeSection}
//         onNavigate={navigateTo}
//       />

//       <main className="portfolio-container">

//         {/* HOME */}
//         <section
//           className="portfolio-panel"
//           data-page="home"
//         >
//           <HeroSection
//             onNavigate={navigateTo}
//           />
//         </section>

//         {/* ABOUT */}
//         <section
//           className="portfolio-panel"
//           data-page="about-me"
//         >
//           <div className="portfolio-page-content">
//             <AboutUs />
//             <Volunteer />
//             <Recognition />
//             <Skills />
//           </div>
//         </section>

//         {/* PROJECTS */}
//         <section
//           className="portfolio-panel"
//           data-page="projects"
//         >
//           <div className="portfolio-page-content">
//             <Projects />
//           </div>
//         </section>

//         {/* CONTACT */}
//         <section
//           className="portfolio-panel"
//           data-page="contact"
//         >
//           <div className="portfolio-page-content">
//             <Contact />
//             <Footer />
//           </div>
//         </section>

//       </main>
//     </>
//   );
// }

// export default App;

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