
export function WhatWeOffer() {
  const offerList = [
    {
      title: "Wide Range of Products",
      description:
        "We stock an extensive selection of medicines, health supplements, and wellness products to ensure you find exactly what you need for a healthy lifestyle.",
    },
    {
      title: "Quality You Can Trust",
      description:
        "Every medicine and health product is sourced from trusted pharmaceutical manufacturers, meeting strict industry standards for safety, efficacy, and reliability.",
    },
    {
      title: "Expert Customer Support",
      description:
        "Our knowledgeable pharmacists and support team are here to help you choose the right medicines and wellness products, offering trusted guidance whenever you need it.",
    },
  ];

  return (
    <section className="text-white" aria-labelledby="offer-heading">
      {/* Header */}
      <div className="bg-primary text-center py-6">
        <h2
          id="offer-heading"
          className="text-3xl md:text-4xl font-bold text-secondary fadeIn"
        >
          What We <span className="text-white">Offer</span>
        </h2>
      </div>

      {/* Offers */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto py-12 px-8">
        {offerList.map((item, index) => (
          <li
            key={index}
            className="bg-card-custom-1 text-gray-900 rounded-xl p-8 transition"
          >
            <h3 className="text-xl font-bold mb-2 text-secondary fadeIn">
              {item.title}
            </h3>
            <p className="text-gray-700 text-base font-light leading-relaxed fadeIn text-justify">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
