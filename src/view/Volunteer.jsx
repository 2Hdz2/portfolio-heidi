// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import { Users, X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
// import ScrollIndicator from '../components/ScrollIndicator';
// import me from '../assets/heidi.png';
// import hero from '../assets/hero.png';
// import ieeecs from '../assets/ieeecs.png';
// import calcey from '../assets/calcey.png';
// import hutch from '../assets/hutch.png';
// import shamah from '../assets/shamah.png';
// import sysco from '../assets/sysco.png';
// import build from '../assets/build.jpeg';

// import ieeecss from '../assets/ieeecss.jpg';
// import sec from '../assets/sec.jpg';
// import x from '../assets/sliitxtreme.jpeg';

// import nasa from '../assets/nasa.jpeg';
// import nasa2 from '../assets/nasa2.jpeg';

// import rota from '../assets/rota.png';

// import moderator from '../assets/moderator.jpg';

// const workItems = [
//  {
//   org: 'IEEECS SYP | Student & Young Professionals 2026/27',
//   role: 'Editorial Subcommittee Lead',
//   description: 'Currently leading the editorial subcommittee for the IEEE Computer Society Student and Young Professionals chapter: managing content strategy, publications, and written communications for the 2026/27 term.',
//   skills: ['Editorial',  'Leadership', 'Content Strategy','Communication'],
//   images: [ieeecs],
// },
// {
//   org: 'Faculty of Computing Student Community 2022-2024 | SLIIT',
//   role: 'Committee Member & Lead Organiser',
//   description: 'Initiated and led Build-Up Wednesday during my internship at SLIIT\'s Industry Engagement Unit: organising industry events to help undergraduates build soft skills. Handled end-to-end documentation, content writing, event proposals, and sponsorship hunting. Collaborated with SyscoLabs, Axiata Digital Labs, Verdentra, Perituza, Tetranyde, and Calcey.',
//   skills: ['Event Planning', 'Sponsorship', 'Content Writing', 'Networking', 'Design'],
//   images: [build, calcey,sysco,shamah],
// },
// {
//   org: 'IEEE Computer Society of SLIIT | 2023/25',
//   role: 'Assistant Secretary & Event President',
//   description: 'Served as Event President for WebWrap 1.0 and Secretary Team Leader for SLIITXtreme 2.0 & 3.0 and CyberShield 3.0: coordinating cross-functional teams, managing logistics, and driving execution across multiple large-scale tech events.',
//   skills: ['Leadership', 'Event Management', 'Team Coordination', 'Communication'],
//   images: [x, sec],
// },
// {
//   org: 'NASA Space Apps Challenge Colombo | 2024',
//   role: 'Documentation Team Leader',
//   description: 'Led the documentation team for the NASA Space Apps Challenge, overseeing structured reporting, content organisation, and deliverable quality across the team\'s submission pipeline.',
//   skills: ['Technical Writing', 'Leadership', 'Organisation', 'Research'],
//   images: [nasa, nasa2],
// },
// {
//   org: 'SEDS Sri Lanka | 2024/25',
//   role: 'Moderator',
//   description: 'Volunteered as a moderator for SEDS SL Magnetar Media Division for 2024/25 alongside with many ther moderations. ',
//   skills: ['Technical Writing', 'Leadership', 'Organisation', 'Research'],
//   images: [moderator],
// },
// {
//   org: 'Rotaract Club of SLIIT 2024',
//   role: 'Content Writer — Editorial',
//   description: 'Contributed to the editorial team as a content writer, producing community-focused written content and supporting the club\'s outreach and publication efforts.',
//   skills: ['Content Writing', 'Creativity', 'Teamwork', 'Communication'],
//   images: [rota],
// },
// ];

// const ExpandedCard = ({ item, onClose }) => {
//   const [imgIndex, setImgIndex] = useState(0);
//   const hasImages = item.images?.length > 0;

//   return (
//     <motion.div
//       key="overlay"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.25 }}
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
//       style={{ background: 'rgba(2,6,23,0.85)', backdropFilter: 'blur(10px)' }}
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.88, y: 40 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.92, y: 20 }}
//         transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
//         className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-[0_0_80px_rgba(236,72,153,0.2)]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:bg-white/10 hover:text-white"
//         >
//           <X size={16} />
//         </button>

//         <div className="flex flex-col md:flex-row">
//           {/* Image panel */}
//           <div className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-slate-900/70 md:h-auto md:w-[50%]">
//             <div className="absolute inset-x-6 top-4 h-0.5 rounded-full bg-gradient-to-r from-pink-400/60 via-violet-400/40 to-cyan-400/60" />

