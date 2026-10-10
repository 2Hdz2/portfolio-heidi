// import { motion } from 'framer-motion';
// import ScrollIndicator from '../components/ScrollIndicator';

// const skills = [
//   // ── Experienced — orbit 1 (closest) ───────────────────────
//   { label: 'Leadership',       level: 'Experienced',   orbit: 1, angle: 0,   color: 'from-pink-500 to-rose-400',     type: 'soft' },
//   { label: 'Team Coord.',      level: 'Experienced',   orbit: 1, angle: 72,  color: 'from-rose-500 to-pink-400',     type: 'soft' },
//   { label: 'Tailwind',         level: 'Experienced',   orbit: 1, angle: 144, color: 'from-violet-400 to-cyan-400',   type: 'ds'   },
//   { label: 'Content Writing',  level: 'Experienced',   orbit: 1, angle: 216, color: 'from-fuchsia-400 to-pink-400',  type: 'soft' },
//   { label: 'Design',           level: 'Experienced',   orbit: 1, angle: 288, color: 'from-pink-400 to-violet-400',   type: 'soft' },

//   // ── Knowledgeable — orbit 2 (middle) ──────────────────────
//   { label: 'Python',           level: 'Knowledgeable', orbit: 2, angle: 0,   color: 'from-teal-400 to-cyan-400',     type: 'ds'   },
//   { label: 'Machine Learning', level: 'Knowledgeable', orbit: 2, angle: 51,  color: 'from-violet-500 to-indigo-400', type: 'ds'   },
//   { label: 'Deep Learning',    level: 'Knowledgeable', orbit: 2, angle: 102, color: 'from-indigo-500 to-violet-400', type: 'ds'   },
//   { label: 'Moderating',       level: 'Knowledgeable', orbit: 2, angle: 153, color: 'from-fuchsia-400 to-rose-400',  type: 'soft' },
//   { label: 'SQL',              level: 'Knowledgeable', orbit: 2, angle: 204, color: 'from-teal-500 to-emerald-400',  type: 'ds'   },
//   { label: 'Mathematics',      level: 'Knowledgeable', orbit: 2, angle: 255, color: 'from-violet-400 to-teal-400',   type: 'ds'   },
//   // { label: 'Event Planning',   level: 'Knowledgeable', orbit: 2, angle: 306, color: 'from-pink-500 to-fuchsia-400',  type: 'soft' },

//   // ── Intermediate — orbit 3 (furthest) ─────────────────────
//   { label: 'Public Speaking',  level: 'Intermediate',  orbit: 3, angle: 90,  color: 'from-pink-400 to-rose-300',     type: 'soft' },
// ];

// const R1 = 110;
// const R2 = 190;
// const R3 = 265;

// const orbitConfig = {
//   1: { r: R1, duration: '20s' },
//   2: { r: R2, duration: '32s' },
//   3: { r: R3, duration: '46s' },
// };

// const angleToDelay = (angleDeg, durationStr) => {
//   const d = parseFloat(durationStr);
//   return `-${((angleDeg / 360) * d).toFixed(2)}s`;
// };

// const Skills = () => (
//   <section id="skills" className="relative scroll-mt-18 px-6 py-16 text-white">
//     <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_70%)]" />

//     <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8">

//       <div className="text-center">
//         <span className="inline-flex rounded-full border border-cyan-300/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-cyan-200">
//           My Skills
//         </span>
//         <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Solar System Skills</h2>
//         <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
//           Closer to the hub = stronger skill. Purple/teal for data science, pink for soft skills.
//         </p>
//         <p className="mx-auto mt-1 max-w-xl text-xs italic text-slate-500">
//           Experienced means a strong foundation — and still actively growing.
//         </p>
//         <div className="mt-4 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
//           <span className="flex items-center gap-2">
//             <span className="inline-block h-1.5 w-5 rounded-full bg-gradient-to-r from-violet-500 to-teal-400" />
//             Data science
//           </span>
//           <span className="flex items-center gap-2">
//             <span className="inline-block h-1.5 w-5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400" />
//             Soft skills
//           </span>
//           <span className="border-l border-white/10 pl-4">Closer orbit = stronger</span>
//         </div>
//       </div>

