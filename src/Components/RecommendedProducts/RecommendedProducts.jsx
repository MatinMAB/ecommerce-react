//React
import React, { useEffect } from "react";

//Material Ui Components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//Components
import RecommendedProductsBox from "./RecommendedProductsBox";

//Redux Toolkit
import { fetchProducts } from "../../redux/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function RecommendedProducts() {
 const { products } = useSelector((state) => state.products);
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(fetchProducts());
 }, []);

 return (
  <div>
   <Container maxWidth="xl">
    <Grid
     container
     sx={{ mt: 4, mb: 8, border: "1px solid #e0e0e0", borderRadius: "8px" }}
    >
     <Grid
      sx={{ borderRight: "1px solid #e0e0e0" }}
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
     >
      <RecommendedProductsBox
       title="لباس مردانه"
       products={products
        ?.filter((product) => product.category === `men's clothing`)
        .slice(0, 4)}
      />
     </Grid>
     <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{ borderRight: "1px solid #e0e0e0" }}
     >
      <RecommendedProductsBox
       title="جواهرات"
       products={products
        ?.filter((product) => product.category === `jewelery`)
        .slice(0, 4)}
      />
     </Grid>
     <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{ borderRight: "1px solid #e0e0e0" }}
     >
      <RecommendedProductsBox
       title="لوارم دیجیتال"
       products={products
        ?.filter((product) => product.category === `electronics`)
        .slice(0, 4)}
      />
     </Grid>
     <Grid item xs={12} sm={6} md={4} lg={3}>
      <RecommendedProductsBox
       title="لباس زنانه"
       products={products
        ?.filter((product) => product.category === `women's clothing`)
        .slice(0, 4)}
      />
     </Grid>
    </Grid>
   </Container>
  </div>
 );
}
