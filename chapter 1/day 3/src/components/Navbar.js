import React from "react";
import Greetings from "./Greetings";

const Navbar = () => {
  return (
    <header className="p-4 bg-slate-600 text-white font-medium text-3xl" >
      <Greetings />
    </header>
  );
};

export default Navbar;
