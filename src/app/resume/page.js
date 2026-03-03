"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, Download, FileText } from "lucide-react";

const PROFILE = {
  name: "Filliphi Schlickmann",
  title: "IT / Systems (in progress)",
  location: "St. Louis, MO • Remote Available",
  email: "filliphi@icloud.com",
  githubLabel: "github.com/filliphi333",
  githubUrl: "https://github.com/filliphi333",
  linkedinLabel: "linkedin.com/in/filliphi-schlickmann-fangigs",
  linkedinUrl: "https://linkedin.com/in/filliphi-schlickmann-fangigs",
  focusTag: "Home Lab Focus",
  summary: [
    "Transitioning from web development into IT and systems work.",
    "Learning by building a home lab, documenting my steps, and troubleshooting what I break.",
    "Current focus: Windows Server/Active Directory, DNS/DHCP, Group Policy, and secure Linux fundamentals.",
  ],
};

const SKILLS = [
  {
    title: "IT / Systems",
    items: ["Windows Server (lab)", "Active Directory (lab)", "DNS / DHCP (lab)", "Group Policy (learning)"],
  },
  {
    title: "Security / Hardening",
    items: ["Ubuntu hardening (lab)", "SSH hygiene", "Basic firewalling (UFW)", "Patch & update hygiene"],
  },
  {
    title: "Tools & Workflow",
    items: ["VirtualBox / Home Lab", "Troubleshooting mindset", "Documentation habit", "AI-assisted learning (responsibly)"],
  },
];

const PROJECTS = [
  {
    title: "IT Learning Home Lab",
    blurb: "Hands-on lab environment to learn Windows Server/Active Directory and core network services.",
    bullets: [
      "Built a Windows Server domain controller in VirtualBox.",
      "Configured DNS and practiced domain join + troubleshooting name resolution.",
      "Exploring AD objects, users/groups, and basic GPO concepts.",
    ],
  },
  {
    title: "Active Directory Lab",
    blurb: "Practiced core identity concepts: domain join, DNS basics, and fundamental AD administration.",
    bullets: [
      "Created users/groups and tested access patterns.",
      "Validated DNS behavior and common misconfig troubleshooting.",
      "Documented steps for repeatable rebuilds.",
    ],
  },
  {
    title: "Ubuntu Hardening Lab",
    blurb: "Baseline hardening practice focused on practical server hygiene.",
    bullets: [
      "Applied updates + configured safer SSH defaults.",
      "Enabled firewall rules (UFW) and reviewed exposed services.",
      "Built a checklist to repeat hardening steps consistently.",
    ],
  },
  {
    title: "Fan-Gigs.com (Production Platform)",
    blurb: "A production web platform I built end-to-end — demonstrates shipping, maintaining, and operating a real system.",
    bullets: [
      "Built dashboards, auth flows, and data features on a real deployment.",
      "Comfortable working with logs, troubleshooting, and iterative improvements.",
      "Shows I can manage complexity and deliver working software.",
    ],
    linkLabel: "fan-gigs.com",
    linkUrl: "https://fan-gigs.com",
  },
];

function ResumePrintStyles({ atsMode }) {
  return (
    <style>{`
      /* Screen background to match your site vibe */
      .resume-shell {
        min-height: 100vh;
        background: radial-gradient(1200px 700px at 20% 10%, rgba(59,130,246,0.18), transparent 55%),
                    radial-gradient(900px 700px at 90% 30%, rgba(168,85,247,0.14), transparent 55%),
                    linear-gradient(to bottom, rgb(9,9,11), rgb(9,9,11));
        color: rgb(244,244,245);
      }

      .topbar {
        position: sticky;
        top: 0;
        z-index: 50;
        backdrop-filter: blur(14px);
        background: rgba(9,9,11,0.55);
        border-bottom: 1px solid rgba(255,255,255,0.06);
      }

      .paper {
        width: 8.5in;
        max-width: calc(100vw - 48px);
        margin: 28px auto 60px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.10);
        border-radius: 24px;
        overflow: hidden;
        box-shadow: 0 30px 90px rgba(0,0,0,0.55);
      }

      .paper-inner {
        background: rgba(255,255,255,0.06);
        backdrop-filter: blur(16px);
        padding: 28px;
      }

      .card {
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.10);
        border-radius: 18px;
      }

      .chip {
        display: inline-flex;
        align-items: center;
        border-radius: 999px;
        padding: 6px 10px;
        border: 1px solid rgba(59,130,246,0.25);
        background: rgba(59,130,246,0.10);
        color: rgba(191,219,254,1);
        font-size: 12px;
        font-weight: 700;
      }

      .muted { color: rgba(161,161,170,1); }
      .linkText { color: rgba(191,219,254,1); text-decoration: underline; text-underline-offset: 3px; }

      /* Print: force to clean paper resume */
      @media print {
        @page { size: letter; margin: 0.55in; }
        body { background: #fff !important; }
        .no-print { display: none !important; }
        .resume-shell { background: #fff !important; color: #111827 !important; }
        .paper { width: auto !important; max-width: none !important; margin: 0 !important; border: 0 !important; border-radius: 0 !important; box-shadow: none !important; background: #fff !important; }
        .paper-inner { background: #fff !important; backdrop-filter: none !important; padding: 0 !important; }
        .card { background: #fff !important; border: 1px solid #e5e7eb !important; }
        .muted { color: #4b5563 !important; }
        .linkText { color: #111827 !important; text-decoration: underline !important; }

        /* ATS mode: flatten visuals more */
        ${atsMode ? `
          .card { border: 0 !important; }
          .chip { border: 1px solid #d1d5db !important; background: #f9fafb !important; color: #111827 !important; }
        ` : ""}
      }
    `}</style>
  );
}

function ActionButton({ icon, children, onClick, variant = "solid" }) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-all";
  const styles =
    variant === "solid"
      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/20"
      : "border border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10";
  return (
    <button onClick={onClick} className={`${base} ${styles}`} type="button">
      {icon}
      {children}
    </button>
  );
}

