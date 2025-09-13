"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import KeySellingPointsSection from "../common/KeySellingPointsSection";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-center"
      aria-labelledby="about-heading"
    >
      {/* Stats */}
      <aside className="-mt-13 z-10 relative bg-primary text-white rounded-xl shadow-md flex justify-around items-center py-6 md:py-8 px-6 w-[90%] md:w-[70%] mx-auto gap-2">
        <StatBlock
          value={6}
          suffix="+"
          label="Pharmacy Group"
          visible={isVisible}
        />
        <StatBlock
          value={150}
          suffix="+"
          label="Pharmacy Group"
          visible={isVisible}
        />
        <StatBlock
          value={1}
          suffix="M+"
          label="Satisfied Customers"
          visible={isVisible}
        />
      </aside>

      {/* About Text */}
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        <h2
          id="about-heading"
          className="font-bold text-3xl sm:text-5xl md:text-6xl mb-4 fadeIn"
        >
          About <span className="text-primary">Us</span>
        </h2>
        <p className="text-gray-700 text-base md:text-xl leading-relaxed mb-6 fadeIn text-justify ">
          Sanatus pharma is a newly established entity under the NANOSYS Holding
          consortium. Which ecompasses a robust network of six parmacy group
          totaling over 150 pharmacies. With a strategic focus in the UAE,
          Sanatus Pharma is dedicated to enhancing healthcare access and quality
          through our distribution chain and expert marketing team.Sanatus
          pharma is a newly established entity under the NANOSYS Holding
          consortium.
        </p>
        <p className="text-gray-700 text-base md:text-xl leading-relaxed mb-8 fadeIn  text-justify">
          Sanatus pharma is a newly established entity under the NANOSYS Holding
          consortium. Which ecompasses a robust network of six parmacy group
          totaling over 150 pharmacies. With a strategic focus in the UAE,
          Sanatus Pharma is dedicated to enhancing healthcare access and quality
          through our distribution chain and expert marketing team.Sanatus
          pharma is a newly established entity under the NANOSYS Holding
          consortium. Which ecompasses a robust network of six parmacy group
          totaling over 150 pharmacies
        </p>
        <Link
          href="/about"
          hrefLang="en"
          aria-label="Learn more about Pandi Auto Spare – Trusted car spare parts provider in Perinthalmanna, Malappuram"
        >
          <button
            className="bg-primary text-white px-6 py-3 rounded-full 
             hover:bg-primary/90 hover:scale-101 hover:shadow-lg 
             transition-all duration-300 ease-in-out fadeIn cursor-pointer"
          >
            Learn More
          </button>
        </Link>
      </div>

      {/* USP Icons */}
      <KeySellingPointsSection />
    </section>
  );
}

function StatBlock({ value, suffix, label, visible }) {
  return (
    <div>
      <p className="text-2xl md:text-3xl font-bold fadeIn">
        {visible ? value : 0}
        {suffix}
      </p>
      <p className="text-[10px] md:text-2xl mt-1 md:mt-3 fadeIn">{label}</p>
    </div>
  );
}
