import HeroSection from "@/components/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { BrandSection } from "@/components/home/BrandSection";
import ProductSection from "@/components/home/ProductSection";
import MainLayout from "@/components/mainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <BrandSection />
    </MainLayout>
  );
}
