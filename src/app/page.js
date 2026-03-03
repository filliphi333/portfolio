"use client";

import { useRef } from "react";
import Header from "../components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Terminal,
  ExternalLink,
  Mail,
  MapPin,
  ChevronDown,
  Server,
  Shield,
  Wrench,
  ArrowRight,
  Sparkles,
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
    icon: Server,
    title: "IT / Systems",
    accent: "from-blue-500 to-cyan-400",
    accentBg: "bg-blue-500/10",
    accentText: "text-blue-400",
    items: [
      "Active Directory (lab)",
      "Windows Server (lab)",
      "DNS / DHCP (lab)",
      "Group Policy (learning)",
    ],
  },
  {
    icon: Shield,
    title: "Security / Hardening",
    accent: "from-purple-500 to-pink-400",
    accentBg: "bg-purple-500/10",
    accentText: "text-purple-400",
    items: [
      "Ubuntu hardening (lab)",
      "Least privilege mindset",
      "Basic firewalling (UFW)",
      "Patch & update hygiene",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    accent: "from-emerald-500 to-teal-400",
    accentBg: "bg-emerald-500/10",
    accentText: "text-emerald-400",
    items: [
      "VirtualBox / Home Lab",
      "Git & GitHub",
      "PowerShell (learning)",
      "AI-assisted learning",
    ],
  },
];

