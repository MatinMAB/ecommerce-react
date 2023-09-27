import Carousel from "./Components/Carousel/CarouselComponent.jsx";
import Navbar from "./Components/Shared/Navbar/Navbar.jsx"
import SiteOptions from "./Components/SiteOptions/SiteOptions.jsx";
import SwiperComponent from './Components/ProductsSwiper/SwiperComponent.jsx'
import AdsBanner from "./Components/AdsBanner/AdsBanner.jsx";
import RecommendedProducts from "./Components/RecommendedProducts/RecommendedProducts.jsx";

import MaterialUI from "./SetMaterialUI";

function App() {
  return (
    <>
      <MaterialUI>
        <Navbar/>
        <Carousel/>
        <SiteOptions/>
        <SwiperComponent/>
        <AdsBanner/>
        <RecommendedProducts/>
      </MaterialUI>
    </>
  );
}

export default App;
