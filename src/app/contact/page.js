export const metadata = {
  title: "Contact Us – JK Furnishers | Furniture Store Dwarka",
  description: "Visit JK Furnishers at Dwarka Sector-5, Delhi. Call 098105 33422 or get directions to our showroom.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-950 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-amber-200 text-lg max-w-xl mx-auto">
            We&apos;d love to hear from you. Visit our showroom, give us a call, or send us a message.
          </p>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Showroom Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        No. D 211, Shop 40, Main Rajapuri Rd,<br />
                        Opp. Sector 5 Dwarka, Uttam Nagar,<br />
                        Delhi – 110059
                      </p>
                      <a
                        href="https://maps.google.com/?q=JK+Furnishers+Dwarka+Sector+5+Delhi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-amber-700 font-semibold text-sm hover:underline"
                      >
                        Open in Google Maps →
                      </a>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <a
                        href="tel:+919810533422"
                        className="text-amber-700 font-semibold text-lg hover:text-amber-800"
                      >
                        098105 33422
                      </a>
                    </div>
                  </div>
                  {/* Hours */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Store Hours</h3>
                      <div className="space-y-1">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                          <div key={day} className="flex justify-between text-sm text-gray-600 max-w-xs">
                            <span>{day}</span>
                            <span className="font-semibold text-gray-900">10:30 AM – 8:30 PM</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919810533422"
                  className="flex-1 bg-amber-700 text-white font-bold px-6 py-4 rounded-2xl hover:bg-amber-800 transition-colors text-center"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://maps.google.com/?q=JK+Furnishers+Dwarka+Sector+5+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white border-2 border-amber-700 text-amber-700 font-bold px-6 py-4 rounded-2xl hover:bg-amber-50 transition-colors text-center"
                >
                  📍 Get Directions
                </a>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send an Enquiry</h2>
              <p className="text-gray-500 mb-6">Fill the form and we&apos;ll get back to you shortly.</p>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-1">
                    Interested In
                  </label>
                  <select
                    id="interest"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a category</option>
                    <option>Sofas & Sectionals</option>
                    <option>Beds & Mattresses</option>
                    <option>Dining Sets</option>
                    <option>Wardrobes</option>
                    <option>Study Tables</option>
                    <option>TV Units</option>
                    <option>Other / Multiple Items</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your requirements, budget, or any questions..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-700 text-white font-bold py-4 rounded-xl hover:bg-amber-800 transition-colors"
                >
                  Send Enquiry
                </button>
                <p className="text-center text-gray-400 text-xs">
                  Or call us directly at{" "}
                  <a href="tel:+919810533422" className="text-amber-600 font-semibold hover:underline">
                    098105 33422
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-amber-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-100 rounded-3xl h-72 flex flex-col items-center justify-center border-2 border-dashed border-amber-300">
            <span className="text-5xl mb-3">🗺️</span>
            <p className="text-amber-700 font-semibold text-lg">Google Maps Embed</p>
            <p className="text-amber-600 text-sm mt-1 text-center px-4">
              JK Furnishers · No. D 211, Main Rajapuri Rd, Opp. Sector 5 Dwarka, Delhi – 110059
            </p>
            <a
              href="https://maps.google.com/?q=JK+Furnishers+Dwarka+Sector+5+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-amber-700 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-amber-800 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
