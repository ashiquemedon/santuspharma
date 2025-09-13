import { MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Contact Pandi Web — Orders & Support",
  description: "Contact Pandi Web for orders and customer support. Call +91 8606449640 or email pandispare@gmail.com. Support hours Mon–Sat 9:00 AM–7:00 PM."
};

export default function ContactPage() {
  return (
    <section className="relative text-white flex flex-col items-center justify-start h-full min-h-screen">
      {/* Header */}
      <div
        className="flex items-center relative w-full h-full min-h-[200px]"
        style={{
          backgroundImage: "url('/images/contact_phone_AutosparePartsinPerinthamlmannaKeralaPandiSpares.webp')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight z-10 px-6 sm:px-10 md:px-20">
          Contact <span className="text-primary">Us</span>
        </h1>
      </div>

      {/* Contact Details */}
      <div className="w-full relative flex items-center lg:flex-row flex-col justify-center py-10 sm:py-20 overflow-hidden px-10 gap-5 lg:gap-40">
        <div className="flex flex-col gap-5 py-10 w-full lg:w-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
            Get in <span className="text-primary">Touch</span>
          </h2>

          {/* Phone */}
          <div className="flex items-center gap-3 text-lg text-gray-800">
            <PhoneIcon size="28" className="text-secondary" />
            <span className="font-normal text-base md:text-xl text-text-color">
              +971 566212170
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-lg text-gray-800">
            <MailIcon size="28" className="text-secondary" />
            <span className="font-normal text-base md:text-xl text-text-color">
              sanatusphramallc@gmail.com
            </span>
          </div>

          {/* Support Hours */}
          <div>
            <h3 className="text-lg sm:text-lg md:text-2xl font-semibold text-black">
              Support <span className="text-primary">Hours</span>:
            </h3>
            <p className="text-text-color text-base sm:text-md mt-1">
              9:00 AM – 7:00 PM
            </p>
            <p className="text-text-color text-base sm:text-md mt-1">
              (Closed on Sundays)
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-2xl w-full h-[300px] lg:w-[550px] sm:h-[350px] overflow-hidden">
          <Image
            src="/images/contact_person_AutosparePartsinPerinthamlmannaKeralaPandiSpares.webp"
            alt="Customer Support"
            fill
            priority
            className="object-cover object-left h-full w-full"
          />
        </div>
      </div>

      <SocialLinks />
    </section>
  );
}

function SocialLinks() {
  const links = [
    {
      icon: (
        <Image
          src={"/images/whatsapp_AutosparePartsinPerinthamlmannaKeralaPandiSpares.webp"}
          height={28}
          width={28}
          alt="whatsapp_logo"
        />
      ),
      text: "+971 566212170",
      url: "https://wa.me/971566212170",
    },
    {
      icon: (
        <Image
          src={"/images/instagram.webp"}
          height={28}
          width={28}
          alt="instagram_logo"
        />
      ),
       text: "www.instagram.com",
      url: "https://www.instagram.com/",
    },
    {
      icon: (
        <Image
          src={"/images/facebook_AutosparePartsinPerinthamlmannaKeralaPandiSpares.webp"}
          height={28}
          width={28}
          alt="facebook_logo"
        />
      ),
         text: "www.facebook.com",
      url: "https://www.facebook.com/",
    },
    {
      icon: (
        <Image
          src={"/images/youtube_AutosparePartsinPerinthamlmannaKeralaPandiSpares.webp"}
          height={28}
          width={28}
          alt="youtube_logo"
        />
      ),
      text: "www.youtube.com",
      url: "https://www.youtube.com/b",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-20 max-w-10xl w-full mx-auto px-10">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          hrefLang="en"
          target="_blank"
          aria-label={`Visit our ${link.text} page`}
          rel="noopener noreferrer"
          className="flex flex-col justify-center bg-[#ffffff] border rounded-2xl shadow-md px-6 py-12 items-start hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#202025] mb-4">
            {link.icon}
          </div>
          <p className="text-secondary font-light">{link.text}</p>
        </a>
      ))}
    </div>
  );
}
