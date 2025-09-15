import Image from "next/image";

export function MissionSection() {
  return (
    <section
      className="bg-white py-10 md:py-24"
      aria-labelledby="mission-heading"
    >
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <figure className="relative h-72 lg:h-[400px] w-full rounded-2xl overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/img/sanatusPharmaVisionnAndMission.webp"
            fill
            alt="High-quality engine spare part"
            className="object-cover lg:object-contain"
          />
        </figure>

        {/* Right Content */}
        <div className="text-[#1C1C1C] order-1 lg:order-2">
          <h2 id="mission-heading" className="text-3xl font-bold mb-4 fadeIn">
            Our Mission & Vision
          </h2>

          <article>
            <h3 className="text-2xl font-semibold mb-2 fadeIn">
              Our <span className="text-primary">Mission</span>
            </h3>
            <p className="text-gray-700 text-lg font-light mb-4 leading-relaxed fadeIn">
              At Sanatus Pharma, our mission is to deliver superior
              pharmaceutical care and innovative wellness solutions while
              developing trusted in-house brands and a comprehensive range of
              prescription medications.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold mb-2 fadeIn">
              Our <span className="text-primary">Vision</span>
            </h3>
            <p className="text-gray-700 text-lg font-light leading-relaxed fadeIn">
              To be the leading provider of high-quality pharmaceutical and
              wellness products in the GCC region, advocating for enhanced
              health and well-being in the communities we serve
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