const PROJECTS = [
  {
    title: "IT Learning Home Lab",
    description:
      "My ongoing IT home lab where I practice Windows Server, Active Directory, DNS, and lab networking. I build, break, and fix environments to learn real troubleshooting.",
    tags: ["VirtualBox", "Windows Server", "Networking", "Hands-on Learning"],
    emoji: "🖥️",
    featured: true,
  },
  {
    title: "Active Directory Lab",
    description:
      "Set up a domain controller, joined client machines, configured DNS basics, and practiced core AD concepts. Focused on learning how enterprise identity and access works.",
    tags: ["Active Directory", "Windows Server", "DNS", "Domain Join"],
    emoji: "🔐",
  },
  {
    title: "Ubuntu Hardening Lab",
    description:
      "Hardened an Ubuntu server using baseline security steps (updates, SSH hygiene, firewall rules, and safer defaults). A practical learning project focused on real-world server hygiene.",
    tags: ["Ubuntu", "Hardening", "SSH", "UFW"],
    emoji: "🛡️",
  },
  {
    title: "Fan-Gigs.com",
    description:
      "A production web platform I built end-to-end. This project shows I can ship real software, manage complexity, and keep improving systems over time.",
    tags: ["Next.js", "Supabase", "Auth", "Operations"],
    url: "https://fan-gigs.com",
    image: "/fangigs.jpg",
    emoji: "🎵",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function SectionLabel({ children }) {
  return (
    <motion.div
      {...fadeUp}
      className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-blue-300"
    >
      <Sparkles className="h-3 w-3" />
      {children}
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      <Header navLinks={NAV_LINKS} brandSubtitle="IT • Systems • Home Lab" />

      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen pt-20 overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(124,58,237,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_10%_80%,rgba(16,185,129,0.06),transparent_70%)]" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute left-[-10%] top-[-15%] h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute right-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[120px]"
          />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-6xl px-6 py-12 min-h-[calc(100vh-5rem)] flex items-center"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                </span>
                Actively learning &middot; building real labs
              </motion.div>

              <div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                  className="mb-6 h-[3px] w-28 origin-left rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  I&apos;m Filliphi
                  <br />
                  Schlickmann —{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                    IT / Systems
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="max-w-xl text-lg leading-relaxed text-zinc-400"
              >
                I&apos;m building practical IT and systems experience through
                hands-on lab work. I learn by setting up home lab environments,
                documenting each step, and troubleshooting issues as they come
                up. My current focus is{" "}
                <span className="text-zinc-200 font-medium">
                  Windows Server, Active Directory, DNS/DHCP, Group Policy
                </span>
                , and secure Linux fundamentals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <a
                  href="mailto:filliphisch@gmail.com"
                  className="group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:from-blue-500 group-hover:to-purple-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
                  <Mail className="relative h-4 w-4" />
                  <span className="relative">Get in Touch</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                <div className="flex gap-2">
                  <a
                    href="https://github.com/filliphi333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-white/10 bg-white/5 p-3 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                    aria-label="GitHub"
                  >
                    <SiGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/filliphi-schlickmann-fangigs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-white/10 bg-white/5 p-3 text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all"
                    aria-label="LinkedIn"
                  >
                    <SiLinkedin className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[80px]" />

                <div className="relative h-72 w-72 md:h-[380px] md:w-[380px]">
                  <div className="absolute inset-0 rounded-[2rem] p-[2px] bg-gradient-to-br from-blue-500/50 via-purple-500/30 to-blue-500/50">
                    <div className="h-full w-full rounded-[calc(2rem-2px)] bg-zinc-950" />
                  </div>

                  <img
                    src="/me.png"
                    alt="Filliphi - IT / Systems"
                    className="absolute inset-[3px] z-10 h-[calc(100%-6px)] w-[calc(100%-6px)] rounded-[calc(2rem-3px)] object-cover"
                  />

                  <motion.div
                    animate={{ y: [0, 12, 0], x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                    className="absolute -top-8 -right-6 z-20 rounded-2xl border border-white/10 bg-zinc-900/90 backdrop-blur-xl p-4 shadow-2xl shadow-black/40"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-sm font-bold text-green-300 border border-green-500/20">
                        <Terminal className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] text-zinc-500 font-medium">
                          Current Focus
                        </p>
                        <p className="text-sm font-bold">Home Lab</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -10, 0], x: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 7, delay: 0.5 }}
                    className="absolute -bottom-4 -left-6 z-20 max-w-[220px] rounded-2xl border border-white/10 bg-zinc-900/90 backdrop-blur-xl p-4 shadow-2xl shadow-black/40"
                  >
                    <p className="text-[13px] font-medium italic text-zinc-300 leading-relaxed">
                      &ldquo;I learn by building, documenting, and
                      troubleshooting.&rdquo;
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="relative z-10 flex justify-center pb-10"
        >
          <button
            onClick={() => scrollToId("about")}
            className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-blue-400 transition-colors"
            aria-label="Scroll down"
            type="button"
          >
            <span className="text-xs font-medium tracking-wider uppercase">
              Scroll
            </span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </motion.div>
      </section>

      <section id="about" className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(59,130,246,0.05),transparent)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <SectionLabel>About Me</SectionLabel>
            <motion.h2
              {...fadeUp}
              className="text-3xl font-extrabold md:text-5xl tracking-tight"
            >
              Building toward a career in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                IT & Systems
              </span>
            </motion.h2>
          </div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-[1px] overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-50" />
            <div className="relative rounded-3xl bg-zinc-950/80 backdrop-blur-sm p-8 md:p-12 space-y-6 text-[17px] leading-relaxed text-zinc-400">
              <p>
                I&apos;m shifting my career focus toward IT and systems. I learn
                best by doing: I build lab environments, document the steps,
                troubleshoot issues, and repeat until the fundamentals stick.
              </p>
              <p>
                My current learning path includes{" "}
                <span className="text-zinc-200 font-medium">
                  Windows Server + Active Directory
                </span>
                , basic networking (DNS/DHCP), and Linux server hygiene (updates,
                SSH hardening, firewall basics). I use AI as a study and
                troubleshooting tool — not as a replacement for understanding.
              </p>
              <p>
                I&apos;m looking for an{" "}
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 px-3 py-0.5 text-blue-300 font-semibold text-[15px]">
                  entry-level IT / Help Desk / Junior Systems
                </span>{" "}
                role where I can contribute, learn from strong teammates, and
                keep building practical skills.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="relative py-28">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <SectionLabel>Skills</SectionLabel>
            <motion.h2
              {...fadeUp}
              className="text-3xl font-extrabold md:text-5xl tracking-tight"
            >
              What I&apos;m practicing through{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                hands-on labs
              </span>
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-5 max-w-lg text-zinc-500"
            >
              Real skills built through real practice — not just theory.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SKILLS.map((category, i) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-[1px] overflow-hidden hover:border-white/10 transition-all duration-300"
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${category.accent} blur-xl`}
                    style={{ opacity: 0 }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 bg-gradient-to-br from-white to-transparent" />

                  <div className="relative rounded-2xl bg-zinc-950/90 p-7">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${category.accentBg} ${category.accentText} border border-current/20`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold">{category.title}</h3>
                    </div>

                    <ul className="space-y-3">
                      {category.items.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-3 text-zinc-400 text-[15px]"
                        >
                          <div
                            className={`h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${category.accent}`}
                          />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_30%_at_50%_0%,rgba(124,58,237,0.06),transparent)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <SectionLabel>Projects</SectionLabel>
            <motion.h2
              {...fadeUp}
              className="text-3xl font-extrabold md:text-5xl tracking-tight"
            >
              Built to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                learn & ship
              </span>
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-5 max-w-lg text-zinc-500"
            >
              Hands-on projects that show how I learn: build, document, harden,
              and troubleshoot.
            </motion.p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative rounded-2xl border border-white/[0.06] overflow-hidden hover:border-white/10 transition-all duration-300 ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/[0.03] to-purple-500/[0.03]" />

                <div
                  className={`relative ${
                    project.featured ? "md:grid md:grid-cols-2" : ""
                  }`}
                >
                  {project.image ? (
                    <div className="relative overflow-hidden bg-zinc-900/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                    </div>
                  ) : (
                    <div
                      className={`flex items-center justify-center bg-gradient-to-br from-white/[0.03] to-white/[0.01] ${
                        project.featured ? "" : "h-44"
                      }`}
                    >
                      <span className="text-6xl opacity-40 group-hover:opacity-60 transition-opacity group-hover:scale-110 transition-transform duration-500">
                        {project.emoji}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col justify-center p-7 md:p-8 space-y-4">
                    {project.featured && (
                      <span className="self-start inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-bold text-blue-300 uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                    <h3 className="text-xl font-bold md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-[15px]">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-400"
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
                        className="inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300 transition-colors text-sm pt-1 group/link"
                      >
                        Visit Site{" "}
                        <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(59,130,246,0.06),transparent)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <SectionLabel>Contact</SectionLabel>
            <motion.h2
              {...fadeUp}
              className="text-3xl font-extrabold md:text-5xl tracking-tight"
            >
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                connect
              </span>
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-5 max-w-md text-zinc-500"
            >
              Open to entry-level IT opportunities. Feel free to reach out.
            </motion.p>
          </div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-[1px] overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/8 via-transparent to-purple-500/8" />

            <div className="relative rounded-3xl bg-zinc-950/80 backdrop-blur-sm p-8 md:p-12">
              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-6">
                  <ContactRow
                    icon={<Mail className="h-5 w-5" />}
                    label="Email"
                    accent="blue"
                  >
                    <a
                      href="mailto:filliphisch@gmail.com"
                      className="font-semibold hover:text-blue-400 transition-colors"
                    >
                      filliphisch@gmail.com
                    </a>
                  </ContactRow>

                  <ContactRow
                    icon={<MapPin className="h-5 w-5" />}
                    label="Location"
                    accent="purple"
                  >
                    <p className="font-semibold">
                      St. Louis, MO (Remote Available)
                    </p>
                  </ContactRow>

                  <ContactRow
                    icon={<SiGithub className="h-5 w-5" />}
                    label="GitHub"
                    accent="emerald"
                  >
                    <a
                      href="https://github.com/filliphi333"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-blue-400 transition-colors"
                    >
                      github.com/filliphi333
                    </a>
                  </ContactRow>

                  <ContactRow
                    icon={<SiLinkedin className="h-5 w-5" />}
                    label="LinkedIn"
                    accent="blue"
                  >
                    <a
                      href="https://linkedin.com/in/filliphi-schlickmann-fangigs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-blue-400 transition-colors break-all"
                    >
                      linkedin.com/in/filliphi-schlickmann-fangigs
                    </a>
                  </ContactRow>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="mb-8 text-lg leading-relaxed text-zinc-400">
                    If you&apos;re hiring for an entry-level IT role or need
                    someone who&apos;s consistent, coachable, and learns fast —
                    I&apos;d love to talk.
                  </p>
                  <a
                    href="mailto:filliphisch@gmail.com"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-lg font-bold text-white overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:from-blue-500 group-hover:to-purple-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]" />
                    <Mail className="relative h-5 w-5" />
                    <span className="relative">Send me an email</span>
                    <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/[0.04] py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">
            {new Date().getFullYear()} Filliphi Schlickmann
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/filliphi333"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2 text-zinc-500 hover:text-white hover:border-white/10 transition-all"
              aria-label="GitHub"
            >
              <SiGithub className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/filliphi-schlickmann-fangigs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2 text-zinc-500 hover:text-blue-400 hover:border-blue-500/20 transition-all"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactRow({ icon, label, accent = "blue", children }) {
  const accents = {
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  };

  return (
    <div className="flex items-center gap-4 group">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl border flex-shrink-0 ${accents[accent]} transition-all group-hover:scale-105`}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs text-zinc-600 font-medium uppercase tracking-wider">
          {label}
        </p>
        <div className="text-zinc-200 text-[15px]">{children}</div>
      </div>
    </div>
  );
}
