import React from "react";

const Aboutus = () => {
  const stats = [
    {
      number: 600 + "+",
      title: "Families Served",
    },
    {
      number: 20 + "+",
      title: "Years of Experience",
    },
    {
      number: 15,
      title: "Awards Won",
    },
  ];
  return (
    <section
      id="aboutus"
      className="flex flex-col justify-center items-center py-24"
    >
      <div className="flex flex-col items-center space-y-4">
        <p className="text-blue-600 font-bold">OUR STORY</p>
        <h1 className="text-4xl font-bold">About SmileCare</h1>
        <p className="text-gray-500 text-xl">
          Delivering exceptional dental care since 2003
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mx-8 my-22 space-x-8">
        <div className="rounded-lg relative shadow-2xl shadow-blue-500/40 h-fit">
          <div className="absolute w-full h-full bg-blue-100 rounded-lg -z-10 -top-4 -left-4"></div>
          <div className="absolute  bg-gradient-to-br from-blue-800 to-blue-400 backdrop-blur-2xl rounded-lg px-8 py-4 bottom-0 right-0 text-white">
            Trusted by 650 Families!
          </div>
          <img src="/aboutus.jpg" alt="" className="rounded-lg" />
        </div>
        <div className="text-gray-800 text-xl w-[90%] felx flex-col  space-y-4 max-lg:my-8">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p>
            At SmileCare, we believe a healthy smile is key to overall
            well-being. Our team of skilled dentists and specialists is
            dedicated to providing exceptional dental care in a comfortable and
            welcoming environment. <br />
          </p>
          <p>
            With state-of-the-art equipment and personalized treatments, we
            ensure every patient receives the best care possible. Whether it's
            preventive, cosmetic, or restorative dentistry, we're committed to
            transforming smiles and boosting confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md space-y-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-200 ease-out "
              >
                <h2 className="text-4xl font-bold text-blue-600 ">
                  {stat.number}
                </h2>
                <p className="text-gray-500 text-lg">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
