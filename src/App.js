import Carousel from "./Components/Carousel/CarouselComponent.jsx";
import Navbar from "./Components/Shared/Navbar/Navbar.jsx"
import MaterialUI from "./SetMaterialUI";

function App() {
  return (
    <>
      <MaterialUI>
        <Navbar/>
        <Carousel/>
      </MaterialUI>
    </>
  );
}

export default App;
