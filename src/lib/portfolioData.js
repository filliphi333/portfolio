export const PROFILE = {
  name: "Filliphi Schlickmann",
  title: "IT / Systems (in progress)",
  location: "St. Louis, MO • Remote Available",
  email: "filliphisch@gmail.com",
  github: "https://github.com/filliphi333",
  linkedin: "https://linkedin.com/in/filliphi-schlickmann-fangigs",
  photo: "/me.png",
  summaryBullets: [
    "Transitioning from web development into IT and systems work.",
    "Learning by building a home lab, documenting my steps, and troubleshooting what I break.",
    "Current focus: Windows Server/Active Directory, DNS/DHCP, Group Policy, and secure Linux fundamentals.",
  ],
};

export const SKILLS = [
  {
    title: "IT / Systems",
    items: [
      "Windows Server (lab)",
      "Active Directory (lab)",
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

export const PROJECTS = [
  {
    title: "IT Learning Home Lab",
    description:
      "Hands-on lab environment to learn Windows Server/Active Directory and core network services. Documenting configs, common failures, and fixes.",
    tags: ["Windows Server", "Active Directory", "DNS/DHCP", "VirtualBox"],
    url: "", // if you later add a public writeup link, paste here
    image: "/homelab.jpg", // optional (add an image to /public)
    featured: true,
    bullets: [
      "Built a Windows Server domain controller in VirtualBox.",
      "Configured DNS and practiced domain join + troubleshooting name resolution.",
      "Exploring AD objects, users/groups, and basic GPO concepts.",
    ],
  },
  {
    title: "Ubuntu Hardening Lab",
    description:
      "Linux fundamentals + security hygiene: updates, firewalling, SSH practices, and baseline hardening checks in a repeatable lab setup.",
    tags: ["Ubuntu", "Hardening", "UFW", "Linux"],
    url: "",
    image: "/ubuntu.jpg",
    featured: false,
    bullets: [
      "Practiced basic hardening steps and verifying services/ports.",
      "Set up UFW rules and validated with simple tests.",
      "Documented repeatable baseline checklist for rebuilds.",
    ],
  },
  {
    title: "Fan-Gigs.com",
    description:
      "Full-stack platform built with Next.js + Supabase. Keeping it here to show I can ship real products while I transition into IT.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Auth"],
    url: "https://fan-gigs.com",
    image: "/fangigs.jpg",
    featured: false,
    bullets: [
      "Authentication, dashboards, and role-based flows.",
      "Storage uploads and profile management.",
      "Deployed and maintained in production.",
    ],
  },
];