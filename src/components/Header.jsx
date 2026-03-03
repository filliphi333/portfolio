"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Menu, X } from "lucide-react";

function safeScrollToId(id) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function NavPill({ label, onClick, index = 0 }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.04 * index }}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className="group relative rounded-full p-[1px] focus:outline-none"
      aria-label={label}
      type="button"
    >
      <span className="pointer-events-none absolute -inset-[6px] rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(59,130,246,0.0),rgba(99,102,241,0.55),rgba(168,85,247,0.55),rgba(59,130,246,0.0))]" />
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(120deg,rgba(59,130,246,0.75),rgba(168,85,247,0.75),rgba(99,102,241,0.75))] opacity-40 group-hover:opacity-90 transition-opacity" />

      <span className="relative flex items-center gap-2 rounded-full bg-zinc-950/70 px-4 py-2 text-sm font-semibold text-zinc-200 backdrop-blur-md border border-white/10 group-hover:border-white/20 transition-all">
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/10 blur-md skew-x-[-20deg] translate-x-[-140%] group-hover:translate-x-[260%] transition-transform duration-700" />
        </span>

        <span className="relative">
          {label}
          <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 group-hover:scale-x-100 transition-transform duration-300" />
        </span>
      </span>
    </motion.button>
  );
}

function MobileNavButton({ label, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className="group relative block w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-base font-semibold text-zinc-200"
      type="button"
    >
      <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/10 blur-md skew-x-[-20deg] translate-x-[-140%] group-hover:translate-x-[260%] transition-transform duration-700" />
      </span>

      <span className="relative flex items-center justify-between">
        {label}
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60 group-hover:opacity-100 transition-opacity" />
      </span>
    </motion.button>
  );
}

export default function Header({
  navLinks = [],
  brandSubtitle = "IT • Systems • Home Lab",
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent page scroll behind mobile menu
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!menuOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  // Close menu if viewport becomes desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const shellClass = useMemo(() => {
    return scrolled
      ? "bg-zinc-950/70 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
      : "bg-transparent";
  }, [scrolled]);

  const handleNav = useCallback(
    (link) => {
      if (!link) return;

      // Always close the menu immediately
      setMenuOpen(false);

      // Route link: go there
      if (link.type === "route") {
        router.push(link.to);
        return;
      }

      // Scroll link:
      // If we aren't on the homepage, go home first and include a hash,
      // then the home page can scroll after mount (or the browser will jump to hash).
      if (pathname !== "/") {
        router.push(`/#${link.to}`);
        return;
      }

      // Already on home: smooth scroll
      safeScrollToId(link.to);
    },
    [router, pathname]
  );

  const handleBrandClick = useCallback(() => {
    setMenuOpen(false);

    // If not on home, go home
    if (pathname !== "/") {
      router.push("/");
      return;
    }

    // On home: scroll to hero
    safeScrollToId("hero");
  }, [pathname, router]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-[999] transition-all duration-300 ${shellClass}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
          <button
            onClick={handleBrandClick}
            className="flex items-center gap-3 group"
            type="button"
            aria-label="Go to top"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-blue-500/20 blur-md group-hover:bg-purple-500/25 transition-all" />
              <div className="relative rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2.5 border border-white/10 group-hover:border-blue-300/40 transition-all">
                <Server className="h-7 w-7 text-blue-300" />
              </div>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-purple-300 transition-all">
                Filliphi
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400 group-hover:text-blue-300/80 transition-colors">
                {brandSubtitle}
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((l, i) => (
              <NavPill
                key={`${l.name}-${l.to}`}
                label={l.name}
                index={i}
                onClick={() => handleNav(l)}   // ✅ pass whole link object
              />
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative rounded-xl p-2 text-zinc-200"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            <span className="absolute inset-0 rounded-xl bg-white/5 border border-white/10" />
            <span className="relative">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl"
          >
            <div className="space-y-2 px-6 pb-6 pt-2">
              {navLinks.map((l) => (
                <MobileNavButton
                  key={`${l.name}-${l.to}`}
                  label={l.name}
                  onClick={() => handleNav(l)}  // ✅ pass whole link object
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}