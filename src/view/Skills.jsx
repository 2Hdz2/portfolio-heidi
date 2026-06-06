// // // // import { motion } from 'framer-motion';
// // // // import ScrollIndicator from '../components/ScrollIndicator';

// // // // const skills = [
// // // //   { label: 'React', position: { top: '12%', left: '50%' }, color: 'from-cyan-400 to-blue-500', level: 'Expert' },
// // // //   { label: 'Java', position: { top: '35%', left: '85%' }, color: 'from-orange-400 to-amber-500', level: 'Advanced' },
// // // //   { label: 'Python', position: { top: '74%', left: '82%' }, color: 'from-green-400 to-cyan-400', level: 'Advanced' },
// // // //   { label: 'UI/UX', position: { top: '88%', left: '50%' }, color: 'from-violet-500 to-fuchsia-500', level: 'Expert' },
// // // //   { label: 'Figma', position: { top: '74%', left: '18%' }, color: 'from-pink-400 to-violet-500', level: 'Advanced' },
// // // //   { label: 'Tailwind', position: { top: '35%', left: '10%' }, color: 'from-cyan-400 to-slate-500', level: 'Advanced' },
// // // //   { label: 'Machine Learning', position: { top: '18%', left: '22%' }, color: 'from-cyan-300 to-lime-300', level: 'Intermediate' },
// // // //   { label: 'Data Science', position: { top: '56%', left: '48%' }, color: 'from-blue-400 to-violet-400', level: 'Intermediate' },
// // // //   { label: 'Leadership', position: { top: '54%', left: '14%' }, color: 'from-pink-400 to-rose-400', level: 'Expert' },
// // // //   { label: 'Public Speaking', position: { top: '52%', left: '70%' }, color: 'from-cyan-400 to-pink-400', level: 'Advanced' },
// // // // ];

// // // // const Skills = () => {
// // // //   return (
// // // //     <section id="skills" className="relative scroll-mt-18 px-6 py-24 text-white">
// // // //       <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_70%)]" />
// // // //       <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12">
// // // //         <div className="text-center">
// // // //           <span className="inline-flex rounded-full border border-cyan-300/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-cyan-200">
// // // //             My Skills
// // // //           </span>
// // // //           <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Solar System Skills</h2>
// // // //           <p className="mx-auto mt-4 max-w-2xl text-slate-300">
// // // //             A galaxy-inspired skill map with orbiting planets, levels, and glow effects to showcase what powers my work.
// // // //           </p>
// // // //         </div>

// // // //         <div className="relative aspect-square w-full max-w-4xl rounded-[3rem] border border-white/10 bg-slate-950/70 p-10 shadow-[0_0_80px_rgba(124,58,237,0.12)] backdrop-blur-xl">
// // // //           <div className="absolute inset-0 rounded-[3rem] border border-cyan-300/10" />
// // // //           <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_55%)]" />
// // // //           <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-violet-500/90 to-cyan-400/20 shadow-[0_0_50px_rgba(56,189,248,0.25)]">
// // // //             <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full text-center text-white">
// // // //               <span className="text-2xl font-semibold">My Skills</span>
// // // //               <span className="mt-2 text-sm uppercase tracking-[0.2em] text-cyan-200">Central Hub</span>
// // // //             </div>
// // // //           </div>

// // // //           {skills.map((skill, index) => (
// // // //             <motion.div
// // // //               key={skill.label}
// // // //               initial={{ opacity: 0, scale: 0.78 }}
// // // //               whileInView={{ opacity: 1, scale: 1 }}
// // // //               whileHover={{ scale: 1.08 }}
// // // //               viewport={{ once: true, amount: 0.2 }}
// // // //               transition={{ duration: 0.5, delay: index * 0.05 }}
// // // //               className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-center shadow-[0_0_20px_rgba(255,255,255,0.04)]"
// // // //               style={{ top: skill.position.top, left: skill.position.left }}
// // // //             >
// // // //               <div className={`mb-2 h-2 w-14 rounded-full bg-linear-to-r ${skill.color}`} />
// // // //               <p className="text-sm font-semibold text-white">{skill.label}</p>
// // // //               <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">{skill.level}</p>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //       <ScrollIndicator />
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Skills;

// // // // Skills.jsx
// // // import { motion } from 'framer-motion';
// // // import ScrollIndicator from '../components/ScrollIndicator';

