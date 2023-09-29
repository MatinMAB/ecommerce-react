//React
import React from "react";

//React-Router-dom
import { Routes, Route } from "react-router-dom";

//Components
import HomePage from "./Pages/HomePage";

export default function Router() {
 return (
  <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="about" element={<h2>about</h2>} />
  </Routes>
 );
}
