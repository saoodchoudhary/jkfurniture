import Link from "next/link";

const highlights = [
  "500+ furniture items across all categories",
  "Polite & professional guidance from our team",
  "LGBTQ+ friendly and inclusive showroom",
  "Home delivery & assembly service available",
];

export default function AboutTeaser() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Visual */}
        <div className="flex-1 w-full max-w-md mx-auto lg:max-w-none">
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 via-stone-100 to-amber-200 rounded-3xl aspect-square flex flex-col items-center justify-center shadow-xl overflow-hidden">
              <span className="text-9xl drop-shadow-lg">🏪</span>
              <div className="mt-4 text-center px-6">
                <p className="text-amber-700 font-bold text-lg">JK Furnishers</p>
                <p className="text-amber-600/70 text-sm mt-1">Dwarka Sector-5, Delhi</p>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -right-4 bg-amber-700 text-white rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-amber-200 text-xs font-medium">Est.</p>
              <p className="text-2xl font-black leading-none">10+ Yrs</p>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">About JK Furnishers</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-5 leading-tight">
            Trusted by Delhi Families <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              for Quality Furniture
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Located in the heart of Dwarka Sector-5, JK Furnishers has been the go-to destination
            for premium home furniture in Delhi. With a wide variety of styles and a team that
            genuinely cares, we make furnishing your home a joyful experience.
          </p>

          <ul className="space-y-3 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-600">
                <div className="w-5 h-5 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-700/30 hover:-translate-y-0.5"
          >
            Learn More About Us
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}