"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detect — navbar ko shadow + slight bg change dene ke liye
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sidebar open hone par body scroll band karo
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-lg shadow-amber-900/10 border-b border-amber-100"
            : "border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setMenuOpen(false)}>
              <div className="w-9 h-9 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center shadow-md shadow-amber-700/30 group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-sm leading-none">JK</span>
              </div>
              <div className="leading-none">
                <span className="text-amber-900 font-black text-xl tracking-tight">JK</span>
                <span className="text-amber-600 font-black text-xl tracking-tight"> Furnishers</span>
                <p className="text-gray-400 text-[10px] font-medium tracking-widest uppercase leading-none mt-0.5">
                  Dwarka Sector-5
                </p>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 group ${
                      isActive
                        ? "text-amber-700 bg-amber-50"
                        : "text-gray-600 hover:text-amber-700 hover:bg-amber-50"
                    }`}
                  >
                    {link.label}
                    {/* Active underline dot */}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+919810533422"
                className="flex items-center gap-2 text-amber-700 border border-amber-200 hover:border-amber-400 bg-amber-50 hover:bg-amber-100 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                098105 33422
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-amber-700/30 hover:shadow-amber-700/50 hover:-translate-y-0.5"
              >
                Visit Showroom
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* ── Mobile: Call icon + Hamburger ── */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="tel:+919810533422"
                className="p-2 text-amber-700 bg-amber-50 rounded-xl border border-amber-200"
                aria-label="Call us"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <button
                onClick={() => setMenuOpen(true)}
                className="p-2 text-gray-700 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition-colors"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          MOBILE SIDEBAR — Right se slide
      ══════════════════════════════════════════ */}

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-amber-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-amber-950 font-black text-xs">JK</span>
            </div>
            <div>
              <p className="text-white font-black text-base leading-none">JK Furnishers</p>
              <p className="text-amber-400 text-[10px] tracking-widest uppercase mt-0.5">Dwarka Sector-5</p>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-amber-300 hover:text-white hover:bg-amber-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3 px-2">Menu</p>
          <ul className="space-y-1">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 group ${
                      isActive
                        ? "bg-amber-700 text-white shadow-md shadow-amber-700/30"
                        : "text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                    }`}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                        isActive ? "text-amber-200" : "text-gray-400 group-hover:text-amber-600"
                      }`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="my-6 border-t border-gray-100" />

          {/* Store Info in Sidebar */}
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
            <p className="text-amber-800 font-bold text-xs uppercase tracking-widest mb-3">Store Info</p>
            <div className="space-y-2.5 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">📍</span>
                <span className="text-xs leading-snug">D 211, Shop 40, Rajapuri Rd, Dwarka Sector-5, Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-600">⏰</span>
                <span className="text-xs">10:30 AM – 8:30 PM, Mon–Sun</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                <span className="text-green-700 text-xs font-semibold">Open Now</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Sidebar Footer CTA */}
        <div className="px-4 py-5 border-t border-gray-100 space-y-3">
          <a
            href="tel:+919810533422"
            className="flex items-center justify-center gap-2 w-full bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold py-3 rounded-xl transition-colors text-sm"
            onClick={() => setMenuOpen(false)}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            098105 33422
          </a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-md shadow-amber-700/30"
          >
            🏪 Visit Showroom
          </Link>
        </div>
      </aside>
    </>
  );
}