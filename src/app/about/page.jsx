import { AboutBanner } from "@/components/about/AboutBanner";
import { MissionSection } from "@/components/about/MissionSection";
import { WhatWeOffer } from "@/components/about/WhatWeOffer";
import { CommonQuestions } from "@/components/common/CommonQuestions";
import MainLayout from "@/components/mainLayout";
import { CHOOSE_AS_QUESTIONS } from "@/lib/data/common";


export const metadata = {
  title: "Pandi Auto Spares — Trusted Since 1972",
  description: "Pandi Auto Spares: decades of experience supplying OEM and aftermarket parts. Trusted brands, quality assurance, and customer-first service."
};

export default function AboutPage() {
  return (
    <MainLayout>
     <AboutBanner />
      <MissionSection />
      <WhatWeOffer />
      <CommonQuestions
        reasons={CHOOSE_AS_QUESTIONS}
        title1={"Why"}
        title2={"Choose Us?"}
        imgSrc={"/images/about-engine-partsAutosparePartsinPerinthamlmannaKeralaPandiSpares.webp"}
      />
    </MainLayout>
  );
}