// // // // purple/teal = data science   pink/coral = soft skills
// // // const skills = [
// // //   // ── Data Science ──────────────────────────────────────────
// // //   { label: 'React',           position: { top: '10%', left: '50%' }, color: 'from-violet-500 to-purple-400',  level: 'Intermediate'       },
// // //   { label: 'Python',          position: { top: '30%', left: '82%' }, color: 'from-teal-400 to-cyan-400',     level: 'Intermediate'     },
// // //   { label: 'Machine Learning', position: { top: '68%', left: '78%' }, color: 'from-violet-400 to-indigo-400', level: 'Intermediate' },
// // //   { label: 'Data Science',    position: { top: '88%', left: '50%' }, color: 'from-teal-500 to-emerald-400',  level: 'Intermediate' },
// // //   { label: 'Tailwind',        position: { top: '30%', left: '18%' }, color: 'from-violet-400 to-cyan-400',   level: 'Advanced'     },
// // //   // ── Soft Skills ───────────────────────────────────────────
// // //   { label: 'Leadership',      position: { top: '10%', left: '22%' }, color: 'from-pink-500 to-rose-400',    level: 'Advanced'       },
// // //   { label: 'Content Writing', position: { top: '10%', left: '78%' }, color: 'from-pink-400 to-fuchsia-400', level: 'Advanced'     },
// // //   { label: 'Public Speaking', position: { top: '68%', left: '22%' }, color: 'from-rose-400 to-pink-300',    level: 'Advanced'     },
// // //   { label: 'Team Coordination',position: { top: '50%', left: '12%' }, color: 'from-pink-500 to-rose-500',    level: 'Advanced'       },
// // // ];

// // // const Skills = () => {
// // //   return (
// // //     <section id="skills" className="relative scroll-mt-18 px-6 py-16 text-white">
// // //       <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_70%)]" />

// // //       <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8">

// // //         <div className="text-center">
// // //           <span className="inline-flex rounded-full border border-cyan-300/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-cyan-200">
// // //             My Skills
// // //           </span>
// // //           <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Solar System Skills</h2>
// // //           <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
// // //             A galaxy-inspired skill map — purple/teal for data science, pink for soft skills.
// // //           </p>

// // //           {/* Legend */}
// // //           <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-400">
// // //             <span className="flex items-center gap-2">
// // //               <span className="h-2 w-6 rounded-full bg-gradient-to-r from-violet-500 to-teal-400" />
// // //               Data science
// // //             </span>
// // //             <span className="flex items-center gap-2">
// // //               <span className="h-2 w-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-400" />
// // //               Soft skills
// // //             </span>
// // //           </div>
// // //         </div>

// // //         {/* Orbit container — smaller: max-w-2xl, fixed height h-[520px] */}
// // //         <div className="relative h-[520px] w-full max-w-2xl rounded-[2.5rem] border border-white/10 bg-slate-950/70 shadow-[0_0_60px_rgba(124,58,237,0.12)] backdrop-blur-xl">
// // //           <div className="absolute inset-0 rounded-[2.5rem] border border-cyan-300/10" />
// // //           <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.06),transparent_55%)]" />

// // //           {/* Central hub */}
// // //           <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-500/90 to-cyan-400/20 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
// // //             <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full text-center text-white">
// // //               <span className="text-base font-semibold">My Skills</span>
// // //               <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-cyan-200">Central Hub</span>
// // //             </div>
// // //           </div>

// // //           {skills.map((skill, index) => (
// // //             <motion.div
// // //               key={skill.label}
// // //               initial={{ opacity: 0, scale: 0.78 }}
// // //               whileInView={{ opacity: 1, scale: 1 }}
// // //               whileHover={{ scale: 1.08 }}
// // //               viewport={{ once: true, amount: 0.2 }}
// // //               transition={{ duration: 0.5, delay: index * 0.05 }}
// // //               className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-center shadow-[0_0_16px_rgba(255,255,255,0.04)]"
// // //               style={{ top: skill.position.top, left: skill.position.left }}
// // //             >
// // //               <div className={`mb-1.5 h-1.5 w-10 rounded-full bg-gradient-to-r ${skill.color}`} />
// // //               <p className="text-xs font-semibold text-white">{skill.label}</p>
// // //               <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">{skill.level}</p>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <ScrollIndicator />
// // //     </section>
// // //   );
// // // };

