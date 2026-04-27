import Link from "next/link";
import { featuredProducts } from "@/lib/products";

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-14 gap-4">
          <div>
            <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">Top Picks</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                Products
              </span>
            </h2>
            <p className="text-gray-400 mt-1">Our most popular and top-rated pieces</p>
          </div>
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-amber-700 border-2 border-amber-700 hover:bg-amber-700 hover:text-white font-bold px-6 py-2.5 rounded-full transition-all duration-200 whitespace-nowrap"
          >
            View All
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Reusable Card (used in both pages) ──
export function ProductCard({ product }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Image Area */}
      <div className="relative bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100 aspect-[4/3] flex items-center justify-center overflow-hidden">
        <span className="text-7xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 drop-shadow-lg">
          {product.emoji}
        </span>
        {product.tag && (
          <span className={`absolute top-3 left-3 ${product.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
            {product.tag}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Details */}
      <div className="p-5">
        <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <h3 className="font-extrabold text-gray-900 text-lg mb-1 leading-snug">{product.name}</h3>
        {product.desc && (
          <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">{product.desc}</p>
        )}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
          <span className="text-2xl font-black text-amber-700">{product.price}</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors shadow-md shadow-amber-700/20"
          >
            Enquire
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}