import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Briefcase, GraduationCap, X, ChevronLeft, ChevronRight, ImageOff, ChevronDown } from 'lucide-react';
import ScrollIndicator from '../components/ScrollIndicator';
import masintern from '../assets/masintern.png';
import mas from '../assets/mas.jpeg';
import mas2 from '../assets/mas2.jpeg';
import hutch from '../assets/sliit.jpg';
import adl from '../assets/adl.jpg';
import adl1intern from '../assets/adl1intern.png';
import adl2intern from '../assets/adl2intern.png';
import tws from '../assets/tws.png';
import sliit from '../assets/sliit.jpg';
import pearson from '../assets/pearson.png';

const workItems = [
  {
    org: 'MAS Capital',
    role: 'Project Manager Intern',
    period: 'September 2025 – February 2026',
    images: [masintern, mas, mas2],
    bullets: [
      'Coordinated with teams and plants across national and international locations to plan and timeline solutions in the garment industry domain.',
    ],
    confidential: true,
  },
  {
    org: 'Axiata Digital Labs (ADL)',
    role: 'Project Manager Intern',
    period: 'February 2025 – July 2025',
    images: [adl, adl1intern, adl2intern],
    bullets: [
      'Coordinated timelines, stakeholder communication, and documentation for multiple tech projects, ensuring clarity and on-time delivery.',
      'Produced concise project reports, summaries, and launch documentation for high-impact initiatives, including the Dialog WoW SuperApp.',
      'Collaborated with cross-functional teams on Generative AI research, preparing briefs, presentations, and progress updates.',
      'Collaborated with supervisor for TechTalk on AI tools implementation for PM.',
    ],
    confidential: false,
  },
  {
    org: 'Industry Engagement Unit @ SLIIT',
    role: 'Intern',
    period: 'August 2024 – February 2025',
    images: [hutch],
    bullets: [
      'Coordinated meetings, internships, and job opportunities with industry partners.',
      'Assisted in consultancy and training projects to strengthen university–industry collaboration.',
      "Enhanced the unit's visibility through SLIIT's Marketing Division.",
      'Advertised company vacancies to students and managed related communications.',
      'Created promotional and informational content for sessions conducted by partner companies for students.',
    ],
    confidential: false,
  },
];

const educationItems = [
  {
    org: 'Westminster School, Dubai',
    role: 'Cambridge Curriculum',
    period: '2006 – 2017',
    images: [tws],
    bullets: [
      'Newsletter Leader for 3 consecutive years.',
      'Class Blog Lead for 2 consecutive years.',
      '2nd Runners Up — Best Blog Award.',
    ],
    confidential: false,
  },
  {
    org: 'Private (Self-Study)',
    role: 'Edexcel',
    period: 'O/L & A/L',
    images: [pearson],
    bullets: [
      "O/L — A*: 4 (three 9s, one 8) · A: 1 (one 7) · B: 2 (two 6s)",
      "A/L — 2 A's and 1 B",
      'A/S Physics Unit 1 — 120/120 (Full Marks)',
    ],
    confidential: false,
  },
  {
    org: 'Sri Lanka Institute of Information Technology',
    role: 'BSc (Hons) Information Technology',
    period: '2022 – 2026',
    images: [sliit],
    bullets: [
      'Database Management Systems',
      'Probability & Statistics',
      'Machine Learning',
      'Deep Learning',
      'Data Science & Analytics',
    ],
    confidential: false,
  },
];

