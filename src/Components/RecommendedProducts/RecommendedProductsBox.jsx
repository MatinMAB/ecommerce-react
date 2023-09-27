//React
import React from "react";

//Material Ui Components
import Grid from "@mui/material/Grid";

//CSS Styles
import styles from "./RecommendedProductsBox.module.css";

export default function RecommendedProductsBox({ title, products }) {
 return (
  <div>
   <h3 className={styles.box__title}>{title}</h3>
   <p className={styles.box__desc}>بر اساس بازدیدهای شما</p>
   <Grid container rowSpacing={6} sx={{ my: 2 }}>
    {products.map((product) => (
     <Grid item xs={6} sx={{ textAlign: "center" }}>
      <img
       src={product?.image}
       alt={product?.title}
       style={{ width: "100px", height: "100px", cursor: "pointer" }}
      />
     </Grid>
    ))}
   </Grid>
  </div>
 );
}
