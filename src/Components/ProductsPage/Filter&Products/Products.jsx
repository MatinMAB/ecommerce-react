//React
import React, { useState } from "react";

//Material Ui Components
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

//Components
import ProductCard from "../../Shared/ProductCard/ProductCard";

export default function Products({ products, filteredProducts }) {
 const [startPage, setStartPage] = useState(0);
 let howMany = 10;

 const handleChange = (e) => {
  if (+e.target.textContent === 1) {
   setStartPage(0);
  } else if (+e.target.textContent === 2) {
   setStartPage(10);
  }
 };

 return (
  <>
   {filteredProducts.length > 0 ? (
    filteredProducts?.map((item) => (
     <Grid item xs={6} md={4} lg={2.4}>
      <ProductCard product={item} itemInProductsPage />
     </Grid>
    ))
   ) : products.length > 0 ? (
    [...products]
     ?.filter((item, index) => {
      return index >= startPage && index < howMany + startPage;
     })
     .map((item) => (
      <Grid item xs={6} md={4} lg={2.4}>
       <ProductCard product={item} itemInProductsPage />
      </Grid>
     ))
   ) : (
    <Grid item xs={12}>
     <p style={{ textAlign: "center" }}>در حال بارگیری محصولات . . .</p>
    </Grid>
   )}
   {!filteredProducts.length && !!products && (
    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
     <Stack spacing={2}>
      <Pagination
       count={products.length / 10}
       variant="outlined"
       shape="rounded"
       onClick={handleChange}
       hidePrevButton
       hideNextButton
       color="secondary"
       size="large"
      />
     </Stack>
    </Grid>
   )}
  </>
 );
}