// // // export default Skills;
// // import { motion } from 'framer-motion';
// // import ScrollIndicator from '../components/ScrollIndicator';

// // // Orbit radius maps to skill level — Expert = closest, Intermediate = furthest
// // // angle: degrees around the hub (0 = top, clockwise)
// // const skills = [
// //   // ── Expert — orbit 1 (closest) ────────────────────────────
// //   { label: 'Leadership',       level: 'Expert',       orbit: 1, angle: 0,   color: 'from-pink-500 to-rose-400',     type: 'soft' },
// //   { label: 'Team Coord.',      level: 'Expert',       orbit: 1, angle: 180, color: 'from-rose-500 to-pink-400',     type: 'soft' },

// //   // ── Advanced — orbit 2 (middle) ────────────────────────────
// //   { label: 'Python',           level: 'Advanced',     orbit: 2, angle: 0,   color: 'from-teal-400 to-cyan-400',     type: 'ds'   },
// //   { label: 'Tailwind',         level: 'Advanced',     orbit: 2, angle: 90,  color: 'from-violet-400 to-cyan-400',   type: 'ds'   },
// //   { label: 'Public Speaking',  level: 'Advanced',     orbit: 2, angle: 180, color: 'from-pink-400 to-rose-300',     type: 'soft' },
// //   { label: 'Content Writing',  level: 'Advanced',     orbit: 2, angle: 270, color: 'from-fuchsia-400 to-pink-400',  type: 'soft' },

// //   // ── Intermediate — orbit 3 (furthest) ─────────────────────
// //   { label: 'Machine Learning', level: 'Intermediate', orbit: 3, angle: 45,  color: 'from-violet-500 to-indigo-400', type: 'ds'   },
// //   { label: 'Data Science',     level: 'Intermediate', orbit: 3, angle: 180, color: 'from-teal-500 to-emerald-400',  type: 'ds'   },
// //   { label: 'Event Planning',   level: 'Intermediate', orbit: 3, angle: 315, color: 'from-pink-500 to-fuchsia-400',  type: 'soft' },
// // ];

// // // Orbit config — radius and animation duration per orbit ring
// // const orbitConfig = {
// //   1: { radius: 'w-[180px] h-[180px]', duration: '18s',  translateX: 'translateX(90px)'  },
// //   2: { radius: 'w-[310px] h-[310px]', duration: '28s',  translateX: 'translateX(155px)' },
// //   3: { radius: 'w-[430px] h-[430px]', duration: '40s',  translateX: 'translateX(215px)' },
// // };

// // // Converts angle (degrees, 0=top, CW) and orbit radius into CSS animation-delay offset.
// // // delay = -(angle / 360) * duration  — places the planet at its starting angle.
// // const angleToDelay = (angle, durationStr) => {
// //   const duration = parseFloat(durationStr);
// //   return `-${((angle / 360) * duration).toFixed(2)}s`;
// // };

// // const Skills = () => {
// //   return (
// //     <section id="skills" className="relative scroll-mt-18 px-6 py-16 text-white">
// //       <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_70%)]" />

// //       <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8">

// //         {/* Heading */}
// //         <div className="text-center">
// //           <span className="inline-flex rounded-full border border-cyan-300/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-cyan-200">
// //             My Skills
// //           </span>
// //           <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Solar System Skills</h2>
// //           <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
// //             Closer to the hub = stronger skill. Purple/teal for data science, pink for soft skills.
// //           </p>

// //           {/* Legend */}
// //           <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-400">
// //             <span className="flex items-center gap-2">
// //               <span className="h-1.5 w-5 rounded-full bg-gradient-to-r from-violet-500 to-teal-400 inline-block" />
// //               Data science
// //             </span>
// //             <span className="flex items-center gap-2">
// //               <span className="h-1.5 w-5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 inline-block" />
// //               Soft skills
// //             </span>
// //             <span className="border-l border-white/10 pl-4">Closer orbit = stronger</span>
// //           </div>
// //         </div>

// //         {/* Solar system */}
// //         <div className="relative flex h-[480px] w-[480px] flex-shrink-0 items-center justify-center">

