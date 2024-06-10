import { useContext } from "react";
import { Theme } from "../providers/ThemeProvider";

export const useTheme = () => {
  return useContext(Theme);
};
