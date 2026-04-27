import Link from "next/link";

const allProducts = [
  // Sofas
  { id: 1, name: "L-Shape Luxury Sofa", category: "Sofas", price: "₹24,999", emoji: "🛋️", tag: "Bestseller", desc: "Premium fabric with high-density foam cushions. Perfect for large living rooms." },
  { id: 2, name: "3-Seater Sofa Set", category: "Sofas", price: "₹16,500", emoji: "🛋️", tag: "Popular", desc: "Elegant design with durable upholstery. Comes in multiple color options." },
  { id: 3, name: "Recliner Sofa Chair", category: "Sofas", price: "₹12,999", emoji: "🛋️", tag: "New", desc: "Single-seater recliner for ultimate relaxation. Smooth reclining mechanism." },
  // Beds
  { id: 4, name: "King Size Bed Frame", category: "Beds", price: "₹18,499", emoji: "🛏️", tag: "Popular", desc: "Solid wood construction with a modern headboard design." },
  { id: 5, name: "Queen Size Bed with Storage", category: "Beds", price: "₹21,000", emoji: "🛏️", tag: "Bestseller", desc: "Hydraulic storage bed — maximize your bedroom space efficiently." },
  { id: 6, name: "Single Bed with Box", category: "Beds", price: "₹9,500", emoji: "🛏️", tag: "Budget Pick", desc: "Compact design ideal for kids' rooms or guest rooms." },
  // Dining
  { id: 7, name: "6-Seater Dining Set", category: "Dining", price: "₹32,000", emoji: "🍽️", tag: "New Arrival", desc: "Solid wood table with 6 cushioned chairs. A statement piece for your dining room." },
  { id: 8, name: "4-Seater Glass Top Dining", category: "Dining", price: "₹18,000", emoji: "🍽️", tag: "Trending", desc: "Tempered glass top with steel legs. Modern and easy to clean." },
  // Wardrobes
  { id: 9, name: "3-Door Sliding Wardrobe", category: "Wardrobes", price: "₹19,999", emoji: "🚪", tag: "Sale", desc: "Full-length mirror on one door. Ample hanging and shelf space." },
  { id: 10, name: "2-Door Wooden Wardrobe", category: "Wardrobes", price: "₹13,500", emoji: "🚪", tag: "", desc: "Classic teak finish with multiple internal compartments." },
  // Study
  { id: 11, name: "Study Table & Chair Set", category: "Study", price: "₹8,500", emoji: "📚", tag: "Budget Pick", desc: "Ergonomic design with a roomy desktop and a built-in bookshelf." },
  { id: 12, name: "Computer Desk", category: "Study", price: "₹6,200", emoji: "📚", tag: "", desc: "Minimalist design with cable management grooves." },
  // TV Units
  { id: 13, name: "Sleek TV Unit", category: "TV Units", price: "₹11,200", emoji: "📺", tag: "Trending", desc: "Floating wall unit with glass doors and LED strip compatibility." },
  { id: 14, name: "TV Cabinet with Drawers", category: "TV Units", price: "₹8,900", emoji: "📺", tag: "", desc: "Floor-standing with 4 drawers and an open shelf for media devices." },
  // Other
  { id: 15, name: "Coffee Table", category: "Living Room", price: "₹5,500", emoji: "☕", tag: "", desc: "Compact center table with a tempered glass top." },
  { id: 16, name: "Shoe Rack", category: "Storage", price: "₹2,800", emoji: "👟", tag: "Budget Pick", desc: "5-tier powder-coated steel shoe rack for up to 20 pairs." },
  { id: 17, name: "Dressing Table with Mirror", category: "Bedroom", price: "₹9,000", emoji: "💄", tag: "", desc: "Full-length mirror, 3 drawers, and cushioned stool included." },
  { id: 18, name: "Bookshelf", category: "Storage", price: "₹4,200", emoji: "📖", tag: "", desc: "5-shelf wooden bookcase in a classic walnut finish." },
];

const categories = ["All", "Sofas", "Beds", "Dining", "Wardrobes", "Study", "TV Units", "Living Room", "Storage", "Bedroom"];

export const metadata = {
  title: "Products – JK Furnishers | Furniture Showroom Dwarka",
  description: "Browse our wide range of sofas, beds, dining sets, wardrobes, study tables and more at JK Furnishers, Dwarka Sector-5, Delhi.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-amber-950 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Products</h1>
          <p className="text-amber-200 text-lg max-w-xl mx-auto">
            Explore our wide collection of premium home furniture — from sofas and beds to
            wardrobes and dining sets.
          </p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter note */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-default ${
                  cat === "All"
                    ? "bg-amber-700 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-amber-400 hover:text-amber-700 transition-colors"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 transition-shadow duration-300 group flex flex-col"
              >
                <div className="bg-gradient-to-br from-amber-50 to-stone-100 aspect-[4/3] flex flex-col items-center justify-center relative">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {product.emoji}
                  </span>
                  {product.tag && (
                    <span className="absolute top-2 left-2 bg-amber-700 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-amber-600 text-xs font-semibold uppercase tracking-wide mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{product.desc}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-extrabold text-amber-700">{product.price}</span>
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

          {/* CTA */}
          <div className="mt-16 bg-amber-900 text-white rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-bold mb-3">Don&apos;t see what you&apos;re looking for?</h3>
            <p className="text-amber-200 mb-6 max-w-md mx-auto">
              Visit our showroom or call us — we have hundreds more pieces and can help you find
              exactly what fits your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919810533422"
                className="bg-amber-400 text-amber-950 font-bold px-8 py-3 rounded-full hover:bg-amber-300 transition-colors"
              >
                📞 098105 33422
              </a>
              <Link
                href="/contact"
                className="border-2 border-amber-400 text-amber-200 hover:bg-amber-800 font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Visit Showroom
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
