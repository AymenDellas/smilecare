import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <main className="px-4 md:px-12 lg:px-16 xl:px-44">
      <Navbar />
      <Home />
    </main>
  );
};

export default App;
