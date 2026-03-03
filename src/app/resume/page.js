"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  FileText,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Terminal,
  Shield,
  Wrench,
  Server,
  ExternalLink,
} from "lucide-react";

const PROFILE = {
  name: "Filliphi Schlickmann",
  title: "IT / Systems (in progress)",
  location: "St. Louis, MO",
  availability: "Remote Available",
  email: "filliphi@icloud.com",
  githubLabel: "github.com/filliphi333",
  githubUrl: "https://github.com/filliphi333",
  linkedinLabel: "linkedin.com/in/filliphi-schlickmann-fangigs",
  linkedinUrl: "https://linkedin.com/in/filliphi-schlickmann-fangigs",
  summary:
    "I’m building practical IT and systems experience through hands-on lab work. I learn by setting up home lab environments, documenting each step, and troubleshooting issues as they come up. My current focus is Windows Server, Active Directory, DNS/DHCP, Group Policy, and secure Linux fundamentals.",
};

const SKILLS = [
  {
    icon: Server,
    title: "IT / Systems",
    items: [
      "Windows Server (lab)",
      "Active Directory (lab)",
      "DNS / DHCP (lab)",
      "Group Policy (learning)",
    ],
  },
  {
    icon: Shield,
    title: "Security / Hardening",
    items: [
      "Ubuntu hardening (lab)",
      "SSH hygiene",
      "Basic firewalling (UFW)",
      "Patch & update hygiene",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    items: [
      "VirtualBox / Home Lab",
      "Troubleshooting mindset",
      "Documentation habit",
      "AI-assisted learning",
    ],
  },
];

const PROJECTS = [
  {
    title: "IT Learning Home Lab",
    blurb:
      "Hands-on lab to learn Windows Server/Active Directory and core network services.",
    bullets: [
      "Built a Windows Server domain controller in VirtualBox",
      "Configured DNS and practiced domain join + troubleshooting",
      "Exploring AD objects, users/groups, and basic GPO concepts",
    ],
  },
  {
    title: "Active Directory Lab",
    blurb:
      "Core identity concepts: domain join, DNS basics, and AD administration.",
    bullets: [
      "Created users/groups and tested access patterns",
      "Validated DNS behavior and common misconfig troubleshooting",
      "Documented steps for repeatable rebuilds",
    ],
  },
  {
    title: "Ubuntu Hardening Lab",
    blurb: "Baseline hardening practice focused on practical server hygiene.",
    bullets: [
      "Applied updates + configured safer SSH defaults",
      "Enabled firewall rules (UFW) and reviewed exposed services",
      "Built a checklist to repeat hardening steps consistently",
    ],
  },
  {
    title: "Fan-Gigs.com",
    blurb:
      "Production web platform built end-to-end — shipping, maintaining, and operating a real system.",
    bullets: [
      "Built dashboards, auth flows, and data features on a real deployment",
      "Comfortable working with logs, troubleshooting, and iterative improvements",
      "Manages complexity and delivers working software",
    ],
    linkLabel: "fan-gigs.com",
    linkUrl: "https://fan-gigs.com",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function SectionHeading({ children }) {
  return (
    <div className="resume-section-heading">
      <h2>{children}</h2>
      <div className="resume-section-line" />
    </div>
  );
}

export default function ResumePage() {
  const [atsMode, setAtsMode] = useState(false);

  const handleBrandedPrint = useCallback(() => {
    setAtsMode(false);
    setTimeout(() => window.print(), 50);
  }, []);

  const handleAtsPrint = useCallback(() => {
    setAtsMode(true);
    setTimeout(() => window.print(), 50);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const handleAfterPrint = () => setAtsMode(false);
    window.addEventListener("afterprint", handleAfterPrint);
    return () => window.removeEventListener("afterprint", handleAfterPrint);
  }, []);

  return (
    <div className={`resume-root${atsMode ? " ats-mode" : ""}`}>
      <ResumePrintStyles />
      {atsMode && (
        <style>{`@media print { body, html { background: #ffffff !important; } }`}</style>
      )}

      <div className="resume-topbar no-print">
        <div className="resume-topbar-inner">
          <motion.a
            href="/"
            className="resume-back-link"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ArrowLeft size={16} />
            Back to site
          </motion.a>

          <div className="resume-btn-group">
            <motion.button
              onClick={handleAtsPrint}
              className="resume-ats-btn"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
            >
              <FileText size={16} />
              Plain ATS Version
            </motion.button>

            <motion.button
              onClick={handleBrandedPrint}
              className="resume-download-btn"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
            >
              <Download size={16} />
              Download PDF
            </motion.button>
          </div>
        </div>
      </div>

      <div className="resume-paper">
        <div className="resume-paper-glow" />

        <div className="resume-paper-content">
          <motion.header
            className="resume-header"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
          >
            <div className="resume-header-top">
              <div className="resume-avatar-wrap">
                <img
                  src="/me.png"
                  alt={PROFILE.name}
                  className="resume-avatar"
                />
                <div className="resume-avatar-ring" />
              </div>

              <div className="resume-header-info">
                <h1 className="resume-name">{PROFILE.name}</h1>
                <p className="resume-title-text">{PROFILE.title}</p>
                <div className="resume-tag-row">
                  <span className="resume-status-badge">
                    <Terminal size={12} />
                    Actively learning
                  </span>
                  <span className="resume-location-badge">
                    <MapPin size={12} />
                    {PROFILE.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="resume-contact-grid">
              <a href={`mailto:${PROFILE.email}`} className="resume-contact-item">
                <Mail size={14} />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-contact-item"
              >
                <Github size={14} />
                {PROFILE.githubLabel}
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-contact-item"
              >
                <Linkedin size={14} />
                {PROFILE.linkedinLabel}
              </a>
            </div>
          </motion.header>

          <div className="resume-divider" />

          <motion.section
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionHeading>Summary</SectionHeading>
            <p className="resume-summary-text">{PROFILE.summary}</p>
          </motion.section>

          <div className="resume-divider" />

          <motion.section
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SectionHeading>Skills</SectionHeading>
            <div className="resume-skills-grid">
              {SKILLS.map((group) => {
                const Icon = group.icon;
                return (
                  <div key={group.title} className="resume-skill-card">
                    <div className="resume-skill-card-header">
                      <div className="resume-skill-icon">
                        <Icon size={16} />
                      </div>
                      <h3>{group.title}</h3>
                    </div>
                    <div className="resume-skill-tags">
                      {group.items.map((item) => (
                        <span key={item} className="resume-skill-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          <div className="resume-divider" />

          <motion.section
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SectionHeading>Projects</SectionHeading>
            <div className="resume-projects-list">
              {PROJECTS.map((p) => (
                <div key={p.title} className="resume-project-card">
                  <div className="resume-project-header">
                    <h3 className="resume-project-title">{p.title}</h3>
                    {p.linkUrl && (
                      <a
                        href={p.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-project-link"
                      >
                        {p.linkLabel}
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <p className="resume-project-blurb">{p.blurb}</p>
                  <ul className="resume-project-bullets">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <div className="resume-footer">
            <span>filliphi.com</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumePrintStyles() {
  return (
    <style>{`
      .resume-root {
        min-height: 100vh;
        background: #09090b;
        color: #f4f4f5;
        font-family: inherit;
      }

      .resume-topbar {
        position: sticky;
        top: 0;
        z-index: 50;
        backdrop-filter: blur(16px);
        background: rgba(9, 9, 11, 0.7);
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      }

      .resume-topbar-inner {
        max-width: 900px;
        margin: 0 auto;
        padding: 16px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .resume-back-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #a1a1aa;
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        transition: color 0.2s;
      }
      .resume-back-link:hover { color: #93c5fd; }

      .resume-download-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        border: none;
        border-radius: 12px;
        font-weight: 700;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        background: linear-gradient(135deg, #3b82f6, #7c3aed);
        box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255,255,255,0.1) inset;
        transition: box-shadow 0.2s;
      }
      .resume-download-btn:hover {
        box-shadow: 0 6px 30px rgba(59, 130, 246, 0.45), 0 0 0 1px rgba(255,255,255,0.15) inset;
      }

      .resume-btn-group {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .resume-ats-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 10px 18px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        font-weight: 600;
        font-size: 14px;
        color: #a1a1aa;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.05);
        transition: all 0.2s;
      }
      .resume-ats-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.18);
        color: #d4d4d8;
      }

      .resume-paper {
        position: relative;
        max-width: 850px;
        margin: 32px auto 60px;
        border-radius: 24px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: linear-gradient(165deg, rgba(30, 30, 40, 0.9), rgba(15, 15, 20, 0.95));
        box-shadow:
          0 40px 100px rgba(0, 0, 0, 0.6),
          0 0 0 1px rgba(255, 255, 255, 0.04) inset;
      }

      .resume-paper-glow {
        position: absolute;
        top: -120px;
        left: -80px;
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.12), transparent 65%);
        pointer-events: none;
        z-index: 0;
      }

      .resume-paper-content {
        position: relative;
        z-index: 1;
        padding: 44px 42px;
      }

      .resume-header-top {
        display: flex;
        align-items: flex-start;
        gap: 20px;
      }

      .resume-avatar-wrap {
        position: relative;
        flex-shrink: 0;
      }

      .resume-avatar {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        object-fit: cover;
        position: relative;
        z-index: 1;
      }

      .resume-avatar-ring {
        position: absolute;
        inset: -3px;
        border-radius: 22px;
        background: linear-gradient(135deg, #3b82f6, #7c3aed, #3b82f6);
        z-index: 0;
        opacity: 0.6;
      }

      .resume-header-info {
        flex: 1;
      }

      .resume-name {
        font-size: 28px;
        font-weight: 800;
        letter-spacing: -0.02em;
        margin: 0;
        background: linear-gradient(to right, #fff, #93c5fd);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .resume-title-text {
        margin: 4px 0 0;
        font-size: 15px;
        font-weight: 600;
        color: #93c5fd;
      }

      .resume-tag-row {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 10px;
      }

      .resume-status-badge,
      .resume-location-badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 4px 12px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
      }

      .resume-status-badge {
        background: rgba(59, 130, 246, 0.12);
        border: 1px solid rgba(59, 130, 246, 0.25);
        color: #93c5fd;
      }

      .resume-location-badge {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #a1a1aa;
      }

      .resume-contact-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 18px;
      }

      .resume-contact-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 500;
        color: #d4d4d8;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.08);
        text-decoration: none;
        transition: all 0.2s;
      }
      .resume-contact-item:hover {
        background: rgba(59, 130, 246, 0.1);
        border-color: rgba(59, 130, 246, 0.25);
        color: #93c5fd;
      }

      .resume-divider {
        height: 1px;
        margin: 24px 0;
        background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent);
      }

      .resume-section-heading {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 18px;
      }
      .resume-section-heading h2 {
        margin: 0;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #93c5fd;
        white-space: nowrap;
      }
      .resume-section-line {
        flex: 1;
        height: 1px;
        background: linear-gradient(to right, rgba(59,130,246,0.3), transparent);
      }

      .resume-summary-text {
        font-size: 14px;
        line-height: 1.7;
        color: #d4d4d8;
        margin: 0;
      }

      .resume-skills-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
      }

      .resume-skill-card {
        padding: 16px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.07);
        transition: border-color 0.2s;
      }
      .resume-skill-card:hover {
        border-color: rgba(59, 130, 246, 0.2);
      }

      .resume-skill-card-header {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 12px;
      }
      .resume-skill-card-header h3 {
        margin: 0;
        font-size: 14px;
        font-weight: 700;
      }

      .resume-skill-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 8px;
        background: rgba(59, 130, 246, 0.12);
        color: #60a5fa;
        flex-shrink: 0;
      }

      .resume-skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }

      .resume-skill-tag {
        font-size: 11px;
        font-weight: 600;
        padding: 4px 10px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: #a1a1aa;
      }

      .resume-projects-list {
        display: grid;
        gap: 12px;
      }

      .resume-project-card {
        padding: 18px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.07);
        transition: border-color 0.2s;
      }
      .resume-project-card:hover {
        border-color: rgba(59, 130, 246, 0.2);
      }

      .resume-project-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
      }

      .resume-project-title {
        margin: 0;
        font-size: 15px;
        font-weight: 700;
      }

      .resume-project-link {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        font-weight: 600;
        color: #60a5fa;
        text-decoration: none;
        white-space: nowrap;
        padding: 3px 10px;
        border-radius: 999px;
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.2);
      }

      .resume-project-blurb {
        margin: 6px 0 0;
        font-size: 13px;
        color: #a1a1aa;
        line-height: 1.5;
      }

      .resume-project-bullets {
        margin: 10px 0 0;
        padding-left: 16px;
        list-style: none;
      }
      .resume-project-bullets li {
        position: relative;
        font-size: 13px;
        color: #d4d4d8;
        line-height: 1.6;
        padding-left: 4px;
      }
      .resume-project-bullets li::before {
        content: "";
        position: absolute;
        left: -14px;
        top: 9px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #3b82f6;
      }

      .resume-footer {
        margin-top: 28px;
        padding-top: 16px;
        border-top: 1px solid rgba(255, 255, 255, 0.06);
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #52525b;
      }

      @media (max-width: 700px) {
        .resume-paper-content { padding: 24px 20px; }
        .resume-skills-grid { grid-template-columns: 1fr; }
        .resume-header-top { flex-direction: column; }
        .resume-project-header { flex-direction: column; }
        .resume-name { font-size: 24px; }
      }

      @media print {
        @page {
          size: letter;
          margin: 0.6in 0.65in;
        }

        * { print-color-adjust: exact !important; -webkit-print-color-adjust: exact !important; }

        .no-print { display: none !important; }

        body {
          background: #0f0f14 !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .resume-root {
          min-height: auto;
          background: #0f0f14 !important;
        }

        .resume-paper {
          margin: 0 !important;
          border-radius: 0 !important;
          border: none !important;
          box-shadow: none !important;
          max-width: none !important;
          background: #0f0f14 !important;
        }

        .resume-paper-glow { display: none; }

        .resume-paper-content {
          padding: 0 !important;
          background: #0f0f14 !important;
        }

        .resume-name {
          background: none !important;
          -webkit-background-clip: unset !important;
          -webkit-text-fill-color: #ffffff !important;
          background-clip: unset !important;
          color: #ffffff !important;
        }

        .resume-title-text { color: #93c5fd !important; }
        .resume-summary-text { color: #d4d4d8 !important; }

        .resume-status-badge {
          background: rgba(59,130,246,0.15) !important;
          border-color: rgba(59,130,246,0.3) !important;
          color: #93c5fd !important;
        }

        .resume-contact-item {
          background: rgba(255,255,255,0.06) !important;
          border-color: rgba(255,255,255,0.1) !important;
          color: #d4d4d8 !important;
        }

        .resume-skill-card {
          background: rgba(255,255,255,0.05) !important;
          border-color: rgba(255,255,255,0.1) !important;
        }

        .resume-skill-icon {
          background: rgba(59,130,246,0.15) !important;
          color: #60a5fa !important;
        }

        .resume-skill-tag {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(255,255,255,0.1) !important;
          color: #a1a1aa !important;
        }

        .resume-project-card {
          background: rgba(255,255,255,0.04) !important;
          border-color: rgba(255,255,255,0.08) !important;
          break-inside: avoid;
          page-break-inside: avoid;
        }

        .resume-project-link {
          background: rgba(59,130,246,0.12) !important;
          border-color: rgba(59,130,246,0.25) !important;
          color: #60a5fa !important;
        }

        .resume-project-bullets li::before {
          background: #3b82f6 !important;
        }

        .resume-section-heading h2 { color: #93c5fd !important; }
        .resume-section-line { background: rgba(59,130,246,0.25) !important; }

        .resume-divider {
          background: rgba(255,255,255,0.08) !important;
        }

        .resume-footer {
          border-color: rgba(255,255,255,0.06) !important;
          color: #52525b !important;
        }

        a { color: inherit !important; text-decoration: none !important; }

        .resume-root.ats-mode {
          background: #ffffff !important;
          color: #111827 !important;
        }

        .resume-root.ats-mode {
          background: #ffffff !important;
        }

        .ats-mode .resume-paper {
          background: #ffffff !important;
        }

        .ats-mode .resume-paper-content {
          background: #ffffff !important;
        }

        .ats-mode .resume-paper-glow { display: none !important; }

        .ats-mode .resume-name {
          -webkit-text-fill-color: #111827 !important;
          color: #111827 !important;
        }

        .ats-mode .resume-title-text { color: #1e40af !important; }
        .ats-mode .resume-summary-text { color: #374151 !important; }

        .ats-mode .resume-status-badge,
        .ats-mode .resume-location-badge {
          background: #f3f4f6 !important;
          border-color: #d1d5db !important;
          color: #374151 !important;
        }

        .ats-mode .resume-contact-item {
          background: #f9fafb !important;
          border-color: #e5e7eb !important;
          color: #111827 !important;
        }

        .ats-mode .resume-divider {
          background: #e5e7eb !important;
        }

        .ats-mode .resume-section-heading h2 {
          color: #1e40af !important;
        }
        .ats-mode .resume-section-line {
          background: #dbeafe !important;
        }

        .ats-mode .resume-skill-card {
          background: #f9fafb !important;
          border-color: #e5e7eb !important;
        }

        .ats-mode .resume-skill-icon {
          background: #dbeafe !important;
          color: #1e40af !important;
        }

        .ats-mode .resume-skill-card-header h3 {
          color: #111827 !important;
        }

        .ats-mode .resume-skill-tag {
          background: #f3f4f6 !important;
          border-color: #d1d5db !important;
          color: #374151 !important;
        }

        .ats-mode .resume-project-card {
          background: #f9fafb !important;
          border-color: #e5e7eb !important;
        }

        .ats-mode .resume-project-title {
          color: #111827 !important;
        }

        .ats-mode .resume-project-blurb {
          color: #4b5563 !important;
        }

        .ats-mode .resume-project-bullets li {
          color: #374151 !important;
        }

        .ats-mode .resume-project-bullets li::before {
          background: #1e40af !important;
        }

        .ats-mode .resume-project-link {
          background: #eff6ff !important;
          border-color: #bfdbfe !important;
          color: #1e40af !important;
        }

        .ats-mode .resume-footer {
          border-color: #e5e7eb !important;
          color: #9ca3af !important;
        }

        .ats-mode a { color: #111827 !important; text-decoration: underline !important; }
      }
    `}</style>
  );
}
