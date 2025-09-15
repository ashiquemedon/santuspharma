"use client";
import { productList } from "@/lib/data/products";
import Image from "next/image";

export default function ProductDetails() {
  return (
    <section
      className="px-4 max-w-6xl mx-auto my-12"
      aria-labelledby="products-list-title"
    >
      <h2
        id="products-list-title"
        className="sr-only" // visually hidden but SEO + accessibility
      >
        List of Product Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {productList.map((item) => (
          <article
            key={item.key}
            className="bg-[#ffffff] rounded-xl p-6 shadow-sm hover:shadow-lg transition fadeIn border"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 leading-tight">
              {item.heading.first && (
                <span className={item.heading.first.color}>
                  {item.heading.first.text}
                </span>
              )}
              {item.heading.second && (
                <span className={item.heading.second.color}>
                  {" "}{item.heading.second.text}
                </span>
              )}
              {item.heading.third && (
                <span className={item.heading.third.color}>
                  {" "}{item.heading.third.text}
                </span>
              )}
            </h3>

            <figure className="relative w-28 h-28 mb-4">
              <Image
                src={item.image}
                alt={`${item.key} spare part`}
                fill
                className="object-contain"
              />
            </figure>

            <p className="text-gray-700 text-base font-light leading-relaxed fadeIn text-justify">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