export default function ResumePage() {
  const [atsMode, setAtsMode] = useState(false);

  const title = useMemo(
    () => (atsMode ? "Resume (ATS)" : "Resume (Brand)"),
    [atsMode]
  );

  const handlePrint = () => window.print();

  // “Download ATS PDF” = same page, but toggles ATS mode then prints
  const downloadATS = () => {
    setAtsMode(true);
    // allow state to paint before print
    setTimeout(() => window.print(), 60);
  };

  return (
    <div className="resume-shell">
      <ResumePrintStyles atsMode={atsMode} />

      {/* TOP BAR (screen only) */}
      <div className="topbar no-print">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-zinc-200 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </a>

          <div className="flex items-center gap-3">
            <ActionButton
              icon={<FileText className="h-4 w-4" />}
              variant={atsMode ? "solid" : "ghost"}
              onClick={() => setAtsMode((v) => !v)}
            >
              {atsMode ? "ATS Mode: ON" : "ATS Mode: OFF"}
            </ActionButton>

            <ActionButton
              icon={<Download className="h-4 w-4" />}
              variant="ghost"
              onClick={downloadATS}
            >
              Download ATS PDF
            </ActionButton>

            <ActionButton icon={<Download className="h-4 w-4" />} onClick={handlePrint}>
              Save as PDF
            </ActionButton>
          </div>
        </div>
      </div>

      {/* PAPER */}
      <div className="paper">
        <div className="paper-inner">
          {/* Header block */}
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                {/* Use your same portrait image */}
                <img
                  src="/me.png"
                  alt={PROFILE.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h1 className="text-2xl font-extrabold leading-tight">
                  {PROFILE.name}
                </h1>
                <p className="text-sm font-bold text-blue-200">{PROFILE.title}</p>
                <p className="mt-1 text-sm muted">{PROFILE.location}</p>

                {/* Links as TEXT (better for PDF/print + ATS) */}
                <div className="mt-3 space-y-1 text-sm">
                  <div>
                    <span className="muted">Email:</span>{" "}
                    <a className="linkText" href={`mailto:${PROFILE.email}`}>
                      {PROFILE.email}
                    </a>
                  </div>
                  <div>
                    <span className="muted">GitHub:</span>{" "}
                    <a className="linkText" href={PROFILE.githubUrl}>
                      {PROFILE.githubLabel}
                    </a>
                  </div>
                  <div>
                    <span className="muted">LinkedIn:</span>{" "}
                    <a className="linkText" href={PROFILE.linkedinUrl}>
                      {PROFILE.linkedinLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end gap-2">
              <span className="chip">{PROFILE.focusTag}</span>
              <div className="text-xs muted">{title}</div>
              <div className="text-xs muted">Print tip: Chrome → Print → “Save as PDF”</div>
            </div>
          </div>

          <div className="my-6 h-px bg-white/10" />

          {/* Summary */}
          <div>
            <h2 className="text-[11px] font-black tracking-[0.28em] text-zinc-200">
              SUMMARY
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed">
              {PROFILE.summary.map((line) => (
                <li key={line} className="muted">
                  <span className="text-blue-200 font-black">•</span>{" "}
                  <span className="text-zinc-100">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="my-6 h-px bg-white/10" />

          {/* Skills */}
          <div>
            <h2 className="text-[11px] font-black tracking-[0.28em] text-zinc-200">
              SKILLS
            </h2>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {SKILLS.map((group) => (
                <div key={group.title} className="card p-4">
                  <div className="text-sm font-extrabold">{group.title}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-6 h-px bg-white/10" />

          {/* Projects */}
          <div>
            <h2 className="text-[11px] font-black tracking-[0.28em] text-zinc-200">
              PROJECTS
            </h2>

            <div className="mt-4 space-y-4">
              {PROJECTS.map((p) => (
                <div key={p.title} className="card p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-base font-extrabold">{p.title}</div>
                      <div className="mt-1 text-sm muted">{p.blurb}</div>
                    </div>

                    {p.linkUrl ? (
                      <div className="text-right text-xs">
                        <div className="muted">Link:</div>
                        <a className="linkText" href={p.linkUrl}>
                          {p.linkLabel}
                        </a>
                      </div>
                    ) : null}
                  </div>

                  <ul className="mt-3 space-y-1.5 text-sm">
                    {p.bullets.map((b) => (
                      <li key={b} className="muted">
                        <span className="text-blue-200 font-black">•</span>{" "}
                        <span className="text-zinc-100">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-xs muted">
            Tip: If a recruiter asks for ATS format, use “Download ATS PDF”.
          </div>
        </div>
      </div>
    </div>
  );
}