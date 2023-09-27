//React
import React, { useEffect, useState } from "react";

// Components
import ProductCard from "./ProductCard";

//Material UI Components
import Container from "@mui/material/Container";

//Swiper Modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//Import CSS styles
import "./SwiperComponent.css";

// Import Images
import Amazing from "../../images/Amazings.svg";

export default function SwiperComponent() {
 const [products, setProducts] = useState([]);
 useEffect(() => {
  fetch("https://fakestoreapi.com/products")
   .then((response) => response.json())
   .then((response) => setProducts(response))
   .catch((error) => console.log(error));
 }, []);

 return (
  <Container maxWidth="xl" sx={{ my: 8 }}>
   <div
    className="swiper-gradient-bg-animation"
    style={{
     backgroundColor: "#EF7889",
     padding: "20px 3px",
     borderRadius: "15px",
    }}
   >
    <Swiper
     style={{
      height: "300px",
     }}
     modules={[Navigation]}
     spaceBetween={5}
     slidesPerView={3}
     breakpoints={{
      768: {
       // max-width: 768px,
       slidesPerView: 4,
      },
      1024: {
       slidesPerView: 5,
      },
      1268: {
       slidesPerView: 6,
       spaceBetween: 5,
      },
     }}
     navigation
     onSwiper={(swiper) => {}}
     onSlideChange={() => {}}
    >
     <SwiperSlide>
      <div
       style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "100%",
        alignItems: "center",
       }}
      >
       <img src={Amazing} alt="amazing-offer" style={{ width: "60%" }} />
       <button
        style={{
         padding: "10px 5px",
         fontFamily: "vazir",
         border: "none",
         fontWeight: "bold",
         color: "#f7f7f7",
         backgroundColor: "transparent",
         fontSize: "16px",
         cursor: "pointer",
        }}
       >
        مشاهده همه &larr;
       </button>
      </div>
     </SwiperSlide>
     {products.map((product) => {
      return (
       <React.Fragment key={product.id}>
        <SwiperSlide>
         <ProductCard product={product} />
        </SwiperSlide>
       </React.Fragment>
      );
     })}
    </Swiper>
   </div>
  </Container>
 );
}
