import StarRating from "@/components/ui/StarRating";

const testimonials = [
  {
    name: "Raja Singh",
    initial: "R",
    rating: 5,
    review:
      "JK Furniture is a good shop — furniture items are of good quality. Owner Mr. Venu and salesman Shukla ji are very cooperative persons.",
    color: "bg-amber-600",
  },
  {
    name: "Rupam Pandey",
    initial: "R",
    rating: 5,
    review:
      "One of the best furniture shops in Dwarka Razapuri Delhi. Excellent service and quality products. Mr. Shukla is very polite and professional.",
    color: "bg-rose-600",
  },
  {
    name: "Karan Rajput",
    initial: "K",
    rating: 5,
    review:
      "Very good furniture quality and reasonable prices. The staff was polite and helpful throughout my purchase.",
    color: "bg-violet-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Customers Say
            </span>
          </h2>
          <div className="inline-flex items-center gap-3 bg-white border border-amber-100 rounded-full px-5 py-2.5 shadow-sm">
            <StarRating rating={5} size="lg" />
            <span className="text-gray-700 font-bold">4.5 / 5</span>
            <span className="text-gray-400 text-sm">· 159 Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-amber-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <StarRating rating={t.rating} />
              <p className="text-gray-600 mt-4 leading-relaxed flex-1 text-sm">
                &ldquo;{t.review}&rdquo;
              </p>

              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className={`w-11 h-11 ${t.color} text-white rounded-full flex items-center justify-center font-black text-base shadow-md`}>
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <p className="text-gray-400 text-xs">Verified Google Review</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}