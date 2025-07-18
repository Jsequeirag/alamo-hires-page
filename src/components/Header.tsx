import React, { useState, useEffect, useRef } from "react";
// Ensure this path is correct for your project!
import useLanguageStore from "../store/useLanguageStore"; // Changed to 'stores' from 'store' based on previous context
import ReactCountryFlag from "react-country-flag";

interface HeaderProps {
  isHeaderShrunk: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({
  isHeaderShrunk,
  activeSection,
  scrollToSection,
}: HeaderProps) => {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const getTranslation = useLanguageStore((state) => state.getTranslation);

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang: "es" | "en") => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  const getCountryCode = (lang: string) => {
    // Current time is Thursday, July 17, 2025 at 7:54:34 PM CST.
    // Given the context of Ciudad Quesada, Alajuela Province, Costa Rica,
    // it's highly likely that "es" refers to Costa Rica.
    if (lang === "es") return "CR";
    if (lang === "en") return "US";
    return "US"; // Default fallback
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
                  ${
                    isHeaderShrunk
                      ? "py-3 shadow-xl bg-blue-700/95 backdrop-blur-sm" // Slightly more padding, stronger shadow, subtle blur
                      : "py-5 shadow-2xl bg-gradient-to-r from-blue-700 to-blue-900" // Deeper initial gradient, heavier shadow
                  } text-white`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/61af8b52b18b8403908b7c33/61af8b52b18b84dd428b7ce6_alamo_logo.svg"
            alt="Alamo Rent A Car"
            className={`transition-all duration-300 ${
              isHeaderShrunk ? "h-10 md:h-11" : "h-12 md:h-14" // Slightly smaller when shrunk, but still prominent
            }`}
          />
        </div>

        {/* Navigation links - hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <button
            onClick={() => scrollToSection("benefits")}
            className={`text-lg px-5 py-2.5 rounded-full transition-all duration-300 font-medium
                        hover:bg-yellow-400 hover:text-blue-900 hover:shadow-md hover:-translate-y-0.5
                        ${
                          activeSection === "benefits"
                            ? "bg-yellow-400 text-blue-900 shadow-md translate-y-0" // Active state with yellow background
                            : "text-white"
                        }`}
          >
            {getTranslation("benefitsSectionTitle")}{" "}
          </button>
          <button
            onClick={() => scrollToSection("requirements")}
            className={`text-lg px-5 py-2.5 rounded-full transition-all duration-300 font-medium
                        hover:bg-yellow-400 hover:text-blue-900 hover:shadow-md hover:-translate-y-0.5
                        ${
                          activeSection === "requirements"
                            ? "bg-yellow-400 text-blue-900 shadow-md translate-y-0"
                            : "text-white"
                        }`}
          >
            {getTranslation("requirementsSectionTitle")}{" "}
          </button>
        </div>

        {/* Language Selector and Apply Now Button */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Language Selector */}
          <div className="relative" ref={languageDropdownRef}>
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-700 hover:bg-blue-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm md:text-base font-semibold"
              aria-haspopup="true"
              aria-expanded={isLanguageDropdownOpen}
            >
              <ReactCountryFlag
                countryCode={getCountryCode(language)}
                svg
                style={{
                  width: "1.5em", // Slightly larger flag
                  height: "1.5em",
                  borderRadius: "3px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }} // Added subtle shadow to flag
                title={language === "es" ? "Costa Rica" : "United States"}
              />
              <span className="hidden sm:inline">
                {" "}
                {/* Hide text on very small screens, show on sm+ */}
                {language === "es" ? "Español" : "English"}
              </span>
              <svg
                className={`ml-1 h-4 w-4 fill-current transform transition-transform duration-200 ${
                  isLanguageDropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>

            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-blue-800 rounded-lg shadow-xl py-2 z-10 animate-fade-in-up origin-top-right">
                {" "}
                {/* Wider, rounder, new shadow and animation */}
                <button
                  onClick={() => handleLanguageChange("es")}
                  className="flex items-center w-full px-4 py-2 text-base text-white hover:bg-blue-700/80 transition-colors duration-200"
                >
                  <ReactCountryFlag
                    countryCode="CR"
                    svg
                    style={{
                      width: "1.8em", // Larger flags in dropdown
                      height: "1.8em",
                      marginRight: "0.75em",
                      borderRadius: "3px",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    }}
                    title="Costa Rica"
                  />
                  Español
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="flex items-center w-full px-4 py-2 text-base text-white hover:bg-blue-700/80 transition-colors duration-200"
                >
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{
                      width: "1.8em",
                      height: "1.8em",
                      marginRight: "0.75em",
                      borderRadius: "3px",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    }}
                    title="United States"
                  />
                  English
                </button>
              </div>
            )}
          </div>
          {/* Apply Now Button */}
          <button
            onClick={() => scrollToSection("application")}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900
                       px-6 py-3 text-base md:px-8 md:py-3.5 md:text-lg rounded-full
                       font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300
                       glow-on-hover" // Added glow-on-hover for a pulsate effect
          >
            {getTranslation("applyNow")}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