// //           {/* Orbit rings */}
// //           <div className="absolute h-[180px] w-[180px] rounded-full border border-dashed border-white/[0.08]" />
// //           <div className="absolute h-[310px] w-[310px] rounded-full border border-dashed border-white/[0.06]" />
// //           <div className="absolute h-[430px] w-[430px] rounded-full border border-dashed border-white/[0.04]" />

// //           {/* Orbit level labels */}
// //           {[
// //             { top: 'top-[calc(50%-97px)]',  label: 'Expert'       },
// //             { top: 'top-[calc(50%-162px)]', label: 'Advanced'     },
// //             { top: 'top-[calc(50%-222px)]', label: 'Intermediate' },
// //           ].map(({ top, label }) => (
// //             <span
// //               key={label}
// //               className={`absolute left-1/2 -translate-x-1/2 text-[7px] uppercase tracking-widest text-white/20 ${top}`}
// //             >
// //               {label}
// //             </span>
// //           ))}

// //           {/* Central hub */}
// //           <div className="absolute z-10 flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-violet-500/90 to-cyan-400/20 text-center shadow-[0_0_40px_rgba(56,189,248,0.25)] animate-pulse">
// //             <span className="text-[10px] font-semibold leading-tight text-white">My<br />Skills</span>
// //             <span className="mt-1 text-[7px] uppercase tracking-[0.15em] text-cyan-200">Hub</span>
// //           </div>

// //           {/* Orbiting skill planets */}
// //           {skills.map((skill, i) => {
// //             const cfg = orbitConfig[skill.orbit];
// //             const delay = angleToDelay(skill.angle, cfg.duration);

// //             return (
// //               <motion.div
// //                 key={skill.label}
// //                 initial={{ opacity: 0 }}
// //                 whileInView={{ opacity: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.6, delay: i * 0.07 }}
// //                 className="absolute left-1/2 top-1/2 origin-[0_0]"
// //                 style={{
// //                   animation: `orbit${skill.orbit} ${cfg.duration} linear infinite`,
// //                   animationDelay: delay,
// //                 }}
// //               >
// //                 <motion.div
// //                   whileHover={{ scale: 1.12 }}
// //                   className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-center backdrop-blur-sm shadow-[0_0_12px_rgba(255,255,255,0.04)]"
// //                 >
// //                   <div className={`mb-1 h-1.5 w-9 rounded-full bg-gradient-to-r ${skill.color}`} />
// //                   <p className="text-[10px] font-semibold leading-tight text-white">{skill.label}</p>
// //                   <p className="text-[8px] uppercase tracking-[0.15em] text-slate-400">{skill.level}</p>
// //                 </motion.div>
// //               </motion.div>
// //             );
// //           })}
// //         </div>

// //         <p className="text-xs text-slate-600">Skills orbit the hub — the closer the ring, the stronger the skill</p>
// //       </div>

// //       <ScrollIndicator />

// //       {/* Keyframe animations injected via style tag */}
// //       <style>{`
// //         @keyframes orbit1 {
// //           from { transform: rotate(0deg)   translateX(90px)  rotate(0deg);   }
// //           to   { transform: rotate(360deg) translateX(90px)  rotate(-360deg);}
// //         }
// //         @keyframes orbit2 {
// //           from { transform: rotate(0deg)   translateX(155px) rotate(0deg);   }
// //           to   { transform: rotate(360deg) translateX(155px) rotate(-360deg);}
// //         }
// //         @keyframes orbit3 {
// //           from { transform: rotate(0deg)   translateX(215px) rotate(0deg);   }
// //           to   { transform: rotate(360deg) translateX(215px) rotate(-360deg);}
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default Skills;
// import { motion } from 'framer-motion';
// import ScrollIndicator from '../components/ScrollIndicator';

// // Orbit radius maps to skill level — Expert = closest, Intermediate = furthest
// // angle: degrees around the hub (0 = top, clockwise)
// const skills = [
//   // ── Expert — orbit 1 (closest) ────────────────────────────
//   { label: 'Leadership',       level: 'Expert',       orbit: 1, angle: 0,   color: 'from-pink-500 to-rose-400',     type: 'soft' },
//   { label: 'Team Coord.',      level: 'Expert',       orbit: 1, angle: 180, color: 'from-rose-500 to-pink-400',     type: 'soft' },

