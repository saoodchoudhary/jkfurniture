import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

export const metadata = {
  title: "About Us – JK Furnishers | Furniture Store Dwarka Sector-5",
  description:
    "Learn about JK Furnishers — Delhi's trusted furniture showroom in Dwarka Sector-5 with premium quality products and outstanding customer service.",
};

const stats = [
  { value: "4.5★", label: "Google Rating", sub: "159 reviews" },
  { value: "500+", label: "Products", sub: "All categories" },
  { value: "10+", label: "Years", sub: "In business" },
  { value: "7", label: "Days/Week", sub: "Always open" },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Quality First",
    desc: "We source furniture made from high-grade materials — solid wood, premium fabric, durable hardware — ensuring your investment lasts decades.",
    color: "from-amber-50 to-orange-50",
    iconBg: "bg-amber-100 text-amber-700",
    border: "border-amber-200",
    num: "01",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Customer Focus",
    desc: "Our team understands your needs, space, and budget before suggesting options. No pressure, just honest and expert advice.",
    color: "from-blue-50 to-sky-50",
    iconBg: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    num: "02",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fair Pricing",
    desc: "Premium furniture at reasonable prices. We believe quality should be accessible, and we stand behind every price tag on the showroom floor.",
    color: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100 text-green-700",
    border: "border-green-200",
    num: "03",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Reliable Delivery",
    desc: "We deliver right to your home and our team ensures proper installation so you don't have to lift a finger.",
    color: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-100 text-purple-700",
    border: "border-purple-200",
    num: "04",
  },
];

const team = [
  {
    name: "Mr. Venu",
    role: "Owner & Founder",
    initial: "V",
    color: "from-amber-600 to-amber-800",
    reviews: "Mentioned in 30+ reviews",
    desc: "The driving force behind JK Furnishers. Known for his warm welcome, deep knowledge of furniture craftsmanship, and genuine care for every customer.",
    highlight: "\"Owner Mr. Venu is very cooperative.\"",
  },
  {
    name: "Mr. Shukla",
    role: "Senior Sales Executive",
    initial: "S",
    color: "from-stone-600 to-stone-800",
    reviews: "Mentioned in 50+ reviews",
    desc: "Praised repeatedly by customers for his polite, professional approach and outstanding service. He goes the extra mile on every purchase.",
    highlight: "\"Mr. Shukla is very polite and professional.\"",
  },
];