//             {hasImages ? (
//               <>
//                 <img
//                   key={imgIndex}
//                   src={item.images[imgIndex]}
//                   alt={`${item.org} image ${imgIndex + 1}`}
//                   className="h-full w-full object-cover"
//                 />
//                 {item.images.length > 1 && (
//                   <>
//                     <div className="absolute bottom-4 flex items-center gap-3">
//                       <button
//                         onClick={() => setImgIndex((i) => Math.max(0, i - 1))}
//                         disabled={imgIndex === 0}
//                         className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-white disabled:opacity-30 transition-all hover:bg-slate-800"
//                       >
//                         <ChevronLeft size={14} />
//                       </button>
//                       {/* Dot indicators */}
//                       <div className="flex gap-1.5">
//                         {item.images.map((_, i) => (
//                           <button
//                             key={i}
//                             onClick={() => setImgIndex(i)}
//                             className={`h-1.5 rounded-full transition-all duration-300 ${
//                               i === imgIndex ? 'w-4 bg-pink-400' : 'w-1.5 bg-white/30'
//                             }`}
//                           />
//                         ))}
//                       </div>
//                       <button
//                         onClick={() => setImgIndex((i) => Math.min(item.images.length - 1, i + 1))}
//                         disabled={imgIndex === item.images.length - 1}
//                         className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-white disabled:opacity-30 transition-all hover:bg-slate-800"
//                       >
//                         <ChevronRight size={14} />
//                       </button>
//                     </div>
//                     {/* Counter top-right */}
//                     <span className="absolute right-4 top-6 rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-400">
//                       {imgIndex + 1} / {item.images.length}
//                     </span>
//                   </>
//                 )}
//               </>
//             ) : (
//               <div className="flex flex-col items-center gap-3 text-slate-600">
//                 <ImageOff size={36} />
//                 <span className="text-xs uppercase tracking-[0.2em]">No images yet</span>
//               </div>
//             )}
//           </div>

//           {/* Info panel */}
//           <div className="flex flex-1 flex-col justify-between gap-6 p-7">
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
//                   <Users size={18} />
//                 </div>
//                 <div>
//                   <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.role}</p>
//                   <h3 className="text-2xl font-semibold text-white">{item.org}</h3>
//                 </div>
//               </div>
//               <p className="leading-relaxed text-slate-300">{item.description}</p>
//               <div>
//                 <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">Skills Used</p>
//                 <div className="flex flex-wrap gap-2">
//                   {item.skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// const Volunteer = () => {
//   const [selected, setSelected] = useState(null);

//   return (
//     <>
//       <section id="volunteer" className="relative scroll-mt-18 px-6 py-24 text-white">
//         <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.12),transparent_60%)]" />
//         <div className="relative mx-auto max-w-7xl">
//           <div className="mb-10">
//             <span className="inline-flex rounded-full border border-pink-400/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-pink-200">
//               Volunteer & Leadership
//             </span>
//             <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Volunteer & Leadership</h2>
//             {/* <p className="mt-4 max-w-2xl text-slate-300">
//               A curated gallery of leadership roles, volunteer initiatives, and the skills I apply to create impact.
//             </p> */}
//           </div>

//           <div className="grid gap-6 lg:grid-cols-3">
//             {workItems.map((item, index) => (
//               <motion.div
//                 key={item.org}
//                 initial={{ opacity: 0, y: 28 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.25 }}
//                 transition={{ duration: 0.7, delay: index * 0.1 }}
//                 onClick={() => setSelected(item)}
//                 className="group cursor-pointer overflow-hidden rounded-4xl border border-white/10 bg-slate-950/80 shadow-[0_0_45px_rgba(236,72,153,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-pink-400/20 hover:shadow-[0_0_60px_rgba(236,72,153,0.2)]"
//               >
//                 {/* Thumbnail */}
//                 <div className="relative h-44 w-full overflow-hidden">
//                   {item.images?.[0] ? (
//                     <img
//                       src={item.images[0]}
//                       alt={item.org}
//                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                   ) : (
//                     <div className="flex h-full w-full items-center justify-center bg-slate-900/70">
//                       <div className="flex flex-col items-center gap-2 text-slate-600">
//                         <ImageOff size={28} />
//                         <span className="text-xs uppercase tracking-[0.2em]">No image</span>
//                       </div>
//                     </div>
//                   )}
//                   {/* gradient fade into card body */}
//                   <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950 to-transparent" />
//                   {/* image count badge */}
//                   {item.images?.length > 1 && (
//                     <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-300">
//                       <ChevronLeft size={10} />
//                       {item.images.length}
//                     </span>
//                   )}
//                 </div>

