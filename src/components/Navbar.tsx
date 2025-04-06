import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      redirect: "#home",
    },
    {
      title: "services",
      redirect: "#services",
    },
    {
      title: "aboutus",
      redirect: "#aboutus",
    },
    {
      title: "contact",
      redirect: "#contact",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-2 mx-auto max-w-7xl flex items-center justify-between p-4 bg-white/70 backdrop-blur-3xl shadow-md rounded-lg my-4 z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="/tooth.svg" alt="Dental Logo" className="w-16 h-auto" />
        <span className="ml-2 font-bold text-xl text-gray-800 hidden sm:block">
          DentalCare
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul className="flex space-x-6">
          {links.map((item, index) => (
            <a
              href={item.redirect}
              key={index}
              className="cursor-pointer hover:text-blue-500 font-medium transition-all duration-200 ease-out relative group"
            >
              {item.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center space-x-3">
        <button className="px-4 py-2 rounded-lg text-primary border border-primary hover:bg-primary/5 transition-all duration-200 ease-out cursor-pointer font-medium">
          Schedule a call
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 text-white transition-all duration-200 ease-out cursor-pointer font-medium shadow-sm">
          Get started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 p-4 md:hidden z-40">
          <ul className="flex flex-col space-y-3">
            {["Home", "Services", "About us", "Contact"].map((item) => (
              <a
                key={item}
                className="cursor-pointer hover:text-blue-500 font-medium transition-all duration-200 ease-out py-2 border-b border-gray-100"
              >
                {item}
              </a>
            ))}
            <li className="pt-2">
              <button className="w-full px-4 py-2 rounded-lg text-primary border border-primary hover:bg-primary/5 transition-all duration-200 ease-out cursor-pointer font-medium mb-2">
                Schedule a call
              </button>
            </li>
            <li>
              <button className="w-full bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 text-white transition-all duration-200 ease-out cursor-pointer font-medium shadow-sm">
                Get started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
