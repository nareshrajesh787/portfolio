"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav 
          className={`flex justify-between items-center rounded-2xl transition-all duration-300 ease-in-out ${
            scrolled ? "bg-white/70 backdrop-blur-xl shadow-sm border border-slate-200/50 px-6 py-3" : "bg-transparent px-2 py-2"
          }`}
        >
          {/* Logo / Name */}
          <Link href="/" className="font-bold text-slate-900 tracking-tight text-lg relative z-10 group">
            Naresh<span className="text-slate-400 group-hover:text-brand-600 transition-colors">Rajesh</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1 sm:space-x-8 items-center bg-white/0">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-slate-900 text-sm font-semibold tracking-wide transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="/Naresh_Rajesh_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 rounded-full bg-slate-900 text-white hover:bg-brand-600 hover:scale-105 focus-visible:ring-2 focus-visible:ring-brand-500 focus:outline-none transition-all text-[13px] font-bold tracking-widest uppercase shadow-md pointer-events-auto"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center relative z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-slate-200/50 shadow-xl rounded-2xl overflow-hidden py-2"
          >
            <div className="flex flex-col px-4 py-2 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="/Naresh_Rajesh_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm tracking-widest uppercase font-bold text-white bg-slate-900 hover:bg-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500 focus:outline-none transition-colors mt-2 text-center shadow-sm"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
