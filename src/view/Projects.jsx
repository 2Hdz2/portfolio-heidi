import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Film, GitBranch, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollIndicator from '../components/ScrollIndicator';
import ExoGif from '../assets/eventlink.mp4';
import me from '../assets/heidi.png';
import moviewars from '../assets/moviewars.mp4';
import research from '../assets/research.mp4';
import petpulz from '../assets/PetPulz.png';
import churn from '../assets/churn.png';

const projects = [
  {
    title: 'RESEARCH Team Leader | ExoDios',
    description: 'An AI-powered hybrid web framework for integrating direct coronagraphic imaging and transit photometry pipelines for exoplanet detection, requiring no installation or coding, just a browser and a data file.',
    tech: ['React', 'FastAPI', 'Python', 'ResNet CNN', 'EllipseDetectorCNN', 'LSTM', 'Astropy'],
    github: '#',
    target: '_blank',
    demo: '#',
    video: research,
    images: [],
  },
  {
    title: 'Telco Churn Predictor',
    description: 'An end-to-end machine learning pipeline for telecom customer churn prediction, covering SQL feature engineering, exploratory data analysis, and deployment through an interactive Streamlit application.',
    tech: ['Python', 'XGBoost', 'Streamlit', 'SQL', 'Scikit-learn', 'Pandas', 'Jupyter'],
    github: '#',
    demo: '#',
    video: null,
    images: [churn],
  },
  {
    title: 'Movie Wars',
    description: 'A full-stack movie discovery and rating platform featuring content-based recommendations, admin analytics, and a bold hot-pink interface. Users who rate two or more films receive personalised recommendations.',
    tech: ['React', 'Vite', 'FastAPI', 'MongoDB', 'Tailwind', 'JWT'],
    github: '#',
    demo: '#',
    video: moviewars,
    images: [],
  },
  {
    title: 'EventLink',
    description: 'An event management system for organisations featuring role-based access for presidents and staff advisors, approval workflows, PDF document management, and automated email notifications.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: '#',
    demo: '#',
    video: ExoGif,
    images: [],
  },
  {
    title: 'PawPulz',
    description: 'A comprehensive pet care management system supporting appointment booking, medical records, adoption listings, lost pet notices, and an online store, built for pet owners, veterinarians, and administrators.',
    tech: ['React', 'Express', 'MongoDB', 'Socket.io', 'Firebase', 'Ant Design'],
    github: '#',
    demo: '#',
    video: null,
    images: [petpulz],
  },


];

const ExpandedCard = ({ project, onClose }) => {
  const [mediaIndex, setMediaIndex] = useState(0);
  const mediaItems = [
    ...(project.video ? [{ type: 'video', src: project.video }] : []),
    ...project.images.map((src) => ({ type: 'image', src })),
  ];
  const hasMedia = mediaItems.length > 0;

  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(2,6,23,0.85)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-[0_0_80px_rgba(124,58,237,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:bg-white/10 hover:text-white"
        >
          <X size={16} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Media panel */}
          <div className="relative flex h-64 w-full flex-col items-center justify-center bg-slate-900/70 md:h-auto md:w-[55%]">
            <div className="absolute inset-x-6 top-4 h-0.5 rounded-full bg-gradient-to-r from-cyan-400/60 via-violet-400/40 to-pink-400/60" />

            {hasMedia ? (
              <>
                {mediaItems[mediaIndex].type === 'video' ? (
                  <video
                    key={mediaItems[mediaIndex].src}
                    src={mediaItems[mediaIndex].src}
                    controls
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    key={mediaItems[mediaIndex].src}
                    src={mediaItems[mediaIndex].src}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover"
                  />
                )}

                {/* Media nav */}
                {mediaItems.length > 1 && (
                  <div className="absolute bottom-4 flex items-center gap-3">
                    <button
                      onClick={() => setMediaIndex((i) => Math.max(0, i - 1))}
                      disabled={mediaIndex === 0}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-white disabled:opacity-30"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <span className="text-xs text-slate-400">
                      {mediaIndex + 1} / {mediaItems.length}
                    </span>
                    <button
                      onClick={() => setMediaIndex((i) => Math.min(mediaItems.length - 1, i + 1))}
                      disabled={mediaIndex === mediaItems.length - 1}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-white disabled:opacity-30"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center gap-3 text-slate-500">
                <Film size={40} />
                <span className="text-xs uppercase tracking-[0.2em]">No media yet</span>
              </div>
            )}
          </div>

          {/* Info panel */}
          <div className="flex flex-1 flex-col justify-between gap-6 p-7">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="leading-relaxed text-slate-300">{project.description}</p>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* <a
                href={project.github}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100 transition-all hover:bg-cyan-500/15"
              >
                <GitBranch size={15} />
                GitHub
              </a> */}
              {/* <a
                href={project.demo}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition-all hover:border-cyan-400/40 hover:text-cyan-200"
              >
                <ExternalLink size={15} />
                Live Demo
              </a> */}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="projects" className="relative scroll-mt-18 px-6 py-24 text-white">
        <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4">
            <span className="inline-flex rounded-full border border-cyan-300/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-cyan-200">
              Featured Projects
            </span>
            <h2 className="text-4xl font-semibold text-white md:text-5xl">Projects</h2>
            <p className="max-w-2xl text-slate-300">
              Most of my projects are built as full-stack web applications, with small but effective ML models: <br/> XGBoost, CNN, LSTM, Random Forest, ConvNeXt <br/> integrated directly into the experience. My strongest skills are Python, React, and JavaScript, and my favourite thing to do is bridge the gap between a trained model and a clean, usable interface.
            </p>
            <p className="mt-3 text-sm text-cyan-400 tracking-wide">
              Click any card to enlarge.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onClick={() => setSelected(project)}
                className="group cursor-pointer overflow-hidden rounded-4xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_50px_rgba(124,58,237,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:shadow-[0_0_60px_rgba(124,58,237,0.2)]"
              >
                <div className="relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-slate-900/70 p-5">
                  <div className="absolute inset-x-4 top-4 h-1 rounded-full bg-linear-to-r from-cyan-400/60 via-violet-400/40 to-pink-400/60" />
                  <div className="flex h-44 items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-slate-950 to-slate-900 text-slate-400 shadow-[inset_0_0_70px_rgba(56,189,248,0.12)]">
                    {project.video ? (
                      <video
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                      />
                    ) : project.images?.[0] ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <>
                        <Film size={36} />
                        <span className="ml-3 text-sm uppercase tracking-[0.22em] text-slate-400">Video Preview</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {/* <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100 transition-all duration-300 hover:bg-cyan-500/15"
                  >
                    <GitBranch size={16} />
                    GitHub
                  </a> */}
                  {/* <a
                    href={project.demo}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Expanded modal */}
      <AnimatePresence>
        {selected && (
          <ExpandedCard project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
