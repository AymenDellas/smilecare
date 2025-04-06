import { Calendar, Phone } from "lucide-react";
const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row max-lg:justify-center items-center lg:justify-between mx-8 py-36"
    >
      <div className="space-y-8">
        <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-600">
          Modern Dental Care
        </span>
        <h1 className="font-bold text-6xl my-6">
          Your Smile,
          <br /> <span className="text-blue-500">Our Priority</span>
        </h1>{" "}
        <p className="text-gray-500 text-lg w-[80%]">
          Experience top-quality dental care with advanced technology and a
          compassionate approach. From routine checkups to specialized
          treatments, we’re here to keep your smile healthy and confident.
        </p>{" "}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 px-4 py-3 rounded-lg hover:bg-blue-500/80 text-white transition-all duration-200 ease-out cursor-pointer flex items-center space-x-1">
            <Calendar size={20} />
            <p>Book an Appointment</p>
          </button>
          <button className=" px-6 py-3 rounded-lg hover:bg-blue-500/10 border-2 border-black/50 hover:border-blue-500  text-black transition-all duration-300 ease-out cursor-pointer flex items-center space-x-1">
            <Phone size={20} />
            <p>Call Us</p>
          </button>
        </div>
      </div>
      <div className="rounded-lg  shadow-2xl shadow-blue-500/40 max-lg:m-4 relative max-lg:my-12">
        <span className="absolute w-36 h-36 rounded-[35%_65%_21%_79%_/_79%_46%_54%_21%] bg-blue-500/20 -top-6 -left-6 -z-10"></span>
        <span className="absolute w-36 h-36 rounded-[35%_65%_21%_79%_/_79%_46%_54%_21%] bg-blue-500/20 -bottom-6 -right-6 -z-10"></span>
        <img src="/hero.jpg" alt="" className="rounded-lg" />
      </div>
    </section>
  );
};

export default Hero;
