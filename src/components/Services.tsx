import { Smile, Sparkle, Shield, BadgePlus } from "lucide-react";

export const services = [
  {
    title: " General Dentistry",
    description:
      "Routine checkups, cleanings, and preventive care to maintain oral health.",
    icon: Sparkle,
    color: "bg-gradient-to-br from-blue-400 to-blue-500 text-white",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Teeth whitening, veneers, and smile makeovers to enhance your appearance.",
    icon: Smile,
    color: "bg-gradient-to-br from-yellow-400 to-yellow-500 text-white",
  },
  {
    title: "Orthodontics",
    description:
      "Invisalign, braces, and other treatments to straighten teeth and correct bite issues.",
    icon: Shield,
    color: "bg-gradient-to-br from-green-400 to-green-500 text-white",
  },
  {
    title: "Restorative Dentistry",
    description:
      "Fillings, crowns, and dental implants to restore function and aesthetics.",
    icon: BadgePlus,
    color: "bg-gradient-to-br from-red-400 to-red-500 text-white",
  },
];
const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center space-y-8 py-36"
    >
      <div>
        <h1 className="text-3xl font-bold">Our Services</h1>
      </div>
      <div className="grid grid-cols1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service: any, index: any) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md space-y-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-200 ease-out"
          >
            <span className="flex items-center space-x-2">
              <div className={`p-3 rounded-lg ${service.color}`}>
                <service.icon />
              </div>
              <h2 className="text-xl font-bold">{service.title}</h2>
            </span>
            <p className="text-gray-500 text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