// ── Expanded Modal ─────────────────────────────────────────────────────────────
// Fixed dimensions: modal is always 80vh tall, image panel is always 52% wide.
// Clicking the image does NOT navigate anywhere — e.stopPropagation() only.
// z-index 9999 ensures it always sits above the navbar.
const ExpandedCard = ({ item, onClose }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const hasImages = item.images?.length > 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 flex items-center justify-center p-4 md:p-10"
        style={{ background: 'rgba(2,6,23,0.92)', backdropFilter: 'blur(14px)', zIndex: 9999 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-950 shadow-[0_0_100px_rgba(124,58,237,0.25)] overflow-hidden"
          style={{ height: '80vh' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* close button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <X size={15} />
          </button>

          {/* Two-column layout — both panels locked to 80vh */}
          <div className="flex h-full">

            {/* ── Image panel: fixed 52% width, full height, image fills it ── */}
            <div
              className="relative shrink-0 overflow-hidden bg-slate-900"
              style={{ width: '52%', height: '100%' }}
            >
              {/* accent line */}
              <div className="absolute inset-x-0 top-0 h-px z-10 bg-gradient-to-r from-violet-500/40 via-cyan-400/40 to-pink-500/40" />

              {hasImages ? (
                <>
                  {/* Image absolutely fills the panel — never resizes the modal */}
                  <img
                    key={imgIndex}
                    src={item.images[imgIndex]}
                    alt={`${item.org} image ${imgIndex + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ display: 'block' }}
                    onClick={(e) => e.stopPropagation()}
                    draggable={false}
                  />

                  {/* Dark gradient at bottom so controls are readable */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent z-10" />

                  {item.images.length > 1 && (
                    <>
                      {/* prev */}
                      <button
                        onClick={(e) => { e.stopPropagation(); setImgIndex(i => Math.max(0, i - 1)); }}
                        disabled={imgIndex === 0}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white disabled:opacity-25 hover:bg-slate-800 transition"
                      >
                        <ChevronLeft size={14} />
                      </button>
                      {/* next */}
                      <button
                        onClick={(e) => { e.stopPropagation(); setImgIndex(i => Math.min(item.images.length - 1, i + 1)); }}
                        disabled={imgIndex === item.images.length - 1}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white disabled:opacity-25 hover:bg-slate-800 transition"
                      >
                        <ChevronRight size={14} />
                      </button>
                      {/* dot indicators */}
                      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
                        {item.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === imgIndex ? 'w-5 bg-violet-400' : 'w-1.5 bg-white/30'}`}
                          />
                        ))}
                      </div>
                      {/* counter badge */}
                      <span className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-0.5 text-xs text-slate-400">
                        {imgIndex + 1} / {item.images.length}
                      </span>
                    </>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-slate-600">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03]">
                    <ImageOff size={28} />
                  </div>
                  <span className="text-xs uppercase tracking-[0.22em]">No images yet</span>
                </div>
              )}
            </div>

            {/* ── Info panel: fills remaining width, scrollable internally ── */}
            <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-8">
              <div className="space-y-1 pr-10">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-400">{item.period}</p>
                <h3 className="text-2xl font-semibold text-violet-300 leading-tight">{item.role}</h3>
                <p className="text-base text-white/80">{item.org}</p>
              </div>

              <div className="h-px bg-white/5" />

              <ul className="space-y-3">
                {item.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
                    {b}
                  </li>
                ))}
              </ul>

              {item.confidential && (
                <p className="text-xs italic text-slate-500 border-t border-white/5 pt-4">
                  * Most project details are confidential and cannot be disclosed.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── Single timeline card ───────────────────────────────────────────────────────
const TimelineCard = ({ item, index, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    onClick={() => onSelect(item)}
    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/8 bg-slate-950/60 p-5 shadow-[0_0_30px_rgba(124,58,237,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-violet-400/20 hover:shadow-[0_0_50px_rgba(124,58,237,0.18)]"
  >
    {/* left accent bar */}
    <div className="absolute inset-y-0 left-0 w-0.5 rounded-full bg-gradient-to-b from-cyan-400/60 via-violet-400/30 to-transparent" />

    <div className="pl-3">
      <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-cyan-400">{item.period}</p>
      <h4 className="mt-0.5 text-base font-semibold text-violet-300">{item.role}</h4>
      <p className="text-sm text-white/70">{item.org}</p>

      <ul className="mt-3 space-y-1.5">
        {item.bullets.slice(0, 3).map((b, i) => (
          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
            <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-cyan-400/70" />
            {b}
          </li>
        ))}
        {item.bullets.length > 3 && (
          <li className="text-xs text-violet-400/60 pl-3.5">+{item.bullets.length - 3} more…</li>
        )}
      </ul>

      {item.confidential && (
        <p className="mt-3 text-[11px] italic text-slate-600">* Details confidential</p>
      )}
    </div>

    {/* expand hint */}
    <div className="absolute bottom-4 right-4 flex h-7 w-7 items-center justify-center rounded-full border border-white/8 bg-white/3 text-slate-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-violet-300">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </motion.div>
);

// ── Accordion section ──────────────────────────────────────────────────────────
const AccordionSection = ({ title, icon: Icon, items, accent, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [selected, setSelected] = useState(null);
  const isCyan = accent === 'cyan';

  return (
    <div className="overflow-hidden rounded-3xl border border-white/8 bg-slate-950/40 backdrop-blur-xl shadow-[0_0_50px_rgba(124,58,237,0.08)]">
      {/* Header toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left transition-colors duration-200 hover:bg-white/[0.02]"
      >
        <div className="flex items-center gap-4">
          <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${isCyan ? 'border-cyan-400/20 bg-cyan-400/8 text-cyan-300' : 'border-violet-400/20 bg-violet-400/8 text-violet-300'}`}>
            <Icon size={20} />
          </div>
          <div>
            <h3 className={`text-xl font-semibold ${isCyan ? 'text-cyan-200' : 'text-violet-200'}`}>{title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {items.length} {items.length === 1 ? 'entry' : 'entries'} — click to {open ? 'collapse' : 'expand'}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${isCyan ? 'border-cyan-400/20 text-cyan-400' : 'border-violet-400/20 text-violet-400'}`}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      {open && <div className={`mx-7 h-px ${isCyan ? 'bg-cyan-400/10' : 'bg-violet-400/10'}`} />}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="grid gap-3 p-7 pt-6 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((item, i) => (
                <TimelineCard key={`${item.org}-${i}`} item={item} index={i} onSelect={setSelected} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {selected && <ExpandedCard item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

// ── Page section ───────────────────────────────────────────────────────────────
const Recognition = () => (
  <section id="recognitions" className="relative scroll-mt-18 px-6 py-24 text-white">
    <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_60%)]" />

    <div className="relative mx-auto max-w-4xl">
      <div className="mb-14">
        <span className="inline-flex rounded-full border border-violet-400/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-violet-200">
          Work &amp; Education
        </span>
        <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Work &amp; Education</h2>
        <p className="mt-4 max-w-xl text-slate-400">
          A timeline of where I've worked and studied — expand a section, then click any card for full details.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <AccordionSection title="Work Experience" icon={Briefcase} items={workItems} accent="cyan" defaultOpen={true} />
        <AccordionSection title="Education" icon={GraduationCap} items={educationItems} accent="violet" defaultOpen={false} />
      </div>
    </div>

    <ScrollIndicator />
  </section>
);

export default Recognition;
