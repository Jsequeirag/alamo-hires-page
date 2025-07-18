import React from "react";
import useLanguageStore from "../store/useLanguageStore"; // Adjust path as needed!

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  availability: string;
  motivation: string;
}

interface ApplicationFormProps {
  visibleElements: Set<string>;
  formData: FormData;
  isSubmitting: boolean;
  handleFormChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ApplicationForm = ({
  visibleElements,
  formData,
  isSubmitting,
  handleFormChange,
  handleSubmit,
}: ApplicationFormProps) => {
  const language = useLanguageStore((state) => state.language);
  const getTranslation = useLanguageStore((state) => state.getTranslation);

  return (
    <section
      id="application"
      // Added a more dynamic gradient and a parallax class
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-blue-700 to-blue-900 text-white"
    >
      {/* Background pattern for visual interest - moved to be parallax */}
      <div
        className="absolute inset-0 z-0 opacity-10 bg-repeat animate-parallax" // Added animate-parallax class
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3Ccircle cx='23' cy='23' r='3'/%3E%3Ccircle cx='33' cy='33' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "80px 80px", // Larger pattern
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl text-center text-white mb-16 font-extrabold relative drop-shadow-lg animate-fade-in-down ${
            // Title color changed to white for dark background
            visibleElements.has("application-title")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          id="application-title"
        >
          {getTranslation("applicationFormTitle")}{" "}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mt-4"></div>{" "}
          {/* Even thicker and wider underline */}
        </h2>

        <div
          className={`max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-blue-200 p-8 sm:p-10 lg:p-14 animate-hidden transition-all duration-700 ${
            // More pronounced shadow, rounded corners
            visibleElements.has("application-form")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          id="application-form"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {" "}
            {/* Increased space between elements */}
            <div className="grid md:grid-cols-2 gap-8">
              {" "}
              {/* Increased gap between columns */}
              <div>
                <label className="block text-blue-800 font-extrabold mb-2 text-lg">
                  {" "}
                  {/* Stronger label */}
                  {getTranslation("application.firstNameLabel")}{" "}
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  className="w-full px-5 py-3.5 border-2 border-blue-300 rounded-xl focus:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 bg-blue-50/70 text-gray-800 placeholder-gray-500 transition-all duration-300 transform hover:scale-[1.01] input-glow" // Larger padding, stronger focus, subtle hover scale, and glow
                  required
                />
              </div>
              <div>
                <label className="block text-blue-800 font-extrabold mb-2 text-lg">
                  {getTranslation("application.lastNameLabel")}{" "}
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  className="w-full px-5 py-3.5 border-2 border-blue-300 rounded-xl focus:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 bg-blue-50/70 text-gray-800 placeholder-gray-500 transition-all duration-300 transform hover:scale-[1.01] input-glow"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-blue-800 font-extrabold mb-2 text-lg">
                  {getTranslation("application.emailLabel")}{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-5 py-3.5 border-2 border-blue-300 rounded-xl focus:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 bg-blue-50/70 text-gray-800 placeholder-gray-500 transition-all duration-300 transform hover:scale-[1.01] input-glow"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-800 font-extrabold mb-2 text-lg">
                  {getTranslation("application.phoneLabel")}{" "}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-5 py-3.5 border-2 border-blue-300 rounded-xl focus:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 bg-blue-50/70 text-gray-800 placeholder-gray-500 transition-all duration-300 transform hover:scale-[1.01] input-glow"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-blue-800 font-extrabold mb-2 text-lg">
                {getTranslation("application.positionLabel")}{" "}
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleFormChange}
                className="w-full px-5 py-3.5 border-2 border-blue-300 rounded-xl focus:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 bg-blue-50/70 text-gray-800 transition-all duration-300 transform hover:scale-[1.01] input-glow"
                required
              >
                <option value="">
                  {getTranslation("application.selectPosition")}{" "}
                </option>
                <option value="customer-service">
                  {getTranslation("application.positionCustomerService")}{" "}
                </option>
                <option value="sales">
                  {getTranslation("application.positionSales")}{" "}
                </option>
                <option value="operations">
                  {getTranslation("application.positionOperations")}{" "}
                </option>
                <option value="management">
                  {getTranslation("application.positionManagement")}{" "}
                </option>
              </select>
            </div>
            <div>
              <label className="block text-blue-800 font-extrabold mb-2 text-lg">
                {getTranslation("application.experienceLabel")}{" "}
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleFormChange}
                rows={4}
                className="w-full px-5 py-3.5 border-2 border-blue-300 rounded-xl focus:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 bg-blue-50/70 text-gray-800 placeholder-gray-500 transition-all duration-300 transform hover:scale-[1.01] input-glow"
                placeholder={
                  getTranslation("application.experiencePlaceholder") as string
                }
                required
              />
            </div>
            <div>
              <label className="block text-blue-800 font-extrabold mb-2 text-lg">
                {getTranslation("application.availabilityLabel")}{" "}
              </label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleFormChange}
                className="w-full px-5 py-3.5 border-2 border-blue-300 rounded-xl focus:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 bg-blue-50/70 text-gray-800 transition-all duration-300 transform hover:scale-[1.01] input-glow"
                required
              >
                <option value="">
                  {getTranslation("application.selectAvailability")}{" "}
                </option>
                <option value="full-time">
                  {getTranslation("application.availabilityFullTime")}{" "}
                </option>
                <option value="part-time">
                  {getTranslation("application.availabilityPartTime")}{" "}
                </option>
                <option value="flexible">
                  {getTranslation("application.availabilityFlexible")}{" "}
                </option>
              </select>
            </div>
            <div>
              <label className="block text-blue-800 font-extrabold mb-2 text-lg">
                {getTranslation("application.motivationLabel")}{" "}
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleFormChange}
                rows={3}
                className="w-full px-5 py-3.5 border-2 border-blue-300 rounded-xl focus:border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 bg-blue-50/70 text-gray-800 placeholder-gray-500 transition-all duration-300 transform hover:scale-[1.01] input-glow"
                placeholder={
                  getTranslation("application.motivationPlaceholder") as string
                }
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 py-4 px-10 text-xl font-bold rounded-full shadow-2xl hover:shadow-yellow-300/70 hover:-translate-y-1 transform transition-all duration-500 glow-on-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-md disabled:hover:shadow-none" // Larger text, stronger glow on hover, faster transition
            >
              {isSubmitting
                ? getTranslation("application.submitting")
                : getTranslation("application.submitApplication")}{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
