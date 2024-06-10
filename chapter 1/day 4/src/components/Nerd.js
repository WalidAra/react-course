import React from "react";
import { useNavigate } from "react-router-dom";

const Nerd = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-96 bg-slate-500">
      <button onClick={() => navigate("/")}> Nerd </button>
    </div>
  );
};

export default Nerd;
