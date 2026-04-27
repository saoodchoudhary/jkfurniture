import Link from "next/link";

export default function StoreInfo() {
  return (
    <section className="py-20 bg-amber-50 border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">Come Visit Us</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-2">
            Find Us in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Dwarka
            </span>
          </h2>
          <p className="text-gray-400">Open 7 days a week — always ready to help!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Address */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm border border-amber-100 hover:shadow-lg hover:border-amber-300 transition-all duration-300 text-center">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
              📍
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Address</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              No. D 211, Shop 40,<br />
              Main Rajapuri Rd,<br />
              Opp. Sector 5 Dwarka,<br />
              Uttam Nagar, Delhi – 110059
            </p>
            <a
              href="https://maps.google.com/?q=JK+Furnishers+Dwarka+Sector+5+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-amber-700 text-sm font-semibold hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>

          {/* Hours */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm border border-amber-100 hover:shadow-lg hover:border-amber-300 transition-all duration-300 text-center">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
              ⏰
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Store Hours</h3>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex justify-between gap-4">
                <span>Mon – Sun</span>
                <span className="font-bold text-amber-700">10:30 AM – 8:30 PM</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                Open Today
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm border border-amber-100 hover:shadow-lg hover:border-amber-300 transition-all duration-300 text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
              📞
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Contact Us</h3>
            <a
              href="tel:+919810533422"
              className="text-amber-700 font-black text-xl hover:text-amber-900 transition-colors block mb-2"
            >
              098105 33422
            </a>
            <p className="text-gray-400 text-xs mb-4">In-store shopping & home delivery available</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-amber-700 text-sm font-bold hover:underline"
            >
              Get Directions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}