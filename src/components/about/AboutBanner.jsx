import Image from "next/image";

export function AboutBanner() {
  return (
    <header
      className="relative text-white flex items-center justify-start h-auto sm:min-h-screen sm:h-full"
      aria-labelledby="about-banner-title"
    >
      {/* Left Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-20 py-15 sm:py-24">
        <h1
          id="about-banner-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight fadeIn"
        >
          About <span className="text-primary">Us</span>
        </h1>

        <p className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold fadeIn">
          Trusted by Customers Since <span className="text-primary">2020</span>
        </p>

        <p className="mt-6 max-w-3xl text-md sm:text-xl font-light leading-relaxed fadeIn delay-100 text-justify">
          <p>
            Sanatus pharma is a newly established entity under the NANOSYS
            Holding consortium. Which ecompasses a robust network of six parmacy
            group totaling over 150 pharmacies. With a strategic focus in the
            UAE, Sanatus Pharma is dedicated to enhancing healthcare access and
            quality through our distribution chain and expert marketing
            team.
          </p>
          <p className="mt-5">
            Sanatus pharma is a newly established entity under the NANOSYS
            Holding consortium. Which ecompasses a robust network of six parmacy
            group totaling over 150 pharmacies. With a strategic focus in the
            UAE, Sanatus Pharma is dedicated to enhancing healthcare access and
            quality through our distribution chain and expert marketing
            team.Sanatus pharma is a newly established entity under the NANOSYS
            Holding consortium. 
          </p>
        </p>
      </div>

      {/* Background Image */}
      <Image
        src="/images/img/about-hero-sanatuspharmaUAE.webp"
        alt="Automotive spare parts background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.75)]"></div>
    </header>
  );
}
