import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nerd from "./components/Nerd";
import ProductPage from "./components/ProductPage";
import Setting from "./components/Setting";
import Dashboard from "./components/dashboard";
import ErrorPage from "./components/Error";

export default function App() {
  return (
    <div className="w-full text-white h-screen bg-slate-900">
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Nerd />} />
          <Route path="/:productId" element={<ProductPage />}>
            <Route path="nerds" element={<Nerd />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="setting" element={<Setting />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>

      {/* <main className="container m-auto py-10 flex gap-4 flex-wrap">
        <Card />
        <Card />
        <Card />
      </main> */}
    </div>
  );
}
