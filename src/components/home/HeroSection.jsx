import Link from "next/link";

const stats = [
  { value: "4.5★", label: "Google Rating" },
  { value: "159+", label: "Happy Customers" },
  { value: "500+", label: "Products" },
  { value: "10+", label: "Years Experience" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900 text-white overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#ffffff_0px,#ffffff_1px,transparent_1px,transparent_24px)]" />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5 border border-amber-500/30">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Dwarka Sector-5 · Delhi
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Furnish Your Home{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              With Elegance
            </span>
          </h1>

          <p className="text-amber-100/80 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
            Discover premium furniture at JK Furnishers — your trusted showroom for
            sofas, beds, dining sets, wardrobes and more in Dwarka.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-400/40 hover:-translate-y-0.5"
            >
              Explore Products
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-amber-400/60 text-amber-200 hover:bg-amber-800/50 hover:border-amber-400 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              🏪 Visit Showroom
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-amber-600/20 shadow-2xl shadow-black/40">
            <img
              src="/images/home/hero.avif"
              alt="JK Furnishers Showroom"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 to-transparent" />
            
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2.5 flex items-center gap-3">
              <div className="w-9 h-9 bg-amber-400 rounded-xl flex items-center justify-center text-amber-950 font-black text-sm">
                JK
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none">JK Furnishers</p>
                <p className="text-amber-300 text-xs mt-0.5">Dwarka Sector-5</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative bg-black/30 backdrop-blur-sm border-t border-amber-700/20 py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <div className="text-2xl sm:text-3xl font-black text-amber-400 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-amber-200/70 text-sm mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}