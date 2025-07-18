import React from "react";
import useLanguageStore from "../store/useLanguageStore"; // Verify path: ../store or ../stores

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const language = useLanguageStore((state) => state.language);
  const getTranslation = useLanguageStore((state) => state.getTranslation);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-950 text-white py-28 md:py-40 lg:py-48 flex items-center justify-center min-h-screen hero-gradient-animated">
      {" "}
      {/* Deeper, darker gradient; added hero-gradient-animated class */}
      {/* Background pattern with increased opacity and parallax effect */}
      <div
        className="absolute inset-0 z-0 opacity-20 animate-parallax" // Increased opacity and added animate-parallax
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.07' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='23' cy='23' r='3'/%3E%3Ccircle cx='43' cy='43' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "120px 120px", // Larger pattern for more visual weight
        }}
      ></div>
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-8 leading-tight drop-shadow-2xl animate-fade-in-down title-glow">
          {" "}
          {/* Even larger, stronger shadow, added title-glow */}
          {getTranslation("heroTitle")}{" "}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-12 opacity-95 leading-relaxed animate-fade-in-up">
          {" "}
          {/* Larger, more opaque text */}
          {getTranslation("heroDescription")}{" "}
        </p>
        <button
          onClick={() => scrollToSection("application")}
          className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-950
                       px-12 py-5 text-xl font-extrabold rounded-full shadow-2xl
                       hover:shadow-yellow-300/80 hover:-translate-y-2 transform transition-all duration-400
                       animate-bounce-once button-pulse" // Larger button, stronger shadow, added button-pulse
        >
          {getTranslation("applyNow")}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