//                 {/* Card body */}
//                 <div className="p-6">
//                   <div className="mb-5 flex items-center gap-3 text-cyan-200">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
//                       <Users size={20} />
//                     </div>
//                     <div>
//                       <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.role}</p>
//                       <h3 className="text-xl font-semibold text-white">{item.org}</h3>
//                     </div>
//                   </div>
//                   <p className="mb-6 text-slate-300">{item.description}</p>
//                   <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
//                     <p className="mb-3 text-sm uppercase tracking-[0.22em] text-slate-400">Skills Used</p>
//                     <div className="flex flex-wrap gap-2">
//                       {item.skills.map((skill) => (
//                         <span key={skill} className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-200 shadow-[0_0_20px_rgba(15,23,42,0.2)]">
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//         <ScrollIndicator />
//       </section>

//       <AnimatePresence>
//         {selected && (
//           <ExpandedCard item={selected} onClose={() => setSelected(null)} />
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Volunteer;

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Users, X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import ScrollIndicator from '../components/ScrollIndicator';
import ieeecs from '../assets/ieeecs.png';
import calcey from '../assets/calcey.png';
import hutch from '../assets/hutch.png';
import shamah from '../assets/shamah.png';
import sysco from '../assets/sysco.png';
import build from '../assets/build.jpeg';
import sec from '../assets/sec.jpg';
import x from '../assets/sliitxtreme.jpeg';
import nasa from '../assets/nasa.jpeg';
import nasa2 from '../assets/nasa2.jpeg';
import rota from '../assets/rota.png';
import moderator from '../assets/moderator.jpg';

const workItems = [
  {
    org: 'IEEECS SYP | Student & Young Professionals 2026/27',
    role: 'Editorial Subcommittee Lead',
    description: 'Currently leading the editorial subcommittee for the IEEE Computer Society Student and Young Professionals chapter: managing content strategy, publications, and written communications for the 2026/27 term.',
    skills: ['Editorial', 'Leadership', 'Content Strategy', 'Communication'],
    images: [ieeecs],
  },
  {
    org: 'Faculty of Computing Student Community 2022-2024 | SLIIT',
    role: 'Committee Member & Lead Organiser',
    description: "Initiated and led Build-Up Wednesday during my internship at SLIIT's Industry Engagement Unit: organising industry events to help undergraduates build soft skills. Handled end-to-end documentation, content writing, event proposals, and sponsorship hunting.",
    skills: ['Event Planning', 'Sponsorship', 'Content Writing', 'Networking', 'Design'],
    images: [build, calcey, sysco, shamah],
  },
  {
    org: 'IEEE Computer Society of SLIIT | 2023/25',
    role: 'Assistant Secretary & Event President',
    description: 'Served as Event President for WebWrap 1.0 and Secretary Team Leader for SLIITXtreme 2.0 & 3.0 and CyberShield 3.0: coordinating cross-functional teams, managing logistics, and driving execution across multiple large-scale tech events.',
    skills: ['Leadership', 'Event Management', 'Team Coordination', 'Communication'],
    images: [x, sec],
  },
  {
    org: 'NASA Space Apps Challenge Colombo | 2024',
    role: 'Documentation Team Leader',
    description: "Led the documentation team for the NASA Space Apps Challenge, overseeing structured reporting, content organisation, and deliverable quality across the team's submission pipeline.",
    skills: ['Technical Writing', 'Leadership', 'Organisation', 'Research'],
    images: [nasa, nasa2],
  },
  {
    org: 'SEDS Sri Lanka | 2024/25',
    role: 'Moderator',
    description: 'Volunteered as a moderator for SEDS SL Magnetar Media Division for 2024/25 alongside many other moderations.',
    skills: ['Technical Writing', 'Leadership', 'Organisation', 'Research'],
    images: [moderator],
  },
  {
    org: 'Rotaract Club of SLIIT 2024',
    role: 'Content Writer — Editorial',
    description: "Contributed to the editorial team as a content writer, producing community-focused written content and supporting the club's outreach and publication efforts.",
    skills: ['Content Writing', 'Creativity', 'Teamwork', 'Communication'],
    images: [rota],
  },
];

