"use client";
import Image from "next/image";

export default function ProductHeroSection() {
  return (
    <header
      className="relative text-white flex items-center justify-start h-auto sm:min-h-screen sm:h-full"
      aria-labelledby="products-hero-title"
    >
      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-20 py-15 sm:py-24">
        <h1
          id="products-hero-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight fadeIn"
        >
          Our <span className="text-primary">Products</span>
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold fadeIn">
          High-Quality Medicines for Every Health Need
        </h2>

        <p className="mt-8 max-w-xl text-sm sm:text-xl font-light leading-relaxed fadeIn">
          Sanatus pharma is a newly established entity under the NANOSYS Holding
          consortium. Which ecompasses a robust network of six parmacy group
          totaling over 150 pharmacies.Sanatus pharma is a newly established
          entity under the NANOSYS Holding consortium. Which ecompasses a robust
          network of six parmacy group totaling over 150 pharmacies. With a
          strategic focus in the UAE, Sanatus Pharma is dedicated to enhancing
          healthcare access and quality through our distribution chain and
          expert marketing team.
        </p>
      </div>

      {/* Background Image */}
      <Image
        src="/images/img/SanatusHigh-QualityMedicines_for_EveryHealthNeed.webp"
        alt="Close-up of a car tyre representing Pharma products"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.75)]"></div>
    </header>
  );
}