//       <div className="relative flex h-[580px] w-[580px] flex-shrink-0 items-center justify-center">

//         {[R1, R2, R3].map((r) => (
//           <div
//             key={r}
//             // className="absolute rounded-full border border-dashed border-white/[0.07]"
//            className="absolute rounded-full border border-dashed border-slate-400/30"
//             style={{ width: r * 2, height: r * 2 }}
//           />
//         ))}

//         {[
//           { r: R1, label: 'Experienced'   },
//           { r: R2, label: 'Knowledgeable' },
//           { r: R3, label: 'Intermediate'  },
//         ].map(({ r, label }) => (
//           <span
//             key={label}
//             className="absolute left-1/2 -translate-x-1/2 text-[7px] uppercase tracking-widest text-white/20"
//             style={{ top: `calc(50% - ${r + 7}px)` }}
//           >
//             {label}
//           </span>
//         ))}

//         <div className="absolute z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-gradient-to-br from-violet-500/90 to-cyan-400/20 text-center shadow-[0_0_40px_rgba(56,189,248,0.25)] animate-pulse">
//           <span className="text-[11px] font-semibold leading-tight text-white">My<br />Skills</span>
//           <span className="mt-1 text-[7px] uppercase tracking-[0.15em] text-cyan-200">Hub</span>
//         </div>

//         {skills.map((skill, i) => {
//           const { r, duration } = orbitConfig[skill.orbit];
//           const delay = angleToDelay(skill.angle, duration);
//           return (
//             <motion.div
//               key={skill.label}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.06 }}
//               className="absolute left-1/2 top-1/2 origin-[0_0]"
//               style={{
//                 animation: `orbit${skill.orbit} ${duration} linear infinite`,
//                 animationDelay: delay,
//               }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.12 }}
//                 className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-center backdrop-blur-sm shadow-[0_0_12px_rgba(255,255,255,0.04)]"
//               >
//                 <div className={`mb-1 h-1.5 w-9 rounded-full bg-gradient-to-r ${skill.color}`} />
//                 <p className="text-[10px] font-semibold leading-tight text-white">{skill.label}</p>
//                 <p className="text-[8px] uppercase tracking-[0.12em] text-slate-400">{skill.level}</p>
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>

//       <p className="text-xs text-slate-600">Skills orbit the hub — the closer the ring, the stronger the skill</p>
//     </div>

//     <ScrollIndicator />

//     <style>{`
//       @keyframes orbit1 {
//         from { transform: rotate(0deg)   translateX(${R1}px) rotate(0deg);   }
//         to   { transform: rotate(360deg) translateX(${R1}px) rotate(-360deg); }
//       }
//       @keyframes orbit2 {
//         from { transform: rotate(0deg)   translateX(${R2}px) rotate(0deg);   }
//         to   { transform: rotate(360deg) translateX(${R2}px) rotate(-360deg); }
//       }
//       @keyframes orbit3 {
//         from { transform: rotate(0deg)   translateX(${R3}px) rotate(0deg);   }
//         to   { transform: rotate(360deg) translateX(${R3}px) rotate(-360deg); }
//       }
//     `}</style>
//   </section>
// );

// export default Skills;
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from '../components/ScrollIndicator';

