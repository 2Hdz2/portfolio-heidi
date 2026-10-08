// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   User,
//   FolderKanban,
//   Users,
//   Award,
//   Code2,
//   Mail,
//   Sparkles,
//   Menu,
//   X,
// } from 'lucide-react';

// const navItems = [
//   { id: 'about-me', label: 'About Me', icon: <User size={18} /> },
//   { id: 'projects', label: 'Projects', icon: <FolderKanban size={18} /> },
//   { id: 'volunteer', label: 'Volunteer & Leadership', icon: <Users size={18} /> },
//   { id: 'recognitions', label: 'Work & Education', icon: <Award size={18} /> },
//   { id: 'skills', label: 'Skills', icon: <Code2 size={18} /> },
// ];

// const Header = () => {
//   const [active, setActive] = useState('about-me');
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const sections = Array.from(document.querySelectorAll('section[id]'));
//     const handleScroll = () => {
//       const current = sections.reduce(
//         (closest, section) => {
//           const top = section.getBoundingClientRect().top;
//           return Math.abs(top) < Math.abs(closest.top) ? { id: section.id, top } : closest;
//         },
//         { id: active, top: Infinity }
//       );
//       setActive(current.id);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [active]);

//   return (
//     <header className="fixed top-5 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">
//       <motion.nav
//         initial={{ y: -32, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         className="relative rounded-full px-5 py-4 shadow-[0_0_35px_rgba(157,65,207,0.18)] backdrop-blur-xl"
//         style={{
//           background: 'rgba(0,0,0,0.62)',
//           border: '1px solid rgba(157,65,207,0.2)',
//         }}
//       >
//         <div className="flex items-center justify-between gap-4">
//           <a href="#hero" className="flex items-center gap-3 text-sm font-semibold text-white">
//             <Sparkles style={{ color: '#7c90db', filter: 'drop-shadow(0 0 14px rgba(124,144,219,0.7))' }} />
//             <span
//               style={{
//                 background: 'linear-gradient(135deg, #ffffff 0%, #9d41cf 50%, #7c90db 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}
//             >
//               Heidi's Portfolio
//             </span>
//           </a>

//           <div className="hidden items-center gap-4 md:flex">
//             {navItems.map((item) => (
//               <a
//                 key={item.id}
//                 href={`#${item.id}`}
//                 className="flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300"
//                 style={
//                   active === item.id
//                     ? {
//                         background: 'rgba(157,65,207,0.15)',
//                         color: '#7c90db',
//                         boxShadow: '0 0 20px rgba(157,65,207,0.18)',
//                       }
//                     : { color: 'rgba(255,255,255,0.85)' }
//                 }
//               >
//                 {item.icon}
//                 <span>{item.label}</span>
//               </a>
//             ))}
//           </div>

//           <div className="flex items-center gap-3">
//             <a
//               href="#contact"
//               className="hidden inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white transition-transform duration-300 md:inline-flex"
//               style={{
//                 background: 'linear-gradient(135deg, #9d41cf, #7c90db)',
//                 boxShadow: '0 0 28px rgba(157,65,207,0.4)',
//               }}
//             >
//               <Mail size={16} />
//               Contact Me
//             </a>
//             <button
//               onClick={() => setOpen((value) => !value)}
//               className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 md:hidden"
//               aria-label="Menu"
//               style={{
//                 background: 'rgba(0,0,0,0.7)',
//                 border: '1px solid rgba(255,255,255,0.12)',
//                 boxShadow: '0 0 20px rgba(0,0,0,0.3)',
//               }}
//             >
//               {open ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>

//         {open ? (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="mt-4 rounded-3xl p-4 shadow-[0_0_35px_rgba(0,0,0,0.55)] md:hidden"
//             style={{
//               background: 'rgba(0,0,0,0.92)',
//               border: '1px solid rgba(157,65,207,0.18)',
//             }}
//           >
//             <div className="flex flex-col gap-3">
//               {navItems.map((item) => (
//                 <a
//                   key={item.id}
//                   href={`#${item.id}`}
//                   onClick={() => setOpen(false)}
//                   className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all duration-300"
//                   style={
//                     active === item.id
//                       ? {
//                           background: 'rgba(157,65,207,0.12)',
//                           color: '#7c90db',
//                         }
//                       : { color: 'rgba(255,255,255,0.85)' }
//                   }
//                 >
//                   {item.icon}
//                   <span>{item.label}</span>
//                 </a>
//               ))}
//               <a
//                 href="#contact"
//                 onClick={() => setOpen(false)}
//                 className="mt-2 inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white"
//                 style={{
//                   background: 'linear-gradient(135deg, #9d41cf, #7c90db)',
//                   boxShadow: '0 0 22px rgba(157,65,207,0.4)',
//                 }}
//               >
//                 <Mail size={16} />
//                 Contact Me
//               </a>
//             </div>
//           </motion.div>
//         ) : null}
//       </motion.nav>
//     </header>
//   );
// };

