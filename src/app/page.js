"use client"; 

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const NAV_LINKS = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Work", to: "work" },
  { name: "Contact", to: "contact" },
];

const SKILLS = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "VS Code", "Figma", "AI-Assisted Development"],
  },
];

const PROJECTS = [
  {
    title: "Fan-Gigs.com",
    description:
      "A platform connecting creators and producers. Includes auth, dashboards, and a polished responsive UI. Built with Next.js and Supabase.",
    tags: ["Next.js", "Supabase", "Tailwind", "Auth"],
    url: "https://fan-gigs.com",
    image: "/fangigs.jpg",
    featured: true,
  },
  {
    title: "Developer Portfolio",
    description:
      "A single-page portfolio with smooth scrolling, glassy cards, and animated sections.",
    tags: ["React", "JavaScript", "Framer Motion", "Tailwind"],
    image: "/portfolio.jpg",
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* NAV */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 right-0 top-0 z-[999] transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/70 backdrop-blur-lg border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex h-20 items-center justify-between">
            <button
              onClick={() => scrollToId("hero")}
              className="flex items-center gap-3 group"
              data-testid="link-home"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-blue-500/20 blur-md group-hover:bg-blue-500/30 transition-all" />
                <div className="relative rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2.5 border border-white/10 group-hover:border-blue-400/30 transition-all">
                  <Code2 className="h-7 w-7 text-blue-400" />
                </div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-purple-300 transition-all">
                  Filliphi
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400 group-hover:text-blue-300/70 transition-colors">
                  Web Developer
                </span>
              </div>
            </button>

            <div className="hidden md:flex gap-8">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.to}
                  onClick={() => scrollToId(l.to)}
                  className="font-medium text-zinc-300 hover:text-blue-300 transition-colors"
                  data-testid={`link-${l.to}`}
                >
                  {l.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden rounded-md p-2 text-zinc-300 hover:text-blue-300"
              aria-label="Open menu"
              data-testid="button-mobile-menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-white/5 bg-zinc-950/70 backdrop-blur-lg"
            >
              <div className="space-y-1 px-6 pb-6 pt-2">
                {NAV_LINKS.map((l) => (
                  <button
                    key={l.to}
                    onClick={() => {
                      scrollToId(l.to);
                      setMenuOpen(false);
                    }}
                    className="block w-full rounded-md px-4 py-3 text-left text-base font-medium text-zinc-300 hover:text-blue-300 hover:bg-white/5 transition-colors"
                    data-testid={`link-mobile-${l.to}`}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

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
                className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300"
              >
                Available for hire
              </motion.div>

              <div>
                <div className="mb-6 h-[3px] w-28 rounded-full bg-white/70" />
                <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                  I'm Filliphi, a{" "}
                  <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    Web Developer
                  </span>
                </h1>
              </div>

              <p className="max-w-xl text-lg leading-relaxed text-zinc-300" data-testid="text-hero-bio">
                I'm still growing as a developer, but I learn incredibly fast and
                I'm consistent when I commit to a project. I use AI responsibly
                to speed up development, validate solutions, and refine quickly
                so I can deliver polished web apps while continuously leveling up.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToId("work")}
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-8 py-4 text-lg font-bold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  data-testid="button-view-work"
                >
                  View My Work <ArrowRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollToId("contact")}
                  className="rounded-md border border-white/10 bg-white/5 px-8 py-4 text-lg font-bold text-white hover:bg-white/10 transition-all"
                  data-testid="button-contact"
                >
                  Contact Me
                </button>
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/5 p-3 text-zinc-300 hover:text-blue-300 hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                  data-testid="link-github"
                >
                  <SiGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/5 p-3 text-zinc-300 hover:text-blue-300 hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                  data-testid="link-linkedin"
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
                    alt="Filliphi - Web Developer"
                    className="absolute inset-1 z-10 h-[calc(100%-8px)] w-[calc(100%-8px)] rounded-[1.8rem] object-cover"
                    data-testid="img-portrait"
                  />

                  <motion.div
                    animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                    className={`${glassCard} absolute -top-10 -right-10 z-20 p-4`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-sm font-bold text-green-300">
                        JS
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400">Approach</p>
                        <p className="text-sm font-bold">Fast Learner</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 7, delay: 0.5 }}
                    className={`${glassCard} absolute -bottom-6 -left-10 z-20 max-w-[220px] p-4`}
                  >
                    <p className="text-sm font-medium italic text-zinc-300">
                      "Passionate about building real web experiences."
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
            data-testid="button-scroll-down"
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
            <p data-testid="text-about-1">
              I'm honest about where I am in my journey: I'm still learning, but
              I pick things up fast and I'm consistent when I commit to a
              project.
            </p>
            <p data-testid="text-about-2">
              I use AI as a productivity tool to accelerate my workflow, validate
              ideas, and improve solutions quickly. I don't pretend to know
              everything--but I can ship real products and I'm improving every day.
            </p>
            <p data-testid="text-about-3">
              I'm looking for a <span className="text-zinc-100 font-semibold">Junior Developer</span>{" "}
              role where I can contribute, learn from strong teammates, and keep
              growing.
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
              Technologies and tools I work with and continue learning.
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
                data-testid={`card-skill-${i}`}
              >
                <h3 className="mb-5 text-xl font-bold text-blue-300">
                  {category.title}
                </h3>
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

      {/* WORK */}
      <section id="work" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-white/[0.02] skew-y-2 origin-bottom-right" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl">My Work</h2>
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-blue-500/80" />
            <p className="mx-auto mt-6 max-w-lg text-zinc-300">
              Projects I've built that show what I can ship.
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
                className={`${glassCard} overflow-hidden group ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
                data-testid={`card-project-${i}`}
              >
                <div className={project.featured ? "grid md:grid-cols-2" : "flex flex-col"}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-60 w-full object-contain bg-zinc-900/40 p-4 transition-transform duration-500 group-hover:scale-[1.02] md:h-72"
                      data-testid={`img-project-${i}`}
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
                        data-testid={`link-project-${i}`}
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
              I'm currently looking for Junior Developer opportunities. Feel free to reach out.
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
                    data-testid="link-email"
                  >
                    filliphisch@gmail.com
                  </a>
                </ContactRow>

                <ContactRow icon={<MapPin className="h-6 w-6" />} label="Location">
                  <p className="font-semibold" data-testid="text-location">St. Louis - MO (Remote Available)</p>
                </ContactRow>

                <ContactRow icon={<Github className="h-6 w-6" />} label="GitHub">
                  <a
                    href="https://github.com/filliphi333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-blue-300 transition-colors"
                    data-testid="link-github-contact"
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
                    data-testid="link-linkedin-contact"
                  >
                    linkedin.com/in/filliphi-schlickmann-fangigs
                  </a>
                </ContactRow>
              </div>

              <div className="flex flex-col justify-center">
                <p className="mb-6 text-lg leading-relaxed text-zinc-300">
                  Whether you have a job opening, a freelance project, or just want to say hi,
                  don't hesitate to reach out. I'd love to hear from you.
                </p>
                <a
                  href="mailto:filliphisch@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-8 py-4 text-lg font-bold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  data-testid="button-send-email"
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
          <p className="text-sm text-zinc-400" data-testid="text-footer">
            {new Date().getFullYear()} Filliphi Schlickmann. Built with React & AI.
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
