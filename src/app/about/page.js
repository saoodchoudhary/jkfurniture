import Link from "next/link";

export const metadata = {
  title: "About Us – JK Furnishers | Furniture Store Dwarka Sector-5",
  description: "Learn about JK Furnishers — Delhi's trusted furniture showroom in Dwarka Sector-5 with premium quality products and outstanding customer service.",
};

const values = [
  {
    emoji: "🏆",
    title: "Quality First",
    desc: "We source furniture made from high-grade materials — solid wood, premium fabric, durable hardware — ensuring your investment lasts decades.",
  },
  {
    emoji: "🤝",
    title: "Customer Focus",
    desc: "Our team takes the time to understand your needs, space, and budget before suggesting options. No pressure, just honest advice.",
  },
  {
    emoji: "💰",
    title: "Fair Pricing",
    desc: "Premium furniture at reasonable prices. We believe quality should be accessible, and we stand behind every price tag.",
  },
  {
    emoji: "🚚",
    title: "Reliable Delivery",
    desc: "We deliver to your home and our team ensures proper installation so you don't have to worry about a thing.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-950 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-amber-200 text-lg max-w-xl mx-auto">
            Meet the team behind Delhi&apos;s most trusted furniture showroom in Dwarka Sector-5.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-14">
          <div className="flex-1">
            <div className="bg-gradient-to-br from-amber-100 to-stone-200 rounded-3xl aspect-square max-w-md mx-auto flex flex-col items-center justify-center">
              <span className="text-8xl">🏪</span>
              <p className="text-amber-600/60 text-sm mt-3 text-center px-4">
                Add showroom image to /public/about-showroom.jpg
              </p>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-5">
              Bringing Beautiful Homes <br />to Delhi Families
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              JK Furnishers has been a cornerstone of the Dwarka community, serving families across
              Delhi with premium home furniture for years. Located at Main Rajapuri Road opposite
              Sector 5 Dwarka, our showroom is a destination for those who want style and substance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded and run with passion, JK Furnishers carries a hand-picked selection of
              sofas, beds, wardrobes, dining sets, and more — all carefully chosen for their
              craftsmanship and value. We&apos;re proud to have earned a 4.5-star Google rating from
              over 159 happy customers.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "4.5★", label: "Google Rating" },
                { value: "159+", label: "Reviews" },
                { value: "500+", label: "Products" },
                { value: "7 Days", label: "Open Weekly" },
              ].map((stat) => (
                <div key={stat.label} className="bg-amber-50 rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-amber-700">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-amber-700">Values</span>
            </h2>
            <p className="text-gray-500 text-lg">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{v.emoji}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Meet Our <span className="text-amber-700">Team</span>
            </h2>
            <p className="text-gray-500 text-lg">The friendly faces ready to help you furnish your home.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              {
                name: "Mr. Venu",
                role: "Owner & Founder",
                desc: "The driving force behind JK Furnishers. Known for his warm welcome and deep knowledge of furniture craftsmanship.",
                emoji: "👨‍💼",
              },
              {
                name: "Mr. Shukla",
                role: "Senior Sales Executive",
                desc: "Praised by customers for his polite, professional, and outstanding customer service. He goes the extra mile every time.",
                emoji: "🧑‍💼",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-amber-50 rounded-2xl p-8 text-center border border-amber-100 hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 bg-amber-200 rounded-full flex items-center justify-center text-4xl mx-auto mb-5">
                  {member.emoji}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-1">{member.name}</h3>
                <p className="text-amber-600 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications / Highlights */}
      <section className="py-14 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { emoji: "🏳️‍🌈", label: "LGBTQ+ Friendly" },
              { emoji: "🚚", label: "Home Delivery" },
              { emoji: "🛒", label: "In-Store Shopping" },
              { emoji: "💳", label: "Easy Payment Options" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl mb-2">{item.emoji}</div>
                <p className="text-amber-200 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-50 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Come Visit Us Today</h2>
          <p className="text-gray-500 mb-8">
            Our showroom is open 7 days a week. Stop by and let us help you find the perfect
            furniture for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919810533422"
              className="bg-amber-700 text-white font-bold px-8 py-3 rounded-full hover:bg-amber-800 transition-colors"
            >
              📞 Call Us
            </a>
            <Link
              href="/contact"
              className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
