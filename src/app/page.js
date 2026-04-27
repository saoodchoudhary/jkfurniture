import HeroSection       from "@/components/home/HeroSection";
import FeaturesSection   from "@/components/home/FeaturesSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedProducts  from "@/components/home/FeaturedProducts";
import ShowroomBanner    from "@/components/home/ShowroomBanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AboutTeaser       from "@/components/home/AboutTeaser";
import StoreInfo         from "@/components/home/StoreInfo";

export const metadata = {
  title: "JK Furnishers | Home Furniture in Dwarka Sector-5, Delhi",
  description:
    "Premium furniture showroom in Dwarka Sector-5. Sofas, beds, dining sets, wardrobes & more. Home delivery available. Call: 098105 33422",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <FeaturedProducts />
      <ShowroomBanner />
      <TestimonialsSection />
      <AboutTeaser />
      <StoreInfo />
    </>
  );
}