//   // ── Advanced — orbit 2 (middle) ────────────────────────────
//   { label: 'Python',           level: 'Advanced',     orbit: 2, angle: 0,   color: 'from-teal-400 to-cyan-400',     type: 'ds'   },
//   { label: 'Tailwind',         level: 'Advanced',     orbit: 2, angle: 90,  color: 'from-violet-400 to-cyan-400',   type: 'ds'   },
//   { label: 'Public Speaking',  level: 'Advanced',     orbit: 2, angle: 180, color: 'from-pink-400 to-rose-300',     type: 'soft' },
//   { label: 'Content Writing',  level: 'Advanced',     orbit: 2, angle: 270, color: 'from-fuchsia-400 to-pink-400',  type: 'soft' },

//   // ── Intermediate — orbit 3 (furthest) ─────────────────────
//   { label: 'Machine Learning', level: 'Intermediate', orbit: 3, angle: 45,  color: 'from-violet-500 to-indigo-400', type: 'ds'   },
//   // { label: 'Data Science',     level: 'Intermediate', orbit: 3, angle: 180, color: 'from-teal-500 to-emerald-400',  type: 'ds'   },
//   { label: 'Event Planning',   level: 'Intermediate', orbit: 3, angle: 315, color: 'from-pink-500 to-fuchsia-400',  type: 'soft' },
// ];

// // Orbit config — radius and animation duration per orbit ring
// const orbitConfig = {
//   1: { radius: 'w-[180px] h-[180px]', duration: '18s',  translateX: 'translateX(90px)'  },
//   2: { radius: 'w-[310px] h-[310px]', duration: '28s',  translateX: 'translateX(155px)' },
//   3: { radius: 'w-[430px] h-[430px]', duration: '40s',  translateX: 'translateX(215px)' },
// };

// // Converts angle (degrees, 0=top, CW) and orbit radius into CSS animation-delay offset.
// // delay = -(angle / 360) * duration  — places the planet at its starting angle.
// const angleToDelay = (angle, durationStr) => {
//   const duration = parseFloat(durationStr);
//   return `-${((angle / 360) * duration).toFixed(2)}s`;
// };

// const Skills = () => {
//   return (
//     <section id="skills" className="relative scroll-mt-18 px-6 py-16 text-white">
//       <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_70%)]" />

//       <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8">

//         {/* Heading */}
//         <div className="text-center">
//           <span className="inline-flex rounded-full border border-cyan-300/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-cyan-200">
//             My Skills
//           </span>
//           <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Solar System Skills</h2>
//           <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
//             Closer to the hub = stronger skill. Purple/teal for data science, pink for soft skills.
//           </p>

//           {/* Legend */}
//           <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-400">
//             <span className="flex items-center gap-2">
//               <span className="h-1.5 w-5 rounded-full bg-gradient-to-r from-violet-500 to-teal-400 inline-block" />
//               Data science
//             </span>
//             <span className="flex items-center gap-2">
//               <span className="h-1.5 w-5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 inline-block" />
//               Soft skills
//             </span>
//             <span className="border-l border-white/10 pl-4">Closer orbit = stronger</span>
//           </div>
//         </div>

//         {/* Solar system */}
//         <div className="relative flex h-[480px] w-[480px] flex-shrink-0 items-center justify-center">

//           {/* Orbit rings */}
//           <div className="absolute h-[180px] w-[180px] rounded-full border border-dashed border-white/[0.08]" />
//           <div className="absolute h-[310px] w-[310px] rounded-full border border-dashed border-white/[0.06]" />
//           <div className="absolute h-[430px] w-[430px] rounded-full border border-dashed border-white/[0.04]" />

//           {/* Orbit level labels */}
//           {[
//             { top: 'top-[calc(50%-97px)]',  label: 'Expert'       },
//             { top: 'top-[calc(50%-162px)]', label: 'Advanced'     },
//             { top: 'top-[calc(50%-222px)]', label: 'Intermediate' },
//           ].map(({ top, label }) => (
//             <span
//               key={label}
//               className={`absolute left-1/2 -translate-x-1/2 text-[7px] uppercase tracking-widest text-white/20 ${top}`}
//             >
//               {label}
//             </span>
//           ))}

//           {/* Central hub */}
//           <div className="absolute z-10 flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-violet-500/90 to-cyan-400/20 text-center shadow-[0_0_40px_rgba(56,189,248,0.25)] animate-pulse">
//             <span className="text-[10px] font-semibold leading-tight text-white">My<br />Skills</span>
//             <span className="mt-1 text-[7px] uppercase tracking-[0.15em] text-cyan-200">Hub</span>
//           </div>

