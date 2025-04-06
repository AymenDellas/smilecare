import { useState } from "react";

interface formTypes {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
interface formDataTypes {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
const ContactSection = () => {
  const [formData, setFormData] = useState<formDataTypes>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<formTypes>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "firstName":
        return !value ? "First name is required" : "";
      case "lastName":
        return !value ? "Last name is required" : "";
      case "email":
        return !value
          ? "Email is required"
          : !/^\S+@\S+\.\S+$/.test(value)
          ? "Please enter a valid email"
          : "";
      case "phone":
        return value && !/^[0-9]{10}$/.test(value.replace(/[^0-9]/g, ""))
          ? "Please enter a valid phone number"
          : "";
      case "message":
        return !value ? "Please tell us how we can help you" : "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e: any) => {
    const { name, value } = e.target;
    setFormErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate all fields
    const errors: Partial<typeof formErrors> = {};
    Object.keys(formData).forEach((field) => {
      if (field !== "service" && field !== "phone") {
        // Phone is optional
        const error = validateField(
          field,
          formData[field as keyof typeof formData]
        );
        if (error) errors[field as keyof formTypes] = error;
      }
    });

    setFormErrors((prev) => ({
      ...prev,
      ...errors,
    }));

    // Check if there are any errors
    if (Object.values(errors).some((error) => error)) {
      setFormStatus("Please correct the errors in the form.");
      return;
    }

    try {
      setIsSubmitting(true);
      setFormStatus("Submitting your appointment request...");

      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormStatus("");
      }, 2000);

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Hide success message after delay
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
      setFormStatus(
        "There was a problem submitting your request. Please try again later."
      );
    }
  };

  const dentalServices = [
    "General Check-up",
    "Teeth Cleaning",
    "Teeth Whitening",
    "Dental Implants",
    "Root Canal Therapy",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Pediatric Dentistry",
  ];

  const fieldStyle = (error: any) => `
    rounded-lg bg-gray-100 w-full text-gray-800 px-4 py-3 
    placeholder:text-gray-400 outline-none transition-all
    ${error ? "ring-2 ring-red-500" : "focus:ring-2 ring-blue-500/50"}
  `;

  return (
    <section id="contact" className=" py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Have a question or ready to schedule your appointment? We're here to
            help you achieve your best smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Contact Details</h3>

            <div className="space-y-4 mb-8">
              <div>
                <p className="font-medium">Address</p>
                <address className="text-gray-600 not-italic">
                  123 Dental Avenue
                  <br />
                  City, State 12345
                </address>
              </div>

              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">(123) 456-7890</p>
              </div>

              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">contact@dentalcare.com</p>
              </div>

              <div>
                <p className="font-medium">Hours</p>
                <p className="text-gray-600">
                  Mon-Fri: 8am-6pm
                  <br />
                  Sat: 9am-2pm
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Request an Appointment
              </h2>

              {showSuccess ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded">
                  <p className="font-medium">Thank you for contacting us!</p>
                  <p>
                    We'll get back to you as soon as possible to confirm your
                    appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStatus && !showSuccess && (
                    <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-700 p-4 mb-6 rounded">
                      <p>{formStatus}</p>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="firstName"
                        className="block text-gray-700 mb-1 font-medium"
                      >
                        First Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={fieldStyle(formErrors.firstName)}
                        placeholder="Your first name"
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.firstName}
                        </p>
                      )}
                    </div>

                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="lastName"
                        className="block text-gray-700 mb-1 font-medium"
                      >
                        Last Name<span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={fieldStyle(formErrors.lastName)}
                        placeholder="Your last name"
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-1 font-medium"
                      >
                        Email Address<span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={fieldStyle(formErrors.email)}
                        placeholder="your.email@example.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div className="w-full md:w-1/2">
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 mb-1 font-medium"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={fieldStyle(formErrors.phone)}
                        placeholder="(123) 456-7890"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-gray-700 mb-1 font-medium"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${fieldStyle(undefined)} cursor-pointer`}
                    >
                      <option value="">Select a service (optional)</option>
                      {dentalServices.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 mb-1 font-medium"
                    >
                      Your Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={fieldStyle(formErrors.message)}
                      placeholder="Tell us about your dental needs or preferred appointment times..."
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      <span className="text-red-500">*</span> Required fields
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 text-white font-medium transition-all duration-200 ease-out cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Book Appointment"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
