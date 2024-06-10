import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useSelector } from "react-redux";
// import Secret from "./Secret";

const Nav = () => {
  const user = useSelector((state) => state.user);

  console.log("====================================");
  console.log(user);
  console.log("====================================");

  return (
    <header className="flex justify-between items-center py-2 px-5">
      <h1 className="font-bold text-3xl">Teach nerds</h1>
      {/* <Secret /> */}
      <div className="text-red-500">That does not effect me people</div>
      <div className="flex items-center gap-2">
        <ThemeSwitch />

        <img src={user.image} alt="pic" className="w-10 h-10 rounded-full" />

        <div className="flex flex-col ">
          <h1 className="text-sm font-medium text-gray-700"> {user.name} </h1>
          <p className="text-xs text-gray-400"> {user.email} </p>
        </div>
      </div>
    </header>
  );
};

export default Nav;