const skills = [
  { label: 'Leadership',       level: 'Experienced',   orbit: 1, angle: 0,   color: 'from-pink-500 to-rose-400',     type: 'soft' },
  { label: 'Team Coord.',      level: 'Experienced',   orbit: 1, angle: 72,  color: 'from-rose-500 to-pink-400',     type: 'soft' },
  { label: 'Tailwind',         level: 'Experienced',   orbit: 1, angle: 144, color: 'from-violet-400 to-cyan-400',   type: 'ds'   },
  { label: 'Content Writing',  level: 'Experienced',   orbit: 1, angle: 216, color: 'from-fuchsia-400 to-pink-400',  type: 'soft' },
  { label: 'Design',           level: 'Experienced',   orbit: 1, angle: 288, color: 'from-pink-400 to-violet-400',   type: 'soft' },
  { label: 'Python',           level: 'Knowledgeable', orbit: 2, angle: 0,   color: 'from-teal-400 to-cyan-400',     type: 'ds'   },
  { label: 'Machine Learning', level: 'Knowledgeable', orbit: 2, angle: 51,  color: 'from-violet-500 to-indigo-400', type: 'ds'   },
  { label: 'Deep Learning',    level: 'Knowledgeable', orbit: 2, angle: 102, color: 'from-indigo-500 to-violet-400', type: 'ds'   },
  { label: 'Moderating',       level: 'Knowledgeable', orbit: 2, angle: 153, color: 'from-fuchsia-400 to-rose-400',  type: 'soft' },
  { label: 'SQL',              level: 'Knowledgeable', orbit: 2, angle: 204, color: 'from-teal-500 to-emerald-400',  type: 'ds'   },
  { label: 'Mathematics',      level: 'Knowledgeable', orbit: 2, angle: 255, color: 'from-violet-400 to-teal-400',   type: 'ds'   },
  { label: 'Public Speaking',  level: 'Intermediate',  orbit: 3, angle: 90,  color: 'from-pink-400 to-rose-300',     type: 'soft' },
];

// Desktop orbit radii
const R1d = 110, R2d = 190, R3d = 265;
// Mobile orbit radii (scaled down)
const R1m = 68,  R2m = 116, R3m = 150;

const angleToDelay = (angleDeg, durationStr) => {
  const d = parseFloat(durationStr);
  return `-${((angleDeg / 360) * d).toFixed(2)}s`;
};

