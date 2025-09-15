import { CommonQuestions } from "@/components/common/CommonQuestions";
import KeySellingPointsSection from "@/components/common/KeySellingPointsSection";
import MainLayout from "@/components/mainLayout";
import ProductDetails from "@/components/product/ProductDetails";
import ProductHeroSection from "@/components/product/ProductHeroSection";
import { BUY_FROM_AS_QUESTIONS } from "@/lib/data/common";

export const metadata = {
  title: "  Web —Pharma products: Engine, Brakes & More",
  description: "Explore engine, brake, electronic, lighting, body, and lubrication parts — OEM and trusted aftermarket options from brands like Bosch, NGK, TVS, and Exide."
};

export default function Products() {
  return (
    <MainLayout>
      <ProductHeroSection />
      <ProductDetails />
      <KeySellingPointsSection />
      <CommonQuestions
        reasons={BUY_FROM_AS_QUESTIONS}
        title1={"Why"}
        title2={"Buy From Us?"}
        imgSrc={"/images/product_car.webp"}
      />
    </MainLayout>
  );
}
