import { createContext, useEffect, useState } from "react";

export const Theme = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("nerd");
    console.log("current theme: " + currentTheme);

    if (currentTheme && currentTheme === "dark") {
      setTheme("dark");
    }
  }, []);

  return (
    <Theme.Provider value={{ theme, setTheme }}> {children} </Theme.Provider>
  );
}
