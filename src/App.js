import Carousel from "./Components/Carousel/CarouselComponent.jsx";
import Navbar from "./Components/Shared/Navbar/Navbar.jsx"
import SiteOptions from "./Components/SiteOptions/SiteOptions.jsx";
import SwiperComponent from './Components/ProductsSwiper/SwiperComponent.jsx'
import AdsBanner from "./Components/AdsBanner/AdsBanner.jsx";

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
      </MaterialUI>
    </>
  );
}

export default App;
