import React from "react";
import ColorSync from "./ColorSync";
import Nav from "./Nav";
import MainView from "./MainView";

const Nerd = () => {
  return (
    <ColorSync
      onDark={"text-white bg-black"}
      onLight={"text-black bg-white"}
      className={`"w-full  h-screen flex flex-col`}
    >
      <Nav />
      <MainView />
    </ColorSync>
  );
};

export default Nerd;
