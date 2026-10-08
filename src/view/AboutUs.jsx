// import { motion } from 'framer-motion';
// import { Award, Bolt, Users2, Sparkles } from 'lucide-react';
// import photo from '../assets/about.webp';
// import ScrollIndicator from '../components/ScrollIndicator';
// const stats = [
//   {
//     label: 'Industry Experience',
//     value: '2 YEARS',
//     icon: <Users2 size={24} />,
//   },
//   {
//     label: 'Projects',
//     value: '6+',
//     icon: <Sparkles size={24} />,
//   },
//   {
//     label: 'Leadership • Communication • Public Speaking • Moderating • Communication • Teamwork • Critical Thinking • Problem Solving • Technical Writing • Presentation Skills • Debating • Decision Making',
//     value: 'SOFT SKILLS',
//     icon: <Bolt size={24} />,
//   },
//   {
//     label: 'Python • PostgreSQL • Data Science • Machine Learning • Data Visualization • ETL Pipelines • Jupyter Notebook • Statistics • Data Mining • Web Development • Research & Development',
//     value: 'TECHNICAL SKILLS',
//     icon: <Award size={24} />,
//   },
// ];

// const AboutUs = () => {
//     return (
//         <section id="about-me" className="relative scroll-mt-18 overflow-hidden px-6 py-24 text-white">
//             <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_60%)]" />
//             <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
//                 <motion.div
//                     initial={{ opacity: 0, x: -28 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                     transition={{ duration: 0.7 }}
//                 >
//                     <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_25px_rgba(6,182,212,0.16)]">
//                         About Heidi
//                     </div>
//                     <h2 className="text-4xl font-semibold text-white md:text-5xl">About Me</h2>
//                     <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
//                         Dear Readers, <br />
//                         Hi! I am an undergraduate at SLIIT, Sri Lanka, who has dived into the field of Data Science after conducting my undergraduate research on an AI framework for Exoplanet Detection via Direct Imaging and Transit Photometry.
//                     </p>
//                     <div className="mt-10 grid gap-4 sm:grid-cols-2">
//                         {stats.map((item) => (
//                             <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_35px_rgba(124,58,237,0.08)] backdrop-blur-xl">
//                                 <div className="flex items-center gap-4 text-cyan-200">
//                                     <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
//                                         {item.icon}
//                                     </div>
//                                     <div>
//                                         <p className="text-3xl font-semibold text-white">{item.value}</p>
//                                         <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, x: 28 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true, amount: 0.3 }}
//                     transition={{ duration: 0.7 }}
//                     className="relative mx-auto max-w-xl"
//                 >
//                     <div className="absolute left-6 top-10 h-4 w-4 rounded-full bg-cyan-300/40 blur-2xl" />
//                     <div className="absolute -left-16 top-24 h-12 w-12 rounded-full bg-violet-500/20 blur-2xl" />
//                     <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_45px_rgba(124,58,237,0.14)] backdrop-blur-xl">
//                         <div className="absolute inset-0 rounded-[2.5rem] border border-cyan-300/10" />
//                         <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.22),transparent_45%)]" />
//                         <div className="relative flex h-105 flex-col items-center justify-center gap-6">
//                             <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-cyan-400/10 bg-linear-to-br from-slate-900/90 via-slate-950/70 to-slate-900/50 shadow-[0_0_40px_rgba(124,58,237,0.18)]">
//                                 <img
//                                     src={photo}
//                                     alt="Profile"
//                                     className="h-full w-full rounded-full object-cover"
//                                 />
//                                 <div className="absolute inset-0 rounded-full border border-violet-400/20 shadow-[0_0_40px_rgba(124,58,237,0.25)]" />
//                             </div>
//                             <div className="absolute inset-0 flex items-center justify-center">
//                                 <div className="glow-ring" />
//                             </div>
//                             <div className="absolute right-8 top-10 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(6,182,212,0.6)]" />
//                             <div className="absolute left-8 bottom-14 h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.6)]" />
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//             {/* Additional about content */}
//             <div className="relative mx-auto mt-12 max-w-4xl space-y-10 text-slate-300">
//                 <motion.div
//                     initial={{ opacity: 0, y: 12 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                 >
//                     <h3 className="text-2xl font-semibold text-white">A love letter to DS</h3>
//                     <blockquote className="mt-4 border-l-4 border-cyan-400 pl-4 italic text-lg text-slate-200">
//                         "The deeper I dove, the more I found and that's exactly what keeps me submerged in the ocean of AI, DS, and ML"
//                     </blockquote>
//                     <p className="mt-4">
//                         My interest in Data Science truly flourished through my 4th Year Final Research, where I worked on an AI framework for Exoplanet Detection via Direct Imaging and Transit Photometry. It was intriguing, to say the least, to witness how these networks work together to accomplish what humans can, but in a fraction of the time.
//                     </p>
//                 </motion.div>
// {/* 
//                 <motion.div
//                     initial={{ opacity: 0, y: 12 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.08 }}
//                 >
//                     <h3 className="text-2xl font-semibold text-white">What I can offer</h3>
//                     <p className="mt-4">
//                         I'm not exceptional by default, but I strive to be. Additionally to the projects I have done, it was possible because I thrive on challenges and even more so when I conquer them. That drive is something I can confidently say will serve me, and any team I'm part of.
//                     </p>
//                 </motion.div> */}

