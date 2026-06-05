import { ExternalLink, GitBranch, User2 } from 'lucide-react';

const links = [
  { label: 'GitHub', href: '#', icon: <GitBranch size={18} /> },
  { label: 'LinkedIn', href: '#', icon: <User2 size={18} /> },
  { label: 'Behance', href: '#', icon: <ExternalLink size={18} /> },
];

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden px-6 py-12"
      style={{ background: '#0a0a0f', color: 'rgba(255,255,255,0.85)' }}
    >
      <div
        className="absolute inset-x-0 top-0 h-24"
        style={{ background: 'radial-gradient(circle at top, rgba(157,65,207,0.16), transparent 70%)' }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>© 2026 Heidi Hettiarachchi</p>
          <p className="mt-3 max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
            “Exploring the universe through technology and innovation.”
          </p>
        </div>
        {/* <div className="flex flex-wrap items-center gap-4">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm transition"
              style={{
                background: 'rgba(0,0,0,0.55)',
                border: '1px solid rgba(157,65,207,0.3)',
                color: '#ffffff',
              }}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
