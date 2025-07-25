import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"; // Import social icons
import useLanguageStore from "../store/useLanguageStore"; // Verify path: ../store or ../stores

const Footer = () => {
  const getTranslation = useLanguageStore((state) => state.getTranslation);

  return (
    <footer className="relative bg-gradient-to-r from-blue-800 to-blue-950 text-white py-12 md:py-16 overflow-hidden">
      {/* Optional: Subtle background pattern for texture */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
        {/* Company Info / About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-400">
            {getTranslation("footer.aboutUsTitle")}
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm">
            {getTranslation("footer.aboutUsText")}
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-4 md:mt-0">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">
            {getTranslation("footer.quickLinksTitle")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {getTranslation("footer.homeLink")}
              </a>
            </li>
            <li>
              <a
                href="#requirements"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {getTranslation("footer.requirementsLink")}
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {getTranslation("footer.benefitsLink")}
              </a>
            </li>
            <li>
              <a
                href="#application"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {getTranslation("footer.applyLink")}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="mt-4 md:mt-0">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">
            {getTranslation("footer.connectTitle")}
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            {getTranslation("footer.contactEmail")}
            <br />
            {getTranslation("footer.contactPhone")}
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com/alamo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-transform duration-200"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com/alamo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-300 transform hover:scale-110 transition-transform duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com/company/alamo-rent-a-car"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transform hover:scale-110 transition-transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/alamo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transform hover:scale-110 transition-transform duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-blue-700 mt-12 pt-8 text-center text-gray-400 text-xs">
        <p>
          &copy; {new Date().getFullYear()} Alamo Rent A Car.{" "}
          {getTranslation("footer.copyrightText")}
        </p>
        <p className="mt-2">
          {getTranslation("footer.privacyPolicy")}{" "}
          <a
            href="/privacy-policy"
            className="hover:text-white transition-colors duration-200"
          >
            {getTranslation("footer.privacyPolicyLink")}
          </a>{" "}
          | {getTranslation("footer.termsOfService")}{" "}
          <a
            href="/terms-of-service"
            className="hover:text-white transition-colors duration-200"
          >
            {getTranslation("footer.termsOfServiceLink")}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
