// src/stores/useLanguageStore.ts
import { create } from "zustand";

const allTranslations = {
  es: {
    footer: {
      aboutUsTitle: "Acerca de Alamo Rent A Car",
      aboutUsText:
        "Alamo Rent A Car es una marca orientada al valor y reconocida internacionalmente que satisface las necesidades de los viajeros de ocio. Nos dedicamos a proporcionar servicios de alquiler de coches de bajo coste y una experiencia divertida y sencilla.",
      quickLinksTitle: "Enlaces Rápidos",
      homeLink: "Inicio",
      requirementsLink: "Requisitos",
      benefitsLink: "Beneficios",
      applyLink: "Aplicar Ahora",
      connectTitle: "Conéctate con Nosotros",
      contactEmail: "Correo: careers@alamorentacar.com",
      contactPhone: "Teléfono: +1 (800) 123-4567",
      copyrightText: "Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      privacyPolicyLink: "Ver Política",
      termsOfService: "Términos de Servicio",
      termsOfServiceLink: "Ver Términos",
    },
    // ... (existing header and hero keys)
    requirements: "Requisitos", // <--- Keep this for the header button, if it points to the section
    applyNow: "Aplicar Ahora",
    heroTitle: "Únete al Equipo Alamo",
    heroDescription:
      "Construye tu carrera en la industria del transporte y turismo. Descubre oportunidades emocionantes en un ambiente dinámico y profesional.",

    benefitsSectionTitle: "Beneficios y Ventajas",
    benefits: {
      professionalDevelopmentTitle: "Desarrollo Profesional",
      professionalDevelopmentDescription:
        "Oportunidades de crecimiento y capacitación continua para avanzar en tu carrera profesional.",
      healthInsuranceTitle: "Seguro Médico",
      healthInsuranceDescription:
        "Cobertura médica completa para ti y tu familia con las mejores opciones de atención.",
      performanceBonusesTitle: "Bonos por Desempeño",
      performanceBonusesDescription:
        "Reconocimiento económico por excelencia en el trabajo y cumplimiento de objetivos.",
      paidVacationTitle: "Vacaciones Pagadas",
      paidVacationDescription:
        "Tiempo libre remunerado para descansar y disfrutar con tu familia.",
      rentalDiscountsTitle: "Descuentos en Alquiler",
      rentalDiscountsDescription:
        "Descuentos especiales para empleados en servicios de alquiler de vehículos.",
      workLifeBalanceTitle: "Balance Vida-Trabajo",
      workLifeBalanceDescription:
        "Horarios flexibles y ambiente de trabajo que respeta tu tiempo personal.",
    },

    // NUEVAS CLAVES PARA REQUIREMENTS SECTION
    requirementsSectionTitle: "Requisitos y Calificaciones",
    requirements: {
      educationLabel: "Educación:",
      educationText:
        "Bachillerato completo o estudios universitarios (preferible)",
      experienceLabel: "Experiencia:",
      experienceText: "Mínimo 1 año en atención al cliente o ventas",
      languagesLabel: "Idiomas:",
      languagesText: "Español nativo, inglés intermedio (deseable)",
      licenseLabel: "Licencia:",
      licenseText: "Licencia de conducir válida y sin infracciones graves",
      skillsLabel: "Habilidades:",
      skillsText: "Excelente comunicación y orientación al servicio",
      availabilityLabel: "Disponibilidad:",
      availabilityText: "Horarios flexibles incluyendo fines de semana",
    },
    applicationFormTitle: "Aplicar Ahora", // Title for the section
    application: {
      firstNameLabel: "Nombre *",
      lastNameLabel: "Apellidos *",
      emailLabel: "Correo Electrónico *",
      phoneLabel: "Teléfono *",
      positionLabel: "Posición de Interés *",
      selectPosition: "Selecciona una posición",
      positionCustomerService: "Atención al Cliente",
      positionSales: "Ventas",
      positionOperations: "Operaciones",
      positionManagement: "Gestión",
      experienceLabel: "Experiencia Laboral *",
      experiencePlaceholder: "Describe tu experiencia laboral relevante...",
      availabilityLabel: "Disponibilidad *",
      selectAvailability: "Selecciona tu disponibilidad",
      availabilityFullTime: "Tiempo completo",
      availabilityPartTime: "Medio tiempo",
      availabilityFlexible: "Horario flexible",
      motivationLabel: "Motivación *",
      motivationPlaceholder: "¿Por qué quieres trabajar con nosotros?",
      submitApplication: "Enviar Aplicación",
      submitting: "Enviando...",
      // You might add success/error messages here later if needed
    },
  },
  en: {
    // ... (existing header and hero keys)
    requirements: "Requirements", // <--- Keep this for the header button, if it points to the section
    applyNow: "Apply Now",
    heroTitle: "Join the Alamo Team",
    heroDescription:
      "Build your career in the transportation and tourism industry. Discover exciting opportunities in a dynamic and professional environment.",

    benefitsSectionTitle: "Benefits and Advantages",
    benefits: {
      professionalDevelopmentTitle: "Professional Development",
      professionalDevelopmentDescription:
        "Opportunities for continuous growth and training to advance your professional career.",
      healthInsuranceTitle: "Health Insurance",
      healthInsuranceDescription:
        "Comprehensive medical coverage for you and your family with the best care options.",
      performanceBonusesTitle: "Performance Bonuses",
      performanceBonusesDescription:
        "Financial recognition for work excellence and achievement of objectives.",
      paidVacationTitle: "Paid Vacation",
      paidVacationDescription:
        "Paid time off to rest and enjoy with your family.",
      rentalDiscountsTitle: "Rental Discounts",
      rentalDiscountsDescription:
        "Special employee discounts on vehicle rental services.",
      workLifeBalanceTitle: "Work-Life Balance",
      workLifeBalanceDescription:
        "Flexible hours and a work environment that respects your personal time.",
    },

    // NEW KEYS FOR REQUIREMENTS SECTION
    requirementsSectionTitle: "Requirements and Qualifications",
    requirements: {
      educationLabel: "Education:",
      educationText: "High school diploma or university studies (preferred)",
      experienceLabel: "Experience:",
      experienceText: "Minimum 1 year in customer service or sales",
      languagesLabel: "Languages:",
      languagesText: "Native Spanish, intermediate English (desirable)",
      licenseLabel: "License:",
      licenseText: "Valid driver's license with no major infractions",
      skillsLabel: "Skills:",
      skillsText: "Excellent communication and service orientation",
      availabilityLabel: "Availability:",
      availabilityText: "Flexible hours including weekends",
    },
    applicationFormTitle: "Apply Now", // Title for the section
    application: {
      firstNameLabel: "First Name *",
      lastNameLabel: "Last Name *",
      emailLabel: "Email *",
      phoneLabel: "Phone *",
      positionLabel: "Position of Interest *",
      selectPosition: "Select a position",
      positionCustomerService: "Customer Service",
      positionSales: "Sales",
      positionOperations: "Operations",
      positionManagement: "Management",
      experienceLabel: "Work Experience *",
      experiencePlaceholder: "Describe your relevant work experience...",
      availabilityLabel: "Availability *",
      selectAvailability: "Select your availability",
      availabilityFullTime: "Full-time",
      availabilityPartTime: "Part-time",
      availabilityFlexible: "Flexible schedule",
      motivationLabel: "Motivation *",
      motivationPlaceholder: "Why do you want to work with us?",
      submitApplication: "Submit Application",
      submitting: "Submitting...",
      // You might add success/error messages here later if needed
    },
    footer: {
      aboutUsTitle: "About Alamo Rent A Car",
      aboutUsText:
        "Alamo Rent A Car is a value-oriented, internationally recognized brand serving the needs of leisure travelers. We are dedicated to providing low-cost car rental services and a fun, easy experience.",
      quickLinksTitle: "Quick Links",
      homeLink: "Home",
      requirementsLink: "Requirements",
      benefitsLink: "Benefits",
      applyLink: "Apply Now",
      connectTitle: "Connect With Us",
      contactEmail: "Email: correo@alamorentacar.com",
      contactPhone: "Phone: +1 (800) 123-4567",
      copyrightText: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      privacyPolicyLink: "View Policy",
      termsOfService: "Terms of Service",
      termsOfServiceLink: "View Terms",
    },
  },
};

const useLanguageStore = create((set, get) => {
  const initialLanguage = localStorage.getItem("appLanguage") || "en";
  console.log(
    "Zustand Store Initialized. Language from localStorage:",
    initialLanguage
  );

  return {
    language: initialLanguage,
    translations: allTranslations,

    setLanguage: (newLanguage) => {
      set({ language: newLanguage });
      localStorage.setItem("appLanguage", newLanguage);
      console.log("Language changed to:", newLanguage);
    },

    getTranslation: (key) => {
      const currentLang = get().language;
      const currentTranslations = get().translations[currentLang];

      const keys = key.split(".");
      let value = currentTranslations;

      for (let i = 0; i < keys.length; i++) {
        if (value && typeof value === "object" && keys[i] in value) {
          value = value[keys[i]];
        } else {
          console.warn(
            `Missing translation for key: '${key}' in language: '${currentLang}'`
          );
          return `MISSING_TRANSLATION: ${String(key)}`;
        }
      }
      return value;
    },
  };
});

export default useLanguageStore;
