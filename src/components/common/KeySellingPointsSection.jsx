function KeySellingPointsSection() {
  const iconsText = {
    parts: "Affordable Auto Parts",
    brand: "Top Brands",
    quality: "Trusted Quality",
    delivery: "Secure Delivery",
  };

  return (
    <section
      className="bg-primary text-white py-10"
      aria-labelledby="selling-points-title"
    >
      <h2 id="selling-points-title" className="sr-only">
        Key Selling Points
      </h2>

      <ul className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 px-4 text-center">
        <li className="flex flex-col items-center">
          <img
            src="/images/PandiSparesAffordableAutoParts.webp"
            alt="Affordable auto parts icon"
            className="w-10 h-10 mb-3"
          />
          <p className="text-sm">Trusted Pharmacy Group</p>
        </li>

        <li className="flex flex-col items-center">
          <img
            src="/images/TopBrandsInPandiSpares.webp"
            alt="Top brands icon"
            className="w-10 h-10 mb-3 object-contain"
          />
          <p className="text-sm">Top Brands</p>
        </li>

        <li className="flex flex-col items-center">
          <img
            src="/images/QualityAutoSparePartsPandiPerinthalmanna.webp"
            alt="Trusted quality icon"
            className="w-10 h-10 mb-3"
          />
          <p className="text-sm">Trusted Quality</p>
        </li>

        <li className="flex flex-col items-center">
          <img
            src="/images/DeliveryPandiMalappuramKerala.webp"
            alt="Secure delivery icon"
            className="w-10 h-10 mb-3"
          />
          <p className="text-sm">Secure Delivery</p>
        </li>
      </ul>
    </section>
  );
}

export default KeySellingPointsSection;
