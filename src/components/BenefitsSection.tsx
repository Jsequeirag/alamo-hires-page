import React from "react";
import {
  Briefcase,
  HeartPulse,
  Target,
  CalendarCheck,
  Car,
  Scale,
} from "lucide-react";
import useLanguageStore from "../store/useLanguageStore"; // Make sure this path is correct for your project!

interface BenefitsSectionProps {
  visibleElements: Set<string>;
}

const BenefitsSection = ({ visibleElements }: BenefitsSectionProps) => {
  const language = useLanguageStore((state) => state.language); // Ensure this is selected for re-render
  const getTranslation = useLanguageStore((state) => state.getTranslation);

  const benefits = [
    {
      icon: <Briefcase className="w-9 h-9 text-white" />, // Even larger icons
      titleKey: "professionalDevelopmentTitle",
      descriptionKey: "professionalDevelopmentDescription",
    },
    {
      icon: <HeartPulse className="w-9 h-9 text-white" />,
      titleKey: "healthInsuranceTitle",
      descriptionKey: "healthInsuranceDescription",
    },
    {
      icon: <Target className="w-9 h-9 text-white" />,
      titleKey: "performanceBonusesTitle",
      descriptionKey: "performanceBonusesDescription",
    },
    {
      icon: <CalendarCheck className="w-9 h-9 text-white" />,
      titleKey: "paidVacationTitle",
      descriptionKey: "paidVacationDescription",
    },
    {
      icon: <Car className="w-9 h-9 text-white" />,
      titleKey: "rentalDiscountsTitle",
      descriptionKey: "rentalDiscountsDescription",
    },
    {
      icon: <Scale className="w-9 h-9 text-white" />,
      titleKey: "workLifeBalanceTitle",
      descriptionKey: "workLifeBalanceDescription",
    },
  ];

  return (
    <section
      id="benefits"
      // Deeper, more vibrant blue gradient background
      className="relative overflow-hidden py-24 md:py-36 bg-gradient-to-br from-blue-800 to-blue-950"
    >
      {/* Background pattern with parallax, larger dots, and increased opacity */}
      <div
        className="absolute inset-0 z-0 opacity-15 animate-parallax"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3Ccircle cx='23' cy='23' r='3'/%3E%3Ccircle cx='33' cy='33' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "80px 80px",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <h2
          className={`text-5xl sm:text-6xl md:text-7xl text-center text-white mb-20 font-extrabold relative drop-shadow-xl animate-fade-in-down title-glow ${
            // Larger, glowing title, white text
            visibleElements.has("benefits-title")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          id="benefits-title"
        >
          {getTranslation("benefitsSectionTitle")}{" "}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mt-6 shadow-lg shadow-yellow-500/40"></div>{" "}
          {/* Wider, thicker underline with shadow */}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {" "}
          {/* Increased gap */}
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-2xl border border-blue-200 text-center
                          hover:shadow-blue-500/60 hover:-translate-y-3 hover:border-yellow-400
                          transition-all duration-400 animate-hidden group relative overflow-hidden
                          hover-neon-effect benefit-card-shine // Added custom classes for more effects
                          ${
                            visibleElements.has(`benefit-${index}`)
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-12" // More pronounced entry animation
                          }`}
              id={`benefit-${index}`}
              style={{ transitionDelay: `${index * 150}ms` }} // Staggered animation
            >
              {/* This div will create the "shining" effect on hover, starting outside */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-200/20 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-500 group-hover:translate-x-full z-0"></div>

              <div
                className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl
                           transform group-hover:scale-115 group-hover:rotate-6 transition-transform duration-400 icon-bounce z-10 relative" // Larger icon container, more aggressive animation
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-3 group-hover:text-blue-950 transition-colors duration-300 z-10 relative">
                {getTranslation(`benefits.${benefit.titleKey}`)}{" "}
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed z-10 relative">
                {getTranslation(`benefits.${benefit.descriptionKey}`)}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