// export default Header;

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  FolderKanban,
  Mail,
  Sparkles,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <Sparkles size={18} />,
  },
  {
    id: 'about-me',
    label: 'About Me',
    icon: <User size={18} />,
  },
  {
    id: 'volunteer',
    label: 'Volunteer & Leadership',
    icon: <Users size={18} />,
  },
  {
    id: 'work-education',
    label: 'Work & Education',
    icon: <BriefcaseBusiness size={18} />,
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <FolderKanban size={18} />,
  },
];

const Header = ({ activeSection, onNavigate }) => {
  const [open, setOpen] = useState(false);

  const handleNavigate = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header className="fixed top-5 left-1/2 z-50 w-[95%] max-w-7xl -translate-x-1/2">
      <motion.nav
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="relative rounded-full px-5 py-4 shadow-[0_0_35px_rgba(157,65,207,0.18)] backdrop-blur-xl"
        style={{
          background: 'rgba(0,0,0,0.62)',
          border: '1px solid rgba(157,65,207,0.2)',
        }}
      >
        <div className="flex items-center justify-between gap-4">

          {/* LOGO */}
          <button
            type="button"
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 text-sm font-semibold text-white"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <Sparkles
              style={{
                color: '#7c90db',
                filter:
                  'drop-shadow(0 0 14px rgba(124,144,219,0.7))',
              }}
            />

            <span
              style={{
                background:
                  'linear-gradient(135deg, #ffffff 0%, #9d41cf 50%, #7c90db 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Heidi's Portfolio
            </span>
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-4 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all duration-300"
                style={
                  activeSection === item.id
                    ? {
                        background:
                          'rgba(157,65,207,0.15)',
                        color: '#7c90db',
                        boxShadow:
                          '0 0 20px rgba(157,65,207,0.18)',
                      }
                    : {
                        color: 'rgba(255,255,255,0.85)',
                        background: 'transparent',
                      }
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* CONTACT + MOBILE MENU */}
          <div className="flex items-center gap-3">

            {/* Contact */}
            <button
              type="button"
              onClick={() => handleNavigate('contact')}
              className="hidden items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white transition-transform duration-300 md:inline-flex"
              style={{
                background:
                  'linear-gradient(135deg, #9d41cf, #7c90db)',
                boxShadow:
                  '0 0 28px rgba(157,65,207,0.4)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <Mail size={16} />
              Contact Me
            </button>

            {/* Mobile */}
            <button
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 md:hidden"
              aria-label="Menu"
              style={{
                background: 'rgba(0,0,0,0.7)',
                border:
                  '1px solid rgba(255,255,255,0.12)',
                boxShadow:
                  '0 0 20px rgba(0,0,0,0.3)',
              }}
            >
              {open ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="mt-4 rounded-3xl p-4 shadow-[0_0_35px_rgba(0,0,0,0.55)] md:hidden"
            style={{
              background: 'rgba(0,0,0,0.92)',
              border:
                '1px solid rgba(157,65,207,0.18)',
            }}
          >
            <div className="flex flex-col gap-3">

              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    handleNavigate(item.id)
                  }
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all duration-300"
                  style={
                    activeSection === item.id
                      ? {
                          background:
                            'rgba(157,65,207,0.12)',
                          color: '#7c90db',
                        }
                      : {
                          color:
                            'rgba(255,255,255,0.85)',
                          background: 'transparent',
                        }
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}

              <button
                type="button"
                onClick={() =>
                  handleNavigate('contact')
                }
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white"
                style={{
                  background:
                    'linear-gradient(135deg, #9d41cf, #7c90db)',
                  boxShadow:
                    '0 0 22px rgba(157,65,207,0.4)',
                  border: 'none',
                }}
              >
                <Mail size={16} />
                Contact Me
              </button>

            </div>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
};

export default Header;
