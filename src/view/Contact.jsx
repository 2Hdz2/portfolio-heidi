// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, User2, GitBranch, ExternalLink, Send } from 'lucide-react';
// import ScrollIndicator from '../components/ScrollIndicator';

// const contactItems = [
//   { label: 'Email', value: 'heidi@example.com', icon: <Mail size={18} /> },
//   { label: 'LinkedIn', value: 'linkedin.com/in/heidi-hettiarachchi', icon: <User2 size={18} /> },
//   { label: 'GitHub', value: 'github.com/heidi-hettiarachchi', icon: <GitBranch size={18} /> },
//   { label: 'Behance', value: 'behance.net/heidi', icon: <ExternalLink size={18} /> },
// ];

// const Contact = () => {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (event) => {
//     setForm({ ...form, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSubmitted(true);
//     setForm({ name: '', email: '', message: '' });
//   };

//   return (
//     <section id="contact" className="relative scroll-mt-18 px-6 py-24 text-white">
//       <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.12),transparent_60%)]" />
//       <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
//         <div className="space-y-6">
//           <span className="inline-flex rounded-full border border-pink-400/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-pink-200">
//             Get in Touch
//           </span>
//           <h2 className="text-4xl font-semibold text-white md:text-5xl">Contact</h2>
//           <p className="max-w-xl text-slate-300">
//             I love collaborating on thoughtful digital experiences and space-inspired design systems. Send a message to discuss a new project or partnership.
//           </p>

//           <div className="grid gap-4 sm:grid-cols-2">
//             {contactItems.map((item) => (
//               <motion.div
//                 key={item.label}
//                 whileHover={{ y: -4 }}
//                 className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-[0_0_30px_rgba(236,72,153,0.1)] backdrop-blur-xl"
//               >
//                 <div className="flex items-center gap-3 text-cyan-200">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
//                     <p className="text-sm leading-6 text-white">{item.value}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <motion.form
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           onSubmit={handleSubmit}
//           className="rounded-4xl border border-white/10 bg-slate-950/80 p-8 shadow-[0_0_60px_rgba(124,58,237,0.12)] backdrop-blur-xl"
//         >
//           <div className="mb-6 grid gap-4 sm:grid-cols-2">
//             <label className="space-y-2 text-sm text-slate-300">
//               <span>Name</span>
//               <input
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
//                 placeholder="Your name"
//               />
//             </label>
//             <label className="space-y-2 text-sm text-slate-300">
//               <span>Email</span>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
//                 placeholder="you@example.com"
//               />
//             </label>
//           </div>
//           <label className="space-y-2 text-sm text-slate-300">
//             <span>Message</span>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               required
//               rows={6}
//               className="w-full rounded-4xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white outline-none transition focus:border-cyan-400/40"
//               placeholder="Tell me about your project..."
//             />
//           </label>
//           <button
//             type="submit"
//             className="mt-6 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(168,85,247,0.35)] transition hover:-translate-y-0.5"
//           >
//             <Send size={18} />
//             Send Message
//           </button>
//           {submitted ? (
//             <div className="mt-6 rounded-3xl bg-cyan-500/10 p-4 text-sm text-cyan-100">
//               Message sent! I’ll follow up shortly.
//             </div>
//           ) : null}
//         </motion.form>
//       </div>
//       <ScrollIndicator />
//     </section>
//   );
// };

// export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  User2,
  GitBranch,
  ExternalLink,
  Send,
} from "lucide-react";
import ScrollIndicator from "../components/ScrollIndicator";

const contactItems = [
  {
    label: "Email",
    value: "heidierink@gmail.com",
    href: "mailto:heidierink@gmail.com",
    icon: <Mail size={18} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/heidi-erin",
    href: "https://linkedin.com/in/heidi-erin",
    icon: <User2 size={18} />,
  },
  // {
  //   label: "GitHub",
  //   value: "github.com/2Hdz2",
  //   href: "https://github.com/2Hdz2",
  //   icon: <GitBranch size={18} />,
  // },
];


console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID);

console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("PUBLIC:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Honeypot spam protection
    if (form.website) return;

    setLoading(true);

    try {
      // await emailjs.send(
      //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      //   {
      //     from_name: form.name,
      //     from_email: form.email,
      //     message: form.message,
      //   },
      //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      // );
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        message: "",
        website: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-18 px-6 py-24 text-white"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.12),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Section */}
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-pink-400/15 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-pink-200">
            Get in Touch
          </span>

          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Contact Me
          </h2>

          {/* <p className="max-w-xl text-slate-300">
            I love collaborating on thoughtful digital experiences, AI-driven
            solutions, and innovative technology projects. Send a message to
            discuss a new project, opportunity, or partnership.
          </p> */}

          <div className="grid gap-4 sm:grid-cols-2">
            {contactItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-[0_0_30px_rgba(236,72,153,0.1)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 text-cyan-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm leading-6 text-white transition hover:text-cyan-300"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="rounded-4xl border border-white/10 bg-slate-950/80 p-8 shadow-[0_0_60px_rgba(124,58,237,0.12)] backdrop-blur-xl"
        >
          {/* Hidden Honeypot Field */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            className="hidden"
            autoComplete="off"
          />

          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                placeholder="Your name"
              />
            </label>

            <label className="space-y-2 text-sm text-slate-300">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="space-y-2 text-sm text-slate-300">
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full rounded-4xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white outline-none transition focus:border-cyan-400/40"
              placeholder="Tell me about your project..."
            />
          </label>


          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(168,85,247,0.35)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send size={18} />
            {loading ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <div className="mt-6 rounded-3xl bg-cyan-500/10 p-4 text-sm text-cyan-100">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
        </motion.form>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Contact;