//React
import React from "react";

//Components
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import BreadCrumb from "../Components/ProductsPage/BreadCrumb/BreadCrumb";
import FilterAndProducts from "../Components/ProductsPage/Filter&Products/Filter";

export default function ProductsPage() {
 return (
  <>
   <Navbar />
   <BreadCrumb/>
   <FilterAndProducts/>
   <Footer />
  </>
 );
}
