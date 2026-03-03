"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, FileText, ArrowRight } from "lucide-react";

function safeScrollToId(id) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function NavItem({ label, onClick, index = 0, isRoute = false }) {
  if (isRoute) {
    return (
      <motion.button
        onClick={onClick}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.04 * index }}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        className="group relative flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold overflow-hidden focus:outline-none"
        aria-label={label}
        type="button"
      >
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/80 to-purple-600/80 opacity-90 group-hover:opacity-100 transition-opacity" />
        <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]" />
        <FileText className="relative h-3.5 w-3.5 text-white/80" />
        <span className="relative text-white">{label}</span>
        <ArrowRight className="relative h-3 w-3 text-white/60 transition-transform group-hover:translate-x-0.5" />
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.04 * index }}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className="group relative rounded-xl px-4 py-2 text-sm font-semibold text-zinc-300 border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/[0.15] hover:text-white transition-all duration-200 focus:outline-none"
      aria-label={label}
      type="button"
    >
      <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/[0.04] to-transparent" />
      <span className="relative">{label}</span>
    </motion.button>
  );
}

function MobileNavButton({ label, onClick, isRoute = false }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`group relative block w-full overflow-hidden rounded-xl px-4 py-3.5 text-left text-[15px] font-semibold ${
        isRoute
          ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 text-blue-200"
          : "border border-white/[0.06] bg-white/[0.03] text-zinc-200"
      }`}
      type="button"
    >
      <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/[0.04]" />

      <span className="relative flex items-center justify-between">
        <span className="flex items-center gap-2">
          {isRoute && <FileText className="h-4 w-4 text-blue-300" />}
          {label}
        </span>
        {isRoute ? (
          <ArrowRight className="h-4 w-4 text-blue-400/60" />
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-40 group-hover:opacity-100 transition-opacity" />
        )}
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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!menuOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const shellClass = useMemo(() => {
    return scrolled
      ? "bg-zinc-950/80 backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      : "bg-transparent";
  }, [scrolled]);

  const handleNav = useCallback(
    (link) => {
      if (!link) return;
      setMenuOpen(false);

      if (link.type === "route") {
        router.push(link.to);
        return;
      }

      if (pathname !== "/") {
        router.push(`/#${link.to}`);
        return;
      }

      safeScrollToId(link.to);
    },
    [router, pathname]
  );

  const handleBrandClick = useCallback(() => {
    setMenuOpen(false);

    if (pathname !== "/") {
      router.push("/");
      return;
    }

    safeScrollToId("hero");
  }, [pathname, router]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-[999] transition-all duration-500 ${shellClass}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-[72px] items-center justify-between">
          <button
            onClick={handleBrandClick}
            className="flex items-center gap-3 group"
            type="button"
            aria-label="Go to top"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/25 to-purple-500/25 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative rounded-xl bg-zinc-900/80 p-2 border border-white/[0.08] group-hover:border-white/15 transition-all duration-300">
                <Terminal className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-blue-50 transition-colors">
                Filliphi
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 group-hover:text-zinc-400 transition-colors">
                {brandSubtitle}
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l, i) => (
              <NavItem
                key={`${l.name}-${l.to}`}
                label={l.name}
                index={i}
                isRoute={l.type === "route"}
                onClick={() => handleNav(l)}
              />
            ))}
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative rounded-xl p-2.5 text-zinc-300 hover:text-white transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            <span className="absolute inset-0 rounded-xl bg-white/[0.04] border border-white/[0.06]" />
            <span className="relative">
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-white/[0.04] bg-zinc-950/95 backdrop-blur-2xl"
          >
            <div className="space-y-2 px-6 pb-6 pt-3">
              {navLinks.map((l) => (
                <MobileNavButton
                  key={`${l.name}-${l.to}`}
                  label={l.name}
                  isRoute={l.type === "route"}
                  onClick={() => handleNav(l)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
