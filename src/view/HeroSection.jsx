
import { useMemo, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import myPhoto from '../assets/heidi.webp';
import ScrollIndicator from '../components/ScrollIndicator';
// import Header from '../components/Header';

const bgWords = [
  'Data Scientist', 'Computational Astrophysicist', 'IT Undergraduate',
  'Public Speaker', 'Moderator', 'Content Writer', 'Technical Skills',
  'UI/UX Designer', 'Software Engineer', 'Astronomy Enthusiast',
  'Research', 'Inspiration', 'Innovation', 'Aspiring', 'Explorer',
  'Python', 'React', 'Machine Learning', 'Space Tech', 'Open Source',
];

const placedWords = bgWords.map((word, i) => ({
  word,
  top: `${8 + (i * 4.5) % 88}%`,
  left: `${3 + (i * 13 + (i % 3) * 17) % 90}%`,
  opacity: 0.045 + (i % 4) * 0.018,
  size: i % 5 === 0 ? '1.1rem' : i % 3 === 0 ? '0.85rem' : '0.72rem',
  rotate: -12 + (i * 7) % 28,
  color: i % 3 === 0 ? '#9d41cf' : i % 3 === 1 ? '#7c90db' : '#ffffff',
}));

const HeroSection = ({ onNavigate }) => {
  // Phone-sized screens get a much bigger photo + WELCOME text
  const [isPhone, setIsPhone] = useState(
    () => window.matchMedia('(max-width: 767px)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const onChange = (e) => setIsPhone(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  const welcomeSize = isPhone ? 'min(14vw, 5rem)' : 'clamp(2rem, 5.5vw, 5.5rem)';
  const smallSize = isPhone ? 'clamp(0.85rem, 4.4vw, 1.4rem)' : 'clamp(0.8rem, calc(2.2vw + 0.3rem), 1.6rem)';

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    let stars = [], nebulas = [], shooters = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 2500);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.2,
          alpha: Math.random() * 0.7 + 0.2,
          twinkle: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.012 + 0.003,
          color: Math.random() > 0.85 ? '#7c90db' : Math.random() > 0.7 ? '#9d41cf' : '#ffffff',
        });
      }
      nebulas = Array.from({ length: 7 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 260 + 100,
        color: Math.random() > 0.5
          ? `rgba(157,65,207,${(Math.random() * 0.08 + 0.02).toFixed(3)})`
          : `rgba(124,144,219,${(Math.random() * 0.06 + 0.02).toFixed(3)})`,
      }));
    };

    const spawnShooter = () => {
      const angle = (Math.random() * 25 + 10) * Math.PI / 180;
      const speed = Math.random() * 9 + 7;
      shooters.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: Math.floor(Math.random() * 40 + 25),
        maxLife: 65,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nebulas.forEach(n => {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        g.addColorStop(0, n.color); g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      });
      stars.forEach(s => {
        s.twinkle += s.speed;
        const a = s.alpha * (0.45 + 0.55 * Math.sin(s.twinkle));
        ctx.globalAlpha = a;
        ctx.fillStyle = s.color;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
        if (s.r > 1.1 && Math.sin(s.twinkle) > 0.85) {
          ctx.globalAlpha = a * 0.4;
          ctx.strokeStyle = s.color; ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(s.x - s.r * 3, s.y); ctx.lineTo(s.x + s.r * 3, s.y);
          ctx.moveTo(s.x, s.y - s.r * 3); ctx.lineTo(s.x, s.y + s.r * 3);
          ctx.stroke();
        }
      });
      ctx.globalAlpha = 1;
      if (Math.random() < 0.003) spawnShooter();
      shooters = shooters.filter(s => s.life > 0);
      shooters.forEach(s => {
        const progress = 1 - s.life / s.maxLife;
        const g = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 16, s.y - s.vy * 16);
        g.addColorStop(0, `rgba(255,255,255,${0.85 * (1 - progress)})`);
        g.addColorStop(1, 'transparent');
        ctx.strokeStyle = g; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 16, s.y - s.vy * 16); ctx.stroke();
        s.x += s.vx; s.y += s.vy; s.life--;
      });
      raf = requestAnimationFrame(draw);
    };

    resize(); draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  const letterVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.09, duration: 0.5, ease: 'easeOut' },
    }),
    hover: { scale: 1.2, y: -4 },
  }), []);

  const blockVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    setMouse({
      x: (event.clientX - left - width / 2) / width,
      y: (event.clientY - top - height / 2) / height,
    });
  };

  const outlineLetter = (letter, index) => (
    <motion.span
      key={`ol-${letter}-${index}`}
      custom={index}
      variants={letterVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.15 }}
      style={{
        display: 'inline-block',
        fontFamily: "'Orbitron', 'Exo 2', sans-serif",
        fontSize: welcomeSize,
        fontWeight: 900,
        color: 'transparent',
        WebkitTextStroke: '2px rgba(255,255,255,0.96)',
        letterSpacing: '0.04em',
        lineHeight: 1,
        cursor: 'default',
        filter: 'drop-shadow(0 0 16px rgba(255,255,255,0.7)) drop-shadow(0 0 20px rgba(124,144,219,0.25))',
      }}
    >
      {letter}
    </motion.span>
  );

  const solidLetter = (letter, index) => (
    <motion.span
      key={`sl-${letter}-${index}`}
      custom={index}
      variants={letterVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.2, y: -4 }}
      style={{
        display: 'inline-block',
        fontFamily: "'Orbitron', 'Exo 2', sans-serif",
        fontSize: welcomeSize,
        fontWeight: 900,
        color: 'transparent',
        background: 'linear-gradient(160deg, #e0f2fe 0%, #7dd3fc 20%, #3b82f6 50%, #4f46e5 75%, #312e81 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        WebkitTextStroke: '0.9px rgba(255,255,255,0.86)',
        letterSpacing: '0.04em',
        lineHeight: 1,
        cursor: 'default',
        textShadow: '0 0 18px rgba(56,189,248,0.9), 0 0 30px rgba(14,165,233,0.55), 0 0 50px rgba(34,211,238,0.35)',
      }}
    >
      {letter}
    </motion.span>
  );

  const lightPurpleStyle = {
    background: 'linear-gradient(135deg, #e0aaff 0%, #c77dff 45%, #9d4edd 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const welcomeLetters = ['W', 'E', 'L', 'C', 'O', 'M', 'E', 'S'];
  const nameChars = Array.from('HEIDI HETTIARACHCHI');

  return (
    <div>
      {/* <Header /> */}
      <section
        id="hero"
        className="relative overflow-hidden bg-black text-white"
        style={{ height: '100vh', maxHeight: '100vh' }}
        onMouseMove={handleMouseMove}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.9 }} />

        {/* Background scattered words */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {placedWords.map(({ word, top, left, opacity, size, rotate, color }, i) => (
            <span
              key={i}
              className="absolute font-mono select-none hidden sm:block"
              style={{ top, left, opacity, fontSize: size, transform: `rotate(${rotate}deg)`, color }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Hero content */}
        <div
          className="relative flex flex-col items-center justify-center px-4 pt-24 pb-8 md:pt-16 md:pb-6"
          style={{ height: '100%', zIndex: 10, overflow: 'hidden' }}
        >
          {/* Name */}
          <motion.div
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center mb-1"
            style={{ gap: '0.06em' }}
          >
            {nameChars.map((ch, i) => (
              ch === ' ' ? (
                <span key={`sp-${i}`} style={{ width: '0.45em' }} />
              ) : (
                <motion.span
                  key={`name-${i}-${ch}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  style={{
                    display: 'inline-block',
                    fontFamily: "'Orbitron', 'Exo 2', sans-serif",
                    fontSize: smallSize,
                    fontWeight: 500,
                    ...lightPurpleStyle,
                    letterSpacing: '0.14em',
                    lineHeight: 1,
                    cursor: 'default',
                  }}
                >
                  {ch}
                </motion.span>
              )
            ))}
          </motion.div>

          {/* Photo + WELCOME block */}
          <div
            style={{
              position: 'relative',
              width: isPhone ? 'min(94vw, 460px)' : 'clamp(260px, 62vw, 560px)',
              transform: `translate3d(${mouse.x * 6}px, ${mouse.y * 4}px, 0)`,
              transition: 'transform 0.1s ease',
            }}
          >
            {/* WELCOME behind */}
            <div style={{
              position: 'absolute', top: '50%', left: 0, right: 0,
              transform: 'translateY(-50%)',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              gap: '0.04em', zIndex: 1, pointerEvents: 'none',
            }}>
              {welcomeLetters.map((l, i) => solidLetter(l, i))}
            </div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', paddingTop: '0.6rem', paddingBottom: '0.6rem' }}
            >
              <img
                src={myPhoto}
                alt="Heidi Hettiarachchi"
                style={{
                  width: isPhone ? 'min(64vw, 280px)' : 'clamp(160px, 28vw, 300px)',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  borderRadius: '1.5rem',
                  boxShadow: '0 28px 80px rgba(20, 20, 40, 0.45)',
                }}
              />
            </motion.div>

            {/* WELCOME in front */}
            <div style={{
              position: 'absolute', top: '50%', left: 0, right: 0,
              transform: 'translateY(-50%)',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              gap: '0.04em', zIndex: 3, pointerEvents: 'none',
            }}>
              {welcomeLetters.map((l, i) => outlineLetter(l, i))}
            </div>
          </div>

          {/* YOU */}
          <motion.div
            variants={blockVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{ marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.08em' }}
          >
            {['Y', 'O', 'U'].map((l, i) => (
              <motion.span
                key={`you-${l}-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                style={{
                  display: 'inline-block',
                  fontFamily: "'Orbitron', 'Exo 2', sans-serif",
                  fontSize: smallSize,
                  fontWeight: 500,
                  ...lightPurpleStyle,
                  letterSpacing: '0.14em',
                  lineHeight: 1,
                  cursor: 'default',
                }}
              >
                {l}
              </motion.span>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.9, ease: 'easeOut' }}
            style={{
              marginTop: '0.5rem',
              height: '1px',
              width: 'clamp(120px, 35vw, 340px)',
              background: 'linear-gradient(90deg, transparent, #9d41cf, #7c90db, transparent)',
              transformOrigin: 'center',
            }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            style={{
              marginTop: '0.35rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,1)',
              fontFamily: "'Exo 2', sans-serif",
              textAlign: 'center',
            }}
          >
            {/* · ASPIRING DATA SCIENTIST · */}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.7 }}
            className="mt-3 flex flex-wrap justify-center items-center gap-3 px-4"
          >

            <motion.button
              type="button"
              onClick={() => onNavigate('about-me')}
              whileHover={{
                y: -3,
                boxShadow: '0 0 36px rgba(157,65,207,0.55)',
              }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #9d41cf, #7c90db)',
                color: '#ffffff',
                padding: '0.8rem 1.8rem',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: 'clamp(0.72rem, 1.5vw, 0.82rem)',
                letterSpacing: '0.08em',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(157,65,207,0.3)',
              }}
            >
              Explore Portfolio
              <ArrowRight size={15} />
            </motion.button>

            {/* <motion.a
              href="#contact"
              whileHover={{ borderColor: '#9d41cf', color: '#9d41cf', boxShadow: '0 0 16px rgba(157,65,207,0.25)' }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'transparent',
                color: 'rgba(255,255,255,0.7)',
                padding: '0.8rem 1.8rem',
                borderRadius: '9999px',
                border: '1px solid rgba(157,65,207,0.38)',
                fontWeight: 600,
                fontSize: 'clamp(0.72rem, 1.5vw, 0.82rem)',
                letterSpacing: '0.08em',
                textDecoration: 'none',
              }}
            >
              Contact Me
            </motion.a> */}
            <motion.button
              type="button"
              onClick={() => onNavigate('contact')}
              whileHover={{
                borderColor: '#9d41cf',
                color: '#9d41cf',
                boxShadow: '0 0 16px rgba(157,65,207,0.25)',
              }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'transparent',
                color: 'rgba(255,255,255,0.7)',
                padding: '0.8rem 1.8rem',
                borderRadius: '9999px',
                border: '1px solid rgba(157,65,207,0.38)',
                fontWeight: 600,
                fontSize: 'clamp(0.72rem, 1.5vw, 0.82rem)',
                letterSpacing: '0.08em',
                cursor: 'pointer',
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* <ScrollIndicator /> */}
      </section>
    </div>
  );
};

export default HeroSection;