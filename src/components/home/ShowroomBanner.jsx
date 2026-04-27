import Link from "next/link";

export default function ShowroomBanner() {
  return (
    <section className="relative bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 py-20 overflow-hidden">
      
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#ffffff_0px,#ffffff_1px,transparent_1px,transparent_30px)] opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        <div className="text-white text-center lg:text-left">
          <span className="inline-block bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/30 mb-4">
            📍 Dwarka Sector-5, Delhi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
            Visit Our Showroom Today
          </h2>
          <p className="text-amber-200/80 text-lg max-w-lg leading-relaxed">
            Experience our entire collection in person. Our experts are ready to help
            you create the home of your dreams — right here in Dwarka.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a
            href="tel:+919810533422"
            className="group inline-flex items-center justify-center gap-2 bg-white text-amber-900 font-extrabold px-8 py-3.5 rounded-full hover:bg-amber-50 transition-all duration-200 shadow-xl shadow-black/20 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white/10 hover:border-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Get Directions
          </Link>
        </div>
      </div>
    </section>
  );
}