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
// import { useEffect, useRef } from "react";

// function App() {
//   const cursorRef = useRef();
//   const ringRef = useRef();

//   useEffect(() => {
//     let mx = 0, my = 0, rx = 0, ry = 0;
//     let raf;

//     const onMove = e => { mx = e.clientX; my = e.clientY; };
//     document.addEventListener('mousemove', onMove);

//     const loop = () => {
//       cursorRef.current.style.left = mx + 'px';
//       cursorRef.current.style.top  = my + 'px';
//       rx += (mx - rx) * 0.12;
//       ry += (my - ry) * 0.12;
//       ringRef.current.style.left = rx + 'px';
//       ringRef.current.style.top  = ry + 'px';
//       raf = requestAnimationFrame(loop);
//     };
//     raf = requestAnimationFrame(loop);
//   return (
//     <>
//       <Header />
//       <HeroSection />
//       <AboutUs />
//       <Projects />
//       <Volunteer />
//       <Recognition />
//       <Skills />
//       <Contact />
//       <Footer />
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
import { useEffect, useRef, useState } from "react";

function App() {
  const cursorRef = useRef();
  const ringRef = useRef();
  const heroRef = useRef();
  const [isHeroInView, setIsHeroInView] = useState(true);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf;

    const onMove = e => { mx = e.clientX; my = e.clientY; };
    document.addEventListener('mousemove', onMove);

    const loop = () => {
      if (!cursorRef.current || !ringRef.current) return;
      cursorRef.current.style.left = mx + 'px';
      cursorRef.current.style.top  = my + 'px';
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ringRef.current.style.left = rx + 'px';
      ringRef.current.style.top  = ry + 'px';
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Track hero section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
      {!isHeroInView && <Header />}
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <AboutUs />
      <Projects />
      <Volunteer />
      <Recognition />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;