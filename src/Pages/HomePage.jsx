//React
import React from "react";

//Components
import Carousel from "../Components/HomePage/Carousel/CarouselComponent.jsx";
import Navbar from "../Components/Shared/Navbar/Navbar.jsx";
import SiteOptions from "../Components/HomePage/SiteOptions/SiteOptions.jsx";
import SwiperComponent from "../Components/HomePage/ProductsSwiper/SwiperComponent.jsx";
import AdsBanner from "../Components/HomePage/AdsBanner/AdsBanner.jsx";
import RecommendedProducts from "../Components/HomePage/RecommendedProducts/RecommendedProducts.jsx";
import Footer from "../Components/Shared/Footer/Footer.jsx";

function HomePage() {
 return (
  <>
   <Navbar />
   <Carousel />
   <SiteOptions />
   <SwiperComponent />
   <AdsBanner />
   <RecommendedProducts />
   <Footer />
  </>
 );
}

export default HomePage;