//                 {/* <motion.div
//                     initial={{ opacity: 0, y: 12 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.16 }}
//                 >
//                     <h3 className="text-2xl font-semibold text-white">Future Prospects</h3>
//                     <p className="mt-4">
//                         After completing my undergraduate degree in September 2026, I aim to specialise as a Data Scientist and pursue AWS certifications, alongside a Master's degree. My lifelong interest in Computational Astrophysics has shaped my path, and I aspire to grow into a Lead Data Scientist role while pursuing a Master's or PhD focused on Research in Data Science.
//                     </p>
//                 </motion.div> */}
//             </div>
//             <ScrollIndicator />
//         </section>
//     );
// };

// export default AboutUs;

import { motion } from 'framer-motion';
import { Award, Bolt, Users2, Sparkles } from 'lucide-react';
import photo from '../assets/about.webp';
// import ScrollIndicator from '../components/ScrollIndicator';

const stats = [
  {
    label: 'Industry Experience',
    value: '2 YEARS',
    icon: <Users2 size={24} />,
  },
  {
    label: 'Projects',
    value: '6+',
    icon: <Sparkles size={24} />,
  },
  {
    label: 'Leadership • Communication • Public Speaking • Moderating • Teamwork • Critical Thinking • Problem Solving • Technical Writing • Presentation Skills • Debating • Decision Making',
    value: 'SOFT SKILLS',
    icon: <Bolt size={24} />,
  },
  {
    label: 'Python • PostgreSQL • Data Science • Machine Learning • Data Visualization • ETL Pipelines • Jupyter Notebook • Statistics • Data Mining • Web Development • Research & Development',
    value: 'TECHNICAL SKILLS',
    icon: <Award size={24} />,
  },
];

const AboutUs = () => {
  return (
    <section id="about-me" className="relative scroll-mt-18 overflow-hidden px-4 sm:px-6 py-16 sm:py-24 text-white">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Two-column on lg, stacked on mobile */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">

          {/* Left: text + stats */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_25px_rgba(6,182,212,0.16)]">
              About Heidi
            </div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-slate-300">
              Dear Readers, <br />
              Hi! I am an undergraduate at SLIIT, Sri Lanka, who has dived into the field of Data Science after conducting my undergraduate research on an AI framework for Exoplanet Detection via Direct Imaging and Transit Photometry.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.value} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_0_35px_rgba(124,58,237,0.08)] backdrop-blur-xl">
                  <div className="flex items-start gap-4 text-cyan-200">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xl sm:text-2xl font-semibold text-white">{item.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400 leading-relaxed">{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: photo — hidden on small mobile, shown from sm up */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-xl"
          >
            <div className="absolute left-6 top-10 h-4 w-4 rounded-full bg-cyan-300/40 blur-2xl" />
            <div className="absolute -left-10 top-24 h-12 w-12 rounded-full bg-violet-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 sm:p-6 shadow-[0_0_45px_rgba(124,58,237,0.14)] backdrop-blur-xl">
              <div className="absolute inset-0 rounded-[2rem] border border-cyan-300/10" />
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.22),transparent_45%)]" />
              <div className="relative flex items-center justify-center py-6">
                <div className="relative flex h-56 w-56 sm:h-72 sm:w-72 items-center justify-center rounded-full border border-cyan-400/10 bg-gradient-to-br from-slate-900/90 via-slate-950/70 to-slate-900/50 shadow-[0_0_40px_rgba(124,58,237,0.18)]">
                  <img
                    src={photo}
                    alt="Profile"
                    className="h-full w-full rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full border border-violet-400/20 shadow-[0_0_40px_rgba(124,58,237,0.25)]" />
                </div>
                <div className="absolute right-6 top-6 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(6,182,212,0.6)]" />
                <div className="absolute left-6 bottom-6 h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.6)]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional about content */}
        <div className="mt-12 max-w-4xl space-y-10 text-slate-300 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* <h3 className="text-xl sm:text-2xl font-semibold text-white">A love letter to DS</h3>
            <blockquote className="mt-4 border-l-4 border-cyan-400 pl-4 italic text-base sm:text-lg text-slate-200">
              "The deeper I dove, the more I found and that's exactly what keeps me submerged in the ocean of AI, DS, and ML"
            </blockquote> */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed">
              My interest in Data Science truly flourished through my 4th Year Final Research, where I worked on an AI framework for Exoplanet Detection via Direct Imaging and Transit Photometry. It was intriguing, to say the least, to witness how these networks work together to accomplish what humans can, but in a fraction of the time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* <ScrollIndicator /> */}
    </section>
  );
};

export default AboutUs;
