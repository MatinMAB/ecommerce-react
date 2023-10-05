//React
import React, { useEffect, useState } from "react";

//Material Ui Components
import {
 Box,
 FormControl,
 FormControlLabel,
 Radio,
 RadioGroup,
 Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

//CSS Styles
import styles from "./Filter.module.css";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/products/productsSlice";

//Components
import Products from "./Products";

const categories = [
 {
  id: 1,
  label: "جواهرات",
  value: "jewelery",
 },
 {
  id: 2,
  label: "لباس مردانه",
  value: "men's clothing",
 },
 {
  id: 3,
  label: "لباس زنانه",
  value: "women's clothing",
 },
 {
  id: 4,
  label: "لوازم دیجیتال",
  value: "electronics",
 },
];

export default function Filter() {
 const [filteredProducts, setFilteredProducts] = useState([]);
 const [filter, setFilter] = useState("");
 const dispatch = useDispatch();
 const { products } = useSelector((store) => store.products);

 useEffect(() => {
  dispatch(fetchProducts());
 }, []);

 const handleFilterRadio = (e) => {
  setFilter(e.target.value);
  setFilteredProducts([
   ...products.filter((product) => product.category === e.target.value),
  ]);
 };

 const removeFilters = () => {
  setFilter("");
  setFilteredProducts([]);
 };

 return (
  <Container maxWidth="xl">
   <Grid container spacing={2} sx={{ mb: 6 }}>
    <Grid item xs={12} sm={4} md={3} lg={2}>
     <Box
      sx={{
       p: 2,
       borderRadius: 2,
       border: `1px solid #EF7889`,
       position: "sticky",
       top: "10px",
      }}
     >
      <div className={styles.filterBox_header}>
       <span className={styles.filterBox_title}>فیلترها</span>
       <button onClick={removeFilters} className={styles.removeFilterBtn}>
        حذف فیلترها
       </button>
      </div>
      <div>
       <FormControl component="fieldset">
        <RadioGroup aria-label="category">
         {categories.map((category) => (
          <React.Fragment key={category.id}>
           <FormControlLabel
            value={category.value}
            control={
             <Radio
              onClick={handleFilterRadio}
              checked={filter === category.value}
             />
            }
            label={
             <Typography sx={{ fontSize: 16 }}>{category.label}</Typography>
            }
            labelPlacement="end"
           />
          </React.Fragment>
         ))}
        </RadioGroup>
       </FormControl>
      </div>
     </Box>
    </Grid>
    <Grid item xs={12} sm={8} md={9} lg={10} container spacing={3}>
     <Products products={products} filteredProducts={filteredProducts} />
    </Grid>
   </Grid>
  </Container>
 );
}
