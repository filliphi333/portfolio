"use client";

import Header from "../components/Header";
import { motion } from "framer-motion";
import {
  Terminal,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const NAV_LINKS = [
  { name: "About", to: "about", type: "scroll" },
  { name: "Skills", to: "skills", type: "scroll" },
  { name: "Projects", to: "projects", type: "scroll" },
  { name: "Contact", to: "contact", type: "scroll" },
  { name: "Resume", to: "/resume", type: "route" },
];

const SKILLS = [
  {
    title: "IT / Systems",
    items: [
      "Active Directory (lab)",
      "Windows Server (lab)",
      "DNS / DHCP (lab)",
      "Group Policy (learning)",
    ],
  },
  {
    title: "Security / Hardening",
    items: [
      "Ubuntu hardening (lab)",
      "Least privilege mindset",
      "Basic firewalling (UFW)",
      "Patch & update hygiene",
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      "VirtualBox / Home Lab",
      "Git & GitHub",
      "PowerShell (learning)",
      "AI-assisted learning & troubleshooting",
    ],
  },
];

const PROJECTS = [
  {
    title: "IT Learning Home Lab",
    description:
      "My ongoing IT home lab where I practice Windows Server, Active Directory, DNS, and lab networking. I build, break, and fix environments to learn real troubleshooting.",
    tags: ["VirtualBox", "Windows Server", "Networking", "Hands-on Learning"],
    image: "/it-homelab.jpg",
    featured: true,
  },
  {
    title: "Active Directory Lab",
    description:
      "Set up a domain controller, joined client machines, configured DNS basics, and practiced core AD concepts. Focused on learning how enterprise identity and access works.",
    tags: ["Active Directory", "Windows Server", "DNS", "Domain Join"],
    image: "/active-directory.jpg",
    featured: false,
  },
  {
    title: "Ubuntu Hardening Lab",
    description:
      "Hardened an Ubuntu server using baseline security steps (updates, SSH hygiene, firewall rules, and safer defaults). A practical learning project focused on real-world server hygiene.",
    tags: ["Ubuntu", "Hardening", "SSH", "UFW"],
    image: "/ubuntu-hardening.jpg",
    featured: false,
  },
  {
    title: "Fan-Gigs.com",
    description:
      "A production web platform I built end-to-end. This project shows I can ship real software, manage complexity, and keep improving systems over time.",
    tags: ["Next.js", "Supabase", "Auth", "Operations"],
    url: "https://fan-gigs.com",
    image: "/fangigs.jpg",
    featured: false,
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const glassCard =
  "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.35)]";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* ✅ Header handles route + scroll internally */}
      <Header navLinks={NAV_LINKS} brandSubtitle="IT • Systems • Home Lab" />

      {/* HERO */}
      <section id="hero" className="relative min-h-screen pt-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-700/35 via-zinc-950/80 to-zinc-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-blue-500/10" />
          <div className="absolute left-[-200px] top-[-200px] h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute right-[-280px] top-[80px] h-[700px] w-[700px] rounded-full bg-zinc-200/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),rgba(0,0,0,0.88))]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 min-h-[calc(100vh-5rem)] flex items-center">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300"
              >
                <Terminal className="h-4 w-4" />
                Actively learning • building real labs
              </motion.div>

              <div>
                <div className="mb-6 h-[3px] w-28 rounded-full bg-white/70" />
                <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                  I'm Filliphi Schlickmann —{" "}
                  <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    IT / Systems (in progress)
                  </span>
                </h1>
              </div>

              <p className="max-w-xl text-lg leading-relaxed text-zinc-300">
                I'm transitioning from web development into IT and systems work. I'm honest
                about where I am: I’m learning by building a home lab, documenting my steps,
                and fixing what I break. I focus on fundamentals like Windows Server/Active
                Directory, networking basics, and secure Linux hygiene — and I’m consistent
                about improving every week.
              </p>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/filliphi333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/5 p-3 text-zinc-300 hover:text-blue-300 hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <SiGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/filliphi-schlickmann-fangigs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/5 p-3 text-zinc-300 hover:text-blue-300 hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin className="h-6 w-6" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative"
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/12 blur-3xl" />

                <div className="relative h-72 w-72 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1 md:h-96 md:w-96">
                  <div className="absolute inset-0 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10" />

                  <img
                    src="/me.png"
                    alt="Filliphi - IT / Systems"
                    className="absolute inset-1 z-10 h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-[1.8rem] object-cover"
                  />

                  <motion.div
                    animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                    className={`${glassCard} absolute -top-10 -right-10 z-20 p-4`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-sm font-bold text-green-300">
                        AD
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400">Current Focus</p>
                        <p className="text-sm font-bold">Home Lab</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 7, delay: 0.5 }}
                    className={`${glassCard} absolute -bottom-6 -left-10 z-20 max-w-[240px] p-4`}
                  >
                    <p className="text-sm font-medium italic text-zinc-100">
                      "I learn by building, documenting, and troubleshooting."
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="relative z-10 flex justify-center pb-10"
        >
          <button
            onClick={() => scrollToId("about")}
            className="animate-bounce text-zinc-300 hover:text-blue-300 transition-colors"
            aria-label="Scroll down"
            type="button"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-white/[0.03] -skew-y-3 origin-top-left" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-blue-500/80" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${glassCard} p-8 md:p-12 space-y-6 text-lg leading-relaxed text-zinc-300`}
          >
            <p>
              I'm shifting my career focus toward IT and systems. I learn best by doing: I build
              lab environments, document the steps, troubleshoot issues, and repeat until the
              fundamentals stick.
            </p>
            <p>
              My current learning path includes Windows Server + Active Directory, basic networking
              (DNS/DHCP), and Linux server hygiene (updates, SSH hardening, firewall basics). I use AI
              as a study and troubleshooting tool — not as a replacement for understanding.
            </p>
            <p>
              I'm looking for an{" "}
              <span className="text-zinc-100 font-semibold">
                entry-level IT / Help Desk / Junior Systems
              </span>{" "}
              role where I can contribute, learn from strong teammates, and keep building practical skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl">Skills</h2>
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-blue-500/80" />
            <p className="mx-auto mt-6 max-w-lg text-zinc-300">
              What I’m practicing now and continuing to learn through hands-on labs.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {SKILLS.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${glassCard} p-8 hover:border-blue-400/30 transition-colors`}
              >
                <h3 className="mb-5 text-xl font-bold text-blue-300">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-zinc-300">
                      <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400/70" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-white/[0.02] skew-y-2 origin-bottom-right" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-blue-500/80" />
            <p className="mx-auto mt-6 max-w-lg text-zinc-300">
              Hands-on projects that show how I learn: build, document, harden, and troubleshoot.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`${glassCard} overflow-hidden group ${project.featured ? "lg:col-span-2" : ""}`}
              >
                <div className={project.featured ? "grid md:grid-cols-2" : "flex flex-col"}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-60 w-full object-contain bg-zinc-900/40 p-4 transition-transform duration-500 group-hover:scale-[1.02] md:h-72"
                    />
                    {project.featured && (
                      <div className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center space-y-4 p-8">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-zinc-300 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-semibold text-blue-300 hover:underline mt-2"
                      >
                        Visit Site <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl">Let's Connect</h2>
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-blue-500/80" />
            <p className="mx-auto mt-6 max-w-lg text-zinc-300">
              Open to entry-level IT opportunities (Help Desk / Junior Systems). Feel free to reach out.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${glassCard} p-8 md:p-12`}
          >
            <div className="grid gap-10 md:grid-cols-2">
              <div className="space-y-8">
                <ContactRow icon={<Mail className="h-6 w-6" />} label="Email">
                  <a
                    href="mailto:filliphisch@gmail.com"
                    className="font-semibold hover:text-blue-300 transition-colors"
                  >
                    filliphisch@gmail.com
                  </a>
                </ContactRow>

                <ContactRow icon={<MapPin className="h-6 w-6" />} label="Location">
                  <p className="font-semibold">St. Louis, MO (Remote Available)</p>
                </ContactRow>

                <ContactRow icon={<Github className="h-6 w-6" />} label="GitHub">
                  <a
                    href="https://github.com/filliphi333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-blue-300 transition-colors"
                  >
                    github.com/filliphi333
                  </a>
                </ContactRow>

                <ContactRow icon={<Linkedin className="h-6 w-6" />} label="LinkedIn">
                  <a
                    href="https://linkedin.com/in/filliphi-schlickmann-fangigs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-blue-300 transition-colors"
                  >
                    linkedin.com/in/filliphi-schlickmann-fangigs
                  </a>
                </ContactRow>
              </div>

              <div className="flex flex-col justify-center">
                <p className="mb-6 text-lg leading-relaxed text-zinc-300">
                  If you’re hiring for an entry-level IT role or need someone who’s consistent, coachable,
                  and learns fast through hands-on practice, I’d love to talk.
                </p>
                <a
                  href="mailto:filliphisch@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-8 py-4 text-lg font-bold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  <Mail className="h-5 w-5" />
                  Send me an email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">
            {new Date().getFullYear()} Filliphi Schlickmann. Built with Next.js & documented learning.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/filliphi333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-blue-300 transition-colors"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/filliphi-schlickmann-fangigs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-blue-300 transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactRow({ icon, label, children }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500/10 text-blue-300 flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-zinc-400">{label}</p>
        <div className="text-zinc-100">{children}</div>
      </div>
    </div>
  );
}