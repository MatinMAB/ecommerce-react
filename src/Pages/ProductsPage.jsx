//React
import React from "react";

//Components
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import BreadCrumb from "../Components/ProductsPage/BreadCrumb/BreadCrumb";

export default function ProductsPage() {
 return (
  <>
   <Navbar />
   <BreadCrumb/>
   <Footer />
  </>
 );
}
