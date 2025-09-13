"use client";
import {
  Call,
  Facebook,
  Instagram,
  Location,
  Sms,
  Whatsapp,
  Youtube,
} from "iconsax-reactjs";
import { SocialIcon } from "./SocialIcon";

export default function Footer() {
  return (
    <>
      {/* Footer Main Section */}
      <div className="text-white bg-cover bg-center w-full h-full overflow-hidden bg-info border">
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row justify-between gap-4 md:gap-6 relative">
            {/* Contact & Logo Section */}
            <div className="flex-1 mt-5 px-10 py-10 sm:px-28 sm:py-20 z-10">
              <img
                src="/images/PandiAutoPartsStoreLogo.webp"
                alt="Pandi Auto Spare Logo – High Quality Car Spare Parts in Perinthalmanna Malappuram"
                className="w-44 mb-4"
              />

              {/* Contact Details */}
              <div className="text-black space-y-3 font-roboto font-light text-[14px] sm:text-[16px] md:text-[20px] leading-9 tracking-normal mt-8">
                <p className="flex items-center gap-6">
                  <Location size="20" variant="Outline" />
                  UAE
                </p>
                <p className="flex items-center gap-6">
                  <Call size="20" variant="Outline" />
                  <a href="tel:+918606449640" aria-label="Call Pandi Auto Spare">
                    +971 566212170
                  </a>
                </p>
                <p className="flex items-center gap-6">
                  <Sms size="20" variant="Outline" />
                  <a
                    href="mailto:pandispare@gmail.com"
                    aria-label="Email Pandi Auto Spare"
                  >
                    sanatusphramallc@gmail.com
                  </a>
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-6 mt-8">
                <SocialIcon
                  icon={Whatsapp}
                  hoverColor="hover:text-green-400"
                  href="https://wa.me/971566212170"
                  hrefLang="en"
                  label="WhatsApp – Chat with Sanatus phrama LLC"
                />
                <SocialIcon
                  icon={Facebook}
                  hoverColor="hover:text-blue-500"
                  href="https://facebook.com"
                  hrefLang="en"
                  label="Facebook – Sanatus phrama LLC Page"
                />
                <SocialIcon
                  icon={Instagram}
                  hoverColor="hover:text-pink-500"
                  href="https://instagram.com"
                  hrefLang="en"
                  label="Instagram – Sanatus phrama LLC Profile"
                />
                <SocialIcon
                  icon={Youtube}
                  hoverColor="hover:text-red-500"
                  href="https://youtube.com"
                  hrefLang="en"
                  label="YouTube – Sanatus phrama LLC Channel"
                />
              </div>
            </div>

            {/* Map Section */}
            <div className="flex relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12699.283110016825!2d55.4930299!3d25.2639106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f5a2bccab057%3A0x9610faaf87f60b1e!2sMEDON+HEAD+OFFICE+-+Mina+Medical+Store+L.L.C.SP!5e0!3m2!1sen!2sin!4v1753016755766"
                className="h-[80%] border-0 absolute top-1/2 transform -translate-y-1/2 sm:right-10 right-5 z-10 rounded-lg mx-auto w-[90%] lg:w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sanatus phrama LLC Location Map – UAE"
              ></iframe>

              <div className="relative overflow-hidden h-full w-full opacity-0 lg:opacity-00">
                <img
                  src="/images/footer_img.webp"
                  alt="Car background representing auto spare parts"
                  className="w-full h-full object-cover scale-150 -translate-x-44 translate-y-24 filter brightness-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <footer className="bg-white border-t p-2 md:p-4 text-center">
        <p className="text-[#4C4C4C] !font-extralight text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} All Rights Reserved | Designed And Developed By MKM Solutions
        </p>
      </footer>
    </>
  );
}
