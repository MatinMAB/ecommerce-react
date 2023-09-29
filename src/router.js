//React
import React from "react";

//React-Router-dom
import { Routes, Route } from "react-router-dom";

//Components
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";

export default function Router() {
 return (
  <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="/products" element={<ProductsPage />} />
  </Routes>
 );
}
