import { brandList } from "@/lib/data/brands";
import Image from "next/image";

export function BrandSection() {
  return (
    <section className="py-6 bg-white" aria-labelledby="brands-heading">
      <div className="px-4 max-w-6xl mx-auto">
        <h2
          id="brands-heading"
          className="font-bold text-3xl sm:text-5xl md:text-6xl fadeIn"
        >
          Brands We <span className="text-primary">Trust</span>
        </h2>
        <p className="text-base md:text-xl text-gray-700 max-w-2xl mt-6 fadeIn text-justify ">
          We partner with top-quality pharmaceutical brands to ensure genuine,
          reliable, and effective medicines for your health. Trust our curated
          selection for safety, performance, and long-lasting wellness.
        </p>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto my-12 fadeIn">
        {brandList.map((item) => (
          <li
            key={item.key}
            className="bg-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition"
          >
            <div className="relative w-24 h-12 mx-auto">
              <Image
                src={item.image}
                alt={`${item.key} brand logo`}
                fill
                className="object-contain"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
