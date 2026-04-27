import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const categories = [
  { name: "Sofas & Sectionals", icon: "🛋️", desc: "Elegant seating for every living room style" },
  { name: "Beds & Mattresses", icon: "🛏️", desc: "Comfortable beds for a restful night's sleep" },
  { name: "Dining Sets", icon: "🍽️", desc: "Stylish dining tables and chair combos" },
  { name: "Wardrobes", icon: "🚪", desc: "Spacious and modern storage solutions" },
  { name: "Study Tables", icon: "📚", desc: "Ergonomic desks and chairs for every learner" },
  { name: "TV Units", icon: "📺", desc: "Contemporary entertainment and display units" },
];

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Premium Quality",
    desc: "Every piece is crafted from high-grade materials for lasting durability and beauty.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Home Delivery",
    desc: "Hassle-free delivery right to your doorstep, assembled and ready to use.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Best Prices",
    desc: "Competitive pricing on every item — quality furniture doesn't have to be expensive.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Expert Guidance",
    desc: "Our courteous team helps you pick the perfect furniture for your space and budget.",
  },
];

const testimonials = [
  {
    name: "Raja Singh",
    rating: 5,
    review:
      "JK Furniture is a good shop — furniture items are of good quality. Owner Mr. Venu and salesman Shukla ji are very cooperative persons.",
  },
  {
    name: "Rupam Pandey",
    rating: 5,
    review:
      "One of the best furniture shops in Dwarka Razapuri Delhi. Excellent service and quality products. Mr. Shukla is very polite and professional.",
  },
  {
    name: "Karan Rajput",
    rating: 5,
    review:
      "Very good furniture quality and reasonable prices. The staff was polite and helpful throughout my purchase.",
  },
];

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`w-4 h-4 ${s <= rating ? "text-amber-400" : "text-gray-300"} fill-current`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-amber-950 via-amber-900 to-amber-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#ffffff_0px,#ffffff_1px,transparent_1px,transparent_20px)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Dwarka Sector-5 · Delhi
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Furnish Your Home <br className="hidden sm:block" />
              <span className="text-amber-400">With Elegance</span>
            </h1>
            <p className="text-amber-100 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Discover a wide range of premium furniture at JK Furnishers — your trusted showroom
              for sofas, beds, dining sets, wardrobes and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/products"
                className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-8 py-3 rounded-full transition-colors duration-200 text-center"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="border-2 border-amber-400 text-amber-200 hover:bg-amber-800 font-semibold px-8 py-3 rounded-full transition-colors duration-200 text-center"
              >
                Visit Showroom
              </Link>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="bg-amber-800/50 rounded-3xl aspect-[4/3] flex flex-col items-center justify-center border border-amber-600/30">
            <img 
              src="/images/home/hero.avif"
              alt="Showroom Photo"
              className="w-full h-full object-cover rounded-3xl"
            />
              {/* <span className="text-6xl">🛋️</span>
              <p className="text-amber-300 mt-3 text-sm font-medium">Showroom Photo Coming Soon</p>
              <p className="text-amber-400/60 text-xs mt-1">Add image to /public/hero.jpg</p> */}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-amber-950/60 border-t border-amber-700/30 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "4.5★", label: "Google Rating" },
              { value: "159+", label: "Happy Customers" },
              { value: "500+", label: "Products" },
              { value: "10+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-amber-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Why Choose <span className="text-amber-700">JK Furnishers?</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              We bring you the best of quality, service, and value — all under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center text-center bg-amber-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-amber-100"
              >
                <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Shop by <span className="text-amber-700">Category</span>
            </h2>
            <p className="text-gray-500 text-lg">
              A complete range of home furniture to match every taste and budget.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href="/products"
                className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-amber-400 border border-transparent transition-all duration-300 flex flex-col items-center gap-3"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-200">
                  {cat.icon}
                </span>
                <span className="font-semibold text-gray-800 text-sm leading-snug">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                Featured <span className="text-amber-700">Products</span>
              </h2>
              <p className="text-gray-500">Our most popular and top-rated pieces</p>
            </div>
            <Link
              href="/products"
              className="text-amber-700 border border-amber-700 hover:bg-amber-700 hover:text-white font-semibold px-6 py-2 rounded-full transition-colors duration-200 whitespace-nowrap"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "L-Shape Luxury Sofa", category: "Sofas", price: "₹24,999", tag: "Bestseller", emoji: "🛋️" },
              { name: "King Size Bed Frame", category: "Beds", price: "₹18,499", tag: "Popular", emoji: "🛏️" },
              { name: "6-Seater Dining Set", category: "Dining", price: "₹32,000", tag: "New Arrival", emoji: "🍽️" },
              { name: "3-Door Sliding Wardrobe", category: "Storage", price: "₹19,999", tag: "Sale", emoji: "🚪" },
              { name: "Study Table & Chair", category: "Study", price: "₹8,500", tag: "Budget Pick", emoji: "📚" },
              { name: "Sleek TV Unit", category: "Living Room", price: "₹11,200", tag: "Trending", emoji: "📺" },
            ].map((product) => (
              <div
                key={product.name}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="bg-gradient-to-br from-amber-50 to-stone-100 aspect-[4/3] flex flex-col items-center justify-center relative">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {product.emoji}
                  </span>
                  <span className="absolute top-3 left-3 bg-amber-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                  <p className="absolute bottom-2 right-3 text-amber-400/60 text-xs">
                    Add photo to /public/products/
                  </p>
                </div>
                <div className="p-5">
                  <p className="text-amber-600 text-xs font-semibold uppercase tracking-wide mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-amber-700">{product.price}</span>
                    <Link
                      href="/contact"
                      className="bg-amber-700 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-amber-800 transition-colors"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Showroom Banner ── */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Visit Our Showroom Today
            </h2>
            <p className="text-amber-200 text-lg max-w-lg">
              Experience our entire collection in person. Our experts are ready to help
              you create the home of your dreams.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+919810533422"
              className="bg-white text-amber-800 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition-colors text-center"
            >
              📞 Call Now
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-amber-800 font-semibold px-8 py-3 rounded-full transition-colors text-center"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              What Our <span className="text-amber-700">Customers Say</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <StarRating rating={5} />
              <span className="text-gray-600 font-semibold">4.5 out of 5</span>
              <span className="text-gray-400 text-sm">(159 Google Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <StarRating rating={t.rating} />
                <p className="text-gray-600 mt-4 leading-relaxed italic">&ldquo;{t.review}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">Verified Google Review</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-14">
          <div className="flex-1">
            <div className="bg-gradient-to-br from-amber-100 to-stone-200 rounded-3xl aspect-square max-w-md mx-auto flex flex-col items-center justify-center">
              <span className="text-8xl">🏪</span>
              <p className="text-amber-600/60 text-sm mt-3">Add showroom photo to /public/showroom.jpg</p>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">About JK Furnishers</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-5">
              Trusted by Delhi Families <br className="hidden sm:block" />
              for Quality Furniture
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Located in the heart of Dwarka Sector-5, JK Furnishers has been the go-to destination
              for premium home furniture in Delhi. With a wide variety of styles and a team that
              genuinely cares, we make furnishing your home a joyful experience.
            </p>
            <ul className="space-y-3 text-gray-600 mb-8">
              {[
                "500+ furniture items across all categories",
                "Polite & professional guidance from our team",
                "LGBTQ+ friendly and inclusive showroom",
                "Home delivery & assembly service available",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="bg-amber-700 text-white font-bold px-8 py-3 rounded-full hover:bg-amber-800 transition-colors inline-block"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Store Info ── */}
      <section className="py-16 bg-amber-50 border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Us in <span className="text-amber-700">Dwarka</span></h2>
            <p className="text-gray-500">Come visit us — we&apos;re open 7 days a week!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-7 shadow-sm text-center">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                No. D 211, Shop 40, Main Rajapuri Rd,<br />
                Opp. Sector 5 Dwarka, Uttam Nagar,<br />
                Delhi – 110059
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm text-center">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold text-gray-900 mb-2">Store Hours</h3>
              <p className="text-gray-500 text-sm">
                Monday – Sunday<br />
                <span className="font-semibold text-amber-700 text-base">10:30 AM – 8:30 PM</span>
              </p>
              <span className="mt-3 inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                Open Today
              </span>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-gray-900 mb-2">Contact</h3>
              <a
                href="tel:+919810533422"
                className="text-amber-700 font-bold text-lg hover:text-amber-800 block mb-2"
              >
                098105 33422
              </a>
              <p className="text-gray-400 text-xs">In-store shopping & home delivery available</p>
              <Link
                href="/contact"
                className="mt-3 inline-block text-amber-700 text-sm font-semibold hover:underline"
              >
                Get Directions →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
