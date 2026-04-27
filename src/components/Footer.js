import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Our Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const categories = [
  "Sofas & Sectionals",
  "Beds & Mattresses",
  "Dining Sets",
  "Wardrobes",
  "Study Tables",
  "TV Units",
];

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-100 relative overflow-hidden">

      {/* Decorative top gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#ffffff_0px,#ffffff_1px,transparent_1px,transparent_28px)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-amber-950 font-black text-sm">JK</span>
              </div>
              <div>
                <p className="text-white font-black text-xl leading-none">
                  JK <span className="text-amber-400">Furnishers</span>
                </p>
                <p className="text-amber-500 text-[10px] uppercase tracking-widest mt-0.5">
                  Dwarka Sector-5, Delhi
                </p>
              </div>
            </div>

            <p className="text-amber-200/70 text-sm leading-relaxed mb-5 max-w-xs">
              Delhi&apos;s trusted furniture destination. Quality craftsmanship,
              elegant designs, and unbeatable value — right in the heart of Dwarka.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-amber-700/40 rounded-xl px-4 py-2.5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="border-l border-amber-700/50 pl-2">
                <p className="text-white font-bold text-sm leading-none">4.5 / 5</p>
                <p className="text-amber-400/70 text-[10px] mt-0.5">159 Google Reviews</p>
              </div>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-amber-500 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-amber-200/70 hover:text-amber-300 transition-colors text-sm"
                  >
                    <svg
                      className="w-3 h-3 text-amber-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Categories ── */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-amber-500 rounded-full" />
              Categories
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href="/products"
                    className="group flex items-center gap-2 text-amber-200/70 hover:text-amber-300 transition-colors text-sm"
                  >
                    <svg
                      className="w-3 h-3 text-amber-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Visit Us ── */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-amber-500 rounded-full" />
              Visit Us
            </h3>
            <ul className="space-y-4">

              {/* Address */}
              <li className="flex gap-3 text-sm text-amber-200/70">
                <div className="w-7 h-7 bg-amber-800/50 rounded-lg flex items-center justify-center shrink-0 border border-amber-700/30">
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="leading-relaxed text-xs">
                  No. D 211, Shop 40, Main Rajapuri Rd,<br />
                  Opp. Sector 5 Dwarka, Uttam Nagar,<br />
                  Delhi – 110059
                </span>
              </li>

              {/* Phone */}
              <li className="flex gap-3 items-center text-sm text-amber-200/70">
                <div className="w-7 h-7 bg-amber-800/50 rounded-lg flex items-center justify-center shrink-0 border border-amber-700/30">
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+919810533422" className="hover:text-amber-300 transition-colors font-semibold text-amber-200 text-xs">
                  +91 98105 33422
                </a>
              </li>

              {/* Hours */}
              <li className="flex gap-3 items-center text-sm text-amber-200/70">
                <div className="w-7 h-7 bg-amber-800/50 rounded-lg flex items-center justify-center shrink-0 border border-amber-700/30">
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs">Mon–Sun: <strong className="text-amber-300">10:30 AM – 8:30 PM</strong></span>
              </li>

              {/* Open badge */}
              <li>
                <span className="inline-flex items-center gap-1.5 bg-green-900/50 border border-green-700/50 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open Today
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-amber-800/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-amber-400/60 text-xs">
            © {new Date().getFullYear()} JK Furnishers. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-amber-400/60">
            <span>🏪 In-store Shopping</span>
            <span>·</span>
            <span>🚚 Home Delivery</span>
            <span>·</span>
            <span>🏳️‍🌈 LGBTQ+ Friendly</span>
          </div>
        </div>
      </div>
    </footer>
  );
}