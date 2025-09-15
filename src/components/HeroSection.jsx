import Image from "next/image";
import Link from "next/link";


export default function HeroSection() {
  return (
    <header className="relative flex items-center justify-end h-auto sm:min-h-screen text-white">
      {/* Content */}
      <div className="relative z-10 lg:w-[60%] md:w-[90%] w-full px-6 sm:px-10 md:px-20 py-15 sm:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight fadeIn">
          High Quality <span className="text-primary">Pharmaceutical in</span>{" "}
          UAE - Your Trusted Destination{" "}
          {/* <span className="text-primary">in Malappuram</span> */}
        </h1>

        <p className="mt-6 max-w-3xl text-base sm:text-xl font-light leading-relaxed tracking-wide fadeIn">
          {/* Discover a wide selection of OEM and aftermarket parts for all vehicle
          types. Genuine quality, competitive prices, and reliable performance
          guaranteed. Shop with confidence and keep your ride running smoothly. */}
          Sanatus pharma is a newly established entity under the NANOSYS Holding
          consortium. Which ecompasses a robust network of six parmacy group
          totaling over 150 pharmacies.{" "}
        </p>

        <nav
          className="mt-8 flex flex-row gap-4 fadeIn"
          aria-label="Hero actions"
        >
          <Link
            href="/contact"
            hrefLang="en"
            aria-label="Book a service or contact Sanatus Pharma – High-quality  Pharma products in Perinthalmanna, Malappuram"
          >
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition">
              Book Now
            </button>
          </Link>
          <Link
            href="/products"
            hrefLang="en"
            aria-label="Explore  Pharma products at Sanatus Pharma – OEM and aftermarket parts in Perinthalmanna, Malappuram"
          >
            <button className="bg-white text-black px-6 py-3 rounded-full hover:opacity-90 transition">
              Explore Products
            </button>
          </Link>
        </nav>
      </div>

      {/* Background Image */}
      <Image
        src="/images/PandiSparesMalappuramHeroBackground.webp"
        alt="Automotive Pharma products background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.15)]"></div>
    </header>
  );
}
