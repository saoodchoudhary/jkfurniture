"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { allProducts, productCategories } from "@/lib/products";
import { ProductCard } from "@/components/home/FeaturedProducts";

// ─── Data ─────────────────────────────────────────────────────────────────────

const categoryIcons = {
  All: "🏠", Sofas: "🛋️", Beds: "🛏️", Dining: "🍽️",
  Wardrobes: "🚪", Study: "📚", "TV Units": "📺",
  "Living Room": "☕", Storage: "📦", Bedroom: "💄",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO — matches About & Contact style
      ══════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900 text-white overflow-hidden">

        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none
                        bg-[repeating-linear-gradient(45deg,#ffffff_0px,#ffffff_1px,transparent_1px,transparent_24px)]" />

        {/* Dual glow blobs */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300
                           text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest
                           mb-5 border border-amber-500/30">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            JK Furnishers · Dwarka Sector-5
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Collection
            </span>
          </h1>

          <p className="text-amber-200/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Explore premium home furniture — sofas, beds, wardrobes, dining sets and more,
            all handpicked for quality and value.
          </p>

          {/* Stats pills row — same style as About hero */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { value: `${allProducts.length}+`, label: "Products" },
              { value: `${productCategories.length - 1}`, label: "Categories" },
              { value: "4.5★", label: "Google Rating" },
              { value: "159+", label: "Reviews" },
            ].map((s) => (
              <div
                key={s.label}
                className="inline-flex items-center gap-2 bg-white/[0.06] border border-amber-700/30
                           backdrop-blur-sm rounded-full px-5 py-2"
              >
                <span className="text-amber-400 font-extrabold text-base leading-none">
                  {s.value}
                </span>
                <span className="text-amber-200/60 text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wave divider — exact match to About/Contact */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40Z" fill="#fafaf9" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FILTER + PRODUCTS
      ══════════════════════════════════════════════ */}
      <section className="py-14 bg-stone-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Search + Result count bar ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-6
                          flex flex-col sm:flex-row gap-4 items-start sm:items-center">

            {/* Search input */}
            <div className="relative flex-1 w-full">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search furniture..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50
                           focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:bg-white
                           text-sm text-gray-700 outline-none transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400
                             hover:text-gray-600 transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Result count */}
            <p className="text-gray-400 text-sm whitespace-nowrap shrink-0">
              <span className="text-amber-700 font-extrabold">{filtered.length}</span>
              {" "}items found
            </p>
          </div>

          {/* ── Category pills ── */}
          <div className="flex flex-wrap gap-2 mb-10">
            {productCategories.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm
                              font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-amber-700 text-white shadow-md shadow-amber-700/30 scale-[1.03]"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50"
                  }`}
                >
                  <span className="text-base leading-none">{categoryIcons[cat]}</span>
                  {cat}
                </button>
              );
            })}
          </div>

          {/* ── Product grid / Empty state ── */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center
                              text-4xl mx-auto mb-5 shadow-sm">
                🔍
              </div>
              <h3 className="text-xl font-extrabold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-400 text-sm mb-7 max-w-xs mx-auto">
                Try a different category or clear your search query.
              </p>
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="bg-amber-700 hover:bg-amber-800 text-white font-bold px-7 py-3
                           rounded-full transition-all duration-200 shadow-md shadow-amber-700/20
                           hover:-translate-y-0.5"
              >
                Show All Products
              </button>
            </div>
          )}

          {/* ══════════════════════════════════════════════
              BOTTOM CTA
          ══════════════════════════════════════════════ */}
          <div className="mt-20 relative bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900
                          text-white rounded-3xl p-10 text-center overflow-hidden">

            {/* Texture */}
            <div className="absolute inset-0 opacity-[0.035]
                            bg-[repeating-linear-gradient(45deg,#fff_0px,#fff_1px,transparent_1px,transparent_20px)]" />
            {/* Blobs */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-600/15 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-amber-700/10 rounded-full blur-2xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs
                               font-bold uppercase tracking-widest px-4 py-1.5 rounded-full
                               border border-amber-500/30 mb-5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Need Help?
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">
                Don&apos;t see what you&apos;re looking for?
              </h3>

              <p className="text-amber-200/70 mb-8 max-w-md mx-auto leading-relaxed">
                Visit our showroom or call us — we have hundreds more pieces and can help
                you find exactly what fits your home and budget.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919810533422"
                  className="group inline-flex items-center justify-center gap-2.5
                             bg-white text-amber-900 font-extrabold px-8 py-3.5 rounded-full
                             hover:bg-amber-50 transition-all duration-200
                             shadow-xl shadow-black/20 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 text-amber-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 98105 33422
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-amber-400/50
                             text-amber-200 hover:bg-amber-800/50 hover:border-amber-400
                             font-bold px-8 py-3.5 rounded-full transition-all duration-200
                             backdrop-blur-sm"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Visit Showroom
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}