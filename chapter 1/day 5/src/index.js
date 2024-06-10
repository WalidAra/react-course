import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import ThemeProvider from "./providers/ThemeProvider";
import ReduxProvider from "./providers/ReduxProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </ThemeProvider>
  </React.StrictMode>
);
