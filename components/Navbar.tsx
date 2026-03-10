"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    console.log(currentTheme)
    setTheme(currentTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
    console.log("new theme: ", newTheme);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/services" },
    { name: "Template", path: "/templates" },
    { name: "About Us", path: "/about" },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(path.substring(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-6 transition-all duration-500 z-1000`}
    >
      <div className="max-w-7xl mx-auto px-[1.5rem] w-full">
        <div
          className={`flex items-center justify-between transition-all duration-500 bg-[hsla(210,10%,97%,0.8)] dark:bg-[hsla(0,0%,5%,0.6)] backdrop-blur-[20px] border border-[hsla(0,0%,0%,0.05)] dark:border-white/5 px-8 py-4 rounded-full ${
            scrolled ? "bg-background/80 py-3 shadow-xl" : ""
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-full flex items-center justify-center text-white font-black text-xs">
              MT
            </div>
            <span className="text-[var(--text-main)] font-bold text-[0.75rem] tracking-[0.2em] uppercase hidden md:flex gap-2">
              Minimalistic{" "}
              <span className="animate-color-change">Technology</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className="relative text-[0.75rem] font-bold uppercase tracking-[0.2em] text-dim hover:text-[var(--text-main)] transition-colors py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleThemeToggle}
              className="p-3 rounded-xl bg-[hsla(210,10%,97%,0.8)] dark:bg-[hsla(0,0%,5%,0.6)] backdrop-blur-[20px] border border-[hsla(0,0%,0%,0.05)] text-primary hover:shadow-[0_0_20px_rgba(163,230,53,0.2)] transition-all"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:inline-flex relative items-center justify-center px-8 lg:px-12 py-3 bg-primary text-black font-bold rounded-xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:shadow-[0_20px_40px_rgba(132,204,22,0.15)] hover:bg-[#9de02b] z-10 text-[0.7rem] tracking-[0.1em] uppercase"
              onClick={() => {
                if (pathname === "/") {
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                } else {
                  router.push("/#contact-form");
                }
              }}
            >
              Get Started
            </motion.button>

            <button
              className="lg:hidden text-[var(--text-main)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[hsla(210,10%,97%,0.8)] dark:bg-[hsla(0,0%,5%,0.6)] backdrop-blur-[20px] border border-[hsla(0,0%,0%,0.05)] border-x-0 border-t-0 overflow-hidden"
          >
            <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,4rem)] flex flex-col gap-6 py-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className="text-lg font-black uppercase tracking-widest text-[var(--text-main)] py-4 border-b border-[var(--border)]"
                >
                  {link.name}
                </a>
              ))}
              <button
                className="relative inline-flex items-center justify-center px-8 lg:px-12 py-4 lg:py-5 bg-primary text-black font-bold rounded-2xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:shadow-[0_20px_40px_rgba(132,204,22,0.15)] hover:bg-[#9de02b] z-10 w-full mt-4"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (pathname === "/") {
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    router.push("/#contact-form");
                  }
                }}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