//           {/* Orbiting skill planets */}
//           {skills.map((skill, i) => {
//             const cfg = orbitConfig[skill.orbit];
//             const delay = angleToDelay(skill.angle, cfg.duration);

//             return (
//               <motion.div
//                 key={skill.label}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: i * 0.07 }}
//                 className="absolute left-1/2 top-1/2 origin-[0_0]"
//                 style={{
//                   animation: `orbit${skill.orbit} ${cfg.duration} linear infinite`,
//                   animationDelay: delay,
//                 }}
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.12 }}
//                   className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-center backdrop-blur-sm shadow-[0_0_12px_rgba(255,255,255,0.04)]"
//                 >
//                   <div className={`mb-1 h-1.5 w-9 rounded-full bg-gradient-to-r ${skill.color}`} />
//                   <p className="text-[10px] font-semibold leading-tight text-white">{skill.label}</p>
//                   <p className="text-[8px] uppercase tracking-[0.15em] text-slate-400">{skill.level}</p>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>

//         <p className="text-xs text-slate-600">Skills orbit the hub — the closer the ring, the stronger the skill</p>
//       </div>

//       <ScrollIndicator />

//       {/* Keyframe animations injected via style tag */}
//       <style>{`
//         @keyframes orbit1 {
//           from { transform: rotate(0deg)   translateX(90px)  rotate(0deg);   }
//           to   { transform: rotate(360deg) translateX(90px)  rotate(-360deg);}
//         }
//         @keyframes orbit2 {
//           from { transform: rotate(0deg)   translateX(155px) rotate(0deg);   }
//           to   { transform: rotate(360deg) translateX(155px) rotate(-360deg);}
//         }
//         @keyframes orbit3 {
//           from { transform: rotate(0deg)   translateX(215px) rotate(0deg);   }
//           to   { transform: rotate(360deg) translateX(215px) rotate(-360deg);}
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Skills;
import { motion } from 'framer-motion';
import ScrollIndicator from '../components/ScrollIndicator';

// Level key:
//   Experienced   — strong foundation, still actively growing
//   Knowledgeable — solid working knowledge
//   Intermediate  — actively learning and building confidence

const skills = [
  // ── Experienced — orbit 1 (closest) ───────────────────────
  { label: 'Leadership',       level: 'Experienced',   orbit: 1, angle: 0,   color: 'from-pink-500 to-rose-400',     type: 'soft' },
  { label: 'Team Coord.',      level: 'Experienced',   orbit: 1, angle: 72,  color: 'from-rose-500 to-pink-400',     type: 'soft' },
  { label: 'Tailwind',         level: 'Experienced',   orbit: 1, angle: 144, color: 'from-violet-400 to-cyan-400',   type: 'ds'   },
  { label: 'Content Writing',  level: 'Experienced',   orbit: 1, angle: 216, color: 'from-fuchsia-400 to-pink-400',  type: 'soft' },
  { label: 'Design',           level: 'Experienced',   orbit: 1, angle: 288, color: 'from-pink-400 to-violet-400',   type: 'soft' },

  // ── Knowledgeable — orbit 2 (middle) ──────────────────────
  { label: 'Python',           level: 'Knowledgeable', orbit: 2, angle: 0,   color: 'from-teal-400 to-cyan-400',     type: 'ds'   },
  { label: 'Machine Learning', level: 'Knowledgeable', orbit: 2, angle: 51,  color: 'from-violet-500 to-indigo-400', type: 'ds'   },
  { label: 'Deep Learning',    level: 'Knowledgeable', orbit: 2, angle: 102, color: 'from-indigo-500 to-violet-400', type: 'ds'   },
  { label: 'Moderating',       level: 'Knowledgeable', orbit: 2, angle: 153, color: 'from-fuchsia-400 to-rose-400',  type: 'soft' },
  { label: 'SQL',              level: 'Knowledgeable', orbit: 2, angle: 204, color: 'from-teal-500 to-emerald-400',  type: 'ds'   },
  { label: 'Mathematics',      level: 'Knowledgeable', orbit: 2, angle: 255, color: 'from-violet-400 to-teal-400',   type: 'ds'   },
  { label: 'Event Planning',   level: 'Knowledgeable', orbit: 2, angle: 306, color: 'from-pink-500 to-fuchsia-400',  type: 'soft' },

  // ── Intermediate — orbit 3 (furthest) ─────────────────────
  { label: 'Public Speaking',  level: 'Intermediate',  orbit: 3, angle: 90,  color: 'from-pink-400 to-rose-300',     type: 'soft' },
];

