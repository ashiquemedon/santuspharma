import Image from "next/image";

export function CommonQuestions({ reasons, title1, title2, imgSrc }) {
  return (
    <section
      className="bg-white py-10 md:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-8 gap-8">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 id="faq-heading" className="text-3xl font-bold mb-6 text-black fadeIn">
            {title1} <span className="text-red-600">{title2}</span>
          </h2>

          <ul className="space-y-6">
            {reasons.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 fadeIn delay-75"
              >
                <Image
                  src="/images/check-iconaboutMissionAutosparePartsinPerinthamlmannaKeralaPandiSpares.webp"
                  alt="check icon"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <figure className="relative w-full h-[300px] lg:h-[400px] lg:w-1/2">
          <Image
            src={imgSrc}
            alt="Engine spare part showcase"
            fill
            className="rounded-xl object-cover lg:object-contain"
          />
        </figure>
      </div>
    </section>
  );
}
