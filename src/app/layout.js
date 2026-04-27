import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "JK Furnishers – Home Furniture in Dwarka Sector-5, Delhi",
  description:
    "JK Furnishers – Delhi's premium furniture showroom in Dwarka Sector-5. Shop sofas, beds, dining sets, wardrobes and more. In-store shopping & home delivery available.",
  keywords: "furniture store dwarka, sofa delhi, bedroom furniture, JK Furnishers, furniture showroom dwarka sector 5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