const ExpandedCard = ({ item, onClose }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const hasImages = item.images?.length > 0;

  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 flex items-center justify-center p-3 sm:p-6 md:p-8"
      style={{ background: 'rgba(2,6,23,0.88)', backdropFilter: 'blur(12px)', zIndex: 9999 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-[0_0_80px_rgba(236,72,153,0.2)]"
        style={{ maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:bg-white/10 hover:text-white">
          <X size={16} />
        </button>

        <div className="flex flex-col md:flex-row overflow-y-auto md:overflow-hidden" style={{ maxHeight: '90vh' }}>
          {/* Image panel */}
          <div className="relative h-52 sm:h-64 w-full shrink-0 overflow-hidden bg-slate-900/70 md:h-auto md:w-[50%]">
            <div className="absolute inset-x-6 top-4 h-0.5 rounded-full bg-gradient-to-r from-pink-400/60 via-violet-400/40 to-cyan-400/60 z-10" />
            {hasImages ? (
              <>
                <img key={imgIndex} src={item.images[imgIndex]} alt={`${item.org} image ${imgIndex + 1}`}
                  className="absolute inset-0 h-full w-full object-cover" onClick={(e) => e.stopPropagation()} draggable={false} />
                {item.images.length > 1 && (
                  <>
                    <div className="absolute bottom-4 flex items-center gap-3 z-10 left-1/2 -translate-x-1/2">
                      <button onClick={() => setImgIndex(i => Math.max(0, i - 1))} disabled={imgIndex === 0}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-white disabled:opacity-30">
                        <ChevronLeft size={14} />
                      </button>
                      <div className="flex gap-1.5">
                        {item.images.map((_, i) => (
                          <button key={i} onClick={() => setImgIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === imgIndex ? 'w-4 bg-pink-400' : 'w-1.5 bg-white/30'}`} />
                        ))}
                      </div>
                      <button onClick={() => setImgIndex(i => Math.min(item.images.length - 1, i + 1))} disabled={imgIndex === item.images.length - 1}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-white disabled:opacity-30">
                        <ChevronRight size={14} />
                      </button>
                    </div>
                    <span className="absolute right-4 top-6 z-10 rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-400">
                      {imgIndex + 1} / {item.images.length}
                    </span>
                  </>
                )}
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-600">
                <ImageOff size={32} />
                <span className="text-xs uppercase tracking-[0.2em]">No images yet</span>
              </div>
            )}
          </div>

          {/* Info panel */}
          <div className="flex flex-1 flex-col justify-between gap-5 p-6 overflow-y-auto">
            <div className="space-y-4 pr-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                  <Users size={16} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.role}</p>
                  <h3 className="text-lg sm:text-2xl font-semibold text-white">{item.org}</h3>
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">{item.description}</p>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">Skills Used</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Volunteer = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="volunteer" className="relative scroll-mt-18 px-4 sm:px-6 py-16 sm:py-24 text-white">
        <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 sm:mb-10">
            <span className="inline-flex rounded-full border border-pink-400/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-pink-200">
              Volunteer & Leadership
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">Volunteer & Leadership</h2>
          </div>

          {/* 1 col mobile, 2 col md, 3 col lg */}
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workItems.map((item, index) => (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                onClick={() => setSelected(item)}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-[0_0_45px_rgba(236,72,153,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-pink-400/20 hover:shadow-[0_0_60px_rgba(236,72,153,0.2)] active:scale-[0.98]"
              >
                {/* Thumbnail */}
                <div className="relative h-40 sm:h-44 w-full overflow-hidden">
                  {item.images?.[0] ? (
                    <img src={item.images[0]} alt={item.org}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-900/70">
                      <div className="flex flex-col items-center gap-2 text-slate-600">
                        <ImageOff size={24} />
                        <span className="text-xs uppercase tracking-[0.2em]">No image</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950 to-transparent" />
                  {item.images?.length > 1 && (
                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-1 text-xs text-slate-300">
                      <ChevronLeft size={10} />
                      {item.images.length}
                    </span>
                  )}
                </div>

                {/* Card body */}
                <div className="p-5 sm:p-6">
                  <div className="mb-4 flex items-start gap-3 text-cyan-200">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                      <Users size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400 truncate">{item.role}</p>
                      <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">{item.org}</h3>
                    </div>
                  </div>
                  <p className="mb-5 text-sm text-slate-300 line-clamp-3">{item.description}</p>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-slate-400">Skills Used</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.skills.map((skill) => (
                        <span key={skill} className="rounded-full bg-slate-900/80 px-2.5 py-0.5 text-xs text-slate-200">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <ScrollIndicator />
      </section>

      <AnimatePresence>
        {selected && <ExpandedCard item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
};

export default Volunteer;