const OrbitDiagram = ({ R1, R2, R3, size }) => {
  const orbitConfig = {
    1: { r: R1, duration: '20s' },
    2: { r: R2, duration: '32s' },
    3: { r: R3, duration: '46s' },
  };

  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      {/* Orbit rings */}
      {[R1, R2, R3].map((r) => (
        <div key={r} className="absolute rounded-full border border-dashed border-slate-400/30"
          style={{ width: r * 2, height: r * 2 }} />
      ))}

      {/* Orbit labels */}
      {[{ r: R1, label: 'Experienced' }, { r: R2, label: 'Knowledgeable' }, { r: R3, label: 'Intermediate' }].map(({ r, label }) => (
        <span key={label} className="absolute left-1/2 -translate-x-1/2 text-[6px] sm:text-[7px] uppercase tracking-widest text-white/20"
          style={{ top: `calc(50% - ${r + 7}px)` }}>
          {label}
        </span>
      ))}

      {/* Hub */}
      <div className="absolute z-10 flex h-14 w-14 sm:h-20 sm:w-20 flex-col items-center justify-center rounded-full bg-gradient-to-br from-violet-500/90 to-cyan-400/20 text-center shadow-[0_0_40px_rgba(56,189,248,0.25)] animate-pulse">
        <span className="text-[9px] sm:text-[11px] font-semibold leading-tight text-white">My<br />Skills</span>
        <span className="mt-0.5 text-[6px] sm:text-[7px] uppercase tracking-[0.15em] text-cyan-200">Hub</span>
      </div>

      {/* Skill nodes */}
      {skills.map((skill, i) => {
        const { r, duration } = orbitConfig[skill.orbit];
        const delay = angleToDelay(skill.angle, duration);
        return (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="absolute left-1/2 top-1/2 origin-[0_0]"
            style={{
              animation: `orbit${skill.orbit}_${size} ${duration} linear infinite`,
              animationDelay: delay,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.12 }}
              className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-full border border-white/10 bg-slate-900/80 px-2 py-1 sm:px-3 sm:py-2 text-center backdrop-blur-sm shadow-[0_0_12px_rgba(255,255,255,0.04)]"
            >
              <div className={`mb-0.5 sm:mb-1 h-1 w-6 sm:h-1.5 sm:w-9 rounded-full bg-gradient-to-r ${skill.color}`} />
              <p className="text-[8px] sm:text-[10px] font-semibold leading-tight text-white">{skill.label}</p>
              <p className="text-[6px] sm:text-[8px] uppercase tracking-[0.12em] text-slate-400">{skill.level}</p>
            </motion.div>
          </motion.div>
        );
      })}

      <style>{`
        @keyframes orbit1_${size} {
          from { transform: rotate(0deg)   translateX(${R1}px) rotate(0deg);   }
          to   { transform: rotate(360deg) translateX(${R1}px) rotate(-360deg); }
        }
        @keyframes orbit2_${size} {
          from { transform: rotate(0deg)   translateX(${R2}px) rotate(0deg);   }
          to   { transform: rotate(360deg) translateX(${R2}px) rotate(-360deg); }
        }
        @keyframes orbit3_${size} {
          from { transform: rotate(0deg)   translateX(${R3}px) rotate(0deg);   }
          to   { transform: rotate(360deg) translateX(${R3}px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

// Phone diagram: fixed 360px design, scaled down to fit narrow screens so the
// outer orbit is never clipped.
const MOBILE_ORBIT_SIZE = 360;

const ScaledOrbit = () => {
  const [scale, setScale] = useState(() =>
    Math.min(1, (window.innerWidth - 16) / MOBILE_ORBIT_SIZE)
  );

  useEffect(() => {
    const onResize = () =>
      setScale(Math.min(1, (window.innerWidth - 16) / MOBILE_ORBIT_SIZE));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div
      style={{
        width: MOBILE_ORBIT_SIZE * scale,
        height: MOBILE_ORBIT_SIZE * scale,
      }}
    >
      <div
        style={{
          width: MOBILE_ORBIT_SIZE,
          height: MOBILE_ORBIT_SIZE,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        <OrbitDiagram R1={R1m} R2={R2m} R3={R3m} size={MOBILE_ORBIT_SIZE} />
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="relative scroll-mt-18 px-4 sm:px-6 py-16 sm:py-24 text-white overflow-hidden">
    <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_70%)]" />

    <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8">
      {/* Header */}
      <div className="text-center px-2">
        <span className="inline-flex rounded-full border border-cyan-300/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-cyan-200">
          My Skills
        </span>
        <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">Solar System Skills</h2>
        <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm text-slate-300">
          Closer to the hub = stronger skill. Purple/teal for data science, pink for soft skills.
        </p>
        <p className="mx-auto mt-1 max-w-xl text-xs italic text-slate-500">
          Experienced means a strong foundation — and still actively growing.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-5 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-5 rounded-full bg-gradient-to-r from-violet-500 to-teal-400" />
            Data science
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400" />
            Soft skills
          </span>
          <span className="border-l border-white/10 pl-3 sm:pl-4">Closer orbit = stronger</span>
        </div>
      </div>

      {/* Mobile diagram (small) */}
      <div className="block sm:hidden">
        <ScaledOrbit />
      </div>

      {/* Desktop diagram (full size) */}
      <div className="hidden sm:block">
        <OrbitDiagram R1={R1d} R2={R2d} R3={R3d} size={580} />
      </div>

      {/* <p className="text-xs text-slate-600 text-center">Skills orbit the hub — the closer the ring, the stronger the skill</p> */}
    </div>

    {/* <ScrollIndicator /> */}
  </section>
);

export default Skills;