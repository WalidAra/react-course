import React from "react";
import { useTheme } from "../hook/useTheme";

const ColorSync = ({ onDark, onLight, className, children }) => {
  const { theme } = useTheme();

  console.log(theme);

  return (
    <div className={`${className}  ${theme === "dark" ? onDark : onLight}`}>
      {children}
    </div>
  );
};

export default ColorSync;