const badges = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    label: "LGBTQ+ Friendly",
    sub: "Inclusive & welcoming",
    bg: "bg-pink-500/10 border-pink-500/20 text-pink-300",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    label: "Home Delivery",
    sub: "Assembly included",
    bg: "bg-amber-500/10 border-amber-500/20 text-amber-300",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    label: "In-Store Shopping",
    sub: "500+ items on display",
    bg: "bg-blue-500/10 border-blue-500/20 text-blue-300",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    label: "Easy Payments",
    sub: "Multiple options",
    bg: "bg-green-500/10 border-green-500/20 text-green-300",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900 text-white overflow-hidden">
        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none
                        bg-[repeating-linear-gradient(45deg,#fff_0px,#fff_1px,transparent_1px,transparent_24px)]" />
        {/* Glow */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs
                           font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5
                           border border-amber-500/30">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Est. in Dwarka Sector-5, Delhi
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 tracking-tight leading-tight">
            Built on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Trust & Craft
            </span>
          </h1>

          <p className="text-amber-200/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Meet the passionate team behind Delhi&apos;s most loved furniture showroom.
            More than a decade of serving families across Dwarka with quality, honesty, and care.
          </p>

          {/* Hero stat pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { v: "4.5★", l: "Google Rating" },
              { v: "159+", l: "Happy Customers" },
              { v: "500+", l: "Products" },
              { v: "10+ Yrs", l: "Experience" },
            ].map((s) => (
              <div key={s.l}
                   className="inline-flex items-center gap-2 bg-white/8 border border-amber-700/30
                              backdrop-blur-sm rounded-full px-5 py-2">
                <span className="text-amber-400 font-extrabold text-base">{s.v}</span>
                <span className="text-amber-200/60 text-xs">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OUR STORY
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left: Visual */}
            <div className="flex-1 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative">
                {/* Main image card */}
                <div className="bg-gradient-to-br from-amber-100 via-stone-100 to-amber-200
                                rounded-3xl aspect-[4/3] flex flex-col items-center justify-center
                                shadow-2xl shadow-amber-900/10 overflow-hidden relative">
                  <span className="text-9xl drop-shadow-lg">🏪</span>
                  <div className="mt-4 text-center px-6">
                    <p className="text-amber-800 font-extrabold text-lg">JK Furnishers</p>
                    <p className="text-amber-700/60 text-sm mt-0.5">Dwarka Sector-5, Delhi</p>
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full
                                  blur-2xl pointer-events-none" />
                </div>

                {/* Floating stat cards */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-3.5
                                border border-amber-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-extrabold text-gray-900 text-sm leading-none">4.5 / 5</p>
                      <p className="text-gray-400 text-xs mt-0.5">Google Rating</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-5 -right-5 bg-amber-700 rounded-2xl shadow-xl px-5 py-3.5
                                text-white">
                  <p className="text-amber-300 text-xs font-medium leading-none">Since</p>
                  <p className="text-2xl font-black leading-none mt-0.5">10+ Yrs</p>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="flex-1 text-center lg:text-left">
              <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-6 leading-tight">
                Bringing Beautiful Homes{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                  to Delhi Families
                </span>
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                JK Furnishers has been a cornerstone of the Dwarka community, serving families
                across Delhi with premium home furniture for over a decade. Located on Main Rajapuri
                Road opposite Sector-5 Dwarka, our showroom is a destination for those who want
                both style and substance.
              </p>

              <p className="text-gray-500 leading-relaxed mb-8">
                Founded with passion and run with care, JK Furnishers carries a hand-picked
                selection of sofas, beds, wardrobes, dining sets, and more — all carefully chosen
                for their craftsmanship and value. We&apos;re proud to have earned a 4.5-star Google
                rating from over 159 happy customers and counting.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label}
                       className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-100
                                  hover:border-amber-300 hover:shadow-md transition-all duration-200">
                    <p className="text-xl sm:text-2xl font-extrabold text-amber-700 leading-none">
                      {s.value}
                    </p>
                    <p className="text-gray-700 text-xs font-bold mt-1">{s.label}</p>
                    <p className="text-gray-400 text-[10px] mt-0.5">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          VALUES
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Core Values
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-lg mx-auto">
              The principles that guide everything we do — from selecting furniture to
              delivering it to your door.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`group relative bg-gradient-to-br ${v.color} rounded-2xl p-7
                            border ${v.border} hover:shadow-xl hover:-translate-y-1
                            transition-all duration-300 overflow-hidden`}
              >
                {/* Watermark number */}
                <span className="absolute -top-3 -right-2 text-8xl font-black text-black/[0.04]
                                 select-none leading-none">
                  {v.num}
                </span>
                <div className={`w-12 h-12 ${v.iconBg} rounded-xl flex items-center justify-center
                                 mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {v.icon}
                </div>
                <h3 className="font-extrabold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TEAM
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">
              The People
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Team
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              The friendly faces ready to help you furnish your home perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm
                           hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
                           overflow-hidden"
              >
                {/* Card top accent */}
                <div className={`h-2 w-full bg-gradient-to-r ${member.color}`} />

                <div className="p-8 text-center">
                  {/* Avatar */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl
                                   flex items-center justify-center text-white font-black text-3xl
                                   mx-auto mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    {member.initial}
                  </div>

                  <h3 className="font-extrabold text-gray-900 text-xl leading-none">{member.name}</h3>
                  <p className="text-amber-600 text-sm font-bold mt-1 mb-1">{member.role}</p>

                  {/* Review count badge */}
                  <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700
                                   text-xs font-bold px-3 py-1 rounded-full border border-amber-100 mb-4">
                    <svg className="w-3 h-3 fill-amber-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {member.reviews}
                  </span>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{member.desc}</p>

                  {/* Customer quote */}
                  <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                    <p className="text-amber-800 text-xs italic font-medium leading-relaxed">
                      {member.highlight}
                    </p>
                    <p className="text-amber-600/60 text-[10px] mt-1 font-medium">
                      — Google Review
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BADGES / HIGHLIGHTS
      ══════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none
                        bg-[repeating-linear-gradient(45deg,#fff_0px,#fff_1px,transparent_1px,transparent_24px)]" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              Why Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {badges.map((b) => (
              <div
                key={b.label}
                className={`group flex flex-col items-center text-center rounded-2xl px-5 py-6
                            border backdrop-blur-sm hover:scale-105 transition-all duration-300 ${b.bg}`}
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  {b.icon}
                </div>
                <p className="font-extrabold text-white text-sm leading-tight">{b.label}</p>
                <p className="text-white/50 text-xs mt-1">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIAL HIGHLIGHT
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">
            Customer Love
          </span>
          <div className="mt-6 bg-white rounded-3xl p-10 shadow-lg border border-gray-100 relative overflow-hidden">
            {/* Big quote mark */}
            <div className="absolute -top-4 -left-2 text-9xl font-black text-amber-100 leading-none select-none">
              &ldquo;
            </div>
            <div className="relative">
              <div className="flex justify-center gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-xl leading-relaxed font-medium mb-6 max-w-2xl mx-auto">
                One of the best furniture shops in Dwarka Rajapuri, Delhi. Excellent service
                and quality products. Mr. Shukla is very polite and professional.
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-rose-600 text-white rounded-full flex items-center
                                justify-center font-black text-sm shadow-md">
                  R
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-sm">Rupam Pandey</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <p className="text-gray-400 text-xs">Verified Google Review</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">
            Come See Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
            Visit Our Showroom Today
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Open 7 days a week — no appointment needed. Our team is always ready to help you
            find the perfect furniture for your home and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919810533422"
              className="group inline-flex items-center justify-center gap-2
                         bg-amber-700 hover:bg-amber-800 text-white font-extrabold
                         px-8 py-3.5 rounded-full transition-all duration-200
                         shadow-lg shadow-amber-700/30 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2
                         border-2 border-amber-700 text-amber-700
                         hover:bg-amber-700 hover:text-white font-bold
                         px-8 py-3.5 rounded-full transition-all duration-200"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}