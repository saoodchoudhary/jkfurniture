"use client";

import { useState } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=28.602850245954276,77.05902612522274&z=17&output=embed";

const MAPS_LINK =
  "https://maps.app.goo.gl/5qcBxL6EsnRbjTjc6";

const PHONE = "+919810533422";
const PHONE_DISPLAY = "+91 98105 33422";
const EMAIL = "kvenu.kv@gmail.com";

const interests = [
  "Sofas & Sectionals",
  "Beds & Mattresses",
  "Dining Sets",
  "Wardrobes",
  "Study Tables",
  "TV Units",
  "Other / Multiple Items",
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconPin() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function InfoCard({ icon, label, iconStyle, children }) {
  return (
    <div className="group flex gap-4 bg-white rounded-2xl p-5 border border-gray-100
                    shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-200">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${iconStyle}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

function InputField({ id, label, required, type = "text", placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-amber-600 ml-0.5">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3
                   text-gray-900 placeholder-gray-400 text-sm
                   focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400
                   focus:bg-white transition-all duration-200"
      />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Simulate API call — replace with your backend logic
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
    setForm({ name: "", phone: "", interest: "", message: "" });
  }

  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900 text-white overflow-hidden">
        {/* BG texture */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none
                        bg-[repeating-linear-gradient(45deg,#ffffff_0px,#ffffff_1px,transparent_1px,transparent_24px)]" />
        {/* Glow blobs */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300
                           text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest
                           mb-6 border border-amber-500/30">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open Today · 10:30 AM – 8:30 PM
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
            We&apos;d Love to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Hear From You
            </span>
          </h1>

          <p className="text-amber-200/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Visit our showroom in Dwarka Sector-5, give us a call, or send an enquiry
            — we&apos;re always happy to help you find perfect furniture.
          </p>

          {/* Hero Quick CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${PHONE}`}
              className="group inline-flex items-center gap-2.5 bg-white text-amber-900
                         font-extrabold px-7 py-3.5 rounded-full transition-all duration-200
                         shadow-xl shadow-black/20 hover:bg-amber-50 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 text-amber-700 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-amber-400/50 text-amber-200
                         hover:bg-amber-800/50 hover:border-amber-400 font-bold px-7 py-3.5
                         rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <IconPin />
              Get Directions
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 border-2 border-amber-400/50 text-amber-200
                         hover:bg-amber-800/50 hover:border-amber-400 font-bold px-7 py-3.5
                         rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <IconMail />
              Email Us
            </a>
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40Z" fill="#fafaf9" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* ── Left col: Contact Info (2 / 5) ── */}
            <aside className="lg:col-span-2 space-y-4">
              <div className="mb-6">
                <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">
                  Store Info
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1 leading-snug">
                  Come Visit Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                    Showroom
                  </span>
                </h2>
              </div>

              {/* Address */}
              <InfoCard icon={<IconPin />} label="Address" iconStyle="bg-amber-100 text-amber-700">
                <p className="text-gray-600 text-sm leading-relaxed">
                  No. D-211, Gali No. 40,<br />
                  Main Rajapuri Rd, Opp. Sector-5 Dwarka,<br />
                  Uttam Nagar, Delhi – 110059
                </p>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-amber-700 text-xs font-bold
                             hover:text-amber-900 group transition-colors"
                >
                  Open in Google Maps
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    <IconArrow />
                  </span>
                </a>
              </InfoCard>

              {/* Phone */}
              <InfoCard icon={<IconPhone />} label="Call Us" iconStyle="bg-green-100 text-green-700">
                <a
                  href={`tel:${PHONE}`}
                  className="text-amber-700 font-extrabold text-xl hover:text-amber-900 transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
                <p className="text-gray-400 text-xs mt-0.5">Tap to call directly</p>
              </InfoCard>

              {/* Email */}
              <InfoCard icon={<IconMail />} label="Email Us" iconStyle="bg-blue-100 text-blue-700">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-amber-700 font-bold text-sm hover:text-amber-900 transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </InfoCard>

              {/* Hours */}
              <InfoCard icon={<IconClock />} label="Store Hours" iconStyle="bg-purple-100 text-purple-700">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-gray-500">Mon – Sun</span>
                    <span className="font-extrabold text-gray-900">10:30 AM – 8:30 PM</span>
                  </div>
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700
                                     text-xs font-bold px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Open 7 Days a Week
                    </span>
                  </div>
                </div>
              </InfoCard>

              {/* Social */}
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/jkfurnishers23/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700
                               font-semibold text-xs px-4 py-2 rounded-xl border border-blue-100
                               transition-colors"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/jk.furnishers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-pink-50 hover:bg-pink-100 text-pink-700
                               font-semibold text-xs px-4 py-2 rounded-xl border border-pink-100
                               transition-colors"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </aside>

            {/* ── Right col: Enquiry Form (3 / 5) ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

                {/* Form header */}
                <div className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-stone-800 px-8 py-7 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(45deg,#fff_0px,#fff_1px,transparent_1px,transparent_20px)]" />
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <h2 className="text-2xl font-extrabold text-white mb-1">Send an Enquiry</h2>
                    <p className="text-amber-200/75 text-sm">
                      Fill the form and we&apos;ll get back to you within a few hours.
                    </p>
                  </div>
                </div>

                {/* Form body */}
                <div className="p-8">
                  {submitted ? (
                    /* ── Success State ── */
                    <div className="text-center py-10">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                        <IconCheck />
                      </div>
                      <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                        Enquiry Sent! 🎉
                      </h3>
                      <p className="text-gray-500 text-sm mb-1">
                        Thank you,{" "}
                        <span className="font-bold text-amber-700">{form.name || "there"}</span>!
                        We&apos;ll reach out shortly.
                      </p>
                      <p className="text-gray-400 text-sm mb-8">
                        Or call us now at{" "}
                        <a href={`tel:${PHONE}`} className="text-amber-700 font-bold hover:underline">
                          {PHONE_DISPLAY}
                        </a>
                      </p>
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 text-amber-700 border-2 border-amber-700
                                   hover:bg-amber-700 hover:text-white font-bold px-6 py-2.5
                                   rounded-full transition-all duration-200"
                      >
                        Send Another Enquiry
                      </button>
                    </div>
                  ) : (
                    /* ── Form ── */
                    <form onSubmit={handleSubmit} className="space-y-5">

                      {/* Name + Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <InputField
                          id="name" label="Full Name" required
                          placeholder="Your name"
                          value={form.name} onChange={handleChange}
                        />
                        <InputField
                          id="phone" label="Phone Number" required type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone} onChange={handleChange}
                        />
                      </div>

                      {/* Interest */}
                      <div>
                        <label htmlFor="interest" className="block text-sm font-bold text-gray-700 mb-1.5">
                          Interested In
                        </label>
                        <div className="relative">
                          <select
                            id="interest"
                            value={form.interest}
                            onChange={handleChange}
                            className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3
                                       text-gray-900 text-sm appearance-none
                                       focus:outline-none focus:ring-2 focus:ring-amber-400/50
                                       focus:border-amber-400 focus:bg-white transition-all duration-200"
                          >
                            <option value="">Select a category</option>
                            {interests.map((i) => (
                              <option key={i} value={i}>{i}</option>
                            ))}
                          </select>
                          <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1.5">
                          Message
                          <span className="ml-1 text-gray-400 font-normal text-xs">(optional)</span>
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your requirements, room size, budget, or any questions..."
                          className="w-full border border-gray-200 bg-gray-50/50 rounded-xl px-4 py-3
                                     text-gray-900 placeholder-gray-400 text-sm resize-none
                                     focus:outline-none focus:ring-2 focus:ring-amber-400/50
                                     focus:border-amber-400 focus:bg-white transition-all duration-200"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="group w-full bg-amber-700 hover:bg-amber-800 disabled:bg-amber-600
                                   text-white font-extrabold py-4 rounded-xl transition-all duration-200
                                   shadow-lg shadow-amber-700/25 hover:shadow-amber-700/40
                                   hover:-translate-y-0.5 disabled:translate-y-0
                                   flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10"
                                stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Enquiry
                            <span className="group-hover:translate-x-1 transition-transform">
                              <IconArrow />
                            </span>
                          </>
                        )}
                      </button>

                      <p className="text-center text-gray-400 text-xs">
                        Or call us directly at{" "}
                        <a href={`tel:${PHONE}`} className="text-amber-600 font-bold hover:underline">
                          {PHONE_DISPLAY}
                        </a>
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MAP SECTION  — Real coordinates embedded
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section title */}
          <div className="text-center mb-10">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">Location</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Find Us on the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Map
              </span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Opp. Sector-5 Dwarka Metro, Main Rajapuri Rd, Delhi
            </p>
          </div>

          {/* Map iframe — real coords */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
               style={{ height: "420px" }}>
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JK Furnishers — Dwarka Sector-5, Delhi"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Info strip below map */}
          <div className="mt-5 bg-amber-50 border border-amber-100 rounded-2xl px-6 py-4
                          flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl
                              flex items-center justify-center shrink-0 shadow-md shadow-amber-700/20">
                <span className="text-white font-black text-xs">JK</span>
              </div>
              <div>
                <p className="font-extrabold text-gray-900 text-sm leading-none">JK Furnishers</p>
                <p className="text-gray-500 text-xs mt-0.5">
                  D-211, Gali No. 40, Rajapuri Rd, Opp. Sector-5 Dwarka, Delhi – 110059
                </p>
              </div>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800
                         text-white font-bold text-sm px-5 py-2.5 rounded-full
                         transition-all duration-200 whitespace-nowrap
                         shadow-md shadow-amber-700/20 hover:-translate-y-0.5"
            >
              <IconPin />
              Open in Google Maps
              <span className="group-hover:translate-x-0.5 transition-transform">
                <IconArrow />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BOTTOM CTA STRIP
      ══════════════════════════════════════════════ */}
      <section className="bg-amber-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div>
              <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
                Ready to furnish your home?
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
                Step into the showroom today
              </h3>
              <p className="text-amber-200/60 text-sm mt-1">
                Our team is ready to help — no appointment needed.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400
                           text-amber-950 font-extrabold px-6 py-3 rounded-full
                           transition-all duration-200 shadow-lg shadow-amber-500/30
                           hover:-translate-y-0.5 text-sm"
              >
                <IconPhone />
                {PHONE_DISPLAY}
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-amber-600/50
                           text-amber-300 hover:border-amber-500 hover:text-amber-200
                           font-bold px-6 py-3 rounded-full transition-all duration-200 text-sm"
              >
                <IconPin />
                Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}