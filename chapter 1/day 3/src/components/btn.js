import React from "react";

const Btn = ({ ChangeTheme }) => {
  return (
    <button
      onClick={ChangeTheme}
      className="py-2 px-4 rounded-md text-white font-medium bg-purple-500"
    >
      toggle theme
    </button>
  );
};

export default React.memo(Btn);
