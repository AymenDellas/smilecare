import React from "react";
import { services } from "../assets/data.js";
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
