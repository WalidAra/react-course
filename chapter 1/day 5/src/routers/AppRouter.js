import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "../components/Form";
import Nerd from "../components/Nerd";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/nerd" element={<Nerd />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
