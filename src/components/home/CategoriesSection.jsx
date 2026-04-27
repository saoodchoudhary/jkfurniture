import Link from "next/link";

const categories = [
  { name: "Sofas & Sectionals", icon: "🛋️", desc: "Elegant seating" },
  { name: "Beds & Mattresses", icon: "🛏️", desc: "Restful sleep" },
  { name: "Dining Sets", icon: "🍽️", desc: "Stylish dining" },
  { name: "Wardrobes", icon: "🚪", desc: "Modern storage" },
  { name: "Study Tables", icon: "📚", desc: "Ergonomic desks" },
  { name: "TV Units", icon: "📺", desc: "Display units" },
];

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">Collections</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
            Shop by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Category
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Complete range of home furniture to match every taste and budget.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href="/products"
              className="group relative bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg border border-stone-100 hover:border-amber-300 transition-all duration-300 flex flex-col items-center gap-3 overflow-hidden"
            >
              {/* Hover fill effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <span className="relative text-4xl group-hover:scale-125 transition-transform duration-300 drop-shadow">
                {cat.icon}
              </span>
              <div className="relative">
                <span className="block font-bold text-gray-800 text-sm leading-snug group-hover:text-amber-800 transition-colors">
                  {cat.name}
                </span>
                <span className="block text-gray-400 text-xs mt-0.5 group-hover:text-amber-600 transition-colors">
                  {cat.desc}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}