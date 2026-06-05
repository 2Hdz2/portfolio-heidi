// import { motion } from 'framer-motion';
// import ScrollIndicator from '../components/ScrollIndicator';

// const skills = [
//   { label: 'React', position: { top: '12%', left: '50%' }, color: 'from-cyan-400 to-blue-500', level: 'Expert' },
//   { label: 'Java', position: { top: '35%', left: '85%' }, color: 'from-orange-400 to-amber-500', level: 'Advanced' },
//   { label: 'Python', position: { top: '74%', left: '82%' }, color: 'from-green-400 to-cyan-400', level: 'Advanced' },
//   { label: 'UI/UX', position: { top: '88%', left: '50%' }, color: 'from-violet-500 to-fuchsia-500', level: 'Expert' },
//   { label: 'Figma', position: { top: '74%', left: '18%' }, color: 'from-pink-400 to-violet-500', level: 'Advanced' },
//   { label: 'Tailwind', position: { top: '35%', left: '10%' }, color: 'from-cyan-400 to-slate-500', level: 'Advanced' },
//   { label: 'Machine Learning', position: { top: '18%', left: '22%' }, color: 'from-cyan-300 to-lime-300', level: 'Intermediate' },
//   { label: 'Data Science', position: { top: '56%', left: '48%' }, color: 'from-blue-400 to-violet-400', level: 'Intermediate' },
//   { label: 'Leadership', position: { top: '54%', left: '14%' }, color: 'from-pink-400 to-rose-400', level: 'Expert' },
//   { label: 'Public Speaking', position: { top: '52%', left: '70%' }, color: 'from-cyan-400 to-pink-400', level: 'Advanced' },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="relative scroll-mt-18 px-6 py-24 text-white">
//       <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_70%)]" />
//       <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12">
//         <div className="text-center">
//           <span className="inline-flex rounded-full border border-cyan-300/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-cyan-200">
//             My Skills
//           </span>
//           <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Solar System Skills</h2>
//           <p className="mx-auto mt-4 max-w-2xl text-slate-300">
//             A galaxy-inspired skill map with orbiting planets, levels, and glow effects to showcase what powers my work.
//           </p>
//         </div>

//         <div className="relative aspect-square w-full max-w-4xl rounded-[3rem] border border-white/10 bg-slate-950/70 p-10 shadow-[0_0_80px_rgba(124,58,237,0.12)] backdrop-blur-xl">
//           <div className="absolute inset-0 rounded-[3rem] border border-cyan-300/10" />
//           <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_55%)]" />
//           <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-violet-500/90 to-cyan-400/20 shadow-[0_0_50px_rgba(56,189,248,0.25)]">
//             <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full text-center text-white">
//               <span className="text-2xl font-semibold">My Skills</span>
//               <span className="mt-2 text-sm uppercase tracking-[0.2em] text-cyan-200">Central Hub</span>
//             </div>
//           </div>

//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.label}
//               initial={{ opacity: 0, scale: 0.78 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               whileHover={{ scale: 1.08 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.5, delay: index * 0.05 }}
//               className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-center shadow-[0_0_20px_rgba(255,255,255,0.04)]"
//               style={{ top: skill.position.top, left: skill.position.left }}
//             >
//               <div className={`mb-2 h-2 w-14 rounded-full bg-linear-to-r ${skill.color}`} />
//               <p className="text-sm font-semibold text-white">{skill.label}</p>
//               <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">{skill.level}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       <ScrollIndicator />
//     </section>
//   );
// };

// export default Skills;

// Skills.jsx
import { motion } from 'framer-motion';
import ScrollIndicator from '../components/ScrollIndicator';

// purple/teal = data science   pink/coral = soft skills
const skills = [
  // ── Data Science ──────────────────────────────────────────
  { label: 'React',           position: { top: '10%', left: '50%' }, color: 'from-violet-500 to-purple-400',  level: 'Intermediate'       },
  { label: 'Python',          position: { top: '30%', left: '82%' }, color: 'from-teal-400 to-cyan-400',     level: 'Intermediate'     },
  { label: 'Machine Learning', position: { top: '68%', left: '78%' }, color: 'from-violet-400 to-indigo-400', level: 'Intermediate' },
  { label: 'Data Science',    position: { top: '88%', left: '50%' }, color: 'from-teal-500 to-emerald-400',  level: 'Intermediate' },
  { label: 'Tailwind',        position: { top: '30%', left: '18%' }, color: 'from-violet-400 to-cyan-400',   level: 'Advanced'     },
  // ── Soft Skills ───────────────────────────────────────────
  { label: 'Leadership',      position: { top: '10%', left: '22%' }, color: 'from-pink-500 to-rose-400',    level: 'Advanced'       },
  { label: 'Content Writing', position: { top: '10%', left: '78%' }, color: 'from-pink-400 to-fuchsia-400', level: 'Advanced'     },
  { label: 'Public Speaking', position: { top: '68%', left: '22%' }, color: 'from-rose-400 to-pink-300',    level: 'Advanced'     },
  { label: 'Team Coordination',position: { top: '50%', left: '12%' }, color: 'from-pink-500 to-rose-500',    level: 'Advanced'       },
];

const Skills = () => {
  return (
    <section id="skills" className="relative scroll-mt-18 px-6 py-16 text-white">
      <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8">

        <div className="text-center">
          <span className="inline-flex rounded-full border border-cyan-300/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-cyan-200">
            My Skills
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Solar System Skills</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
            A galaxy-inspired skill map — purple/teal for data science, pink for soft skills.
          </p>

          {/* Legend */}
          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-6 rounded-full bg-gradient-to-r from-violet-500 to-teal-400" />
              Data science
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-400" />
              Soft skills
            </span>
          </div>
        </div>

        {/* Orbit container — smaller: max-w-2xl, fixed height h-[520px] */}
        <div className="relative h-[520px] w-full max-w-2xl rounded-[2.5rem] border border-white/10 bg-slate-950/70 shadow-[0_0_60px_rgba(124,58,237,0.12)] backdrop-blur-xl">
          <div className="absolute inset-0 rounded-[2.5rem] border border-cyan-300/10" />
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.06),transparent_55%)]" />

          {/* Central hub */}
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-500/90 to-cyan-400/20 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full text-center text-white">
              <span className="text-base font-semibold">My Skills</span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-cyan-200">Central Hub</span>
            </div>
          </div>

          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, scale: 0.78 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-center shadow-[0_0_16px_rgba(255,255,255,0.04)]"
              style={{ top: skill.position.top, left: skill.position.left }}
            >
              <div className={`mb-1.5 h-1.5 w-10 rounded-full bg-gradient-to-r ${skill.color}`} />
              <p className="text-xs font-semibold text-white">{skill.label}</p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Skills;