import React from "react";
import {
  GraduationCap,
  Briefcase,
  Languages,
  Car,
  Users,
  Clock,
} from "lucide-react";
import useLanguageStore from "../store/useLanguageStore"; // Make sure this path is correct!

interface RequirementsSectionProps {
  visibleElements: Set<string>;
}

const RequirementsSection = ({ visibleElements }: RequirementsSectionProps) => {
  const language = useLanguageStore((state) => state.language);
  const getTranslation = useLanguageStore((state) => state.getTranslation);

  const requirements = [
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />, // Even larger icons
      labelKey: "educationLabel",
      textKey: "educationText",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      labelKey: "experienceLabel",
      textKey: "experienceText",
    },
    {
      icon: <Languages className="w-8 h-8 text-white" />,
      labelKey: "languagesLabel",
      textKey: "languagesText",
    },
    {
      icon: <Car className="w-8 h-8 text-white" />,
      labelKey: "licenseLabel",
      textKey: "licenseText",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      labelKey: "skillsLabel",
      textKey: "skillsText",
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      labelKey: "availabilityLabel",
      textKey: "availabilityText",
    },
  ];

  return (
    <section
      id="requirements"
      // More vibrant background gradient, darker
      className="relative overflow-hidden py-24 md:py-36 bg-gradient-to-br from-blue-700 to-blue-900"
    >
      {/* Background pattern with parallax and brighter dots for contrast */}
      <div
        className="absolute inset-0 z-0 opacity-15 animate-parallax" // Added animate-parallax and increased opacity
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.08' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3Ccircle cx='23' cy='23' r='3'/%3E%3Ccircle cx='33' cy='33' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "80px 80px", // Larger pattern dots
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl text-center text-white mb-20 font-extrabold relative drop-shadow-xl animate-fade-in-down title-glow ${
            // Even larger, glowing title, white text for contrast
            visibleElements.has("requirements-title")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12" // More pronounced entry animation
          }`}
          id="requirements-title"
        >
          {getTranslation("requirementsSectionTitle")}{" "}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mt-6 shadow-lg shadow-yellow-500/40"></div>{" "}
          {/* Even thicker, wider underline with shadow */}
        </h2>

        <div
          className={`max-w-4xl mx-auto grid md:grid-cols-2 gap-10 animate-hidden transition-all duration-1000 ${
            // Increased gap, longer transition
            visibleElements.has("requirements-list")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12" // More pronounced entry animation
          }`}
          id="requirements-list"
        >
          {requirements.map((req, index) => (
            <div
              key={index}
              className="flex items-start p-8 bg-white rounded-2xl shadow-2xl border border-blue-200
                         hover:shadow-blue-500/50 hover:scale-105 hover:border-yellow-400 hover-neon-border
                         transition-all duration-400 group cursor-pointer" // Stronger hover effects, added hover-neon-border
              style={{ transitionDelay: `${index * 150}ms` }} // Staggered animation, slightly slower
            >
              <div
                className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-8 flex-shrink-0 text-white shadow-xl
                           transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-400 icon-bounce" // Larger, more aggressive icon animation, added icon-bounce
              >
                {req.icon}
              </div>
              <div>
                <strong className="block text-2xl font-bold text-blue-800 mb-2 group-hover:text-blue-950 transition-colors duration-300">
                  {getTranslation(`requirements.${req.labelKey}`)}{" "}
                </strong>
                <span className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {getTranslation(`requirements.${req.textKey}`)}{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