const R1 = 110;
const R2 = 190;
const R3 = 265;

const orbitConfig = {
  1: { r: R1, duration: '20s' },
  2: { r: R2, duration: '32s' },
  3: { r: R3, duration: '46s' },
};

const angleToDelay = (angleDeg, durationStr) => {
  const d = parseFloat(durationStr);
  return `-${((angleDeg / 360) * d).toFixed(2)}s`;
};

const Skills = () => (
  <section id="skills" className="relative scroll-mt-18 px-6 py-16 text-white">
    <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_70%)]" />

    <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8">

      <div className="text-center">
        <span className="inline-flex rounded-full border border-cyan-300/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-cyan-200">
          My Skills
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Solar System Skills</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
          Closer to the hub = stronger skill. Purple/teal for data science, pink for soft skills.
        </p>
        <p className="mx-auto mt-1 max-w-xl text-xs italic text-slate-500">
          Experienced means a strong foundation — and still actively growing.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-5 rounded-full bg-gradient-to-r from-violet-500 to-teal-400" />
            Data science
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400" />
            Soft skills
          </span>
          <span className="border-l border-white/10 pl-4">Closer orbit = stronger</span>
        </div>
      </div>

      <div className="relative flex h-[580px] w-[580px] flex-shrink-0 items-center justify-center">

        {[R1, R2, R3].map((r) => (
          <div
            key={r}
            // className="absolute rounded-full border border-dashed border-white/[0.07]"
           className="absolute rounded-full border border-dashed border-slate-400/30"
            style={{ width: r * 2, height: r * 2 }}
          />
        ))}

        {[
          { r: R1, label: 'Experienced'   },
          { r: R2, label: 'Knowledgeable' },
          { r: R3, label: 'Intermediate'  },
        ].map(({ r, label }) => (
          <span
            key={label}
            className="absolute left-1/2 -translate-x-1/2 text-[7px] uppercase tracking-widest text-white/20"
            style={{ top: `calc(50% - ${r + 7}px)` }}
          >
            {label}
          </span>
        ))}

        <div className="absolute z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-gradient-to-br from-violet-500/90 to-cyan-400/20 text-center shadow-[0_0_40px_rgba(56,189,248,0.25)] animate-pulse">
          <span className="text-[11px] font-semibold leading-tight text-white">My<br />Skills</span>
          <span className="mt-1 text-[7px] uppercase tracking-[0.15em] text-cyan-200">Hub</span>
        </div>

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
                animation: `orbit${skill.orbit} ${duration} linear infinite`,
                animationDelay: delay,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.12 }}
                className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-center backdrop-blur-sm shadow-[0_0_12px_rgba(255,255,255,0.04)]"
              >
                <div className={`mb-1 h-1.5 w-9 rounded-full bg-gradient-to-r ${skill.color}`} />
                <p className="text-[10px] font-semibold leading-tight text-white">{skill.label}</p>
                <p className="text-[8px] uppercase tracking-[0.12em] text-slate-400">{skill.level}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <p className="text-xs text-slate-600">Skills orbit the hub — the closer the ring, the stronger the skill</p>
    </div>

    <ScrollIndicator />

    <style>{`
      @keyframes orbit1 {
        from { transform: rotate(0deg)   translateX(${R1}px) rotate(0deg);   }
        to   { transform: rotate(360deg) translateX(${R1}px) rotate(-360deg); }
      }
      @keyframes orbit2 {
        from { transform: rotate(0deg)   translateX(${R2}px) rotate(0deg);   }
        to   { transform: rotate(360deg) translateX(${R2}px) rotate(-360deg); }
      }
      @keyframes orbit3 {
        from { transform: rotate(0deg)   translateX(${R3}px) rotate(0deg);   }
        to   { transform: rotate(360deg) translateX(${R3}px) rotate(-360deg); }
      }
    `}</style>
  </section>
);

export default Skills;